import React from 'react'
import Link from 'next/link'
const Reed8 = () => {
  return (
    <div className='text-center mb-12 font-roboto space-x-4'>
    <h5 className='text-base md:text-lg text-gray-700 mb-1'>Welcome to </h5>
    <h1 className='text-4xl md:text-6xl text-gray-700 font-semibold'>Golf Clash Tour 8</h1>
    <h2 className='text-2xl md:text-3xl text-gray-700 font-semibold'>Quasar</h2>
    <button className='bg-gray-600 mt-2 mr-2 rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-gray-800 hover:text-white'>
     <Link className='text-gray-400' href="/pdfs/misc/wedgesquasar.pdf">Wedges</Link>
    </button> 
    <button className='bg-gray-600 mt-3 mr-3 rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-gray-800 hover:text-white'>
    <Link className='text-zinc-100 ' href="/pdfs/misc/roughironquasar.pdf">Rough Irons</Link>
    </button>
    <button className='bg-gray-600 mt-3 mr-3  rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-gray-800 hover:text-white'>
        <Link href="/pdfs/misc/sandquasar.pdf">Sand Clubs</Link>
    </button>
    <h2 className='mt-2 text-2xl md:text-3xl text-gray-700 font-semibold'>Navigator</h2>
    <button className='bg-gray-600 mt-3 mr-3  rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-gray-800 hover:text-white'>
     <Link className='text-gray-400' href="/pdfs/misc/wedgesnavigator.pdf">Wedges</Link>
    </button> 
    <button className='bg-gray-600 mt-3 mr-3 rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-gray-800 hover:text-white'>
    <Link className='text-zinc-100' href="/pdfs/misc/roughironnavigator.pdf">Rough Irons</Link>
    </button>
    <button className='bg-gray-600 mt-4 mr-1 rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-gray-800 hover:text-white'>
        <Link href="/pdfs/misc/sandnavigator.pdf">Sand Clubs</Link>
    </button>
    
   </div>
  )
}

export default Reed8