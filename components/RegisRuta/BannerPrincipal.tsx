import Image from 'next/image'
import React from 'react'

import banner from './assets/banner.png'
import mapa from './assets/mapa.png'
export const BannerPrincipal = () => {
  return (
    <>
    {/* banner principal */}
        <section className='w-full h-[70vh] flex flex-row px-[8.5rem]  justify-center bg-[#D9E3C9]'>
            <div className='w-[30rem]  h-full flex flex-col gap-2 justify-end pb-10  '>
                <h1 className='text-3xl font-extrabold text-[#1F4E85]'>RegisRuta</h1>
                <p className='text-xl text-[#1F4E85] font-medium'>
                es una aplicación y sistema electrónico de control de ﬂota diseñada
                especíﬁcamente para empresas de transporte público y privado. Utiliza
                tecnologías como WIFI, GPS, GPRS y software operativo para recopilar
                datos precisos sobre las rutas y tiempos de los vehículos.
                </p>
                <div className='w-full flex flex-row gap-5'>
                    <button className='py-1 px-4 rounded-xl bg-[#1F4E85]'><p className='font-bold text-white'>Comprar</p></button>
                </div>
            </div>
            <div className='w-[30rem] relative items-center justify-center '>
                <div className='absolute right-[-10%]  bottom-[-150]'>
                    <Image alt='imagen de reguisdata' src={banner} width={300} height={500} />
                </div>
            </div>
        </section>
        {/* mapa */}
        <section className='w-full h-screen pt-10 '>
            <div className='w-full h-52 flex flex-row justify-items-start  mt-10'>
                <button className='bg-[#1F4E85] px-10 rounded-r-[50] h-24 '>
                    <p className='text-white text-xl font-bold'>Cotiza<br/><span className='text-white text-lg p-0 m-0'>con nosotros</span><br/>
                    <span className='text-white text-sm'>gerente@registelcolombia</span></p>
                </button>
            </div>
            <div className='w-full '>
                <Image src={mapa} width={1000} height={1000} alt='mapa' className='w-full h-full object-contain'/>
            </div>
        </section>
        {/* regisruta */}
        <section className='w-full h-screen flex flex-col gap-2 items-center '>
            <div className='w-[60rem] h-full flex flex-col items-center  gap-5 '>
                <h1 className='text-7xl font-bold text-[#ECF1E5]'>RegisRuta</h1>
                <div className='mx-10'>
                    <p className='text-center text-xl text-[#1F4E85] font-semibold'>
                        Aborda los desafíos tradicionales en la gestión de ﬂotas al proporcionar
                        información rápida, exacta y conﬁable sobre los tiempos de las rutas.
                        Mejora la movilidad al eliminar la necesidad de paradas para certiﬁcar
                        tiempos y permite un control más efectivo de despachos y recorridos.
                        Regisruta es la respuesta innovadora para la gestión eﬁciente de ﬂotas
                        en el sector de transporte público. Nuestra solución integral combina
                        hardware y software especializado para ofrecer una visión completa y
                        en tiempo real de las operaciones de transporte.
                    </p>

                </div>
            </div>
        </section>
    </>
  )
}
