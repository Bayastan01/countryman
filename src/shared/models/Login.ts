import { IServerUser } from './User'

/* eslint-disable camelcase */
export interface ILoginServer {
  username: string
  password: string
}

export interface ILoginServerDTO {
  access_token: string
  refresh_token: string
  user: IServerUser
}
