import { createReducer } from '@reduxjs/toolkit'

import { IAuthState } from '../type'
import * as actions from '../actions'

const initialState: IAuthState['data'] = {
  user: null,
  isAuth: true,
}

export default createReducer(initialState, builder => {
  builder
    .addCase(actions.logout.success, (state, action) => {
      state.isAuth = true
    })
    .addCase(actions.usernameSignIn.success, (state, action) => {
      state.user = action.payload
      state.isAuth = true
    })
    .addCase(actions.getUserData.success, (state, action) => {
      state.user = action.payload
      state.isAuth = true
    })
})
