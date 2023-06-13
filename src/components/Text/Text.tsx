import React, {ReactNode} from 'react'
import './Text.scss'

type weightEnum = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800'

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
  size: number | string
  weight: weightEnum
}

const Text: React.FC<Props> = (props: Props) => {
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
