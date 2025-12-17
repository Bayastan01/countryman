import React, { useCallback, useState } from 'react';
import { actions as newPostActions } from '../../features/newPost';
import block from 'bem-cn';
import { selectOpenedNewPost } from '../../features/newPost/selectors';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import Modals from 'components/universalСomponents/Modal/Modals';
import { Typography, Button, Stack, Box, Paper, Grid } from '@mui/material';
import PhotoFilterIcon from '@mui/icons-material/PhotoFilter';
import { styled } from '@mui/material/styles';

const b = block('newPostModal');

const NewPostModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const isNewPostOpened = useSelector(selectOpenedNewPost, shallowEqual);
  const dispatch = useDispatch();
  const closeH = useCallback(() => {
    dispatch(newPostActions.changeOpenedNewPost(!isNewPostOpened));
  }, [dispatch, isNewPostOpened]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Stack spacing={{ xs: 8, sm: 8 }} direction="column" useFlexGap sx={{ flexWrap: 'wrap' }}>
          <Item>
            <PhotoFilterIcon sx={{ fontSize: 300, cursor: 'pointer' }} onClick={handleOpen} />
          </Item>
          <Item>
            <Button variant="contained" color="primary" onClick={handleClose}>
              Перетащите сюда фото и видео
            </Button>
          </Item>
        </Stack>
      </Box>
      <Modals open={open} Close={handleClose}>
        <Box sx={{ textAlign: 'center', p: 4 }}>
          <Typography variant="h6" component="h2" gutterBottom>
            Загрузка видео
          </Typography>
          <Typography variant="body1" gutterBottom>
            Перетащите файлы сюда или нажмите кнопку ниже, чтобы выбрать их на компьютере.
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Пока вы не опубликуете видео, доступ к ним будет ограничен.
          </Typography>
          <Button variant="contained" component="label" sx={{ mt: 2 }}>
            Выбрать файлы
            <input type="file" hidden />
          </Button>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            Добавляя видео, вы принимаете{' '}
            <a href="#" style={{ color: 'inherit' }}>
              Условия использования
            </a>{' '}
            и{' '}
            <a href="#" style={{ color: 'inherit' }}>
              правила сообщества YouTube
            </a>
            . Также вы обязуетесь соблюдать авторские права и конфиденциальность данных других пользователей.{' '}
            <a href="#" style={{ color: 'inherit' }}>
              Подробнее...
            </a>
          </Typography>
        </Box>
      </Modals>
    </>
  );
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  textAlign: 'center',
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default NewPostModal;