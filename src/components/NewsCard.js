import React from "react";

const NewsCard = () => {
  return (
    <div className="w-[232px] h-[290px] md:w-[50%] md:h-[143px] border border-[#3C4043] rounded-xl overflow-hidden md:flex md:flex-row-reverse md:border-b-0 md:border-x-0 md:rounded-none md:justify-between md:items-center md:pr-2">
      <div className="w-full h-[45%] md:h-[92px] md:w-[92px] md:rounded-xl md:overflow-hidden">
        <img
          src="https://media.suara.com/pictures/653x366/2022/08/17/89543-ilustrasi-youtube-cara-convert-youtube-ke-mp3-freepik.jpg"
          className="w-full h-full object-cover object-center"
          alt=""
        />
      </div>
      <div className="flex flex-col p-3 justify-between h-[55%] md:h-[100%] md:w-[60%] md:items-start">
        <div className="flex flex-col justify-start space-y-1">
          <a className="text-xs text-dark-white">Suara.com</a>
          <h6 className="text-lg text-dark-link leading-[20px] md:text-base md:leading-5">
            4 Cara convert lagu ke mp3: coba MP3 Juice Hingga ALSND
          </h6>
        </div>
        <span className="text-xs text-dark-gray">6 jam yang lalu</span>
      </div>
    </div>
  );
};

export default NewsCard;
