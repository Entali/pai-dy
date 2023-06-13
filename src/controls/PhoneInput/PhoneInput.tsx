import {FC, ChangeEvent} from 'react'
import Input, {getCountryCallingCode} from 'react-phone-number-input/input'
import './PhoneInput.scss'

interface IPhoneInputProps {
  label: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const PhoneInput: FC<IPhoneInputProps> = (props: IPhoneInputProps) => {
  const {label, onChange} = props

  return (
      <label className="phone-input">
        <span className="phone-input__label">{label}</span>
        <div className="phone-input__input">
          <span className="phone-input__country-code">
            {`+${getCountryCallingCode("JP")}`}
          </span>
          <Input
              required
              international
              country="JP"
              maxLength={12}
              minLength={12}
              className=""
              onChange={() => onChange}
          />
        </div>
      </label>
  )
}

export default PhoneInput
