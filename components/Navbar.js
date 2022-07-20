import Link from 'next/link'
import { BeakerIcon} from '@heroicons/react/solid'
const Navbar = () => {
  return (
    <div className='bg-slate-800 w-full md:w-auto inline-block md:flex md:flex-wrap justify-between'>
    <div className="flex flex-wrap justify-items-stretch gap-2">
      <ul className='text-base flex flex-wrap items-center  gap-2 font-roboto'>
      <BeakerIcon className="h-4 w-4 md:h-8 md:w-8 text-blue-500 hover:text-yellow-200"/>
      <Link href="/">
      <a className="text-blue-500 md:text-3xl text-base mr-2 hover:text-blue-200">Home</a>
      </Link>
      <Link href="/tours/toursix">
      <a className="text-blue-500 md:text-3xl text-base mr-2 hover:text-yellow-200">Tour 6</a>
      </Link>
      <Link href="/tours/tourseven">
      <a className="text-blue-500 md:text-3xl text-base mr-2 hover:text-yellow-200">Tour 7</a>
      </Link>
      <Link href="/tours/toureight">
      <a className="text-blue-500 md:text-3xl text-base mr-2 hover:text-yellow-200">Tour 8</a>
      </Link>
      <Link href="/tours/tournine">
      <a className="text-blue-500 md:text-3xl text-base mr-2 hover:text-yellow-200">Tour 9</a>
      </Link>
      <Link href="/tours/tourten">
      <a className="text-blue-500 md:text-3xl text-base mr-2 hover:text-yellow-200">Tour 10</a>
      </Link>
      <Link href="/tours/toureleven">
      <a className="text-blue-500 md:text-3xl text-base mr-2 hover:text-yellow-200">Tour 11</a>
      </Link>
      <Link href="/tours/tourten">
      <a className="text-blue-500 md:text-3xl text-base mr-2 hover:text-yellow-200">Tour 12</a>
      </Link>
      <Link href="/tours/shootouts">
      <a className="text-blue-500 md:text-3xl text-base mr-4 hover:text-yellow-200">Shootouts</a>
      </Link>
      </ul>
    </div>
     <div className='sm:visible invisible'>

       <Link href="/tour" >
    <a className="py-2 px-4 md:text-2xl text-base text-indigo-500 hover:text-blue-200 mr-2">Login</a>
        </Link>
      <a href="#" className="inline-block py-4 px-4 md:text-3xl text-base text-yellow-700 bg-yellow-400 rounded hover:bg-yellow-800 hover:text-white">Sign Up</a>
    </div>

  </div> 
  
  )
}

export default Navbar