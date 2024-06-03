import { IApplicationState } from '../../setup/store'

export const selectLocaleDict = (state: IApplicationState) => state.locale.data
