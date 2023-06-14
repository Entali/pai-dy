import PhoneEmailFormProvider, {
  IPhoneEmailFormContext,
  usePhoneEmailForm
} from './PhoneEmailFormContext'
import PhoneInput from '../../controls/PhoneInput'
import EmailInput from '../../controls/EmailInput'
import Checkbox from '../../controls/Checkbox'
import Text from '../Text'
import Link from '../Link'
import Button from '../../controls/Button'
import './PhoneEmailForm.scss'

const Form = () => {
  const {
    form,
    errors,
    phoneRef,
    emailRef,
    skipRef,
    handleSubmit
  }: IPhoneEmailFormContext = usePhoneEmailForm()

  console.log('form', form);

  return (
      <form onSubmit={handleSubmit} className="phone-email-form">
        <PhoneInput
            ref={phoneRef}
            label="携帯電話番号"
            value={form.phone}
            error={errors.phone}
        />
        <EmailInput
            ref={emailRef}
            value={form.email}
            error={errors.email}
            label="メールアドレス"/>
        <Checkbox
            ref={skipRef}
            checked={form.isSkip}
            label="次回から入力を省略"
        />
        <div className="phone-email-form__bottom">
          <Text size="0.75rem" weight="600" align="center">
            <Link to="https://terms.paidy.com/personal-data" target="_blank">
              利用規約・個人情報取扱条項
            </Link>
            <Text inline size="0.75rem" weight="400">に同意して</Text>
          </Text>
          <Button text="次へ"/>
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
