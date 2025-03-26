'use client'

import { useState } from "react"
import openMenu from './assets/openMenu.svg'
import Image from "next/image"
import facebook from './assets/facebook.png'
import instagram from './assets/instagram.png'
import youtube from './assets/youtube.png'
import inkeding from './assets/linkedin.png'
import whatsapp from './assets/whatsapp.png'
import rdw from './assets/rdw.svg'
export const Aside = () => {
    const [asideVisible,setAsideVisible] = useState(true)
  return (
        <aside className='w-20 h-screen  fixed right-0 z-[89] '>
            <div className='relative  h-screen w-16  '>
                <button onClick={()=>setAsideVisible(!asideVisible)}
                    className={` transition duration-100 ${asideVisible ? '' : 'left-[93%] '}  w-10 cursor-pointer   absolute top-[50%] rounded-full h-10`}>
                    <div className={`absolute top-[42%] transform duration-300 ${asideVisible ? " rotate-180 " : null}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </div>
                    <Image 
                        src={openMenu} 
                        alt='Icono de abrir menu' 
                        width={20} 
                        height={20}
                    />
                    
                </button>
                <section 
                    className={` ${asideVisible ? 'w-full ml-5' : 'w-[0px]'} flex flex-col gap-5 items-center justify-center h-screen bg-[#2DA9DE]/60 backdrop-blur-md  ` }>
                        
                        <button title="Boton para iniciar regisdataweb" className="mb-10 flex flex-col gap-2 cursor-pointer">
                            <Image src={rdw} alt="Imagen de faceebook" width={40} height={40}/>
                            {asideVisible ? 
                                <p className="text-lg font-bold text-white">Inicio</p>
                            : null}
                        </button>
                        <button title="boton para ir a fecebbok" className=" cursor-pointer">
                            <Image src={facebook} alt="Imagen de faceebook" width={40} height={40}/>
                        </button>
                        <button title="boton para ir a instagram" className=" cursor-pointer">
                            <Image src={instagram} alt="Imagen de instagram" width={40} height={40}/>
                        </button>
                        <button title="boton para ir a canal de youtube" className=" cursor-pointer">
                            <Image src={youtube} alt="Imagen de youtube" width={40} height={40}/>
                        </button>
                        <button title="boton para ir a inkeding" className=" cursor-pointer">
                            <Image src={inkeding} alt="Imagen de inkeding" width={40} height={40}/>
                        </button>
                        <button title="boton para ir a chat de whatsApp" className=" cursor-pointer">
                            <Image src={whatsapp} alt="Imagen de whatsapp" width={40} height={40}/>
                        </button>
                
                
                
                </section>
            </div>
        </aside>
  )
}

