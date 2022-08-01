import Image from "next/image"
import Link from "next/link"
const Box = () => {
  return (
    <div className='bg-black w-1/3 h-64 border-1 border-white flex'>
     <div className='bg-purple-400 w-1/2 h-full p-2'>
       <Image src="/07.jpg" alt="wee" width={240} height={240}/>
     </div>
     <div className='bg-blue-500 w-1/2 '>
        <div className="bg-gray-100 h-1/2 border-1 border-white overflow-hidden">
          <div  className="flex items-center ml-2 justify-around">
          <span className="text-2xl text-red-500">Driver</span>
          <span className="text-xl text-red-500">10%</span>
          </div>
          <div  className="flex items-center ml-2 justify-around">
          <span className="text-2xl text-red-500">Driver</span>
          <span className="text-xl text-red-500">10%</span>
          </div>
          <div  className="flex items-center ml-2 justify-around">
          <span className="text-2xl text-red-500">Driver</span>
          <span className="text-xl text-red-500">10%</span>
          </div>
          <div  className="flex items-center ml-2 justify-around">
          <span className="text-2xl text-red-500">Driver</span>
          <span className="text-xl text-red-500">10%</span>
          </div>
            </div>
        <div className="bg-red-900 grid grid-cols-2 gap-2 p-3 mb-6">
          <Link href="/">
          <a><button className="bg-red-200 hover:bg-red-400 p-2 rounded">Drivers</button></a>
          </Link>
          <Link href="/">
          <a><button className="bg-red-200 p-2 rounded">Woods</button></a>
          </Link> 
          <Link href="/">
          <a><button className="bg-red-200 p-2 rounded">Lg Iron</button></a>
          </Link>
          <Link href="/">
          <a><button className="bg-red-200 p-2 rounded">Sh Iron</button></a>
          </Link>
          
        </div>
     </div>
    </div>
  )
}

export default Box