import React from 'react'
import { BsImages } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiVideo, BiNews } from 'react-icons/bi'

const Navbar = () => {
  return (
    <nav className='w-full'>
      <ul className='w-full flex space-x-6 overflow-x-auto'>
        <li className='text-dark-link border-b-2 border-dark-link cursor-pointer text-sm flex items-center space-x-1 pb-3'>
          <AiOutlineSearch /> <span>All</span>
        </li>
        <li className='text-dark-gray cursor-pointer text-sm flex items-center space-x-1 pb-3'>
          <BsImages /> <span>Images</span>
        </li>
        <li className='text-dark-gray cursor-pointer text-sm flex items-center space-x-1 pb-3'>
          <BiVideo /> <span>Videos</span>
        </li>
        <li className='text-dark-gray cursor-pointer text-sm flex items-center space-x-1 pb-3'>
          <BiNews /> <span>News</span>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar