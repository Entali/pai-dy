import {createContext, useContext, ReactNode, useMemo} from 'react'

interface IPhoneEmailFormContext {
  data: {
    phoneNumber: string
    email: string
    isSkip: boolean
  }
}

const PhoneEmailFormContext = createContext({} as IPhoneEmailFormContext)

interface IPhoneEmailFormProvider {
  children: ReactNode
}

const PhoneEmailFormProvider = ({children}: IPhoneEmailFormProvider) => {
  const data = useMemo(() => ({
    phoneNumber: '',
    email: '',
    isSkip: true,
  }), [])

  const value = useMemo(() => ({
    data,
  }), [data])

  return (
      <PhoneEmailFormContext.Provider value={value}>
        {children}
      </PhoneEmailFormContext.Provider>
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
