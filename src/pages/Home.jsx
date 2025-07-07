import React, { use, useEffect, useRef, useState } from 'react'
import { GifState } from '../context/GifContext'
import Gif from '../components/Gif';
import FilterGifs from '../components/FilterGifs';

function Home() {

  const {gf, gif, setGif, filter} = GifState();
  const [page, setPage] = useState(0)
  const loaderRef = useRef(null)
  const [gifLimit, setGifLimit] = useState(25)

  const fetchTrendingGifs = async()=>{
    const {data} = await gf.trending(
      {
        limit:gifLimit,
        rating: "g",
        type: filter,
        offset: page
      }
    )
    setGif(prev => [...prev, ...data])
  }

  useEffect(()=>{
    if(!loaderRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (enteries)=>{
        if(enteries[0].isIntersecting){
          setPage(prev => prev + gifLimit)
          console.log(page)
        }
      },
      {threshold: 0.5}
    ) 

    observer.observe(loaderRef.current);


    return ()=>{
      if(loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    }

  },[])
  

  useEffect(()=>{
    fetchTrendingGifs();
  }, [filter, page])

  
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

      <div ref={loaderRef} className=' text-center w-full p-10 text-2xl' >
        <p>Loading more...</p>
        {/* {loading && <p>Loading more...</p>} */}
      </div>

    </div>
  )
}

export default Home
