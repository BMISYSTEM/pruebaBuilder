import Image from "next/image";
import React from "react";
import Link from "next/link";
import logo from "./assets/logo.png";
export const Navar = () => {
  return (
    <nav className="fixed w-full flex flex-row py-2 gap-5 px-20 z-50 ">
      <Image src={logo} alt="Logo Registel" width={100} height={25} />
      <ul className="w-full flex flex-row gap-5 justify-start border-b-2 border-white p-0 items-center">
        <li className="text-white font-semibold">
           <Link href={'/'}>Inicio</Link> 
        </li>
        <li className="text-white font-semibold">
            <Link href={'/nosotros'}>Nosotros</Link> 
        </li>
        <li className="text-white font-semibold">
            <Link href={'/productos&servicios'}>Productos y Servicios</Link>
        </li>
        <li className="text-white font-semibold">
            <Link href={'/contactenos'}>Contactenos</Link>
        </li>
      </ul>
      <div className="w-full flex flex-col justify-end items-center">
        <form action="" className="w-full flex flex-row justify-end gap-5 items-center ">
            <div className="relative ">
                <div className="absolute ml-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                        <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                    </svg>
                </div>
                <input type="text" className="py-2 w-40 px-10 bg-transparent border border-white h-7 rounded-xl placeholder-white text-sm" placeholder="Buscar" />
            </div>
        </form>
      </div>
    </nav>
  );
};
