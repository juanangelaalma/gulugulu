import React, { useContext, useEffect, useState } from "react";
import { BsImages } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { ButtonMore, Image } from "../components";
import { ResultTempContext } from "../context/ResultTempContext";
import { SearchContext } from "../context/SearchContext";
import fetcher from "../services/fetcher";
import { stringToSlug } from "../utils";

const Images = () => {
  const [index, setIndex] = useState(0);

  const { search } = useContext(SearchContext);
  const { results, setResults } = useContext(ResultTempContext);
  const keyword = stringToSlug(search, "+");
  const [loading, isLoading] = useState(!results.all[keyword] && search);
  const [slicedResults, setSlicedResults] = useState([]);

  const getImages = async () => {
    try {
      if (keyword && !results.images[keyword]) {
        try {
          console.warn("fetching...");
          isLoading(true);
          // fetching data
          const response = await fetcher(`/image/q=${keyword}`);

          // memasukkan data ke dalam temporary state
          const newResults = {};
          newResults[keyword] = response.data;
          setResults({ ...results, images: { ...newResults } });
        } catch (err) {
          console.error(err);
        }
      }
    } catch (err) {
      console.error(err.message);
    }
    isLoading(false);
  };

  useEffect(() => {
    getImages();
  }, [search]);

  useEffect(() => {
    if (results.images[keyword]) {
      setSlicedResults([...results.images[keyword].image_results.slice(0, 10)]);
    }
  }, [results]);

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

  if(!loading && slicedResults.length < 1) {
    return null
  }

  return (
    <div className="w-full relative space-y-2 md:pb-6 md:border-b border-[#3C4043]">
      <div className="flex flex-row items-center space-x-2 text-xl text-dark-white">
        <BsImages />
        <h1>Gambar untuk {search}</h1>
      </div>
      <div className="w-full overflow-auto scrollbar-hide">
        <button
          onClick={() => decreement()}
          className="hidden md:flex absolute bg-dark-second text-dark-gray hover:text-dark-white rounded-full h-[40px] w-[40px] justify-center items-center top-[50%] translate-y-[-55%] left-[-20px] z-10"
        >
          <IoIosArrowBack size={24} />
        </button>
        <button
          onClick={() => increement()}
          className="hidden md:flex absolute bg-dark-second text-dark-gray hover:text-dark-white rounded-full h-[40px] w-[40px] justify-center items-center top-[50%] translate-y-[-55%] right-[-20px] z-10"
        >
          <IoIosArrowForward size={24} />
        </button>
        <div className="mb-8 md:mb-2 max-h-[278px] overflow-y-hidden scrollbar-hide">
          {loading ? (
            <div
              className={`flex flex-wrap justify-center w-auto lg:flex-nowrap lg:block lg:whitespace-nowrap transition-transform duration-700`}
            >
              <div className="h-[124px] w-[124px] mr-2 my-[8px] lg:max-w-[220px] lg:inline-block bg-dark-gray animate-pulse"></div>
              <div className="h-[124px] w-[124px] mr-2 my-[8px] lg:max-w-[220px] lg:inline-block bg-dark-gray animate-pulse"></div>
              <div className="h-[124px] w-[124px] mr-2 my-[8px] lg:max-w-[220px] lg:inline-block bg-dark-gray animate-pulse"></div>
              <div className="h-[124px] w-[124px] mr-2 my-[8px] lg:max-w-[220px] lg:inline-block bg-dark-gray animate-pulse"></div>
              <div className="h-[124px] w-[124px] mr-2 my-[8px] lg:max-w-[220px] lg:inline-block bg-dark-gray animate-pulse"></div>
            </div>
          ) : (
            <div
              style={{ transform: `translateX(-${index * 70}%)` }}
              className={`flex flex-wrap justify-center w-auto lg:flex-nowrap lg:block lg:whitespace-nowrap transition-transform duration-700`}
            >
              {slicedResults.map((result, index) => (
                <div
                  key={index}
                  className="h-[124px] w-[124px] overflow-hidden mr-2 my-[8px] lg:w-auto lg:max-w-[220px] lg:inline-block"
                >
                  <Image url={result.image.src} />
                </div>
              ))}
            </div>
          )}
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
