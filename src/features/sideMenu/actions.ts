import { createAction } from '@reduxjs/toolkit'
export const CHANGE_OPENED_SIDE_MENU = '@sideMenu/CHANGE_OPENED_SIDE_MENU'

export const changeOpenedSideMenu = createAction<boolean>(CHANGE_OPENED_SIDE_MENU)
