import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

const Searchbar = () => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    alert(input)
  }

  return (
    <div className="w-full">
      <div className="w-full max-w-[630px] relative">
        <form onSubmit={handleSubmit}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="w-full bg-dark-second outline-none py-3 px-5 rounded-3xl text-dark-white"
          />
          <div className="absolute flex space-x-2 top-[50%] translate-y-[-50%] right-4">
            {input && (
              <AiOutlineClose
                onClick={() => setInput("")}
                size={24}
                className="text-dark-gray-second cursor-pointer"
              />
            )}
            <button type="submit">
              <AiOutlineSearch size={24} className="text-dark-link" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Searchbar;