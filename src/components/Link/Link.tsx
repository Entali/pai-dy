import {HTMLAttributes, ReactNode, FC} from 'react'
import './Link.scss'

interface ILinkProps extends HTMLAttributes<HTMLAnchorElement> {
  to: string
  target?: string
  role?: string
  children: ReactNode
}

const Link: FC<ILinkProps> = (props: ILinkProps) => {
  const {to, target, role, children} = props

  return (
      <a className="link" href={to} target={target} role={role}>
        {children}
      </a>
  )
}

export default Link
