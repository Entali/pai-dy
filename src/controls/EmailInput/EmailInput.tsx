import {FC} from 'react'
import Text from '../../components/Text'
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
        <Text size="1rem" weight="800">{label}</Text>
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
