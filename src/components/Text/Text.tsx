import React, {ReactNode} from 'react'
import './Text.scss'

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
}

const Text: React.FC<Props> = (props: Props) => {
  const {children} = props

  return (
      <p className="text">{children}</p>
  )
}

export default Text;
