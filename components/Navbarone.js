import Link from "next/link";
 const  Navbarone= () => {
    return ( 
      <nav className="bg-gray-100">
        <div className="px-8 mx-auto border border-red-400">
        <div className="flex justify-between">
            <div className="flex space-x-4">
            <div>
                <a className="flex items-center py-4 px-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
<span className="font-bold">Sportsbettor101</span>
                </a>
            </div>
            <div className="md:flex hidden items-center space-x-1">
                <a href="#" className="py-5 px-3 hover:text-gray-700">features</a>
                <a href="#" className="py-5 px-3 hover:text-gray-700">pricing</a>
            </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-1">
                <a href="#" className="py-5 px-3">Login</a>
                <a href="#" className="py-2 px-3 bg-yellow-400 hover:bg-yellow-200 text-yellow-900 hover:text-yellow-700 rounded transition duration-300">Signup</a>
            </div>  
        <div className="md:hidden flex items-center">
          <Link href="/" className="text-color-blue">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
</svg>
          </Link>
        </div>

        </div>
       
        </div>
        <div className="bg-slate-500  md:hidden grid grid-cols-1 text-center">
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
        </div>
      </nav>
     );
}
 
export default Navbarone;