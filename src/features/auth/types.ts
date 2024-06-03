/* eslint-disable @typescript-eslint/no-unused-vars */
import { ICommunication } from 'shared/models/Communication/Communication'
import { IUserSignUp } from '../../shared/models/Registration'
import { IUser } from 'shared/models/User'

export interface IAuthState {
  communications: {
    login: ICommunication
    signUpWithCode: ICommunication
    signUpWithoutCode: ICommunication
  }
  data: {
    user: IUser | null
    isAuth: boolean
  }
}
