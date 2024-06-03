import { locale } from '../../../shared/locale/ru-ru-'

import { createReducer } from '@reduxjs/toolkit'
import { ILocaleState } from '../type'
import * as actions from '../actions'

const initialState: ILocaleState = {
  data: locale,
}

export default createReducer(initialState, builder => {
  builder.addCase(actions.changeLang, (state, action) => {
    state.data = action.payload
  })
})
