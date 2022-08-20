import React from 'react'
import { Link } from 'react-router-dom'

const NavLink = ({ to, active, Icon, text }) => {
  return (
    <Link to={to} className={`${active === to ? 'text-link dark:text-dark-link border-b-2 border-link dark:border-dark-link' : 'text-gray dark:text-dark-gray' } cursor-pointer text-sm flex items-center space-x-1 pb-3`}>
        <Icon /> <span>{text}</span>
    </Link>
  )
}

export default NavLink