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
  const [openProducts,setOpenProducts] = useState(false)
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
  return (
    <nav className={`transition duration-150 ${page === "/" ? scrollPosition.y > 600 ? 'bg-[#1f508f]/60 backdrop-blur-md' : null : "backdrop-blur-xl" } fixed w-full flex flex-row py-2 gap-5 px-20 z-[99999] `}>
      <Link href={'/'} className="w-[200px] ">
        <Image src={page === "/" ? logo : logo2} alt="Logo Registel" width={100} height={25} />
      </Link>
      <ul className={`w-full flex flex-row gap-5 justify-start border-b-2 ${page === "/" ? "border-white" : "border-[#1f508f]" } p-0 items-center`}>
        <li className={`${page === "/" ? "text-white " : "text-[#1f508f]"} font-semibold`}>
           <Link href={'/'}>Inicio</Link> 
        </li>
        <li className={`${page === "/" ? "text-white " : page === "/nosotros" ? "bg-[#1f508f] text-white py-1 px-3 rounded-sm" : "text-[#1f508f]" } font-semibold`}>
            <Link href={'/nosotros'}>Nosotros</Link> 
        </li>
        <li onMouseEnter={()=>setOpenProducts(true)} onMouseLeave={()=>setOpenProducts(false)} className={`${page === "/" ? "text-white " : "text-[#1f508f]"} font-semibold relative`}>
          <button  className="flex flex-row gap-0.5 items-center">
            <p>Productos y Servicios</p>
            <div className="w-4 h-4 m-0 p-0">
              {openProducts ? 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                </svg>
              :
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              }
            </div>
          </button>
          {openProducts ? 
            <div 
            onMouseEnter={()=>setOpenProducts(true)} onMouseLeave={()=>setOpenProducts(false)}
            className="absolute w-96 h-auto  rounded-xl shadow-2xl bg-white p-2 flex flex-row gap-1 z-[999999999]">
              <div className="w-full  flex flex-col px-1 py-2">
                <p className="text-xl text-[#1f508f]">Productos</p>
                <Link href={'/nosotros'} className="border-b border-white transition-all hover:border-[#1f508f]">
                  <p className="text-[#1f508f] text-sm">Regisbus</p>
                </Link> 
                <Link href={'/nosotros'} className="border-b border-white transition-all hover:border-[#1f508f]">
                  <p className="text-[#1f508f] text-sm">RegisCamara</p>
                </Link> 
                <Link href={'/nosotros'} className="border-b border-white transition-all hover:border-[#1f508f]">
                  <p className="text-[#1f508f] text-sm">RegisFlota</p>
                </Link> 
                <Link href={'/nosotros'} className="border-b border-white transition-all hover:border-[#1f508f]">
                  <p className="text-[#1f508f] text-sm">RegisNose</p>
                </Link> 
              </div>
              <div className="w-full  flex flex-col px-1 py-2">
                <p className="text-xl text-[#1f508f]">Servicios</p>
                  <Link href={'/nosotros'} className="border-b border-white transition-all hover:border-[#1f508f]">
                    <p className="text-[#1f508f] text-sm">Regisbus</p>
                  </Link> 
                  <Link href={'/nosotros'} className="border-b border-white transition-all hover:border-[#1f508f]">
                    <p className="text-[#1f508f] text-sm">RegisCamara</p>
                  </Link> 
                  <Link href={'/nosotros'} className="border-b border-white transition-all hover:border-[#1f508f]">
                    <p className="text-[#1f508f] text-sm">RegisFlota</p>
                  </Link> 
                  <Link href={'/nosotros'} className="border-b border-white transition-all hover:border-[#1f508f]">
                    <p className="text-[#1f508f] text-sm">RegisNose</p>
                  </Link> 
              </div>



            </div>
          : 
            null
          }
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
