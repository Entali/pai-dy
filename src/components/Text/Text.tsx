import {HTMLAttributes, FC, ReactNode} from 'react'
import './Text.scss'

type weightEnum = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800'
type alignEnum = 'left' | 'center' | 'right'

interface ITextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
  size: number | string
  weight: weightEnum
  align?: alignEnum
  inline?: boolean
}

const Text: FC<ITextProps> = (props: ITextProps) => {
  const {children, size, weight, align, inline} = props

  const cls = "text"
  const style = {
    fontSize: size,
    fontWeight: weight,
    textAlign: align || 'left'
  }

  return (
      <>
        {inline ? (
            <span className={cls} style={style}>{children}</span>
        ) : (
            <p className={cls} style={style}>{children}</p>
        )}
      </>
  )
}

export default Text;
