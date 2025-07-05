import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);

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
          <Link className="px-3 hover:bg-gradient-to-r from-violet-600 to-indigo-600 py-2 font-semibold ">
            Reactoions
          </Link>
          <Link className="px-3 hover:bg-gradient-to-r from-violet-600 to-indigo-600 py-2 font-semibold ">
            Entertainment
          </Link>
          <Link className="px-3 hover:bg-gradient-to-r from-violet-600 to-indigo-600 py-2 font-semibold ">
            Sports
          </Link>
          <Link className="px-3 hover:bg-gradient-to-r from-violet-600 to-indigo-600 py-2 font-semibold ">
            Stickers
          </Link>
          <Link className="px-3 hover:bg-gradient-to-r from-violet-600 to-indigo-600 py-2 font-semibold ">
            Artists
          </Link>
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

        <div className="flex gap-0 items-center ">
          <div className="flex items-center cursor-pointer">
            <Link to="/favorites"><FaRegHeart size={25} /></Link>
          </div>

          <div onClick={()=> setShowCategories(!showCategories)} className={`block lg:hidden px-3 py-2 cursor-pointer ${showCategories?"text-green-400 ":""}`}>
            <CgMenuRight size={25} />
          </div>
        </div>
      </div>

      {showCategories&& (
        <div className="absolute w-full mt-1 h-90 bg-gradient-to-r from-pink-400 to-violet-600 z-10">
          hiu
        </div>
      )}

    </nav>
  );
}

export default Header;
