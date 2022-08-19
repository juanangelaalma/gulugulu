import React, { useState } from "react";
import { BsImages } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { ButtonMore, Image } from "../components";

const Images = () => {
  const [index, setIndex] = useState(0);

  const increement = () => {
    if (index < 2) {
      setIndex(index + 1);
    }
  };

  const decreement = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="w-full relative space-y-2 md:pb-6 md:border-b border-[#3C4043]">
      <div className="flex flex-row items-center space-x-2 text-xl text-dark-white">
        <BsImages />
        <h1>Gambar untuk Juan Angela Alma</h1>
      </div>
      <div className="w-full overflow-auto scrollbar-hide">
        <button onClick={() => decreement()} className="hidden md:flex absolute bg-dark-second text-dark-gray hover:text-dark-white rounded-full h-[40px] w-[40px] justify-center items-center top-[50%] translate-y-[-55%] left-[-20px] z-10">
          <IoIosArrowBack size={24} />
        </button>
        <button onClick={() => increement()} className="hidden md:flex absolute bg-dark-second text-dark-gray hover:text-dark-white rounded-full h-[40px] w-[40px] justify-center items-center top-[50%] translate-y-[-55%] right-[-20px] z-10">
          <IoIosArrowForward size={24} />
        </button>
        <div className="mb-8 md:mb-2 max-h-[278px] overflow-y-hidden scrollbar-hide">
          <div
            style={{ transform: `translateX(-${index * 70}%)` }}
            className={`flex flex-wrap justify-center w-auto lg:flex-nowrap lg:block lg:whitespace-nowrap transition-transform duration-700`}
          >
            <div className="h-[124px] w-[124px] overflow-hidden mr-2 my-[8px] lg:w-auto lg:inline-block">
              <Image url="https://i.ytimg.com/vi/YAC2wGZT21Y/mqdefault.jpg" />
            </div>
            <div className="h-[124px] w-[124px] overflow-hidden mr-2 my-[8px] lg:w-auto lg:inline-block">
              <Image url="https://miro.medium.com/max/1400/1*oP0Fv_6cDkUCWdz4QaRP3w.jpeg" />
            </div>
            <div className="h-[124px] w-[124px] overflow-hidden mr-2 my-[8px] lg:w-auto lg:inline-block">
              <Image url="https://miro.medium.com/fit/c/176/176/1*KKrnmltlps00XKWPppdXTg.jpeg" />
            </div>
            <div className="h-[124px] w-[124px] overflow-hidden mr-2 my-[8px] lg:w-auto lg:inline-block">
              <Image url="https://miro.medium.com/fit/c/176/176/1*KKrnmltlps00XKWPppdXTg.jpeg" />
            </div>
            <div className="h-[124px] w-[124px] overflow-hidden mr-2 my-[8px] lg:w-auto lg:inline-block">
              <Image url="https://miro.medium.com/fit/c/176/176/1*KKrnmltlps00XKWPppdXTg.jpeg" />
            </div>
            <div className="h-[124px] w-[124px] overflow-hidden mr-2 my-[8px] lg:w-auto lg:inline-block">
              <Image url="https://miro.medium.com/fit/c/176/176/1*KKrnmltlps00XKWPppdXTg.jpeg" />
            </div>
            <div className="h-[124px] w-[124px] overflow-hidden mr-2 my-[8px] lg:w-auto lg:inline-block">
              <Image url="https://miro.medium.com/fit/c/176/176/1*KKrnmltlps00XKWPppdXTg.jpeg" />
            </div>
            <div className="h-[124px] w-[124px] overflow-hidden mr-2 my-[8px] lg:w-auto lg:inline-block">
              <Image url="https://miro.medium.com/fit/c/176/176/1*KKrnmltlps00XKWPppdXTg.jpeg" />
            </div>
            <div className="h-[124px] w-[124px] overflow-hidden mr-2 my-[8px] lg:w-auto lg:inline-block">
              <Image url="https://miro.medium.com/fit/c/176/176/1*KKrnmltlps00XKWPppdXTg.jpeg" />
            </div>
            <div className="h-[124px] w-[124px] overflow-hidden mr-2 my-[8px] lg:w-auto lg:inline-block">
              <Image url="https://miro.medium.com/fit/c/176/176/1*KKrnmltlps00XKWPppdXTg.jpeg" />
            </div>
          </div>
        </div>
        <ButtonMore
          to="/images"
          text="Tampilkan semua gambar"
          phoneIsHidden={true}
        />
      </div>
    </div>
  );
};

export default Images;
