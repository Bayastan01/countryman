/* eslint-disable camelcase */
import { RolesTypes } from './Roles'

export interface IUser {
  id: number
  firstName: string
  lastName: string
  createdAt: Date
  email: string
  username: string
}

export interface IServerUser {
  balance: string
  balance_currency: string
  date_joined: string
  email: string
  first_name: string
  groups: string[]
  id: number
  is_active: boolean
  is_banned: boolean
  is_staff: boolean
  is_superuser: boolean
  last_login: string
  last_name: string
  parent: number
  role: RolesTypes
  user_permissions: string[]
  username: string
  version: number
}
