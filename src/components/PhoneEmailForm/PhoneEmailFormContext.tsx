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
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = () => {
    console.log('handleChange')
  }

  const handleSubmit = useCallback((e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

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
    handleChange,
    handleSubmit
  }), [
    form,
    errors,
    phoneRef,
    emailRef,
    skipRef,
    handleChange,
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
