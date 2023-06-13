import {useState} from 'react'
import Input, {getCountryCallingCode} from 'react-phone-number-input/input'
import './PhoneInput.scss'

const PhoneInput = () => {
  const [value, setValue] = useState('')

  return (
      <div className="phone-input">
        <span className="phone-input__label">携帯電話番号</span>
        <div className="phone-input__input">
          <span className="phone-input__country-code">
            {`+${getCountryCallingCode("JP")}`}
          </span>
          <Input
              international
              country="JP"
              value={value}
              maxLength={12}
              minLength={12}
              className=""
              onChange={() => setValue('')}
          />
        </div>
      </div>
  )
}

export default PhoneInput
