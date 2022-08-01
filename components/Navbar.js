import Link from 'next/link'
import { BeakerIcon} from '@heroicons/react/solid'
const Navbar = () => {
  return (
    <div className='relative bg-slate-800 w-full h-16 md:h-auto md:w-auto md:flex justify-between'>
    <div className="flex flex-wrap justify-items-stretch gap-4">
      <ul className='m-4 text-base flex flex-wrap items-center gap-1 md:gap-4 font-roboto'>
      <BeakerIcon className="h-4 w-4 md:h-6 md:w-6 md:m-4 text-blue-500 hover:text-yellow-200"/>
      <Link href="/">
      <a className="text-blue-500 md:text-2xl text-base mr-2 hover:text-blue-200 hover:scale-125">Home</a>
      </Link>
      <Link href="/tours/toursix">
      <a className="text-blue-500 md:text-2xl text-base mr-2 hover:text-blue-200 hover:scale-125">Tour 6</a>
      </Link>
      <Link href="/tours/tourseven">
      <a className="text-blue-500 md:text-2xl text-base mr-2 hover:text-yellow-200 hover:scale-125">Tour 7</a>
      </Link>
      <Link href="/tours/toureight">
      <a className="text-blue-500 md:text-2xl text-base mr-2 hover:text-yellow-200 hover:scale-125">Tour 8</a>
      </Link>
      <Link href="/tours/tournine">
      <a className="text-blue-500 md:text-2xl text-base mr-2 hover:text-yellow-200 hover:scale-125">Tour 9</a>
      </Link>
      <Link href="/tours/tourten">
      <a className="text-blue-500 md:text-2xl text-base mr-2 hover:text-yellow-200 hover:scale-125">Tour 10</a>
      </Link>
      <Link href="/tours/shootouts">
      <a className="text-blue-500 md:text-2xl text-base mr-4 hover:text-yellow-200 hover:scale-125">Shootouts</a>
      </Link>
      </ul>
   </div>
      <div className='md:visible invisible flex items-center justify-between'>
       <Link href="/tours/toursix" >
          <a className="m-4 py-2 px-4 md:text-2xl text-base text-indigo-500 hover:text-blue-200 hover:scale-125 mr-2">Login</a>
        </Link>
        <Link href="/workHistory">
         <a  className="m-4 py-2 px-4 md:text-2xl text-base text-yellow-700 bg-yellow-400 rounded-lg hover:bg-blue-800 hover:text-white hover:scale-125">Sign Up</a>
        </Link>
      </div>

  </div> 
  
  )
}

export default Navbar