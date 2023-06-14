import {ChangeEvent, FC, forwardRef, Ref} from 'react'
import './Checkbox.scss'

interface ICheckboxProps {
  label: string
  ref: Ref<HTMLInputElement>
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  checked?: boolean
}

const Checkbox: FC<ICheckboxProps> = forwardRef<HTMLInputElement, ICheckboxProps>(
  (props: ICheckboxProps, ref) => {
    const {label, onChange, checked} = props

    return (
        <label className="checkbox">
          <input
              ref={ref}
              type="checkbox"
              onChange={() => onChange}
              defaultChecked={checked}
          />
          <span className="checkbox__label">{label}</span>
        </label>
    )
  }
)

Checkbox.displayName = 'Checkbox'

export default Checkbox
