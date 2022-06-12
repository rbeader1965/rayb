import React from 'react'
import Link from 'next/link'
const Reed = () => {
  return (
    <div className='text-center mb-12 '>
    <h5 className='text-base md:text-lg text-gray-700 mb-1'>Welcome to </h5>
    <h1 className='text-4xl md:text-6xl text-gray-700 font-semibold'>Golf Clash Tour 6</h1>
    <h2 className='text-2xl md:text-3xl text-gray-700 font-semibold'>Marlin</h2>
    <button className='bg-gray-600 mt-2 mr-2 rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-gray-800 hover:text-white'>
     <Link className='text-gray-400' href="/pdfs/misc/wedgesmarlin.pdf">Wedges</Link>
    </button> 
    <button className='bg-gray-600 mt-3 mr-3 rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-gray-800 hover:text-white'>
    <Link className='text-zinc-100' href="/pdfs/misc/roughironmarlin.pdf">Rough Irons</Link>
    </button>
    <button className='bg-gray-600 mt-3 mr-3  rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-gray-800 hover:text-white'>
        <Link href="/pdfs/misc/sandmarlin.pdf">Sand Clubs</Link>
    </button>
    <h2 className='mt-2 text-2xl md:text-3xl text-gray-700 font-semibold'>Range Ball</h2>
    <button className='bg-gray-600 mt-3 mr-3  rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-gray-800 hover:text-white'>
     <Link className='text-gray-400' href="/pdfs/misc/wedgesrange.pdf">Wedges</Link>
    </button> 
    <button className='bg-gray-600 mt-3 mr-3 rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-gray-800 hover:text-white'>
    <Link className='text-zinc-100' href="/pdfs/misc/roughironrange.pdf">Rough Irons</Link>
    </button>
    <button className='bg-gray-600 mt-4 mr-1 rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-gray-800 hover:text-white'>
        <Link href="/pdfs/misc/sandrange.pdf">Sand Clubs</Link>
    </button>
    
   </div>
  )
}

export default Reed