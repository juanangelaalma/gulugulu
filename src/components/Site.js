import React, { useContext } from "react";
import getDomainName from "../utils/getDomainName";
import AdditionalSite from "./AdditionalSite";
import { SearchContext } from "../context/SearchContext";

const Site = ({ cite, additional_links, link, title, description }) => {
  const { search, setSearch } = useContext(SearchContext);
  const handleSetSearchOther = () => {
    const domainName = getDomainName(link);
    if (!search.includes(domainName)) {
      setSearch(`${search} site:${domainName}`);
    }
  };

  return (
    <div>
      <div className="flex flex-col pb-3 space-y-1 border-b border-b-[#3C4043] md:border-b-0">
        <div className="text-dark-white text-xs md:text-sm font-normal">
          <a href={link}>{getDomainName(link)}</a>
          <span className="text-dark-gray"> {cite?.span} </span>
        </div>
        <h1 className="text-dark-link text-xl">
          <a href={link}>{title}</a>
        </h1>
        <p className="text-sm leading-[20px] text-dark-white">{description}</p>
      </div>
      <div className="flex flex-col md:pl-4">
        {additional_links &&
          additional_links.slice(0,5).map((link, index) => (
            (link.text && link.text != 'Översätt den här sidan') && (<AdditionalSite key={index} {...link} />)
          ))}
        <div>
          <button
            onClick={handleSetSearchOther}
            className="hidden md:block text-xs text-dark-link"
          >
            Telusuran lainnya dari {getDomainName(link)} »
          </button>
        </div>
      </div>
    </div>
  );
};

export default Site;
