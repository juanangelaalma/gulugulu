import React from 'react';
import Brand from '../components/Brand';
import Navbar from '../components/Navbar';
import Searchbar from '../components/Searchbar';
import { BsSun, BsMoon } from 'react-icons/bs'

const Header = () => {
  return (
    <div>
      <div className='flex space-x-2 w-full px-5 pt-8 pb-4 items-center'>
        <div className="w-[20%] md:w-[10%]">
          <Brand />
        </div>
        <div className='w-[70%] md:w-[70%]'>
        <Searchbar />
        </div>
        <div className='w-[8%] md:w-[20%] flex justify-end'>
          <BsSun className='text-dark-gray-second' size={30} />
          {/* <BsMoon size={30} /> */}
        </div>
      </div>
      <div className='px-5 md:pl-[12%] border-b border-dark-gray-second'>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
