import {
  createContext,
  useContext,
  useMemo,
  useState,
  useRef,
  ChangeEvent,
  useCallback, Dispatch, SetStateAction
} from 'react'
import {
  IForm,
  IFormErrors,
  IPhoneEmailFormContext,
  IPhoneEmailFormProvider
} from './types.ts'
import validatePhone from './validatePhone.ts'
import validateEmail from './validateEmail.ts'

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
  const [errors, setErrors] = useState<IFormErrors>(initialErrors)
  const phoneRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const skipRef = useRef<HTMLInputElement>(null)

  const validateForm = useCallback(async(
      form: IForm,
      setErrors: Dispatch<SetStateAction<IFormErrors>>
  ): Promise<boolean> => {
    console.log('validateForm', form)

    if (!validatePhone(form.phone)) {
      setErrors({
        ...errors,
        phone: 'Invalid phone number'
      })

      return false
    }

    if (!validateEmail(form.email)) {
      setErrors({
        ...errors,
        email: 'Invalid email'
      })

      return false
    }

    return true
  }, [errors])

  const handleChange = useCallback(() => {
    setForm({
      ...form,
      phone: `+81${phoneRef.current?.value}`.replace(/\s/g, '') || '',
      email: emailRef.current?.value || '',
      isSkip: skipRef.current?.checked || false
    })
  }, [form])

  const handleSubmit = useCallback(async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    const isValidForm = await validateForm(form, setErrors)

    if (isValidForm) {
      console.log('Form validation successful')
    } else {
      console.log('Form validation failed')
    }
  }, [form, validateForm])

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
