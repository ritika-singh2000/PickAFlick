import { ReactNode } from "react";

const Modal = ({
  show,
  onClose,
  children,
}: {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
}) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="relative bg-white rounded-lg shadow-lg p-6 w-7/12">
        <button
          className="absolute top-2 right-2 font-medium text-2xl text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
