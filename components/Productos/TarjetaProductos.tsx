'use client'

import Image from "next/image"

interface props{
    imagen:string,
    titulo:string,
    description:string
}
export const TarjetaProductos = ({imagen,titulo,description}:props) => {
  return (
    <div className='w-56 h-92  rounded-xl  flex flex-col flex-shrink-0 cursor-pointer border border-transparent transition duration-150  hover:border-[#1f508f]'>
        {/* imagen */}
        <div className='w-full h-2/5  rounded-t-xl flex justify-center items-center'>
            <Image src={imagen} alt={titulo} width={100} height={100} />
        </div>
        <div className='w-full h-3/5 flex flex-col gap-2 px-2'>
        <h3 className='text-xl font-bold text-[#1f508f] text-center' >Titulo</h3> 
        <p className='text-[#1f508f] font-light text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque dolorem incidunt impedit. Impedit laboriosam ex veniam unde necessitatibus, atque ad pariatur mollitia aliquam reprehenderit? Est recusandae voluptates debitis fuga in!</p>
        </div>
     </div>
  )
}
