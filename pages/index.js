import { createClient } from "@supabase/supabase-js";
import Ideas from "../components/Ideas";

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



export default function Home({data1}) {
  return (
<>
<div className="bg-slate-500 box-border p-4 flex">

<div>
  <Ideas data1={data1}/>
</div>
</div>


</> 
  )
}

