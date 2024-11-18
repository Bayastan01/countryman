import { createReducer } from '@reduxjs/toolkit'
import { changeOpenedNewPost }  from '../actions'
import { INewPostState } from '../types'

const initialState: INewPostState = {
  isOpen: false,
};

export default createReducer(initialState, builder => {
  builder.addCase(changeOpenedNewPost, (state, action) => {
    state.isOpen = action.payload;
  });
});
