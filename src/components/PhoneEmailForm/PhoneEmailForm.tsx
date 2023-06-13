import PhoneEmailFormProvider, {
  usePhoneEmailForm
} from './PhoneEmailFormContext'
import PhoneInput from '../../controls/PhoneInput'
import EmailInput from '../../controls/EmailInput'
import Checkbox from '../../controls/Checkbox'
import Text from '../Text'
import Link from '../Link'
import Button from '../../controls/Button'

const Form = () => {
  const {data} = usePhoneEmailForm()
  const {phoneNumber, email, isSkip} = data

  return (
      <form>
        <PhoneInput
            label="携帯電話番号"
            value={phoneNumber}
            onChange={() => null}
        />
        <EmailInput
            value={email}
            onChange={() => null}
            label="メールアドレス"/>
        <Checkbox
            checked={isSkip}
            label="次回から入力を省略"
            onChange={() => null}
        />
        <div style={{
          marginTop: '5rem'
        }}>
          <Text size="0.75rem" weight="600" align="center">
            <Link to="https://terms.paidy.com/personal-data" target="_blank">
              利用規約・個人情報取扱条項
            </Link>
            <Text size="0.75rem" weight="400">に同意して</Text>
          </Text>
          <Button text="次へ" onSubmit={() => null}/>
        </div>
      </form>
  )
}

const PhoneEmailForm = () => {
  return (
      <PhoneEmailFormProvider>
        <Form/>
      </PhoneEmailFormProvider>
  );
};

export default PhoneEmailForm
