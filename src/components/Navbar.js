import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { BsImages } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiVideo, BiNews } from 'react-icons/bi'

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
        <Link to="/" className={`${active === '/' ? 'text-dark-link border-b-2 border-dark-link' : 'text-dark-gray' } cursor-pointer text-sm flex items-center space-x-1 pb-3`}>
          <AiOutlineSearch /> <span>All</span>
        </Link>
        <Link to="/images" className={`${active === '/images' ? 'text-dark-link border-b-2 border-dark-link' : 'text-dark-gray' } cursor-pointer text-sm flex items-center space-x-1 pb-3`}>
          <BsImages /> <span>Images</span>
        </Link>
        <Link to="/videos" className={`${active === '/videos' ? 'text-dark-link border-b-2 border-dark-link' : 'text-dark-gray' } cursor-pointer text-sm flex items-center space-x-1 pb-3`}>
          <BiVideo /> <span>Videos</span>
        </Link>
        <Link to="/news" className={`${active === '/news' ? 'text-dark-link border-b-2 border-dark-link' : 'text-dark-gray' } cursor-pointer text-sm flex items-center space-x-1 pb-3`}>
          <BiNews /> <span>News</span>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar