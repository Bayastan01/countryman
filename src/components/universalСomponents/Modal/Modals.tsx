import React, { useEffect, useState } from 'react';
import { Modal, Loader } from 'rsuite';
import { IIcon } from '../IIcon/IIcon';
import './Modals.scss';

type IconType = 'arrow-left' | 'close' | 'check';

interface ModalProps<T> {
  isVisible: boolean;
  state: T | null;
  onClose: () => void;
  renderContent: (state: T | null) => React.ReactNode;
  placeholder?: string;
  name: IconType;
}

export const Modals = <T,>({
  isVisible,
  state,
  onClose,
  renderContent,
  placeholder = 'Default Title',
  name
}: ModalProps<T>) => {
  const [rows, setRows] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setRows(80), 2000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <Modal
      open={isVisible}
      onClose={onClose}
      style={{ padding: 0 }}
      className={`modal ${isVisible ? 'open' : ''}`}
    >
      <div className="modal__header">
        <IIcon
          name={name}
          iconBGColor="white"
          sizes="2rem"
          onClick={onClose}
        />
        <span className="modal__header-title">{placeholder}</span>
        <button className="modal__header-next-btn" onClick={onClose}>
          Далее
        </button>
      </div>
      <Modal.Body className="modal__body">
        {rows ? renderContent(state) : (
          <div className="modal__body-loader">
            <Loader size="md" />
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};
