import { createClient } from "@supabase/supabase-js";

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
        <table className="max-w-full md:max-w-2xl m-auto text-sm text-left text-gray-500 dark:text-gray-400">
  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <tr>
    <th  scope="col" className="px-6 py-3">Date</th>
    <th  scope="col" className="px-6 py-3">Hours</th>
    <th  scope="col" className="px-6 py-3">Tips</th>
    <th  scope="col" className="px-6 py-3">Downs</th>
    <th  scope="col" className="px-6 py-3">Daily</th>
    </tr>
  </thead>
  <tbody>
      {data1.map((image) => (
    <tr key={image.id} className="border-b dark:bg-gray-900 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-900 even:dark:bg-gray-700">
        <td  className="px-6 py-4">{image.mates}</td>
        <td  className="px-6 py-4">{image.hours}</td>
        <td  className="px-6 py-4">${image.tips}</td>
        <td  className="px-6 py-4">{image.downs}</td>
        <td  className="px-6 py-4">${image.daily}</td>
    </tr>

      ))}
  </tbody>
</table>
    </div>
  )
}

export default Ideas