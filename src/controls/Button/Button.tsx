import {FC} from 'react'
import './Button.scss'

interface IButtonProps {
  text: string
  onSubmit: () => void
}

const Button: FC<IButtonProps> = (props: IButtonProps) => {
  const {text, onSubmit} = props


  return (
      <div className="button">
        <input type="submit" value={text} onClick={onSubmit} />
      </div>
  )
}

export default Button
