import {HTMLAttributes, FC, ReactNode} from 'react'
import './Text.scss'

type weightEnum = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800'

interface ITextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
  size: number | string
  weight: weightEnum
}

const Text: FC<ITextProps> = (props: ITextProps) => {
  const {children, size, weight} = props

  return (
      <p className="text" style={{
        fontSize: size,
        fontWeight: weight
      }}>
        {children}
      </p>
  )
}

export default Text;
