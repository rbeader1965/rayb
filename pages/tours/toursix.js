import Image from 'next/image';
import Data from '../../json/tour6.json'
import Link from 'next/link';
import Reed from '../../components/Reed';
const TourSix = () => {
  return (
    <div className='h-screen'>
       <div className='w-full bg-green-500 text-center font-roboto space-x-4'>
    <h5 className='text-base md:text-lg text-gray-700 mb-1'>Welcome to </h5>
    <h1 className='text-4xl md:text-6xl text-gray-700 font-semibold'>Golf Clash Tour 6</h1>
    </div>
            <div className='bg-green-500 flex flex-wrap justify-center shrink p-2 gap-2 font-roboto'>
                {Data.map(person => {
                  return(
                  // eslint-disable-next-line react/jsx-key
                  <div  className='bg-green-500 '>
                    <div  className='h-full w-512 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden object-cover'>
                    <Image  src={person.src} alt={person.alt} width={512} height={256}/>
                    <div className='p-2 hover:bg-green-900 hover:text-white transition duration-300 ease-in'>
                    <h2 className='text-base text-center font-medium text-slate-200 mb-1'>Hole # {person.hole}</h2>
                        <h1 className='text-2xl text-center font-semibold mb-3'>{person.course}</h1>
                        <p className='leading-relaxed text-center mb-2'>Blue is for Marlin , Gray is for Range Ball</p>
                         <div className='flex justify-center flex-nowrap gap-2'>
                         <button className='bg-blue-600 rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-blue-800'>
                            <a href={person.pdf1}>{person.driver}</a>
                          </button>
                          <button className='bg-blue-600 rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-blue-800'>
                            <a href={person.pdf2}>{person.wood}</a>
                          </button>
                          <button className='bg-blue-600 rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-blue-800'>
                            <a href={person.pdf3}>{person.longiron}</a>
                          </button>
                          <button className='bg-blue-600 rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-blue-800'>
                            <a href={person.pdf4}>{person.shorthorn}</a>
                          </button>
                        </div>
                        <div className='mt-2 flex justify-center flex-nowrap gap-2 mb-4'>
                         <button className='bg-gray-400 rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-gray-800'>
                            <a href={person.pdf5}>{person.driver}</a>
                          </button>
                          <button className='bg-gray-400 rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-gray-800'>
                            <a href={person.pdf6}>{person.wooda}</a>
                          </button>
                          <button className='bg-gray-400 rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-gray-800'>
                            <a href={person.pdf7}>{person.longirona}</a>
                          </button>
                          <button className='bg-gray-400 rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-gray-800'>
                            <a href={person.pdf8}>{person.shorthorna}</a>
                          </button>
                        </div>
                      </div>
                     </div>
                    </div>
                  )
                })}
          </div>
          <Reed/>


    </div>
  )
}

export default TourSix
 