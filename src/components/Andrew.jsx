import React from 'react'

function Andrew() {
  return (
    <div className="relative h-screen bg-cover bg-center" id="Home" style={{ backgroundImage: "url('/img/Andrewbg.png')", backgroundPosition: '20% 20%' }}
>
    <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col items-center md:items-start justify-center px-6 md:pl-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="w-full h-72 md:h-screen">
                <img className="w-full h-full object-cover" src="/img/andrew.png" alt="Andrew Garfield" />
            </div>

            <div className="text-center md:text-left text-white ml-0 md:ml-10">
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight">
                    Andrew Garfield
                </h1>
                <p className="text-sm md:text-lg lg:text-xl mt-4 md:mt-5 leading-relaxed">
                    Andrew brought a modern, introspective take to Spider-Man, highlighting Peter’s intelligence, struggles with identity, and the poignant love story with Gwen Stacy.
                </p>
                <button className="py-3 md:py-5 px-6 md:px-12 bg-red-800 text-white font-bold mt-5" type="button" style={{ clipPath: 'polygon(14% 0, 100% 0, 100% 20%, 100% 60%, 87% 100%, 0 100%, 0% 55%, 0 40%)'}}>
                    Watch Spider Man
                </button>
            </div>
        </div>
    </div>
</div>

  )
}

export default Andrew
