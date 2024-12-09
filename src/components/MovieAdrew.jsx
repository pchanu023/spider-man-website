import React from 'react'

function MovieAdrew() {
  return (
    <div className='flex gap-2 mt-8 -translate-y-32 '>
        <div className='flex flex-col items-center w-full md:w-1/2 '>
            <img className='w-[300px] h-auto' src="/img/andrew1.jpg" alt="" />
            <h1 className='text-xl font-bold text-center text-black mt-2'>The Amazing <br />Spider Man </h1>
        </div>
        <div className='flex flex-col items-center w-full md:w-1/2'>
            <img className='w-[300px] h-auto' src="/img/andrew2.jpg" alt="" />
            <h1 className="text-xl font-bold text-center text-black mt-2">Spider Man <br /> No Way Home</h1>
        </div>
    </div>
  )
}

export default MovieAdrew
