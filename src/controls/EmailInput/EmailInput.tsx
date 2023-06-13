import {FC, ChangeEvent} from 'react'
import './EmailInput.scss'

interface EmailInputProps {
  label: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const EmailInput: FC<EmailInputProps> = (props: EmailInputProps) => {
  const {label, onChange} = props

  return (
      <label className="email-input">
        <span className="email-input__label">{label}</span>
        <input
            required
            type="email"
            onChange={onChange}
            className="email-input__input"
        />
      </label>
  )
}

export default EmailInput
