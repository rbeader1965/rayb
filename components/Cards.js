import Image from 'next/image'
import React from 'react'

const Cards = () => {
  return (
    <div className="bg-blue-800 grid grid-rows-3 grid-flow-col w-96 h-96 gap-4">
    <div className="row-span-3">
      <Image src="/tour6images/ep1.png" alt="null" width={256} height={256} className="" /> 
    </div>
    <div className="col-span-2 bg-red-400">02</div>
    <div className="row-span-2 col-span-2 bg-indigo-900">03</div>
  </div>
  )
}

export default Cards