'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import empleado1 from './assets/VALERO JAIRO ALEJANDRO.png'
import 'animate.css'
export const Empleados = () => {
    const [textoComplet,setTextoComplet] = useState(false);
  return (
    <section className="w-full flex flex-row justify-center gap-5 px-[8.5rem]">
        {/* foto */}
        <div className='w-[80rem] flex flex-row '>
            <div className='w-full flex flex-row items-center justify-end text-white ' >
                <button title='izquierda' className='w-10 h-10 cursor-pointer bg-[#C8E4F1] rounded-full flex items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <div className=' flex flex-col relative w-96  items-end '>
                    {/* formas  */}
                    <div className='absolute w-full h-full flex items-center justify-center'>
                        <div className='w-80 h-80 bg-slate-200 rounded-full'>

                        </div>
                    </div>
                    <div className='z-40'>
                        <Image src={empleado1} alt='ximena' width={400} height={300}/>
                    </div>
                    {textoComplet ? 
                        <div className='animate__animated animate__fadeInUp  w-1/3 flex flex-col gap-2 text-end absolute left-[7%] top-[80%] z-50'>
                            <p className='text-5xl font-extrabold text-[#BBDEEE] drop-shadow-xl'>Jairo</p>
                            <p className='text-xl font-extrabold text-[#BBDEEE] drop-shadow-xl'>Valero</p>
                        </div>
                    : null
                    }
                    {/* imagen  */}
                </div>
                <button title='derecha' className='w-10 h-10 bg-[#C8E4F1] cursor-pointer rounded-full flex text-white items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
            <div className='w-2/3 flex-col gap-3 z-40 '>
                {/* mensaje */}
                <div className='w-full transition-all h-auto bg-[#BBDEEE] rounded-2xl p-2 ml-[-8rem] mt-5'>
                    <p className='text-lg font-bold text-[#1F4E85] '>
                        Hola, yo soy Jairo Valero ingeniero electrónico. Desempeño el cargo de jefe operativo
                        en la región de la Orinoquía. soy una persona muy metódica
                        {textoComplet ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quisquam eligendi, commodi quaerat quae dolor inventore harum sunt illo in voluptatibus consectetur explicabo molestias itaque sequi delectus ex ipsam! Distinctio" : null}
                    </p>
                    <button onClick={()=>setTextoComplet(!textoComplet)} className='text-[#1F4E85] transition-all hover:text-white cursor-pointer'>
                        <p>{textoComplet ? "Ver menos" : "Ver mas"}</p>
                    </button>
                </div>
                {!textoComplet ? 
                
                    <div className='w-1/3 flex flex-col gap-2 text-end '>
                        <p className='text-5xl font-extrabold text-[#BBDEEE] drop-shadow-xl'>Jairo</p>
                        <p className='text-xl font-extrabold text-[#BBDEEE] drop-shadow-xl'>Valero</p>
                    </div>
            
                : null}
            </div>
        </div>
    </section>
  )
}
