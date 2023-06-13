import {FC, ChangeEvent} from 'react'
import Input, {getCountryCallingCode} from 'react-phone-number-input/input'
import './PhoneInput.scss'

interface PhoneInputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const PhoneInput: FC<PhoneInputProps> = (props: PhoneInputProps) => {
  const {onChange} = props

  return (
      <div className="phone-input">
        <span className="phone-input__label">携帯電話番号</span>
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
      </div>
  )
}

export default PhoneInput
