import React from 'react'
import { Link } from 'react-router-dom'

const NavLink = ({ to, active, Icon, text }) => {
  return (
    <Link to={to} className={`${active === to ? 'text-dark-link border-b-2 border-dark-link' : 'text-dark-gray' } cursor-pointer text-sm flex items-center space-x-1 pb-3`}>
        <Icon /> <span>{text}</span>
    </Link>
  )
}

export default NavLink