import Ideas from '../components/Ideas'
import { createClient } from "@supabase/supabase-js";
import { format } from 'date-fns'



export async function getServerSideProps() {
    const supabaseAdmin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || '',
      process.env.SUPABASE_SERVICE_ROLE_KEY || ''
    )
    const { data } = await supabaseAdmin
    .from('workstuff')
    .select('*')
    .order('id');
    return {
      props: {
        data1: data,
      },
    }
  }


const WorkHistory = ({data1}) => {
  return (
    <div className='bg-gray-200'>
        <Ideas data1={data1}/>
        <div>
        <table className="invisible md:visible  w-auto p-2 md:p-1 text-xs text-center text-black dark:text-black">
  <thead className="text-xs md:text-xl text-black uppercase font-noto text-bold bg-indogo-50 dark:bg-indigo-700 dark:text-indigo-400">
    <tr>
    <th   className="px-1 md:px-4 py-1 md:py-3">Date</th>
    <th   className="px-1 md:px-4 py-1 md:py-3">Hours</th>
    <th   className="px-1 md:px-4 py-1 md:py-3">Tips</th>
    <th   className="px-1 md:px-4 py-1 md:py-3">Downs</th>
    <th   className="px-1 md:px-4 py-1 md:py-3">Daily</th>
    </tr>
  </thead>
  <tbody>
      {data1.map((image) => (
    <tr key={image.id} className="text-xs md:text-xl dark:bg-indigo-900 odd:dark:bg-indigo-900 even:dark:bg-indigo-700">
        <td  className="px-1 md:px-4 py-1 md:py-4">{format(new Date(image.mates),'MM/dd/yyyy')}</td>
        <td  className="px-1 md:px-4 py-1 md:py-4">{image.hours}</td>
        <td  className="px-1 md:px-4 py-1 md:py-4">${image.tips}</td>
        <td  className="px-1 md:px-4 py-1 md:py-4">{image.downs}</td>
        <td  className="px-1 md:px-4 py-1 md:py-4">${image.daily}</td>
    </tr>

      ))}
  </tbody>
</table>
    </div>
    </div>
  )
}

export default WorkHistory