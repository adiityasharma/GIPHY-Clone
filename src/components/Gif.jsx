import React from 'react'
import { Link } from 'react-router-dom'

function Gif(gif, hover=true) {


  return (
    
    <Link to={`${gif?.gif.type}/${gif?.gif.slug}`}>
      <div className={` mb-5 relative cursor-pointer lg:w-[${gif?.gif?.images?.fixed_width.width}px] group aspect-video`}>
        <img 
          src={gif?.gif?.images?.fixed_width.webp} 
          alt={gif?.gif?.title} 
          className='w-full object-cover rounded transition-all duration-300'
        />

        {
          hover && (
            <div className='absolute inset-0 rounded opacity-0 group-hover:opacity-100 bg-gradient-to-b from-transparent via-transparent to-black font-bold flex items-end gap-3 px-4 py-5 text-white '>
              <img 
                src={gif?.gif?.user?.avatar_url} 
                alt={gif?.gif?.user?.username}
                className='h-8' 
              />
              <p className='text'>{gif?.gif?.user?.display_name}</p>
            </div>
          )
        }
      </div>
    </Link>
    
  )
}

export default Gif
