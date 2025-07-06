import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GifState } from "../context/GifContext";
import Gif from "../components/Gif";
import FilterGifs from "../components/FilterGifs";
import FollowOn from "../components/FollowOn";

function Category() {
  const [result, setResult] = useState([]);

  const { category } = useParams();

  const { gf } = GifState();

  const fetchCategoryGifs = async () => {
    const { data } = await gf.gifs(category, category);

    setResult(data);
  };
  // console.log(result)

  useEffect(() => {
    fetchCategoryGifs();
  }, [category]);

  return (
    <div className="mt-3 ">
      {/* <FilterGifs alignLeft/> */}

      <div className="flex flex-col sm:flex-row my-4 sm:gap-4">
        {result.length > 0 && (
          <div className="sm:w-100 ">
            <Gif gif={result[0]} hover={false} />{" "}
            <span>Don't tell it to me, GIF to me!</span>
            <FollowOn />
            <hr className="mt-3 text-gray-400" />
          </div>
        )}

        <div className="w-full my-3 sm:mb-0">
          <h1 className=" md:text-2xl font-semibold capitalize">
            {category.split("-").join(" & ")} GIFs
          </h1>
          <h1 className="text-lg w-auto text-gray-500 mb-3">@{category}</h1>
          <div className="w-full columns-2 md:columns-3 lg:columns-3 ">
            {result?.slice(1).map((gif) => {
              return <Gif gif={gif} key={gif.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
