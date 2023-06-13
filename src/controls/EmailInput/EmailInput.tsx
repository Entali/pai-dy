import {FC} from 'react'
import './EmailInput.scss'

interface IEmailInputProps {
  label: string
  onChange: (email: string) => void
  value?: string
}

const EmailInput: FC<IEmailInputProps> = (props: IEmailInputProps) => {
  const {label, onChange, value} = props

  return (
      <label className="email-input">
        <span className="email-input__label">{label}</span>
        <input
            required
            type="email"
            value={value}
            onChange={() => onChange}
            className="email-input__input"
        />
      </label>
  )
}

export default EmailInput
