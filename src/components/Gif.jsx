import React from 'react'
import { Link } from 'react-router-dom'

function Gif(gif, hover=true) {

  const gifData = gif.gif

  return (
    
    <Link to={`/${gifData?.type}s/${gifData?.slug}`}>
      <div className={` mb-5 relative cursor-pointer lg:w-[${gifData?.images?.fixed_width.width}px] group aspect-video`}>
        <img 
          src={gifData?.images?.fixed_width.webp} 
          alt={gifData?.title} 
          className='w-full object-cover rounded-xl transition-all duration-300'
        />

        {
          hover && (
            <div className='absolute inset-0 rounded opacity-0 group-hover:opacity-100 bg-gradient-to-b from-transparent via-transparent to-black font-bold flex items-end gap-3 px-4 py-5 text-white '>
              <img 
                src={gifData?.user?.avatar_url} 
                alt={gifData?.user?.username}
                className='h-8' 
              />
              <p className='text'>{gifData?.user?.display_name}</p>
            </div>
          )
        }
      </div>
    </Link>
    
  )
}

export default Gif
