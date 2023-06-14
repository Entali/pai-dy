import {
  createContext,
  useContext,
  ReactNode,
  useMemo,
  useState,
  useRef, RefObject, ChangeEvent, useCallback,
} from 'react'

export type TError = string | null

export interface IPhoneEmailFormProvider {
  children: ReactNode
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

export interface IPhoneEmailFormContext {
  form: IForm
  errors: IFormErrors
  phoneRef: RefObject<HTMLInputElement>
  emailRef: RefObject<HTMLInputElement>
  skipRef: RefObject<HTMLInputElement>
  handleSubmit: (e: ChangeEvent<HTMLFormElement>) => void
}

const PhoneEmailFormContext = createContext({} as IPhoneEmailFormContext)
PhoneEmailFormContext.displayName = 'PhoneEmailFormContext'

const initialForm: IForm = {
  phone: '',
  email: '',
  isSkip: false
}

const initialErrors: IFormErrors = {
  phone: null,
  email: null,
  isSkip: null
}

const PhoneEmailFormProvider = (props: IPhoneEmailFormProvider) => {
  const [form, setForm] = useState<IForm>(initialForm)
  const [errors] = useState<IFormErrors>(initialErrors)
  const phoneRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const skipRef = useRef<HTMLInputElement>(null)

  const handleSubmit = useCallback((e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    // validate
    // if success reset form
    // if error set errors

    setForm({
      ...form,
      phone: `+81${phoneRef.current?.value}`.replace(/\s/g, '') || '',
      email: emailRef.current?.value || '',
      isSkip: skipRef.current?.checked || false
    })
  }, [form])

  const value = useMemo(() => ({
    form,
    errors,
    phoneRef,
    emailRef,
    skipRef,
    handleSubmit
  }), [
    form,
    errors,
    phoneRef,
    emailRef,
    skipRef,
    handleSubmit
  ])

  return (
      <PhoneEmailFormContext.Provider value={value} {...props} />
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const usePhoneEmailForm = () => {
  const context = useContext(PhoneEmailFormContext)
  if (context === undefined) {
    throw new Error('usePhoneEmailForm must be used within a PhoneEmailFormProvider')
  }
  return context as IPhoneEmailFormContext
}

export default PhoneEmailFormProvider
