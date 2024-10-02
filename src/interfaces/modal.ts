export interface IModal {
    isModalOpen: boolean;
    modalMessage: string;
    isLoading: boolean;
    setIsModalOpen: () => void;
}

export interface IModalMessage {
    isOpen: boolean;
    closeModal: () => void;
    message: string;
    buttonText: string;
    onButtonClick?: () => void;
    icon?: React.ReactNode;
  }