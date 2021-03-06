import React from 'react'
import Link from 'next/link'
const Reed10 = () => {
  return (
    <div className='bg-slate-500 grid grid-cols-1 md:flex p-12 justify-center gap-2'>
    <h2 className='mt-2 text-2xl md:text-3xl text-gray-700 font-semibold'>Titan</h2>
    <button className='bg-gray-400 mt-3 mr-3 rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-gray-800 hover:text-white'>
     <Link className='text-gray-400' href="/pdfs/misc/wedgestitan.pdf">Wedges</Link>
    </button> 
    <button className='bg-gray-400 mt-3 mr-3 rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-gray-800 hover:text-white'>
    <Link className='text-zinc-100 ' href="/pdfs/misc/roughirontitan.pdf">Rough Irons</Link>
    </button>
    <button className='bg-gray-400 mt-3 mr-3  rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-gray-800 hover:text-white'>
        <Link href="/pdfs/misc/sandtitan.pdf">Sand Clubs</Link>
    </button>
    <h2 className='mt-2 text-2xl md:text-3xl text-gray-700 font-semibold'>Kingmaker</h2>
    <button className='bg-gray-400 mt-3 mr-3  rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-gray-800 hover:text-white'>
     <Link className='text-gray-400' href="/pdfs/misc/wedgeskingmaker.pdf">Wedges</Link>
    </button> 
    <button className='bg-gray-400 mt-3 mr-3 rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-gray-800 hover:text-white'>
    <Link className='text-zinc-100' href="/pdfs/misc/roughironkingmaker.pdf">Rough Irons</Link>
    </button>
    <button className='bg-gray-400 mt-3 mr-3 rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-gray-800 hover:text-white'>
        <Link href="/pdfs/misc/sandkingmaker.pdf">Sandy Clubs</Link>
    </button>
    
   </div>
  )
}

export default Reed10