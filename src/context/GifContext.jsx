import { GiphyFetch } from "@giphy/js-fetch-api";
import { Children, createContext, useContext, useEffect, useState } from "react";

const GifContext = createContext();

const GifProvider = ({ children }) => {

  const [gif, setGif] = useState([]);
  const [filter, setFilter] = useState("gifs")
  const [favorites, setFavorites] = useState([])

  const addToFavorite = (id)=>{
    if(favorites.includes(id)){
      const updatedFavorites = favorites.filter((itemId)=> itemId !== id);
      localStorage.setItem("favoritesGIFs", JSON.stringify(updatedFavorites))
      setFavorites(updatedFavorites)
    }
    else{
      const updatedFavorites = [...favorites];
      updatedFavorites.push(id);
      localStorage.setItem("favoritesGIFs", JSON.stringify(updatedFavorites))
      setFavorites(updatedFavorites)
    }
    
  }

  useEffect(()=>{
    const favorites = JSON.parse(localStorage.getItem("favoritesGIFs")) || []
    setFavorites(favorites)
  },[])

  const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_API_KEY);

  return <GifContext.Provider value={{ gf, gif, setGif, filter, setFilter, favorites, addToFavorite }}>{children}</GifContext.Provider>;
};

export const GifState = () => {
  return useContext(GifContext);
};

export default GifProvider;
