import React from 'react'

function MovieTobey() {
  return (
    <div className="flex gap-4 mt-8 -translate-y-32 ">
            <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/4">
                <img className="w-full max-w-[300px] h-auto" src="/img/tobey1.jpg" alt="Spider Man Home Coming" />
                <h1 className="text-xl font-bold text-center text-black mt-2">Spider Man 1 <br />on May 3,2002</h1>
            </div>

            <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/4">
                <img className="w-[300px] h-auto" src="/img/Tobey2.jpg" alt="Spider Man Far From Home" />
                <h1 className="text-xl font-bold text-center text-black mt-2">Spider Man 2 <br />on June 30,2004</h1>
            </div>

            <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/4">
                <img className="w-[300px] h-auto" src="/img/Tobey3.jpg" alt="Spider Man No Way Home" />
                <h1 className="text-xl font-bold text-center text-black mt-2">Spider Man 3<br />on May 4,2007</h1>
            </div>

            <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/4">
                <img className="w-[300px] h-auto" src="/img/Tobey4.jpg" alt="Spider Man No Way Home" />
                <h1 className="text-xl font-bold text-center text-black mt-2">Spider Man <br /> No Way Home</h1>
            </div>
    </div>
  )
}

export default MovieTobey
