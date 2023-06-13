import {FC, ChangeEvent} from 'react'
import './EmailInput.scss'

interface IEmailInputProps {
  label: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const EmailInput: FC<IEmailInputProps> = (props: IEmailInputProps) => {
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
