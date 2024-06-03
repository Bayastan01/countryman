import { IApplicationState } from '../../setup/store'

export const selectOpenedSideMenu = (state: IApplicationState) => state.sideMenu.isOpen
