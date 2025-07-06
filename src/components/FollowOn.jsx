import React from 'react'
import { FaXTwitter } from 'react-icons/fa6'

function FollowOn() {
  return (
    <div className='faded-text pt-2'>
      <span>Follow on:</span>
      <div className='flex gap-4 pt-3'>
        <a href="http://x.com/adityasharma_16" target="_blank" > <FaXTwitter size={20}/> </a>
      </div>
    </div>
  )
}

export default FollowOn
