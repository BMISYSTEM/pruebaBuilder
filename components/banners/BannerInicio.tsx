

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
interface props{
    imagen:string,
    titulo:string,
    descripcion:string,
}
export const BannerInicio = ({imagen,descripcion,titulo}:props) => {
  
  return (
    <Link href={'/'} className='w-full flex h-full '>
        <Image src={imagen} title={titulo} alt={descripcion} width={1290} height={100} loading="lazy"  className=' w-full h-ful object-contain'/>  
    </Link>
  );
};
