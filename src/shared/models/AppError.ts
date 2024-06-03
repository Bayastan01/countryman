export class AppError extends Error {}

export interface ICommonError {
  message: string
  code: string
  field: string
}

export interface IMultiError {
  [key: string]: ICommonError[]
}

export interface IListOfErrors {
  listOfErrors: ICommonError[]
}
