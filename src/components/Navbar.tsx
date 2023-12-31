import React, { FC } from 'react'

interface NavbarProps {
  children: React.ReactNode
}

export const Navbar: FC<NavbarProps> = ({
  children
}) => {
  return (
    <div>{children}</div>
  )
}
