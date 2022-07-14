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

const Ideas = ({data1}) => {
  return (
    <div>
        <table className="w-auto p-2 md:p-1 text-xs text-center text-gray-500 dark:text-gray-400">
  <thead className="text-xs text-gray-700 uppercase text-semibold bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <tr>
    <th  scope="col" className="px-4 py-3">Date</th>
    <th  scope="col" className="px-4 py-3">Hours</th>
    <th  scope="col" className="px-4 py-3">Tips</th>
    <th  scope="col" className="px-4 py-3">Downs</th>
    <th  scope="col" className="px-4 py-3">Daily</th>
    </tr>
  </thead>
  <tbody>
      {data1.map((image) => (
    <tr key={image.id} className="border-b dark:bg-gray-900 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-900 even:dark:bg-gray-700">
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
  )
}

export default Ideas