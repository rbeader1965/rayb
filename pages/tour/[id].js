export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(ninja => {
        return{
            params: {id:ninja.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }
}
export const getStaticProps = async (context) => {
 const id = context.params.id;
            <h1>{ninja.name}</h1>
 const res = await fetch('https://jsonplaceholder.typicode.com/users' + id);
 const data = await res.json();

 return {
    props: { ninja: data}
 }

}

const Rado = ({ninja}) => {
    return ( 
        <div>
            <h1>{ninja.name}</h1>
            <h1>{ninja.email}</h1>
            <h1>{ninja.phone}</h1>
        </div>
     );
}
 
export default Rado;