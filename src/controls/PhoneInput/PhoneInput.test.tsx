import PhoneInput from './PhoneInput'
import {fireEvent, render, screen} from '@testing-library/react'

const jestFn = jest.fn()

describe('PhoneInput', () => {
  it('should render a label', () => {
    render(<PhoneInput value="7012345678" label="Label" onChange={jestFn}/>)
    expect(screen.getAllByText('Label')).toHaveLength(1)
  });

  it('should render an input element', () => {
    render(<PhoneInput value="7012345678" label="Label" onChange={jestFn}/>)
    const input = screen.getByTestId('phone-input__phone')
    expect(input).toBeInTheDocument()
    fireEvent.change(input)
  })
})
