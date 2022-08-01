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



export default function WorkHistory({data1}) {
  return (
<>
<div className="bg-zinc-800 w-full h-screen flex justify-center ">
<table className="table p-0 text-xs text-center text-blue-500 dark:text-blue-400">
  <thead className="text-xs text-gray-700 uppercase text-semibold bg-zinc-50 dark:bg-zinc-700 dark:text-zinc-400">
    <tr className="table-row">
    <th className=" ">Date</th>
    <th className=" ">Hours</th>
    <th className=" ">Tips</th>
    <th className=" ">Downs</th>
    <th className=" ">Daily</th>
    </tr>
  </thead>
  <tbody>
      {data1.map((image) => (
    <tr key={image.id} className="text-xs table-row border-b dark:bg-amber-900 dark:border-zinc-700 odd:bg-white even:bg-amber-50 odd:dark:bg-zinc-900 even:dark:bg-zinc-700">
        <td  className="">{format(new Date(image.mates),'MM/dd/yyyy')}</td>
        <td  className="">{image.hours}</td>
        <td  className="">${image.tips}</td>
        <td  className="">{image.downs}</td>
        <td  className="">${image.daily}</td>
    </tr>

      ))}
  </tbody>
</table>
</div>

</> 
  )
}