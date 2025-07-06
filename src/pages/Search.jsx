import React, { useEffect, useState } from "react";
import { GifState } from "../context/GifContext";
import { useParams } from "react-router-dom";
import Gif from "../components/Gif";
import FilterGifs from "../components/FilterGifs";

function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const { query } = useParams();

  const { gf, filter } = GifState();

  const fetchSearchResult = async () => {
    try {
      const { data } = await gf.search(query, {
        sort: "relevant",
        lg: "en",
        type: filter,
      });
      setSearchResult(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSearchResult();
  }, [query, filter]);

  // const

  return (
    <div className="mt-3">
      {
        searchResult.length!=0? (<h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">Results for: {query}</h1>) : ""
      }

      {
        searchResult.length != 0 ? (<FilterGifs alignLeft />) : ""
      }

      {
        searchResult.length != 0? (
          <div className="w-full my-4 columns-2 md:columns-3 lg:columns-4 ">
        {searchResult?.map((gif, idx) => {
          return <Gif gif={gif} key={idx} />;
        })}
      </div>
        ): (
          <h1 className="md:text-2xl mt-5" >No result found for <span className="text-red-700">{query}</span> try searching for relevant keywords.</h1>
        )
      }

      
    </div>
  );
}

export default Search;
