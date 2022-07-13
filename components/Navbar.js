import React from 'react'
import Link from 'next/link'
import { BeakerIcon, BriefcaseIcon} from '@heroicons/react/solid'
import { FaCanadianMapleLeaf } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className='bg-slate-800 w-full md:w-auto inline-block md:flex md:flex-wrap md:justify-between md:text-xl'>
    <div className="flex flex-wrap justify-center gap-2 font-roboto">
      <ul className='m-2 text-base flex flex-wrap justify-center gap-3 font-roboto'>
      <BeakerIcon className="h-5 w-5 text-blue-500 hover:text-yellow-200"/>
      <Link href="/">
      <a className="text-blue-500 mr-2 hover:text-blue-200">Home</a>
      </Link>
      <BriefcaseIcon className='h-5 w-5 text-blue-500 hover:text-yellow-200'/>
      <Link href="/hun">
      <a className="text-blue-500 mr-2 hover:text-yellow-200">WorkStuff</a>
      </Link>
      <Link href="/tours/toursix">
      <a className="text-blue-500 mr-2 hover:text-yellow-200">Tour 6</a>
      </Link>
      <Link href="/tours/tourseven">
      <a className="text-blue-500 mr-2 hover:text-yellow-200">Tour 7</a>
      </Link>
      <Link href="/tours/toureight">
      <a className="text-blue-500 mr-2 hover:text-yellow-200">Tour 8</a>
      </Link>
      <Link href="/tours/tournine">
      <a className="text-blue-500 mr-2 hover:text-yellow-200">Tour 9</a>
      </Link>
      <Link href="/tours/tourten">
      <a className="text-blue-500 mr-2 hover:text-yellow-200">Tour 10</a>
      </Link>
      <Link href="/tours/toureleven">
      <a className="text-blue-500 mr-2 hover:text-yellow-200">Tour 11</a>
      </Link>
      <Link href="/tours/tourtwelve">
      <a className="text-blue-500 mr-2 hover:text-yellow-200">Tour 12</a>
      </Link>
      <Link href="/tours/shootouts">
      <a className="text-blue-500 mr-4 hover:text-yellow-200">Shootouts</a>
      </Link>
      <FaCanadianMapleLeaf className="h-5 w-5 text-blue-500 hover:text-blue-200"/>
      <Link href="/sports">
      <a className="text-blue-700 mr-4 hover:text-blue-300">Sports Bets</a>
      </Link>
      </ul>
    </div>
     <div className='sm:visible invisible'>
       <Link href="/hun" >
    <a className="py-2 px-4 text-indigo-500 hover:text-blue-200 mr-2">Login</a>
        </Link>
      <a href="#" className="inline-block py-2 px-4 text-yellow-700 bg-yellow-400 rounded hover:bg-yellow-800 hover:text-white">Sign Up</a>
    </div>
  </div> 
  
  )
}

export default Navbar