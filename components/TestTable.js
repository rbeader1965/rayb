import Data from '../json/balls.json'
export default function TestTable() {
  return (
    <div>
         <div className='bg-gray-200 flex space-x-5'>
            <span className='text-2xl justify-center text-semi-bold'>Extra Mile 9</span>
            <span className='text-2xl justify-center text-bold'>Katana 10%</span>
         </div>   
        <table className="w-full p-1 text-xs text-center text-blue-500 dark:text-blue-400">
  <thead className="text-xs md:text-2xl text-gray-700 uppercase text-semibold bg-blue-50 dark:bg-blue-700 dark:text-blue-400 sticky">
    <tr>
    <th  scope="col" className="bg-[#ff4500] px-1 md:px-4 py-1 md:py-3">Wind</th>
    <th  scope="col" className="bg-red-800 px-1 md:px-4 py-1 md:py-3">Max</th>
    <th  scope="col" className="bg-green-600 px-1 md:px-4 py-1 md:py-3">Mid</th>
    <th  scope="col" className="bg-lime-600 px-1 md:px-4 py-1 md:py-3">Min</th>
    <th  scope="col" className="bg-black px-1 md:px-4 py-1 md:py-3">Wind</th>
    <th  scope="col" className="bg-red-800 px-1 md:px-4 py-1 md:py-3">Max</th>
    <th  scope="col" className="px-1 md:px-4 py-1 md:py-3">Mid</th>
    <th  scope="col" className="bg-yellow-500 px-1 md:px-4 py-1 md:py-3">Min</th>
    <th  scope="col" className="bg-black px-1 md:px-4 py-1 md:py-3">Wind</th>
    <th  scope="col" className="bg-red-800 px-1 md:px-4 py-1 md:py-3">Max</th>
    <th  scope="col" className="px-1 md:px-4 py-1 md:py-3">Mid</th>
    <th  scope="col" className="px-1 md:px-4 py-1 md:py-3">Min</th>
    </tr>
  </thead>
  <tbody>
      {Data.map((image) => (
    <tr key={image.id} className="border-2 border-r-2 border-black dark:bg-zinc-900 dark:border-zinc-700 odd:bg-white even:bg-zinc-50 odd:dark:bg-zinc-900 even:dark:bg-zinc-700">
        <td  className="bg-[#ff4500] text-black text-2xl">{image.Wind}</td>
        <td  className="bg-red-700 px-1 md:px-4 py-1 md:py-4">{image.Max}</td>
        <td  className="bg-blue-900 px-1 md:px-4 py-1 md:py-4">{image.Mid}</td>
        <td  className="px-1 md:px-4 py-1 md:py-4">{image.Min}</td>
        <td  className="px-1 md:px-4 py-1 md:py-4">{image.Wind}</td>
        <td  className="bg-red-700 px-1 md:px-4 py-1 md:py-4">{image.Max}</td>
        <td  className="bg-blue-900 px-1 md:px-4 py-1 md:py-4">{image.Mid}</td>
        <td  className="px-1 md:px-4 py-1 md:py-4">{image.Min}</td>
        <td  className="px-1 md:px-4 py-1 md:py-4">{image.Wind}</td>
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
