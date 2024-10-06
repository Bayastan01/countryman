import React, { useState, useEffect } from 'react';
import { block } from 'bem-cn';
import './HandleFilter.scss';
import SettingHorizontalIcon from '@rsuite/icons/SettingHorizontal';

const b = block('handle-filter');

function App({ onClose }) {
    return (
        <div className={b('modal')}>
            <div className={b('modal-content')}>
                <span className={b('close')} onClick={onClose}>&times;</span>
                <h2>Это модальное окно</h2>
                <p>Содержимое модального окна.</p>
            </div>
        </div>
    );
}

const HandleFilter = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll'); // Отключаем прокрутку
        } else {
            document.body.classList.remove('no-scroll'); // Включаем прокрутку
        }
    }, [isOpen]);

    return (
        <>
            <div className={b('handle_modal')}>
                <button
                    onClick={openModal}
                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                    <SettingHorizontalIcon style={{ fontSize: '24px', color: 'black' }} />
                </button>
                {isOpen && <App onClose={closeModal} />}
            </div>
        </>
    );
};

export default HandleFilter;
