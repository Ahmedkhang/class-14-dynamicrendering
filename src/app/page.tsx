import Link from 'next/link';
export default async function Main() {
  const url =await fetch('https://jsonplaceholder.typicode.com/comments');
  const response = await url.json();
   return(
    <div className='w-full h-auto bg-gray-500 text-white'>
     {
      response.map((content:any, index:number) => (
        <div key={index} className='text-xl font-semibold'>
        <Link href={`${content.id}`}>
        {content.id}&nbsp;&nbsp;&nbsp;
        {content.name}
        </Link>
        </div>
      ))
     }
    </div>
  )
}