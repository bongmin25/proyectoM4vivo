import React from "react";

// interfaces
import { IModal } from "@/interfaces/modal";

const Modal: React.FC<IModal> = ({
  isModalOpen,
  modalMessage,
  isLoading,
  setIsModalOpen,
}) => {
  if (!isModalOpen) return null;
  return (
    <>
      <div className="modal-overlay"></div>
      <dialog open>
        {isLoading ? (
          <>
            <h1 className="text-center font-bold m-4">¡Login successful! ✅</h1>
            <br />
            <div className="loader"></div>
          </>
        ) : (
          <>
            <p className="text-center">
              <div className="font-bold">⛔ Fix this errors: </div>
              <br />
              <div className="text-red-500">{modalMessage}</div>
            </p>
            <form method="dialog">
              <button
                type="button"
                onClick={setIsModalOpen}
                className="modal-button"
              >
                OK
              </button>
            </form>
          </>
        )}
      </dialog>
    </>
  );
};

export default Modal;
