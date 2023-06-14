import {
  createContext,
  useContext,
  useMemo,
  useState,
  useRef,
  ChangeEvent,
  useCallback
} from 'react'
import {
  IForm,
  IFormErrors,
  IPhoneEmailFormContext,
  IPhoneEmailFormProvider
} from './types.ts'
import validatePhone from './validatePhone.ts'
import validateEmail from './validateEmail.ts'
import {COUNTRY_CODE} from '../../constants.ts'

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

  const { setModal, setMessage } = props

  const validateForm = useCallback(async () => {
    setErrors({
      ...errors,
      phone: !validatePhone(form.phone) ? '有効な電話番号を入力して下さい' : null,
      email: !validateEmail(form.email) ? '有効なメールアドレスを入力して下さい' : null
    })

    return validatePhone(form.phone) && validateEmail(form.email)
  }, [errors, form.email, form.phone])

  const handleChange = useCallback(() => {
    setForm({
      ...form,
      phone: `${COUNTRY_CODE}${phoneRef.current?.value}`.replace(/\s/g, '') || '',
      email: emailRef.current?.value || '',
      isSkip: skipRef.current?.checked || false
    })
  }, [form])

  const handleSubmit = useCallback(async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    const isValid = await validateForm();

    if (isValid) {
      setErrors(initialErrors)
      setForm(initialForm)
      setModal(false)
      setMessage(form)
    } else {
      console.log('Form validation failed')
    }
  }, [validateForm, setModal, setMessage, form])

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
