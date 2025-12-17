import React, { useCallback } from 'react';
import { block } from 'bem-cn';
import NewPostModal from '../../components/CreateNewPost/NewPostModal';
// import Button from 'components/universalСomponents/Button/Button';
import { useDispatch, useSelector, shallowEqual } from 'react-redux'; // Example imports for Redux
import { actions as newPostActions } from '../../features/newPost';
import { selectOpenedNewPost } from '../../features/newPost/selectors';
import Button from 'components/universalСomponents/Button/Button';

const b = block('home-page');

const AddPage: React.FC = () => {
  const dispatch = useDispatch(); // Dispatch for Redux actions
  
  const isNewPostOpened = useSelector(selectOpenedNewPost, shallowEqual);
  
  // Toggle modal state
  const toggleNewPost = useCallback(() => {
    console.log('hello',isNewPostOpened)

    dispatch(newPostActions.changeOpenedNewPost(!isNewPostOpened));
  }, [dispatch, isNewPostOpened]);

  return (
    <div className={b()}>
      <NewPostModal />
    </div>
  );
};

export default AddPage;
