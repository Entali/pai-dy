import {createContext, useContext, ReactNode, useMemo, useState} from 'react'

interface IPhoneEmailFormContext {
  phone: string
  setPhone: (phone: string) => void
  email: string
  setEmail: (email: string) => void
  isSkip: boolean
  setIsSkip: (isSkip: boolean) => void
  phoneError: string | null
  setPhoneError: (phoneError: string | null) => void
  emailError: string | null
  setEmailError: (emailError: string | null) => void
}

const PhoneEmailFormContext = createContext({} as IPhoneEmailFormContext)
PhoneEmailFormContext.displayName = "PhoneEmailFormContext";

interface IPhoneEmailFormProvider {
  children: ReactNode
}

const PhoneEmailFormProvider = (props: IPhoneEmailFormProvider) => {
  const [phone, setPhone] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [isSkip, setIsSkip] = useState<boolean>(false)
  const [phoneError, setPhoneError] = useState<string | null>(null)
  const [emailError, setEmailError] = useState<string | null>(null)

  const value = useMemo(() => ({
    phone,
    setPhone,
    email,
    setEmail,
    isSkip,
    setIsSkip,
    phoneError,
    setPhoneError,
    emailError,
    setEmailError
  }), [
    phone,
    setPhone,
    email,
    setEmail,
    isSkip,
    setIsSkip,
    phoneError,
    setPhoneError,
    emailError,
    setEmailError
  ])

  return (
      <PhoneEmailFormContext.Provider value={value} {...props} />
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const usePhoneEmailForm = () => {
  const context = useContext(PhoneEmailFormContext);
  if (context === undefined) {
    throw new Error('usePhoneEmailForm must be used within a PhoneEmailFormProvider')
  }
  return context as IPhoneEmailFormContext;
}

export default PhoneEmailFormProvider
