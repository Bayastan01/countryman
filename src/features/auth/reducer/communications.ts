import { combineReducers } from 'redux'

import { makeCommunicationReducer } from '../../../shared/utils/communication/reducer/makeCommunicationReducer'

import { IAuthState } from '../type'
import * as actions from '../actions'

export default combineReducers<IAuthState['communications']>({
  login: makeCommunicationReducer(actions.usernameSignIn),
  signUpWithCode: makeCommunicationReducer(actions.signUpWithCode),
  signUpWithoutCode: makeCommunicationReducer(actions.signUpWithoutCode),
})
