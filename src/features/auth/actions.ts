/* eslint-disable no-debugger */
import { ISignUpWithCodePayload, ISignUpWithoutCodePayload, IUserSignUp } from '../../shared/models/Registration'
import { ILoginServer } from 'shared/models/Login'
import { IServerUser, IUser } from 'shared/models/User'
import { makeCommunicationActionCreator } from '../../shared/utils/communication/actions/makeCommunicationActionCreator'
export const logout = makeCommunicationActionCreator({
  loading: '@auth/LOGOUT_LOADING',
  success: '@auth/LOGOUT_SUCCESS',
  error: '@auth/LOGOUT_LOADING_ERROR',
  reset: '@auth/LOGOUT_LOADING_RESET',
})(
  async ({
    deps: {
      extra: { api },
    },
  }) => {
    await api.auth.logout()
  },
)

export const usernameSignIn = makeCommunicationActionCreator({
  loading: '@reports/USERNAME_SIGN_IN_LOADING',
  success: '@reports/USERNAME_SIGN_IN_SUCCESS',
  error: '@reports/USERNAME_SIGN_IN_ERROR',
  reset: '@reports/USERNAME_SIGN_IN_RESET',
})<ILoginServer, IUser>(
  async ({
    deps: {
      extra: { api },
    },
    payload,
  }) => {
    const response = await api.auth.usernameSignIn({ data: payload })
    return response.data
  },
)

export const getUserData = makeCommunicationActionCreator({
  loading: '@reports/GET_USER_DATA_LOADING',
  success: '@reports/GET_USER_DATA_SUCCESS',
  error: '@reports/GET_USER_DATA_ERROR',
  reset: '@reports/GET_USER_DATA_RESET',
})<IServerUser, IUser>(
  async ({
    deps: {
      extra: { api },
    },
  }) => {
    const response = await api.auth.getUserData()
    return response.data
  },
)

export const signUpWithCode = makeCommunicationActionCreator({
  loading: '@reports/USERNAME_SIGN_UP_WITH_CODE_LOADING',
  success: '@reports/USERNAME_SIGN_UP_WITH_CODE_SUCCESS',
  error: '@reports/USERNAME_SIGN_UP_WITH_CODE_ERROR',
  reset: '@reports/USERNAME_SIGN_UP_WITH_CODE_RESET',
})<ISignUpWithCodePayload, any>(
  async ({
    deps: {
      extra: { api },
      dispatch,
    },
    payload,
  }) => {
    const response = await api.register.signUpWithCode({ data: payload })

    if (response.success) {
      dispatch(usernameSignIn({ username: payload.userData.username, password: payload.userData.password }))
    }
    return response.data
  },
)

export const signUpWithoutCode = makeCommunicationActionCreator({
  loading: '@reports/USERNAME_SIGN_UP_WITHOUT_CODE_LOADING',
  success: '@reports/USERNAME_SIGN_UP_WITHOUT_CODE_SUCCESS',
  error: '@reports/USERNAME_SIGN_UP_WITHOUT_CODE_ERROR',
  reset: '@reports/USERNAME_SIGN_UP_WITHOUT_CODE_RESET',
})<ISignUpWithoutCodePayload, any>(
  async ({
    deps: {
      extra: { api },
    },
    payload,
  }) => {
    const response = await api.register.signUpWithoutCode({ data: payload })
    return response.data
  },
)
