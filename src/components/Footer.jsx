import React from 'react'

function Footer() {
  return (
    <div className="absolute bg-black w-full h-auto md:h-72 flex flex-col justify-center items-center py-6">
    <div className="flex justify-center mb-4 md:mb-0">
        <img 
            className="w-36 h-28 md:w-40 md:h-20" 
            src="/img/logo.png" 
            alt="Logo" 
        />
    </div>

    <div className="flex flex-col md:flex-row justify-center items-center text-white text-center px-4 md:px-20 mt-6 space-y-6 md:space-y-0">
        <img 
            className="w-16 h-16 md:w-24 md:h-24 mb-4 md:mb-0" 
            src="/img/logospider.png" 
            alt="Spider Logo" 
        />

        <div className="w-1 h-12 md:h-24 bg-white mx-4"></div>

        <div className="max-w-md md:max-w-xl">
            <p className="text-sm md:text-base leading-relaxed">
                Stan Lee conceived Spider-Man as a unique superhero inspired by seeing a spider crawl up a wall. He wanted a relatable hero who dealt with ordinary problems like money, school, and relationships while also fighting crime. Initially, the idea was rejected by publishers, who thought spiders were unappealing. However, Lee included Spider-Man in the final issue of Amazing Fantasy, which became an unexpected hit. This success led to the launch of <i>The Amazing Spider-Man</i> comic series, cementing Spider-Man as one of Marvel’s most iconic and beloved superheroes.
            </p>
        </div>
    </div>
</div>


  )
}

export default Footer
