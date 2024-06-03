export interface IUserSignUpDTO {
    username: string
    password: string
    currency: string
  }
  
  export interface IUserSignUp {
    username: string
    password: string
    currency: string
  }
  
  export interface ISignUpWithCodePayload {
    userData: IUserSignUp
    code: string
  }
  
  export interface ISignUpWithoutCodePayload {
    username: string
    password: string
    currency: string
  }
  