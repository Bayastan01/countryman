import { IApplicationState } from '../../setup/store'

export const selectIsUserAuthenticated = (state: IApplicationState) => state.auth.data.isAuth

export const selectAuthCommunication = (state: IApplicationState) => state.auth.communications

export const selectUserData = (state: IApplicationState) => state.auth.data.user
