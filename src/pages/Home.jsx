import React, { useEffect } from 'react'
import { GifState } from '../context/GifContext'
import Gif from '../components/Gif';
import FilterGifs from '../components/FilterGifs';

function Home() {

  const {gf, gif, setGif, filter} = GifState();

  const fetchTrendingGifs = async()=>{
    const {data} = await gf.trending(
      {
        
        rating: "g",
        type: filter
      }
    )
    setGif(data)
  }

  useEffect(()=>{
    fetchTrendingGifs();
  }, [filter])
  // console.log(gif)
  return (
    <div className='w-full py-2'>
      <div className='w-full '>
        <img className='w-full rounded' src="src/assets/imgi_75_200.gif" alt="" />
      </div>

      <FilterGifs alignLeft showTrending />

      <div className='w-full my-4 columns-2 md:columns-3 lg:columns-4  '>
        {
          gif.map((gif, idx)=>{
            return <Gif gif={gif} key={idx} />
          })
        }
      </div>

    </div>
  )
}

export default Home
