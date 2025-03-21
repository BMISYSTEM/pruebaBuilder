import Image from 'next/image'
import React from 'react'
import blog from './assets/blogs.png'
export const Header = () => {
  return (
    <header className='w-full h-screen bg-[#1F508F]/70 relative '>
        <div className='w-full h-screen text-star flex flex-col justify-center gap-2 absolute'>
            <div className='w-1/3 h-full flex flex-col justify-center px-20 gap-14'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-4xl font-bold text-white'>Registel</h1>
                    <p className='text-white font-semibold '>
                        Registel se especializa en solucionar a
                        través de tecnología la necesidad de
                        monitorear y contabilizar las personas que
                        ingresan al sistema de transporte público
                        o establecimientos que lo requieran.
                    </p>

                </div>
                <div className=' w-full flex flex-col justify-center'>
                    <div className='flex flex-col items-center w-42'>
                        <div className='relative flex flex-col items-center'>
                            <Image src={blog} alt='Icono de Blog' width={70} height={70} className='absolute z-50'/>
                            <div className='w-[100px] h-[100px] mt-[-1rem] ml-[-.2rem] bg-transparent border border-[#1f508f]  rounded-full absolute '></div>
                            <div className='w-[100px] h-[100px] bg-[#1f508f] ml-[-.2rem]  border border-sky-500 rounded-full '></div>
                        </div>
                        <div className='z-50 mt-[-.7rem]'>
                            <button className='py-3 w-40 px-5 bg-white cursor-pointer text-[#1f508f] font-extrabold rounded-2xl border-[#1f508f] border-2'>
                                BLOG
                            </button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </header>
  )
}
