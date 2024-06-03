import { createAction } from '@reduxjs/toolkit'
import { locale } from 'shared/locale/en-US'

export const changeLang = createAction<typeof locale>('@locale/CHANGE_LANG')
