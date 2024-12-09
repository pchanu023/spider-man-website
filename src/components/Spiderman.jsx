import React from 'react'

function Spiderman() {
  return (
    <div className="py-20">
        <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-1/2 p-4">
            <img
            className="mx-auto rounded-lg shadow-md h-auto"
            src="/img/spidermen.png"
            alt="Spider Man"
            />
        </div>
        <div className="md:w-1/2 p-4 text-left px-4">
            <h1 className="text-4xl md:text-8xl font-bold mb-6">Spider Man</h1>
            <p className="text-xl md:text-sm">
                Peter is an orphan raised by his Uncle Ben and Aunt May in Queens, New York. A brilliant but socially awkward teenager, his life changes forever when he is bitten by a radioactive spider, granting him extraordinary abilities, including super strength, agility, wall-crawling, and "Spider-Sense."
                Initially, Peter uses his powers for personal gain, but after letting a thief escape, the same criminal later kills Uncle Ben. This tragedy teaches Peter a profound lesson: "With great power comes great responsibility." Determined to honor his uncle’s memory, Peter becomes Spider-Man, using his abilities to fight crime and protect others. <br />
                While fighting villains such as Green Goblin, Doctor Octopus, and Venom, Peter also juggles the struggles of daily life, including school, work as a freelance photographer, and his relationships with friends and loved ones.
            </p>
        </div>
    </div>
    <div className='m flex gap-10 justify-end mr-12'>
    <button className='py-5 px-12 bg-red-800 text-white font-bold' type="button" style={{clipPath: 'polygon(14% 0, 100% 0, 100% 20%, 100% 60%, 87% 100%, 0 100%, 0% 55%, 0 40%)',}}>Watch Spider Man</button>
    <button className='py-5 px-10 bg-red-800 text-white font-bold' type="button" style={{clipPath: 'polygon(14% 0, 100% 0, 100% 20%, 100% 60%, 87% 100%, 0 100%, 0% 55%, 0 40%)',}}>Watch Spider Man</button>
    </div>
</div>

  )
}

export default Spiderman
