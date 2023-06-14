import {
  FC,
  forwardRef,
  InputHTMLAttributes,
  ChangeEvent,
  Ref,
} from 'react'
import Input, {getCountryCallingCode} from 'react-phone-number-input/input'
import Text from '../../components/Text'
import {TError} from '../../components/PhoneEmailForm/types.ts'
import './PhoneInput.scss'

interface IPhoneInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  ref: Ref<HTMLInputElement>
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  value?: string
  error?: TError
}

const PhoneInput: FC<IPhoneInputProps> = forwardRef<HTMLInputElement, IPhoneInputProps>(
  (props: IPhoneInputProps, ref) => {
    const {label, onChange, value, error} = props

    return (
        <label className="phone-input">
          <Text size="1rem" weight="800">{label}</Text>
          <div className="phone-input__input">
        <span className="phone-input__country-code">
          {`+${getCountryCallingCode("JP")}`}
        </span>
            <Input
                required
                ref={ref}
                international
                country="JP"
                value={value}
                onChange={onChange as any}
            />
            {error ? <div className="phone-input__error">{error}</div> : null}
          </div>
        </label>
    )
  }
)

PhoneInput.displayName = 'PhoneInput'

export default PhoneInput
