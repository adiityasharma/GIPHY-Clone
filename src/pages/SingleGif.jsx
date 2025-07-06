import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { GifState } from "../context/GifContext";
import Gif from "../components/Gif";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import FollowOn from "../components/FollowOn";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaPaperPlane } from "react-icons/fa";

function SingleGif() {
  const contentType = ["gifs", "stickers", "texts"];

  const { type, slug } = useParams();
  const [gif, setGif] = useState();
  const [relatedGif, setRelatedGif] = useState([]);
  const [readMore, setReadMore] = useState(false);

  const { gf } = GifState();

  const fetchGif = async () => {
    const gifId = slug?.split("-");
    const { data } = await gf.gif(gifId[gifId.length - 1]);
    setGif(data);
    console.log(data);
  };

  const fetchRelatedGif = async () => {
    const gifId = slug.split("-");
    const { data } = await gf.related(gifId[gifId.length - 1]);
    setRelatedGif(data);
  };
  // console.log(relatedGif);

  useEffect(() => {
    if (!contentType.includes(type)) {
      throw new Error("Invalid content Type");
    }

    fetchGif();
    fetchRelatedGif();
  }, []);

  return (
    <div className="grid grid-cols-4 my-3 gap-4">
      <div className="hidden sm:block">
        {gif?.user && (
          <>
            <div className="flex gap-1">
              <img
                src={gif?.user?.avatar_url}
                alt={gif?.user?.display_name}
                className="w-12"
              />
              <div className="px-2 truncate">
                <div className="font-bold w-47 truncate ">
                  {gif?.user?.display_name}
                </div>
                <div className="faded-text">@{gif?.user?.username}</div>
              </div>
            </div>
            {gif?.user?.description ? (
              <div className="my-3 ">
                <h1 className="whitespace-pre-line">
                  {readMore
                    ? gif?.user?.description
                    : gif?.user?.description.slice(0, 60) + "..."}
                </h1>

                {gif?.user?.description.length > 60 ? (
                  readMore ? (
                    <button
                      onClick={() => setReadMore(!readMore)}
                      className="cursor-pointer flex items-center hover:text-white text-gray-400 font-bold gap-1"
                    >
                      Read less <IoMdArrowDropup />
                    </button>
                  ) : (
                    <button
                      onClick={() => setReadMore(!readMore)}
                      className="cursor-pointer flex items-center hover:text-white text-gray-400 font-bold gap-1"
                    >
                      Read more <IoMdArrowDropdown />
                    </button>
                  )
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}
          </>
        )}
        <FollowOn />
        <hr className="my-4 text-gray-500" />

        {gif?.source && (
          <div>
            <span className="faded-text">Source</span>
            <div className="flex items-center text-sm font-bold gap-1">
              <HiOutlineExternalLink size={25} />
              <a href={gif.source} target="_blank" className="truncate">
                {gif.source}
              </a>
            </div>
          </div>
        )}
      </div>

      <div className="col-span-4 sm:col-span-3">
        <div className="flex gap-6">
          <div className="w-full sm:w-3/4">
            {/* <div>{gif?.title}</div> */}
            <Gif gif={gif} hover={false} />

            {/* mobile ui */}

            <div className="flex sm:hidden gap-1 mb-3" >
              <img 
                src={gif?.user?.avatar_url} 
                alt={gif?.user?.display_name}
                className="w-10"
              />
              <div className="px-2">
                <div className="font-bold w-30 truncate">{gif?.user?.display_name}</div>
                <div className="faded-text">@{gif?.user?.username}</div>
              </div>

              <button 
                className="ml-auto" 
                // onClick={shareGif}
              >
                <FaPaperPlane size={25}/> 
              </button>
            </div>

          </div>
          favorites share embed
        </div>
        <div>
          <span className="font-extrabold text-2xl">Related GIFs</span>
        </div>
      </div>
    </div>
  );
}

export default SingleGif;
