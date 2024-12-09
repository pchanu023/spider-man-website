import React from 'react'

function Tobey() {
  return (
    <div className="relative h-screen bg-cover bg-center" id="Home" style={{ backgroundImage: "url('/img/tobeybg.png')", backgroundPosition: '20% 20%' }}>
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-start justify-center px-6 md:pl-10"> 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8">
            <div className="flex items-center justify-start p-4">
                <div className="ml-0 md:ml-10">
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white leading-tight">
                        Tobey Maguire
                    </h1>
                    <p className="text-sm md:text-lg lg:text-xl text-white mt-4 md:mt-5 leading-relaxed">
                        Tobey’s portrayal of Spider-Man was the first cinematic adaptation of the character. He captured the emotional depth of Peter Parker, especially his struggles with responsibility, relationships, and sacrifice.                    </p>
                    <button 
                        className="py-3 md:py-5 px-6 md:px-12 bg-red-800 text-white font-bold mt-5" 
                        type="button" 
                        style={{ 
                            clipPath: 'polygon(14% 0, 100% 0, 100% 20%, 100% 60%, 87% 100%, 0 100%, 0% 55%, 0 40%)'
                        }}>Watch Spider Man</button>
                </div>
            </div>
            
            <div className="mx-auto">
                <img 
                    className="w-full h-72 md:h-96 lg:h-screen object-cover" 
                    src="/img/tobey.png" 
                    alt="Tom Holland" 
                />
            </div>
        </div>
    </div>
    </div>

  )
}

export default Tobey
