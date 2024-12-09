import React from 'react'

function MovieTom() {
  return (
    <div className="flex gap-4 mt-8 -translate-y-32">
            <div className="flex flex-col items-center w-full md:w-1/3">
                <img className="w-[300px] h-auto" src="/img/Tom1.jpg" alt="Spider Man Home Coming" />
                <h1 className="text-xl font-bold text-center text-black mt-2">Spider Man <br /> Home Coming</h1>
            </div>

            <div className="flex flex-col items-center w-full md:w-1/3">
                <img className="w-[300px] h-auto" src="/img/Tom2.webp" alt="Spider Man Far From Home" />
                <h1 className="text-xl font-bold text-center text-black mt-2">Spider Man <br /> Far From Home</h1>
            </div>

            <div className="flex flex-col items-center w-full md:w-1/3">
                <img className="w-[300px] h-auto" src="/img/tom3.png" alt="Spider Man No Way Home" />
                <h1 className="text-xl font-bold text-center text-black mt-2">Spider Man <br /> No Way Home</h1>
            </div>
    </div>

  )
}

export default MovieTom
