import React from 'react'
import Link from 'next/link'
const Reed9 = () => {
  return (
    <div className='bg-purple-500 flex p-12 justify-center gap-2'>
    <h2 className='mt-2 text-3xl text-gray-700 font-roboto font-semibold'>Kingmaker</h2>
    <button className='bg-gray-600 mt-3 mr-3 rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-gray-800 hover:text-white'>
     <Link className='text-gray-400' href="/pdfs/misc/wedgeskingmaker.pdf">Wedges</Link>
    </button> 
    <button className='bg-gray-600 mt-3 mr-3 rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-gray-800 hover:text-white'>
     <Link className='text-zinc-100 ' href="/pdfs/misc/roughironkingmaker.pdf">Rough Irons</Link>
    </button>
    <button className='bg-gray-600 mt-3 mr-3  rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-gray-800 hover:text-white'>
     <Link href="/pdfs/misc/sandkingmaker.pdf">Sand Clubs</Link>
    </button>
    <h2 className='mt-2 text-2xl md:text-3xl text-gray-700 font-semibold'>Titan</h2>
    <button className='bg-gray-600 mt-3 mr-3  rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-gray-800 hover:text-white'>
     <Link className='text-gray-400' href="/pdfs/misc/wedgestitan.pdf">Wedges</Link>
    </button> 
    <button className='bg-gray-600 mt-3 mr-3 rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-gray-800 hover:text-white'>
    <Link className='text-zinc-100' href="/pdfs/misc/roughirontitan.pdf">Rough Irons</Link>
    </button>
    <button className='bg-gray-600 mt-3 mr-3 rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-gray-800 hover:text-white'>
        <Link href="/pdfs/misc/sandtitan.pdf">Sand Clubs</Link>
    </button>
    
   </div>
  )
}

export default Reed9