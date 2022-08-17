import React, { useEffect, useState } from 'react'
import {useLocation } from 'react-router-dom'
import { BsImages } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiVideo, BiNews } from 'react-icons/bi'
import NavLink from './NavLink'

const Navbar = () => {
  // get path with react router dom v6
  const [active, setActive] = useState('')
  const path = useLocation().pathname

  useEffect(() => {
    setActive(path)
  }, [path])

  return (
    <nav className='w-full'>
      <ul className='w-full flex space-x-6 overflow-x-auto'>
        <NavLink to="/" Icon={AiOutlineSearch} active={active} text="All" />
        <NavLink to="/images" Icon={BsImages} active={active} text="Images" />
        <NavLink to="/videos" Icon={BiVideo} active={active} text="Videos" />
        <NavLink to="/news" Icon={BiNews} active={active} text="News" />
      </ul>
    </nav>
  )
}

export default Navbar