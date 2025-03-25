import Image from 'next/image'
import React from 'react'
import ximena from './assets/ximena.png'
export const Empleados = () => {
  return (
    <section className="w-full flex flex-row gap-5 px-[8.5rem]">
        {/* foto */}
        <div className='w-full flex flex-row gap-5'>
            <div className='w-full flex items-center justify-end'>
                <div className=' flex flex-col relative w-96  items-end'>
                    {/* formas  */}
                    <div className='absolute w-full h-full flex items-center justify-end'>
                        <div className='w-80 h-80 bg-slate-200 rounded-full'>

                        </div>
                    </div>
                    <div className='z-40'>
                        <Image src={ximena} alt='ximena' width={400} height={300}/>
                    </div>
                    {/* imagen  */}
                </div>
            </div>
            <div className='w-full flex-col gap-3 z-40'>
                {/* mensaje */}
                <div className='w-full h-30 bg-blue-200 rounded-2xl p-2 ml-[-7rem] mt-10'>
                    <p className='text-xl font-bold text-[#36508C] '>
                        Hola, yo soy Jairo Valero ingeniero electrónico. Desempeño el cargo de jefe operativo
                        en la región de la Orinoquía. soy una persona muy metódica
                    </p>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
