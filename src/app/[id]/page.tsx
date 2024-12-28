export default async function DynamicRoute(props:any){
    const url = await fetch(`https://jsonplaceholder.typicode.com/comments/${props.params.id}`)
    const response = await url.json();
    return(
     <div className='w-full h-auto bg-white'>
        <h1 className='text-2xl text-red-600 font-bold'>
            {props.params.id}
            {response.email} <br/><br/>
            {response.body}
        </h1>
     </div>
    )
}