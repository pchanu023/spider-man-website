import React from 'react'

function Home() {
  return (
    <div className="relative h-screen bg-cover bg-center" id="Home" style={{backgroundImage: "url('/img/Vector 1.png')", backgroundPosition: "center",}}>
    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
    <img className="w-48" src="/img/logo.png" alt="Logo" />
    </div>

  <div className="mx-auto absolute bottom-0 w-full h-auto bg-black clip-custom py-6">
    <div className="flex flex-col md:flex-row justify-center items-center px-4 md:px-20">
        <div className="flex items-center text-white p-4 md:p-10">
            <img 
                className="w-16 h-16 md:w-24 md:h-24" 
                src="/img/logospider.png" 
                alt="Spider Logo" 
            />

            <div className="w-1 h-16 md:h-24 bg-white mx-4 md:mx-10"></div>

            <div className="max-w-md md:max-w-lg text-center md:text-left">
                <p className="text-sm md:text-base leading-relaxed">
                    Spider-Man is a superhero with spider-like abilities, such as wall-crawling, web-slinging, and heightened senses known as "Spider-Sense." He is a relatable hero balancing his teenage life with his responsibilities to protect others. His famous motto is, "With great power comes great responsibility."
                </p>
            </div>
        </div>
    </div>
</div>

</div>

  )
}

export default Home
