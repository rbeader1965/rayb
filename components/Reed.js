import React from 'react'
import Link from 'next/link'
const Reed = () => {
  return (
    <div className='bg-green-500 flex p-12 justify-center gap-2'>
    <h2 className='mt-2 text-2xl text-gray-700 font-roboto font-semibold'>Marlin</h2>
<button className='bg-gray-400 mt-2 mr-2 rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-gray-800 hover:text-white'>
<Link className='text-gray-400' href="/pdfs/misc/wedgesmarlin.pdf">Wedges</Link>
</button> 
<button className='bg-gray-400 mt-3 mr-3 rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-gray-800 hover:text-white'>
<Link className='text-zinc-100' href="/pdfs/misc/roughironmarlin.pdf">Rough Irons</Link>
</button>
<button className='bg-gray-400 mt-3 mr-3  rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-gray-800 hover:text-white'>
<Link href="/pdfs/misc/sandmarlin.pdf">Sand Clubs</Link>
</button>
<h2 className='mt-2 text-2xl text-gray-700 font-roboto font-semibold'>Range Ball</h2>
<button className='bg-gray-400 mt-3 mr-3  rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-gray-800 hover:text-white'>
<Link className='text-zinc-100' href="/pdfs/misc/wedgesrange.pdf">Wedges</Link>
</button> 
<button className='bg-gray-400 mt-3 mr-3 rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-gray-800 hover:text-white'>
<Link className='text-zinc-100' href="/pdfs/misc/roughironrange.pdf">Rough Irons</Link>
</button>
<button className='bg-gray-400 mt-4 mr-1 rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-gray-800 hover:text-white'>
<Link  className='text-zinc-100' href="/pdfs/misc/sandrange.pdf">Sand Clubs</Link>
</button>
</div>
  )
}

export default Reed