"use client"

import { useEffect, useRef, useState } from "react";

interface IOptionSelector {
  label: string;
  value: string;
}

interface ISelectorProps {
  value: string | undefined; // Pass in value from React Hook Form
  onChange: (value: string) => void; // onChange function from React Hook Form
  options: IOptionSelector[];
  placeHolder: string;
}

export const Selector = ({
  value,
  onChange,
  options,
  placeHolder,
}: ISelectorProps) => {
  const [show, setShow] = useState(false);

  const componentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [selectValue, setSelectValue] = useState<IOptionSelector | undefined>(
    options.find((option) => option.value === value)
  );

  const handleOutsideClick = (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    const clickOutside =
      componentRef.current &&
      !componentRef.current.contains(event.target as Node);
    const clickButtonOutside =
      buttonRef.current && !buttonRef.current.contains(event.target as Node);

    if (clickOutside && clickButtonOutside) {
      setShow(false);
    }
  };

  const handleSelector = (option: IOptionSelector) => {
    onChange(option.value); // Update React Hook Form value
    setSelectValue(option); // Update local state for display
    setShow(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative inline-block text-left h-[48px] md:h-[34px] lg:h-[48px] xl:h-[64px] w-full">
      <div>
        <button
          ref={buttonRef}
          className={`h-[48px] md:h-[34px] lg:h-[48px] xl:h-[64px] inline-flex items-center w-full justify-between text-[16px] leading-[24px] font-normal ${
            selectValue ? "text-textcolor" : "text-borderNeutralColor"
          } gap-x-1.5 rounded-[8px] bg-white px-4 py-2 text-sm border border-borderNeutralColor focus:border-primary`}
          onClick={() => {
            setShow((prevState) => !prevState);
          }}
        >
          {selectValue ? selectValue.label : placeHolder}
          <svg
            className="-mr-1 size-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              fillRule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {show && (
        <div
          className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden"
          ref={componentRef}
        >
          <div className="py-1" role="none">
            {options.map((option) => (
              <button
                key={option.label}
                className="block px-4 py-2 text-sm text-gray-700"
                onClick={() => {
                  handleSelector(option);
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
