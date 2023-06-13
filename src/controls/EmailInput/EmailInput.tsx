import {FC, ChangeEvent} from 'react'
import './EmailInput.scss'

interface EmailInputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const EmailInput: FC<EmailInputProps> = (props: EmailInputProps) => {
  const {onChange} = props

  return (
      <div className="email-input">
        <span className="email-input__label">メールアドレス</span>
        <input
            required
            type="email"
            onChange={onChange}
            className="email-input__input"
        />
      </div>
  )
}

export default EmailInput
