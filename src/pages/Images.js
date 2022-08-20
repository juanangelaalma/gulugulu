import React, { useContext, useEffect, useState } from "react";
import { ImagesLoader } from "../components/loaders";
import { ResultTempContext } from "../context/ResultTempContext";
import { SearchContext } from "../context/SearchContext";
import fetcher from "../services/fetcher";
import { stringToSlug } from "../utils";
import getDomainName from "../utils/getDomainName";

const Images = () => {
  const { search } = useContext(SearchContext);
  const { results, setResults } = useContext(ResultTempContext);
  const keyword = stringToSlug(search, "+");
  const [loading, isLoading] = useState(!results.images[keyword] && search);

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
    window.scrollTo(0, 0);
  }, [])

  const getBrandName = (src) => {
    const newSrc = src.includes('...') ? src.split("...") : src.split("   ");
    if(newSrc.length > 1 ) {
      if(newSrc[1].split(".").length > 2) {
        return newSrc[1].split(".")[1];
      }
      return newSrc[1].split(".")[0];
    }
    return src;
  };

  if (loading) {
    return (
      <ImagesLoader />
    );
  }

  return (
    results.images[keyword] && (
      <div className="columns-2 md:columns-3 lg:columns-4 leading-[0] gap-[20px] space-y-3 py-4 px-5">
        {results.images[keyword].image_results.map((image, index) => (
          <div className="w-full max-h-full overflow-x-hidden" key={index}>
            <img
              className="w-full h-auto rounded-xl"
              src={image.image.src}
              alt={image.image.alt}
            />
            <h5 className="text-xs truncate text-dark-white mt-2">
              {image.link.title}
            </h5>
            <h6 className="text-dark-gray text-xs truncate mt-0 capitalize">
              {getBrandName(image.link.domain)}
            </h6>
          </div>
        ))}
      </div>
    )
  );
};

export default Images;
