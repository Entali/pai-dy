import {FC} from 'react'
import './Checkbox.scss'

interface ICheckboxProps {
  label: string
  onChange: () => void
  checked?: boolean
}

const Checkbox: FC<ICheckboxProps> = (props: ICheckboxProps) => {
  const {label, onChange, checked} = props

  return (
      <label className="checkbox">
        <input type="checkbox" onChange={onChange} defaultChecked={checked}/>
        <span className="checkbox__label">{label}</span>
      </label>
  )
}

export default Checkbox
