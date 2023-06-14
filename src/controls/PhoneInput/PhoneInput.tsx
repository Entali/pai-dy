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
import {COUNTRY} from '../../constants.ts'
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
    const cls = "phone-input__input"

    return (
        <label className="phone-input">
          <Text size="1rem" weight="800">{label}</Text>
          <div className={error ? `${cls} ${cls}_error` : cls}>
            <span className="phone-input__country-code">
              {`+${getCountryCallingCode(COUNTRY)}`}
            </span>
            <Input
                ref={ref}
                international
                value={value}
                country={COUNTRY}
                placeholder="00-0000-0000"
                onChange={onChange as any}
            />
          </div>
          {error ? <div className="phone-input__error">{error}</div> : null}
        </label>
    )
  }
)

PhoneInput.displayName = 'PhoneInput'

export default PhoneInput
