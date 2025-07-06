import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GifState } from "../context/GifContext";
import Gif from "../components/Gif";
import FilterGifs from "../components/FilterGifs";

function Category() {
  const [result, setResult] = useState([]);

  const { category } = useParams();

  const { gf } = GifState();

  const fetchCategoryGifs = async () => {
    const { data } = await gf.gifs(category, category);

    setResult(data);

  };
  // console.log(result[0].title)

  useEffect(() => {
    fetchCategoryGifs();
  }, [category]);

  return (
    <div className="mt-3 ">
      <h1 className=" md:text-2xl font-semibold">Category: {category}</h1>

      {/* <FilterGifs alignLeft/> */}

      <div className="flex flex-col sm:flex-row my-4 sm:gap-4">
        {result.length > 0 && (
          <div className="sm:w-100 ">
            <Gif gif={result[0]} hover={false} />{" "}
            <span>Don't tell it to me, GIF to me!</span>
          </div>
        )}

        <div className="w-full  columns-2 md:columns-3 lg:columns-3  ">
          {result?.map((gif) => {
            return <Gif gif={gif} key={gif.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Category;
