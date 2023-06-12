import React, { ReactNode } from 'react'
import './Title.scss'

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  level: number
  children: ReactNode
}

const Title: React.FC<Props> = (props: Props) => {
  const { level, children } = props
  const cls = `title title_h${level}`

  return (
      <>
        {level === 1 && <h1 className={cls}>{children}</h1>}
        {level === 2 && <h2 className={cls}>{children}</h2>}
        {level === 3 && <h3 className={cls}>{children}</h3>}
        {level === 4 && <h4 className={cls}>{children}</h4>}
        {level === 5 && <h5 className={cls}>{children}</h5>}
        {level === 6 && <h6 className={cls}>{children}</h6>}
      </>
  )
}

export default Title
