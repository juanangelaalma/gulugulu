import React, { useContext, useEffect, useState } from "react";
import { stringToSlug } from "../utils";
import { Site } from "../components";
import { News, Images, Videos } from "../containers";
import { SearchContext } from "../context/SearchContext";
import fetcher from "../services/fetcher";
import { ResultTempContext } from "../context/ResultTempContext";
import { SiteLoader } from "../components/loaders";

const All = () => {
  const { search } = useContext(SearchContext);
  const { results, setResults } = useContext(ResultTempContext);
  const keyword = stringToSlug(search, "+");
  const [loading, isLoading] = useState(!results.all[keyword] && search);
  const [shiftedResults, setShiftedResults] = useState([]) 

  const searching = async () => {
    // cek apakah keyword sudah pernah dicari
    // mencari di temporary result
    if (keyword && !results.all[keyword]) {
      try {
        console.warn("fetching...");
        isLoading(true);
        // fetching data
        const response = await fetcher(`/search/q=${keyword}`);

        // memasukkan data ke dalam temporary state
        const newResults = {};
        newResults[keyword] = response.data;
        setResults({ ...results, all: { ...newResults } });
      } catch (err) {
        console.error(err);
      }
      isLoading(false);
    }
  };

  useEffect(() => {
    searching();
  }, [search]);

  useEffect(() => {
    if(results.all[keyword]) {
      setShiftedResults([...results.all[keyword].results])
    }
  }, [results])

  shiftedResults.shift();
  return (
    <div className="w-full space-y-12 pb-6 max-w-[630px]">
      {loading ? (
        <div className="space-y-8">
          <SiteLoader />
          <SiteLoader />
          <SiteLoader />
        </div>
      ) : (
        results.all[keyword] && (
          <div className="space-y-8">
            <Site {...results.all[keyword].results[0]} />
            <News />
            <Images />
            {shiftedResults.map((result, index) => (
              <Site key={index} {...result} />
              ))}
          </div>
        )
        )}
    </div>
  );
};

export default All;
