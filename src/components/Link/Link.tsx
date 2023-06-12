import React, {ReactNode} from 'react'
import './Link.scss'

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
  to: string
  target?: string
  role?: string
  children: ReactNode
}

const Link: React.FC<Props> = (props: Props) => {
  const {to, target, role, children} = props

  return (
      <a className="link" href={to} target={target} role={role}>
        {children}
      </a>
  )
}

export default Link
