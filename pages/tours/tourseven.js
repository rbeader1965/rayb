import Data from '../../json/tour7.json'
import Image from 'next/image'
import Reed1 from '../../components/Reed1'
const TourSeven = () => {
  return (
    <div className='h-screen'>
       <div className='w-auto bg-slate-500 text-center font-roboto'>
    <h5 className='text-base  text-black mb-1'>Welcome to </h5>
    <h1 className='text-4xl text-black font-semibold'>Golf Clash Tour 7</h1>
    </div>
            <div className='bg-slate-500 grid grid-cols-1 md:grid-cols-3 p-2 gap-2 font-roboto'>
                {Data.map(person => {
                  return(
                  // eslint-disable-next-line react/jsx-key
                  <div className='bg-slate-500'>
                    <div className='font-roboto'>
                    <div  key={person.id} className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                    <Image  src={person.src} alt={person.alt} width={512} height={256} layout="responsive"/>
                    <div className='p-6 hover:bg-slate-900 hover:text-white transition duration-300 ease-in'>
                    <h2 className='text-base font-medium text-center text-slate-200 mb-1'>Hole # {person.hole}</h2>
                        <h1 className='text-2xl text-center font-roboto color-black font-semibold mb-3'>{person.course}</h1>
                        <p className='leading-relaxed text-center mb-3'>Green is for Quasar , Orange is for Navigator</p>
                         <div className='flex justify-center flex-nowrap gap-2'>
                         <button className='bg-green-600 rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-green-800'>
                            <a href={person.pdf1}>{person.driver}</a>
                          </button>
                          <button className='bg-green-600 rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-green-800'>
                            <a href={person.pdf2}>{person.wood}</a>
                          </button>
                          <button className='bg-green-600 rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-green-800'>
                            <a href={person.pdf3}>{person.longiron}</a>
                          </button>
                          <button className='bg-green-600 rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-green-800'>
                            <a href={person.pdf4}>{person.shorthorn}</a>
                          </button>
                        </div>
                        <div className='mt-2 flex justify-center flex-nowrap gap-2 mb-4'>
                         <button className='bg-orange-600 rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-orange-800'>
                            <a href={person.pdf5}>{person.drivera}</a>
                          </button>
                          <button className='bg-orange-600 rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-orange-800'>
                            <a href={person.pdf6}>{person.wooda}</a>
                          </button>
                          <button className='bg-orange-600 rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-orange-800'>
                            <a href={person.pdf7}>{person.longirona}</a>
                          </button>
                          <button className='bg-orange-600 rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-orange-800'>
                            <a href={person.pdf8}>{person.shorthorna}</a>
                          </button>
                        </div>
                      </div>
                     </div>
                    </div>
                  </div>
                  )
                })}
          
                

            </div>
            <Reed1/>
       
    </div>
  )
}

export default TourSeven
 
 
 
 
 
 
 