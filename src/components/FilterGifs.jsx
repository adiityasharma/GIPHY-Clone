import React from "react";
import { GifState } from "../context/GifContext";
import { HiTrendingUp } from "react-icons/hi";

const filters = [
  {
    title: "Gifs",
    value: "gifs",
    background:
      "bg-gradient-to-r from-violet-600 to-indigo-600",
  },
  {
    title: "Stickers",
    value: "stickers",
    background:
      "bg-gradient-to-r from-violet-600 to-indigo-600",
  },
  {
    title: "Text",
    value: "text",
    background:
      "bg-gradient-to-r from-violet-600 to-indigo-600",
  },
];

function FilterGifs({ alignLeft = false, showTrending = false }) {
  const { filter, setFilter } = GifState();

  return (
    <div
      className={`flex my-4 gap-3 ${alignLeft ? "" : "justify-end"} ${
        showTrending
          ? "justify-between flex-col sm:flex-row sm:items-center"
          : ""
      }`}
    >
      {showTrending && (
        <span className="flex gap-2">
          {showTrending && <HiTrendingUp size={25} className="text-teal-400" />}
          <span className="font-semibold text-gray-500">Trending</span>
        </span>
      )}

      <div className="bg-gray-700 flex justify-between items-center sm:min-w-70  rounded-full">
        {filters.map((f, i) => {
          return <span 
            key={i}
            onClick={()=> setFilter(f.value)}
            className={` ${filter == f.value ? f.background : ""} font-semibold py-2 w-1/3 text-center rounded-full cursor-pointer px-3 `} 
            >
              {f.title}
          </span>;
        })}
      </div>
    </div>
  );
}

export default FilterGifs;
