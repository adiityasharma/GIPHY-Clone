import React, { useState } from 'react'
import { IoSearch } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';

function GifSearch() {

  const [query, setQuery] = useState("");

  const navigate = useNavigate()

  const searchGifs = async ()=>{
    if(query.trim() === ""){
      return;
    }
    
    navigate(`/search/${query}`);
    
  }


  return (
    <div className='flex items-center rounded overflow-hidden mt-3 mb-1 '>
      <input 
        type="text"
        value={query}
        onChange={(e)=> setQuery(e.target.value)}
        placeholder='Search all the Gifs and Stickers'
        className='w-full pl-4 pr-14 py-4 lg:text-2xl  text-black  bg-white outline-0 ' 
      />

      {
        query?(
          <div onClick={()=> setQuery("")} className='absolute rounded-full opacity-90 bg-gray-300 right-20 mr-5 text-xl p-1 hover:bg-gray-600 cursor-pointer '><RxCross2 /></div>
        ):""
      }

      <button onClick={searchGifs} className='cursor-pointer px-5 py-3 lg:py-4 bg-gradient-to-r from-violet-600 to-indigo-600  '><IoSearch size={32} /></button>
    </div>
  )
}

export default GifSearch
