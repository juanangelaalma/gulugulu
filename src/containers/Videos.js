import React from "react";
import { BiVideo } from 'react-icons/bi'
import { Video } from '../components'

const Videos = () => {
  return (
    <div className="w-full relative space-y-2 md:pb-6 md:border-b dark:border-[#3C4043]">
      <div className="flex flex-row items-center space-x-2 text-xl dark:text-dark-white">
        <BiVideo />
        <h1>Video</h1>
      </div>
      <div className="flex flex-col w-full">
        <Video />
      </div>
    </div>
  );
};

export default Videos;
