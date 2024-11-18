// features/newPost/actions.ts
import { createAction } from '@reduxjs/toolkit';

export const changeOpenedNewPost = createAction<boolean>('@newPost/CHANGE_OPENED_NEW_POST');
