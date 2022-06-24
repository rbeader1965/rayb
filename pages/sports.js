import { createClient } from "@supabase/supabase-js";

export async function getServerSideProps() {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_ROLE_KEY || ''
  )
  const { data } = await supabaseAdmin
  .from('sports')
  .select('*')
  .order('id');
  return {
    props: {
      data1: data,
    },
  }
}
const Sports = ({data1}) => {
  return (
    <>
<div className="bg-slate-500 box-border">
<table className="w-6/12 m-auto text-sm text-left text-gray-500 dark:text-gray-400">
  <thead className="font-barlow text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <tr>
    <th  scope="col" className="px-6 py-3">Date</th>
    <th  scope="col" className="px-6 py-3">Wager Type</th>
    <th  scope="col" className="px-6 py-3">Bet Amount</th>
    <th  scope="col" className="px-6 py-3">Result</th>
    <th  scope="col" className="px-6 py-3">Total</th>
    <th  scope="col" className="px-6 py-3">Running Total</th>
    </tr>
  </thead>
  <tbody>
      {data1.map((image) => (
    <tr key={image.id} className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
        <td  className="px-6 py-4">{image.date}</td>
        <td  className="px-6 py-4">{image.wager_type}</td>
        <td  className="px-6 py-4">${image.bet_amount}</td>
        <td  className="px-6 py-4">{image.result}</td>
        <td  className="px-6 py-4">${image.total}</td>
        <td  className="px-6 py-4">${image.running_total}</td>
    </tr>

      ))}
  </tbody>
</table>
</div>
    </>
 
  )
}

export default Sports