import { ReactNode } from "react";
import { X } from "lucide-react";

type DialogFrameProps = React.HTMLProps<HTMLDivElement> & {
  onClose: () => void;
  children: ReactNode; // You want to allow any type of children (JSX, strings, etc.)
};

export const DialogFrame: React.FC<DialogFrameProps> = (props) => {
  return (
    <div
      className="relative z-50"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500/75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <button
              onClick={() => {
                props.onClose();
              }}
              className="cursor-pointer absolute right-5 top-5"
            >
              <X />
            </button>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};
