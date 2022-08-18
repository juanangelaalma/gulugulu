import React from "react";
import { BiNews } from 'react-icons/bi'
import { NewsCard, ButtonMore } from "../components";

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
        <ButtonMore to='/news' text='Berita lainnya' />
      </div>
    </div>
  );
};

export default News;
