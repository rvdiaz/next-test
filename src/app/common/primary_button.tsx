import React from "react";
import { LoadingSpinner } from "./loading_spinner";

interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  loading,
  ...props
}) => {
  const disabledAux = loading || props.disabled;

  return (
    <button
      {...props}
      disabled={disabledAux}
      className={`cursor-pointer font-sans bg-primary font-normal p-[10px] text-white rounded-[14px] px-[12px] lg:px-[16px] xl:px-[24px] text-[14px] lg:text-[18px] xl:text-[20px] ${props.className}`}
    >
      {loading ? <LoadingSpinner /> : props.children}
    </button>
  );
};
