
const Sports = () => {
  return (
    <>
       <div className="w-screen h-screen bg-cover bg-[url('/34.jpeg')] ">
       <h1 className="p-4 text-3xl text-orange-500">Sports</h1>
    <table className=" w-full border-2 text-center text-2xl">
        <thead>
            <tr>
                <th>Date</th>
                <th>Wager Type</th>
                <th>Amount</th>
                <th>Result</th>
                <th>Overall</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Today</td>
                <td>Round Robin</td>
                <td>$25,000</td>
                <td>Win</td>
                <td>$150,000</td>
            </tr>
        </tbody>
    </table>
    </div>

    </>
 
  )
}

export default Sports