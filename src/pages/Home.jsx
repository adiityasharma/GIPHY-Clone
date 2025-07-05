import React, { useEffect } from 'react'
import { GifState } from '../context/GifContext'

function Home() {

  const {gf, gifs, setGifs, filter} = GifState();

  const fetchTrendingGifs = async()=>{
    const {data} = await gf.trending(
      {
        limit:10,
        rating: "g",
        type: filter
      }
    )
    setGifs(data)
  }

  useEffect(()=>{
    fetchTrendingGifs();
  }, [filter])

  return (
    <div>
      
    </div>
  )
}

export default Home
