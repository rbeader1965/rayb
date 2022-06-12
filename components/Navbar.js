import React from 'react'
import Link from 'next/link'
import { BeakerIcon, BriefcaseIcon } from '@heroicons/react/solid'
const Navbar = () => {
  return (
    <div className='bg-slate-800 p-4 flex justify-between items-center'>
    <div className="m-2 flex items-center gap-3">
      <BeakerIcon className="h-5 w-5 text-blue-500 hover:text-blue-200"/>
      <Link href="/">
      <a className="text-blue-500 mr-2 hover:text-blue-200">Home</a>
      </Link>
      <BriefcaseIcon className='h-5 w-5 text-blue-500 hover:text-blue-200'/>
      <Link href="/hun">
      <a className="text-blue-500 mr-2 hover:text-blue-200">WorkStuff</a>
      </Link>
      <Link href="/tours/toursix">
      <a className="text-blue-500 mr-2 hover:text-blue-200">Tour 6</a>
      </Link>
      <Link href="/tours/tourseven">
      <a className="text-blue-500 mr-2 hover:text-blue-200">Tour 7</a>
      </Link>
      <Link href="/tours/toureight">
      <a className="text-blue-500 mr-2 hover:text-blue-200">Tour 8</a>
      </Link>
      <Link href="/tours/tournine">
      <a className="text-blue-500 mr-2 hover:text-blue-200">Tour 9</a>
      </Link>
      <Link href="/tours/tourten">
      <a className="text-blue-500 mr-2 hover:text-blue-200">Tour 10</a>
      </Link>
      <Link href="/tours/toureleven">
      <a className="text-blue-500 mr-2 hover:text-blue-200">Tour 11</a>
      </Link>
      <Link href="/tours/tourtwelve">
      <a className="text-blue-500 mr-2 hover:text-blue-200">Tour 12</a>
      </Link>
      <Link href="/tours/shootouts">
      <a className="text-blue-500 mr-4 hover:text-blue-200">Shootouts</a>
      </Link>
    </div>
<div>
      <a href="#" className="inline-block py-2 px-4 text-indigo-200 mr-2">Login</a>
      <a href="#" className="inline-block py-2 px-4 text-yellow-700 bg-yellow-400 rounded">Sign Up</a>
    </div>
  </div> 
  
  )
}

export default Navbar