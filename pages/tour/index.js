export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props:{ ninjas: data }
    }
}

const Tour = ({ninjas}) => {
    return ( 
      <div className="w-full">
      <h1>All Ninjas</h1>
      {ninjas.map(ninja => (
        <div key={ninja.id}>
         <a className="text-center text-2xl">
            <h3>{ninja.name}</h3>
            <h4>{ninja.phone}</h4>
            <h5>{ninja.email} </h5>
         </a>
        </div>
      ))}
      </div>
     );
}
 
export default Tour;