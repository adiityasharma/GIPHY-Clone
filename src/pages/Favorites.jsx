import React, { useEffect, useState } from "react";
import { GifState } from "../context/GifContext";
import Gif from "../components/Gif";

function Favorites() {
  const [favoriteGIFs, setFavoriteGIFs] = useState([]);

  const { gf, favorites } = GifState();

  const fetchFavoriteGifs = async () => {
    const { data: gifs } = await gf.gifs(favorites);

    setFavoriteGIFs(gifs);
  };

  useEffect(() => {
    fetchFavoriteGifs();
  }, []);

  return (
    <div className="mt-2">
      <h1 className="text-lg text-gray-400">My Favorites</h1>

      <div className="w-full my-4 columns-2 md:columns-3 lg:columns-4  ">
        {favoriteGIFs?.map((gif, idx) => {
          return <Gif gif={gif} key={idx} />;
        })}
      </div>
    </div>
  );
}

export default Favorites;
