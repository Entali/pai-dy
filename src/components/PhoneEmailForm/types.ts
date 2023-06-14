import {ChangeEvent, ReactNode, RefObject} from 'react'

export type TError = string | null

export interface IPhoneEmailFormProvider {
  children: ReactNode
}

export interface IPhoneEmailFormContext {
  form: IForm
  errors: IFormErrors
  phoneRef: RefObject<HTMLInputElement>
  emailRef: RefObject<HTMLInputElement>
  skipRef: RefObject<HTMLInputElement>
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: ChangeEvent<HTMLFormElement>) => void
}

export interface IForm {
  phone: string
  email: string
  isSkip: boolean
}

export interface IFormErrors {
  phone: TError
  email: TError
  isSkip: TError
}
