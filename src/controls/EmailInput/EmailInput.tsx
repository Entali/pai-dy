import {ChangeEvent, FC, forwardRef, InputHTMLAttributes, Ref} from 'react'
import Text from '../../components/Text'
import {TError} from '../../components/PhoneEmailForm/types.ts'
import './EmailInput.scss'

interface IEmailInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  ref: Ref<HTMLInputElement>
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  value?: string
  error?: TError
}

const EmailInput: FC<IEmailInputProps> = forwardRef<HTMLInputElement, IEmailInputProps>(
  (props: IEmailInputProps, ref) => {
    const {label, onChange, value, error} = props

    return (
        <label className="email-input">
          <Text size="1rem" weight="800">{label}</Text>
          <input
              required
              ref={ref}
              type="email"
              defaultValue={value}
              onChange={onChange}
              className="email-input__input"
          />
          {error ? <div className="email-input__error">{error}</div> : null}
        </label>
    )
  }
)

EmailInput.displayName = 'EmailInput'

export default EmailInput
