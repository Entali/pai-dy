import EmailInput from './EmailInput.tsx'
import {fireEvent, render, screen} from '@testing-library/react'

const jestFn = jest.fn()

describe('EmailInput', () => {
  it('should render a label', () => {
    render(<EmailInput value="myemail@google.com" label="Label"
                       onChange={jestFn}/>)
    expect(screen.getAllByText('Label')).toHaveLength(1)
  });

  it('should render an input element', () => {
    render(<EmailInput value="myemail@google.com" label="Label"
                       onChange={jestFn}/>)
    const input = screen.getByTestId('email-input__email')
    expect(input).toBeInTheDocument()
    fireEvent.change(input)
  })
})
