import React from 'react'

const PostSkeleton = () => {
  return (
    <div>
        <div className='animate-pulse flex flex-col gap-5'>
            <div className='h-20 bg-gray-300 w-1/2 mx-auto' />
            <div className='h-56 bg-gray-300 w-1/2 mx-auto' />
            
        </div>
    </div>
  )
}

export default PostSkeleton