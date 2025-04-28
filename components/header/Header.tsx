
import Image from 'next/image'
import React, { useEffect } from 'react'
import blog from './assets/blogs.png'
import inicio from './assets/principio.png'
export const Header = () => {
   
  return (
    <header className='w-full h-screen  relative '>
        <div className='absolute w-full h-full bg-[#36508C]/50 z-40'>

        </div>
        <div className='w-full h-screen text-star flex flex-col justify-center gap-2 absolute px-[8.5rem] '>
            <div className='w-1/3 h-full flex flex-col justify-center  gap-14 '>
                <div className='flex flex-col gap-2 z-40'>
                    <h1 className='text-4xl font-bold text-white'>Registel</h1>
                    <p className='text-white font-semibold '>
                        Registel se especializa en solucionar a
                        través de tecnología la necesidad de
                        monitorear y contabilizar las personas que
                        ingresan al sistema de transporte público
                        o establecimientos que lo requieran.
                    </p>
                </div>
                <div className=' w-full flex flex-col justify-center z-50'>
                    <div className='flex flex-col items-center w-42'>
                        <div className='relative flex flex-col items-center'>
                            <Image src={blog} alt='Icono de Blog' width={70} height={70} className='absolute z-50'/>
                            <div className='w-[100px] h-[100px] mt-[-1rem] ml-[-.2rem] bg-transparent border border-[#36508C]  rounded-full absolute '></div>
                            <div className='w-[100px] h-[100px] bg-[#36508C] ml-[-.2rem]  border border-[#36508C] rounded-full '></div>
                        </div>
                        <div className='z-50 mt-[-.7rem]'>
                            <button className='py-3 w-40  px-5 bg-white cursor-pointer text-[#36508C] font-extrabold rounded-2xl border-[#36508C] border-2'>
                                BLOG
                            </button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <div>

        </div>
       
        <Image src={inicio} alt='Imagen de fondo, con plaqueta de componentes electronicos y cautin' layout='fill'  objectFit='cover'/>
    
    </header>
  )
}
