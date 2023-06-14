import {FC} from 'react'
import './Button.scss'

interface IButtonProps {
  text: string
}

const Button: FC<IButtonProps> = (props: IButtonProps) => {
  const {text} = props


  return (
      <div className="button">
        <input type="submit" value={text}/>
      </div>
  )
}

export default Button
