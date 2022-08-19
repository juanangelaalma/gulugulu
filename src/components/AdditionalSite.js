import React from "react";

const AdditionalSite = ({ text, href }) => {
  const getAwesomeText = (str) => {
    if (str && str.includes("|")) {
      return str.split(" | ");
    } else if (str && str.includes("-")) {
      return str.split(" - ");
    } else {
      return str ? str.split("https://") : str;
    }
  };

  const newText = getAwesomeText(text);
  return (
    <div className="flex flex-col py-3 space-y-0 border-b border-b-[#3C4043] md:border-b-0">
      <div className="w-full flex flex-row items-center space-x-3">
        <h1 className="text-dark-link text-xl md:max-w-[70%] truncate">
          <a href={href}>{newText[0]}</a>
        </h1>
        <span className="hidden md:inline-block text-dark-gray text-xs">{getAwesomeText(newText[1]) && getAwesomeText(newText[1])[0]}</span>
      </div>
      {/* <p className="hidden md:block text-sm leading-[20px] text-dark-white">
        Nikmati video dan musik yang Anda suka, upload...
      </p> */}
    </div>
  );
};

export default AdditionalSite;
