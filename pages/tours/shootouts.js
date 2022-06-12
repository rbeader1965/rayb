import Data from '../../json/shootouts.json'
import Image from 'next/image'
const Shootouts = () => {
  return (
    <div className='h-screen'>
            <div className='bg-green-500 grid grid-cols-5 grid-rows-6 p-4'>
                {Data.map(person => {
                  return(
                  // eslint-disable-next-line react/jsx-key
                  <div className='bg-gray-700'>
                    <div className='p-4'>
                    <div  key={person.id} className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden object-cover'>
                    <Image  src={person.src} alt={person.alt} width={512} height={256}/>
                    <div className='p-6 hover:bg-green-900 hover:text-white transition duration-300 ease-in'>
                    <h2 className='text-base font-medium text-slate-200 mb-1'>{person.pdf6}</h2>
                        <h1 className='text-2xl font-semibold mb-3'>{person.course}</h1>
                        <p className='leading-relaxed mb-3'></p>
                         <div className='flex items-center flex-wrap gap-2'>
                         <button className='bg-green-600 rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-green-800'>
                            <a href={person.pdf1}>{person.ball1}</a>
                          </button>
                          <button className='bg-green-600 rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-green-800'>
                            <a href={person.pdf2}>{person.ball2}</a>
                          </button>
                          <button className='bg-green-600 rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-green-800'>
                            <a href={person.pdf3}>{person.ball3}</a>
                          </button>
                          <button className='bg-green-600 rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-green-800'>
                            <a href={person.pdf4}>{person.ball4}</a>
                          </button>
                          <button className='bg-green-600 rounded-full ring-offset-2 ring-2 text-xs p-1 hover:bg-green-800'>
                            <a href={person.pdf4}>{person.ball5}</a>
                          </button>
                        </div>
                    
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

export default Shootouts
 
 
 