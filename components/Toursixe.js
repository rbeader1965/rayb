import Image from 'next/image'
import Link from 'next/link'

const Toursixe = () => {
  return (
    <div className='min-h-screen container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          <div className='rounded-3xl shadow-xl'>
            <div className='p-3 md:p-1'>
              <div className='rounded-xl overflow-hidden'>
                <Image src='/tour7images/jd1.png' alt='vrer' width={512} height={256} layout="responsive"/>
              </div>
            <h5 className='text-2xl text-center md:text-3xl font-roboto font-semibold mt-1'>Hole #1</h5>
            <p className='text-slate-700 text-base mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit vitae quo odio?</p>
            <div className='flex ml-2 justify-between gap-4'>
            <Link href="#">
             <a className='w-1/2 text-center bg-blue-400 text-blue-900 py-2 rounded-3xl font-semibold mt-4 hover:bg-green-300 focus:scale-95 transition-all duration-200 ease-out '>Explore</a>
            </Link>
            <Link href="#">
             <a className='w-1/2 text-center bg-blue-400 text-blue-900 py-2 rounded-3xl font-semibold mt-4 hover:bg-green-300 focus:scale-95 transition-all duration-200 ease-out '>Explore</a>
            </Link>
            </div>
            
            </div>
            </div>
          </div>

          
    </div>


  )
}

export default Toursixe