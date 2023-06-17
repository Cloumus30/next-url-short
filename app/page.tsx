import Section1 from '@/components/landing/section-1'
import Section2 from '@/components/landing/section-2'
import Navbar from '@/components/navbar-custom'

async function getData(){
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')

  if(!res.ok){
    console.log(res.json())
    throw new Error("Failed To Fetch Data");
  }
  return res.json();
}

export default async function Home() {
  // const res = await getData()
  // console.log(res);
  return (
    <div>
      < Navbar/>
      < Section1 />
      < Section2 />
    </div>
  )
}
