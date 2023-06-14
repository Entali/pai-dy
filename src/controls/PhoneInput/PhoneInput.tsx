import {FC} from 'react'
import Input, {getCountryCallingCode} from 'react-phone-number-input/input'
import Text from '../../components/Text'
import './PhoneInput.scss'

interface IPhoneInputProps {
  label: string
  onChange: (phone: string) => void
  value?: string
}

const PhoneInput: FC<IPhoneInputProps> = (props: IPhoneInputProps) => {
  const {label, onChange, value} = props

  return (
      <label className="phone-input">
        <Text size="1rem" weight="800">{label}</Text>
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
              value={value}
              onChange={() => onChange}
          />
        </div>
      </label>
  )
}

export default PhoneInput
