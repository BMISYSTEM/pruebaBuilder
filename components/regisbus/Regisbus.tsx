import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import telefono from './assets/telefono.png'
export const Regisbus = () => {
  return (
    <section className='w-full h-screen  flex items-center justify-center'>
          <div className='w-full h-full flex flex-row px-[8.5rem] '>
            {/* mensaje */}
            <div className='w-full h-full flex flex-col gap-3 items-end justify-center'>
              <h4 className='text-5xl text-end font-extrabold text-[#36508C]'>Regisbus con camara incorporada</h4>
              <Link href={'/vermas'} className='py-2 px-5 bg-[#36508C] text-white font-bold rounded-2xl'>
                <p>Ver mas</p>
              </Link>
            </div>
            {/* imagen */}
            <div className='w-full'>
              <Image alt='RegisBus' src={telefono} width={500} height={500}/>
            </div>
          </div>
      </section>
  )
}
