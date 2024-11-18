import React, { useEffect } from 'react';
import { useModal } from '../../shared/hooks/useModal';
import { Modals } from 'components/universalСomponents/Modal/Modals';
import { useSelector, useDispatch } from 'react-redux';
import { selectOpenedNewPost } from '../../features/newPost/selectors';
import { actions as newPostActions } from '../../features/newPost';

import { GoArrowLeft } from "react-icons/go";
interface UserInfo {
  name: string;
  age: number;
}

const NewPostModal: React.FC = () => {
  const dispatch = useDispatch();
  const { modalState } = useModal<UserInfo>();
  const isNewPostOpened = useSelector(selectOpenedNewPost);

  // Синхронизация состояния модального окна с глобальным состоянием
  const handleCloseModal = () => {
    dispatch(newPostActions.changeOpenedNewPost(false)); // Закрываем модалку
  };

  return (
    <div>
      <Modals<UserInfo>
        isVisible={isNewPostOpened}
        state={modalState}
        onClose={handleCloseModal}
        placeholder="Выберите до 10/0"
        name={GoArrowLeft}
        renderContent={(state) => (
          <div>
            <h2>Модальное окно №1</h2>
          </div>
        )}
      />
    </div>
  );
};

export default NewPostModal;
