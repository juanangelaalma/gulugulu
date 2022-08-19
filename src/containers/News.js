import React, { useContext, useEffect, useState } from "react";
import { BiNews } from "react-icons/bi";
import { NewsCard, ButtonMore } from "../components";
import { NewsLoader } from "../components/loaders";
import { ResultTempContext } from "../context/ResultTempContext";
import { SearchContext } from "../context/SearchContext";
import fetcher from "../services/fetcher";
import { stringToSlug } from "../utils";

const News = () => {
  const { search } = useContext(SearchContext);
  const { results, setResults } = useContext(ResultTempContext);
  const keyword = stringToSlug(search, "+");
  const [loading, isLoading] = useState(!results.all[keyword] && search);
  const [slicedResults, setSlicedResults] = useState([]);

  const getNews = async () => {
    try {
      if (keyword && !results.news[keyword]) {
        try {
          console.warn("fetching...");
          isLoading(true);
          // fetching data
          const response = await fetcher(`/news/q=${keyword}`);

          // memasukkan data ke dalam temporary state
          const newResults = {};
          newResults[keyword] = response.data;
          setResults({ ...results, news: { ...newResults } });
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
    getNews();
  }, [search]);

  useEffect(() => {
    if (results.news[keyword]) {
      setSlicedResults([...results.news[keyword].entries.slice(0, 4)]);
    }
  } , [results]);

  if(!loading && slicedResults.length < 1) {
    return null
  }

  return (
    <div className="w-full space-y-2 md:pb-6 md:border-b border-[#3C4043] md:relative">
      <div className="flex flex-row items-center space-x-2 text-xl text-dark-white">
        <BiNews />
        <h1>Berita utama</h1>
      </div>
      <div className="w-full overflow-auto scrollbar-hide">
        {loading ? (
          <div className="space-x-2 inline-flex md:flex md:space-x-0 md:flex-wrap">
            <NewsLoader />
            <NewsLoader />
            <NewsLoader />
            <NewsLoader />
          </div>
        ) : (
          <div className="space-x-2 inline-flex md:flex md:space-x-0 md:flex-wrap">
            {slicedResults.map((item, index) => (
              <NewsCard key={index} {...item} />
            ))}
          </div>
        )}
        <ButtonMore to="/news" text="Berita lainnya" />
      </div>
    </div>
  );
};

export default News;
