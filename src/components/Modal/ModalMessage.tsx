import React from "react";
import { IModalMessage } from "@/interfaces/modal";

const ModalMessage: React.FC<IModalMessage> = ({
  isOpen,
  closeModal,
  message,
  buttonText,
  onButtonClick,
  icon,
}) => {
  if (!isOpen) return null;

  const onHandleClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else closeModal();
  };
  return (
    <div>
      <div className="modal-overlay flex items-center justify-center ">
        <div className=" bg-white rounded p-6 shadow-2xl">
          <p className="text-center font-bold">{message}</p>
          <br />
          <div className="flex justify-center">{icon}</div>

          <div className="flex justify-center mt-4">
            <button
              onClick={onHandleClick}
              className="bg-[#235291] text-white rounded py-2 px-4 hover:bg-[#35a54900] hover:text-black transition duration-300"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalMessage;
