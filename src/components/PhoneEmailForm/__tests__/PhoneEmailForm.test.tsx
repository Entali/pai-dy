import {render} from '@testing-library/react'
import Form from '../PhoneEmailForm.tsx'

const jestFn = jest.fn()

describe('PhoneEmailForm', () => {
  it('should render a form', () => {
    const wrapper = render(
        <Form setMessage={jestFn} setModal={jestFn}/>
    )
    expect(wrapper.getByTestId('phone-email-form')).toBeInTheDocument()
  })

  it('should render w/ phone input', () => {
    const wrapper = render(
        <Form setMessage={jestFn} setModal={jestFn}/>
    )
    expect(wrapper.getByText('携帯電話番号')).toBeInTheDocument()
  })

  it('should render w/ email input', () => {
    const wrapper = render(
        <Form setMessage={jestFn} setModal={jestFn}/>
    )
    expect(wrapper.getByText('メールアドレス')).toBeInTheDocument()
  })

  it('should render w/ checkbox', () => {
    const wrapper = render(
        <Form setMessage={jestFn} setModal={jestFn}/>
    )
    expect(wrapper.getByText('次回から入力を省略')).toBeInTheDocument()
  })
})
