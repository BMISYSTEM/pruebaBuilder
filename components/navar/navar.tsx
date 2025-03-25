'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import logo from "./assets/logo.png";
import logo2 from "./assets/logo2.png";
import buscar from "./assets/buscar.png";

export const Navar = () => {
  const page = usePathname()
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });
  const handleScroll = () => {
    setScrollPosition({
      x: window.scrollX,
      y: window.scrollY
    });
  };
  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[])
  console.log(scrollPosition)
  return (
    <nav className={`transition duration-150 ${page === "/" ? scrollPosition.y > 600 ? 'bg-[#1f508f]/60 backdrop-blur-md' : null : "backdrop-blur-xl" } fixed w-full flex flex-row py-2 gap-5 px-20 z-[99999] `}>
      <Image src={page === "/" ? logo : logo2} alt="Logo Registel" width={100} height={25} />
      <ul className={`w-full flex flex-row gap-5 justify-start border-b-2 ${page === "/" ? "border-white" : "border-[#1f508f]" } p-0 items-center`}>
        <li className={`${page === "/" ? "text-white " : "text-[#1f508f]"} font-semibold`}>
           <Link href={'/'}>Inicio</Link> 
        </li>
        <li className={`${page === "/" ? "text-white " : "text-[#1f508f]"} font-semibold`}>
            <Link href={'/nosotros'}>Nosotros</Link> 
        </li>
        <li className={`${page === "/" ? "text-white " : "text-[#1f508f]"} font-semibold`}>
            <Link href={'/productos&servicios'}>Productos y Servicios</Link>
        </li>
        <li className={`${page === "/" ? "text-white " : "text-[#1f508f]"} font-semibold`}>
            <Link href={'/contactenos'}>Contactenos</Link>
        </li>
      </ul>
      <div className="w-full flex flex-col justify-end items-center">
        <form action="" className="w-full flex flex-row justify-end gap-5 items-center ">
            <div className="relative ">
                <div className="absolute ml-2 mt-1">
                    <Image src={buscar} alt="Imagen de lupa para input de busqueda" width={20} height={20}/>
                </div>
                <input type="text" 
                className={`py-2 w-40 px-10 bg-transparent border ${page === "/" ? "border-white" : "border-[#1f508f]" } h-7 rounded-xl placeholder-white text-sm`}
                 placeholder="Buscar" />
            </div>
        </form>
      </div>
    </nav>
  );
};
