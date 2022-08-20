import React from "react";
import { BsArrowRightShort } from 'react-icons/bs'
import { Link } from "react-router-dom";

const ButtonMore = ({ to, text, phoneIsHidden=false }) => {
  return (
    <div className={`${phoneIsHidden ? 'block' : 'hidden '}md:block absolute left-1/2 translate-x-[-50%] bottom-[-18px]`}>
      <Link to={to} className="bg-second dark:bg-dark-second h-[36px] px-20 text-gray dark:text-dark-white text-sm rounded-full flex items-center">
        <span className="truncate">{text}</span>
        <BsArrowRightShort size={24} />
      </Link>
    </div>
  );
};

export default ButtonMore;
