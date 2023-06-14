import {render} from '@testing-library/react'
import PhoneEmailFormProvider from '../PhoneEmailFormContext.tsx'
import Form from '../PhoneEmailForm.tsx'

const jestFn = jest.fn()

describe('PhoneEmailFormProvider', () => {
  it('should render w/ form', () => {
    const wrapper = render(
        <PhoneEmailFormProvider setMessage={jestFn} setModal={jestFn}>
          <Form setMessage={jestFn} setModal={jestFn}/>
        </PhoneEmailFormProvider>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
