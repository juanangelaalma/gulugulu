import React from "react";
import { BsArrowRightShort } from 'react-icons/bs'
import { BiNews } from 'react-icons/bi'
import { NewsCard } from "../components";

const News = () => {
  return (
    <div className="w-full space-y-2 md:pb-6 md:border-b border-[#3C4043] md:relative">
      <div className="flex flex-row items-center space-x-2 text-xl text-dark-white">
        <BiNews />
        <h1>Berita utama</h1>
      </div>
      <div className="w-full overflow-auto scrollbar-hide">
        <div className="space-x-2 inline-flex md:flex md:space-x-0 md:flex-wrap">
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
      <div className="hidden md:block absolute left-1/2 translate-x-[-50%] bottom-[-18px]">
        <button className="bg-dark-second h-[36px] px-20 text-dark-white text-sm rounded-full flex items-center">
          <span>Berita lainnya</span>
          <BsArrowRightShort size={24} />
        </button>
      </div>
    </div>
  );
};

export default News;
