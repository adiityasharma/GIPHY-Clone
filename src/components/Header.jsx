import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GifState } from "../context/GifContext";
import GifSearch from "./GifSearch";

function Header() {
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);

  const {gf, favorites } = GifState();

  const fetchGifCategories = async ()=>{
    const {data} = await gf.categories();
    setCategories(data)
  }
  
  useEffect(()=>{
    fetchGifCategories()
  }, [])

  return (
    <nav className="relative">
      <div className="flex gap-5 justify-between">
        <Link className="flex gap-2" to="/">
          <img className="w-8" src="src/assets/download.svg" alt="" />
          <h1 className="font-extrabold tracking-tighter cursor-pointer text-5xl">
            GIPHY
          </h1>
        </Link>

        <div className="gap-2 items-center hidden lg:flex">
          {
            categories?.slice(0,5).map((category, idx)=>(
              <Link to={category.name_encoded} key={idx} className="px-3 hover:bg-gradient-to-r from-violet-600 to-indigo-600 py-2 font-semibold ">
                {category.name}
              </Link>
            ))
          }
  
          <button
            onClick={() => setShowCategories(!showCategories)}
            className={`cursor-pointer px-3 hover:bg-gradient-to-r from-violet-600 to-indigo-600 py-3 font-semibold  ${
              showCategories
                ? "bg-gradient-to-r from-violet-600 to-indigo-600"
                : ""
            }`}
          >
            <BsThreeDotsVertical />
          </button>
        </div>

        <div className={`${favorites.length!=0?"flex":"hidden"} gap-0 items-center`}>
          <div className={`flex items-center cursor-pointer`}>
            <Link to="/favorites"><FaRegHeart size={25} /></Link>
          </div>

          <div onClick={()=> setShowCategories(!showCategories)} className={`block lg:hidden px-3 py-2 cursor-pointer ${showCategories?"text-green-400 ":""}`}>
            <CgMenuRight size={25} />
          </div>
        </div>
      </div>

      <div>
        <GifSearch/>
      </div>

      {showCategories&& (
        <div className="absolute w-full mt-2 rounded shadow-2xl bg-gradient-to-r from-pink-400 to-violet-600 z-10">
          <p className="text-3xl font-bold p-3">Categories</p>
          <hr />
          <div className="p-3 grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 ">
            {
              categories?.map((category, idx)=>(
                 <Link className="" to={category.name_encoded} key={idx}>
                    {category.name}
                 </Link>
              ))
            }
          </div>
        </div>
      )}

    </nav>
  );
}

export default Header;
