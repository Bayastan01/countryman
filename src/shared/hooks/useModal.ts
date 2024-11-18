import { useState } from 'react';

interface ModalState<T> {
  isVisible: boolean;
  state: T | null;
}

interface UseModalResult<T> {
  isModalVisible: boolean;
  modalState: T | null;
  showModal: (state: T) => void;
  hideModal: () => void;
}

export const useModal = <T,>(): UseModalResult<T> => {
  const [modalState, setModalState] = useState<ModalState<T>>({
    isVisible: false,
    state: null,
  });

  const showModal = (state: T) => {
    setModalState({ isVisible: true, state });
  };

  const hideModal = () => {
    setModalState({ isVisible: false, state: null });
  };

  return {
    isModalVisible: modalState.isVisible,
    modalState: modalState.state,
    showModal,
    hideModal,
  };
};
