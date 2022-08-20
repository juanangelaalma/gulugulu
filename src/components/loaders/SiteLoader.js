import React from "react"

const SiteLoader = () => {
  return <div>
      <div className="w-full flex flex-col pb-3 space-y-2 border-b border-b-[#EBEBEB] dark:border-b-[#3C4043] md:border-b-0">
        <div className="animate-pulse w-full md:w-1/3 rounded-sm h-5 bg-second dark:bg-dark-gray"></div>
        <div className="animate-pulse w-full md:w-2/3 rounded-sm h-6 bg-second dark:bg-dark-gray"></div>
        <div className="animate-pulse w-full rounded-sm h-16 bg-second dark:bg-dark-gray"></div>
      </div>
    </div>
}

export default SiteLoader