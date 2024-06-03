import { createReducer } from '@reduxjs/toolkit'
import * as actions from '../actions'
import { ISideMenuState } from '../types'

const initialState: ISideMenuState = {
  isOpen: true,
}

export default createReducer(initialState, builder => {
  builder.addCase(actions.changeOpenedSideMenu, (state, action) => {
    state.isOpen = action.payload
  })
  
})
