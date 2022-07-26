import Data from '../json/balls.json'
export default function TestTable() {
  return (
    <div>
         <div className='bg-gray-200 flex  justify-center placeholder:space-y-5 space-x-5'>
            <span className='text-2xl  text-bold'>Extra Mile 9</span>
            <span className='text-2xl justify-center text-bold'>Katana 10%</span>
         </div>   
        <table className="w-full pt-4 text-xs text-center text-blue-500 dark:text-blue-400">
  <thead className="text-xs text-gray-700 uppercase text-semibold bg-blue-50 dark:bg-blue-700 dark:text-blue-400">
    <tr className='border-1 border-black'>
    <th  scope="col" className="bg-white text-black text-md">Wind</th>
    <th  scope="col" className="bg-[#FF0000] text-black text-md p-1">Max</th>
    <th  scope="col" className="bg-sky-900 text-black text-md p-2">Mid</th>
    <th  scope="col" className="bg-gray-500 text-black text-md p-2">Min</th>
    <th  scope="col" className="bg-white text-black">Wind</th>
    <th  scope="col" className="bg-red-800 px-1 md:px-4 py-1 md:py-3">Max</th>
    <th  scope="col" className="px-1 md:px-4 py-1 md:py-3">Mid</th>
    <th  scope="col" className="bg-yellow-500 px-1 md:px-4 py-1 md:py-3">Min</th>
    <th  scope="col" className="bg-[#ff4500] px-1 md:px-4 py-1 md:py-3">Wind</th>
    <th  scope="col" className="bg-red-800 px-1 md:px-4 py-1 md:py-3">Max</th>
    <th  scope="col" className="px-1 md:px-4 py-1 md:py-3">Mid</th>
    <th  scope="col" className="px-1 md:px-4 py-1 md:py-3">Min</th>
    </tr>
  </thead>
  <tbody>
      {Data.map((image) => (
    <tr key={image.id} className="border-2 border-black">
        <td  className="bg-white text-black text-xl">{image.Wind}</td>
        <td  className="bg-red-500 text-black text-xl">{image.Max}</td>
        <td  className="bg-sky-700 text-black text-xl">{image.Mid}</td>
        <td  className="bg-gray-500 text-black text-xl">{image.Min}</td>
        
        <td  className="bg-white text-black text-xl">{image.Wind}</td>
        <td  className="bg-red-500 px-1 md:px-4 py-1 md:py-4">{image.Max}</td>
        <td  className="bg-gray-500 text-black text-xl">{image.Mid}</td>
        <td  className="px-1 md:px-4 py-1 md:py-4">{image.Min}</td>
        <td  className="bg-[#ff4500]  text-black text-xl">{image.Wind}</td>
        <td  className="bg-red-700 px-1 md:px-4 py-1 md:py-4">{image.Max}</td>
        <td  className="bg-blue-900 px-1 md:px-4 py-1 md:py-4">{image.Mid}</td>
        <td  className="px-1 md:px-4 py-1 md:py-4">{image.Min}</td>
    </tr>

      ))}
  </tbody>
</table>
    </div>
  
  )
}
