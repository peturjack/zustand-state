import React from "react";
type ModalButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string | null;
};
const ModalButton = ({ onClick, className }: ModalButtonProps) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`border-2 border-orange-500 py-2 px-4 min-w-[100] hover:bg-white hover:text-black bg-orange-500 text-white duration-200 rounded ${className}`}
      >
        Add Product
      </button>
    </>
  );
};

export default ModalButton;
