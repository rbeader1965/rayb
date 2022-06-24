import Image from 'next/image';
import Link from 'next/link';
import Reed from '../../components/Reed';
import Data from '../../json/tour6.json'
const TourSix = () => {
  return (
    <div className='h-screen'>
            <div className='bg-slate-900 grid grid-cols-4 grid-rows-6 p-4 gap-2 font-barlow'>
     <Reed/>
                {Data.map(person => {
                  return(
                  // eslint-disable-next-line react/jsx-key
                  <div  className='bg-green-500'>
                    <div  className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden object-cover'>
                    <Image  src={person.src} alt={person.alt} width={512} height={256}/>
                    <div className='p-6 hover:bg-green-900 hover:text-white transition duration-300 ease-in'>
                    <h2 className='text-base font-medium text-slate-200 mb-1'>Hole # {person.hole}</h2>
                        <h1 className='text-2xl font-semibold mb-3'>{person.course}</h1>
                        <p className='leading-relaxed mb-3'>Blue is for Marlin , Gray is for Range Ball</p>
                         <div className='flex items-center flex-nowrap gap-2'>
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
                        <div className='mt-2 flex items-center flex-nowrap gap-2'>
                         <button className='bg-gray-600 rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-gray-800'>
                            <a href={person.pdf5}>{person.driver}</a>
                          </button>
                          <button className='bg-gray-600 rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-gray-800'>
                            <a href={person.pdf6}>{person.wooda}</a>
                          </button>
                          <button className='bg-gray-600 rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-gray-800'>
                            <a href={person.pdf7}>{person.longirona}</a>
                          </button>
                          <button className='bg-gray-600 rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-gray-800'>
                            <a href={person.pdf8}>{person.shorthorna}</a>
                          </button>
                        </div>
                      </div>
                     </div>
                    </div>
                  )
                })}
          
                

            </div>

    </div>
  )
}

export default TourSix
 