import {FC} from 'react'
import './Checkbox.scss'

interface CheckboxProps {
  label: string
  onChange: () => void
}

const Checkbox: FC<CheckboxProps> = (props: CheckboxProps) => {
  const {label, onChange} = props

  return (
      <label className="checkbox">
        <input type="checkbox" onChange={onChange}/>
        <span className="checkbox__label">{label}</span>
      </label>
  )
}

export default Checkbox
