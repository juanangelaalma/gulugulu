import React from "react";

const Video = () => {
  return (
    <div className="flex flex-row">
      <div className="w-[45%] h-[76px] border dark:border-dark-white">
        <video width="320" height="240">
          <source src="https://www.youtube.com/watch?v=V7J9aMy_CFk" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Video;
