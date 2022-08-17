import React from "react";
import AdditionalSite from "./AdditionalSite";

const Site = () => {
  return (
    <div>
      <div className="flex flex-col pb-3 space-y-1 border-b border-b-[#3C4043] md:border-b-0">
        <div className="text-dark-white text-xs md:text-sm font-normal">
          <a href="">https://www.youtube.com</a>
          <span className="text-dark-gray"> {">"} ... </span>
        </div>
        <h1 className="text-dark-link text-xl">
          <a href="">You Tube</a>
        </h1>
        <p className="text-sm leading-[20px] text-dark-white">
          Nikmati video dan musik yang Anda suka, upload konten asli, dan
          bagikan kepada teman, keluarga, dan dunia di YouTube.
        </p>
      </div>
      <div className="flex flex-col md:pl-4">
        <AdditionalSite />
        <AdditionalSite />
        <AdditionalSite />
        <div>
          <a href="" className="hidden md:block text-xs text-dark-link">Telusuran lainnya dari youtube.com »</a>
        </div>
      </div>
    </div>
  );
};

export default Site;
