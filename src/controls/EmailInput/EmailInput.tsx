import {FC, ChangeEvent} from 'react'
import './EmailInput.scss'

interface IEmailInputProps {
  label: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
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
            onChange={onChange}
            value={value}
            className="email-input__input"
        />
      </label>
  )
}

export default EmailInput
