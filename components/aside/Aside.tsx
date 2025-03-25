'use client'

import { useState } from "react"
import openMenu from './assets/openMenu.svg'
import Image from "next/image"
export const Aside = () => {
    const [asideVisible,setAsideVisible] = useState(true)
  return (
        <aside className='w-20 h-screen  fixed right-0 z-[89] '>
            <div className='relative  h-screen w-16  '>
                <button onClick={()=>setAsideVisible(!asideVisible)}
                    className={` transition duration-100 ${asideVisible ? '' : 'left-[93%] '}  w-10   absolute top-[50%] rounded-full h-10`}>
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
                    className={` ${asideVisible ? 'w-full ml-5' : 'w-[0px]'} flex flex-col h-screen bg-[#2DA9DE]/60 backdrop-blur-md  ` }>
                </section>
            </div>
        </aside>
  )
}

