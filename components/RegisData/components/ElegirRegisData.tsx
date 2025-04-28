'use client'

import Image from 'next/image'
import React from 'react'
import 'animate.css'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'
import img7 from '../assets/img7.png'
import img8 from '../assets/img8.png'
import img9 from '../assets/img9.png'
import img10 from '../assets/img10.png'
export const ElegirRegisData = () => {
  return (
    <>
        <section className='w-full px-[8.5rem] flex flex-col gap-5 pt-40 '>
            <h2 className='text-5xl font-extrabold text-[#1f4e85] text-center'>¿Por Qué Elegir Regisdata?</h2>
            <p className='text-2xl font-light text-[#1f4e85] text-center'>Al usar Regisdata, obtienes una solución única que centraliza todas
                tus operaciones, desde la planificación de rutas y la liquidación hasta
                el monitoreo de accesos en espacios de alto tráfico. Nuestra
                plataforma es fácil de usar y se adapta a tus necesidades</p>
            <div className='w-full h-full flex flex-row gap-4 justify-center items-center'>
                <div className='w-full flex gap-2 justify-end '>
                    <Image alt='Imagen de computador' src={img3} width={500} height={500} className='animatexrever'/>
                </div>
                <div className='w-2/3 h-full flex justify-start items-center  mb-30 ml-[-10rem]'>
                    <p className='text-xl font-bold text-[#bba4cb] animatexView'> SISTEMA ADAPTABLE <br/>
                        A DIFERENTES
                        DISPOSITIVOS
                    </p>
                </div>
            </div>
        </section>
        <section className='w-full px-[8.5rem] flex flex-row gap-5  items-center relative '>
            <div className='absolute left-[-90] bottom-[-120]'>
                <Image src={img5} alt='aro flotando' width={400} height={400} className='animate-pulse'/>
            </div>
            <div className='w-full h-full flex flex-col gap-5'>
                <Image alt='Imagen de regisdata celular con varias pantllas flotando' src={img4} width={400} height={400} className='z-50'  />
            </div>
            <div className='w-full h-full flex flex-col gap-5 '>
                <div className='w-full flex flex-col animatexView'>
                    <h3 className='py-1 px-4 rounded-xl bg-[#9db1ca] text-white font-light text-xl'>Monitoreo en Tiempo Real:</h3>
                    <p className='px-4 text-xl font-light'>Controla cada vehículo, espacio o usuario al instante.</p>
                </div>
                <div className='w-full flex flex-col animatexView'>
                    <h3 className='py-1 px-4 rounded-xl bg-[#9db1ca] text-white font-light text-xl'>Reducción de Costos Operativos:</h3>
                    <p className='px-4 text-xl font-light'>Optimizamos tus rutas y procesos de liquidación
                    para que ahorres tiempo y recursos.
                    </p>
                </div>
                <div className='w-full flex flex-col animatexView'>
                    <h3 className='py-1 px-4 rounded-xl bg-[#9db1ca] text-white font-light text-xl'>Análisis Inteligente de Datos:</h3>
                    <p className='px-4 text-xl font-light'>
                        Con inteligencia artificial integrada, toma decisiones
                        estratégicas basadas en estadísticas precisas.
                    </p>
                </div>
            </div>
        </section>
        {/* para quien es ideal  */}
        <section className='w-full h-screen flex flex-row gap-2 px-[8.5rem] overflow-hidden items-center '>
            <div className='w-full h-96 flex flex-col  '>
                <Image src={img6} alt='Imagen de computador mostrando pantallas flotantes' width={500} height={500}/>
            </div>
            <div className='w-full flex flex-col relative '>
                <div className='z-30'>
                    <h4 className='text-3xl  text-[#1f4e85] font-extrabold'>¿Para Quién Es Ideal Regisdata?</h4>
                    <p className='text-2xl font-light text-[#1f4e85]'>Regisdata es perfecto para empresas en
                    diversos sectores, tales como:</p>
                    <div className='w-full mt-5 flex flex-col gap-10'>
                        <p className='text-2xl font-light text-[#1f4e85]'><span className='text-2xl font-bold text-[#1f4e85]'>Empresas de Transporte: </span>Optimización de
                        rutas, monitoreo de flota y liquidación de
                        efectivo.</p>
                        <p className='text-2xl font-light text-[#1f4e85]'><span className='text-2xl font-bold text-[#1f4e85]'>Discotecas y Eventos:</span>Control de accesos
                        y administración de flujo de personas.</p>
                        <p className='text-2xl font-light text-[#1f4e85]'><span className='text-2xl font-bold text-[#1f4e85]'>Baños Públicos y Centros Comerciales:</span>Optimización de accesos y auditoría en
                        tiempo real..</p>
                    </div>

                </div>
                <div className='absolute right-[-10rem]'>
                    <Image src={img7} alt='manchas moradas flotando' width={500} height={500}/>
                </div>
            </div>
        </section>
        {/* video seccion  */}
        <section className='w-full h-screen bg-[#1f4e85] flex flex-col items-center justify-center'>
            <p>Video </p>
        </section>
        {/* modulo de reporte */}
        <section className='w-full  h-auto flex  md:px-[8.5rem] px-2 pt-20 '>
            <div className='w-full h-full flex md:flex-row flex-col-reverse gap-2  '>
                <div className='md:w-2/3 w-full flex flex-col mt-20'>
                    <div className=' mr-[-3rem] z-30'>
                        <Image src={img8} alt='imagen de modulo de reportes' width={600} height={600} className=''/>
                    </div>
                    <div className='w-full flex flex-col '>
                        <p className='text-sm font-bold text-[#bba4cb]'>Liquidacion</p>
                        <p className='text-sm text-[#1f4e85]'> Detallado de liquidación / Consolidado
                            vehículos no liquidados / Liquidación por
                            liquidador / Categoría de descuento por
                            pasajeros / Categoría de descuento por dinero</p>
                    </div>
                    <div className='w-full flex flex-col '>
                        <p className='text-sm font-bold text-[#bba4cb]'>General</p>
                        <p className='text-sm text-[#1f4e85]'>Mantenimientos Historial / Puntos de control
                        por vehículo / Producción por vehículo /
                        Producción por conductor / Alarmas por
                        vehículo / Nivel de ocupación / Comparativo
                        producción por ruta/ Consolidado productividad
                        por hora / Consolidado de vehiculo / Días
                        laborados / Distribución tarifaria por ruta</p>
                    </div>
                    <div className='w-full flex flex-col '>
                        <p className='text-sm font-bold text-[#bba4cb]'>Consolidado de rutas</p>
                        <p className='text-sm text-[#1f4e85]'>Planilla modo de ocupación / Frecuencia de ruta
                        Consolidado de despacho / Planilla de despacho
                        por ruta / Boleta de despacho por vehículo</p>
                    </div>
                    <div className='w-full flex flex-col '>
                        <p className='text-sm font-bold text-[#bba4cb]'>Conductor</p>
                        <p className='text-lg text-[#1f4e85]'>Infracciones de límite de velocidad</p>
                    </div>
                    <div className='w-full flex flex-col '>
                        <p className='text-sm font-bold text-[#bba4cb]'>Auditoria</p>
                        <p className='text-sm text-[#1f4e85]'>Auditoria ajustes pre liquidación</p>
                    </div>
                </div>
                <div className='w-full h-full flex flex-col gap-5'>
                    <h5 className='text-6xl font-extrabold text-[#1f4e85]'>Modulo Reportes</h5>
                    <div>
                        <div className='p-5 rounded-xl bg-[#bba4cb] text-white px-10'>
                            <p className='text-xl'> Ofrece una visión integral del desempeño del transporte
                                mediante gráficas intuitivas. Obtén información detallada sobre
                                la productividad por ruta, cumplimiento de itinerarios, flujo de
                                pasajeros por hora, descuentos por categoría y capacidad
                                transportadora. Este módulo es esencial para optimizar la
                                operación y tomar decisiones estratégicas.
                                Beneficio: Permite a los gestores tomar decisiones rápidas y
                                basadas en datos. Esto es crucial para responder a cambios en
                                la demanda y necesidades operativas, asegurando que la
                                operación sea flexible y eficiente.</p>
                        </div>
                        <div className='w-full flex flex-row justify-end gap-2  '>
                            <p className='text-sm font-bold text-[#bba4cb]'>Podrás seleccionar rango de fechas y exportarlo</p>
                            <div className=' flex flex-row gap-2 mt-[-3rem]'>
                                <Image src={img9} alt='imgen de excel' width={60} height={60}/>
                                <Image src={img10} alt='imgen de csv' width={60} height={60}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* modulo de rastreo */}
        <section className='w-full  h-auto flex  px-[8.5rem] pt-20 '>
            <div className='w-full h-full flex flex-row gap-2  '>
                <div className='w-2/3 flex flex-col mt-20'>
                    <div className=' mr-[-3rem] z-30'>
                        <Image src={img8} alt='imagen de modulo de reportes' width={600} height={600} className=''/>
                    </div>
                    <div className='w-full flex flex-col '>
                        <p className='text-sm font-bold text-[#bba4cb]'>Liquidacion</p>
                        <p className='text-sm text-[#1f4e85]'> Detallado de liquidación / Consolidado
                            vehículos no liquidados / Liquidación por
                            liquidador / Categoría de descuento por
                            pasajeros / Categoría de descuento por dinero</p>
                    </div>
                    <div className='w-full flex flex-col '>
                        <p className='text-sm font-bold text-[#bba4cb]'>General</p>
                        <p className='text-sm text-[#1f4e85]'>Mantenimientos Historial / Puntos de control
                        por vehículo / Producción por vehículo /
                        Producción por conductor / Alarmas por
                        vehículo / Nivel de ocupación / Comparativo
                        producción por ruta/ Consolidado productividad
                        por hora / Consolidado de vehiculo / Días
                        laborados / Distribución tarifaria por ruta</p>
                    </div>
                    <div className='w-full flex flex-col '>
                        <p className='text-sm font-bold text-[#bba4cb]'>Consolidado de rutas</p>
                        <p className='text-sm text-[#1f4e85]'>Planilla modo de ocupación / Frecuencia de ruta
                        Consolidado de despacho / Planilla de despacho
                        por ruta / Boleta de despacho por vehículo</p>
                    </div>
                    <div className='w-full flex flex-col '>
                        <p className='text-sm font-bold text-[#bba4cb]'>Conductor</p>
                        <p className='text-lg text-[#1f4e85]'>Infracciones de límite de velocidad</p>
                    </div>
                    <div className='w-full flex flex-col '>
                        <p className='text-sm font-bold text-[#bba4cb]'>Auditoria</p>
                        <p className='text-sm text-[#1f4e85]'>Auditoria ajustes pre liquidación</p>
                    </div>
                </div>
                <div className='w-full h-full flex flex-col gap-5'>
                    <h6 className='text-6xl font-extrabold text-[#1f4e85]'>Modulo Rastreo</h6>
                    <div>
                        <div className='p-5 rounded-xl border-2 border-[#bba4cb] text-[#1f4e85] px-10'>
                            <p className='text-xl'> Visualiza opciones clave por vehículo o flota, ya sea de forma gráfica
                                o en tablas. Desde puntos de control hasta pasajeros ingresados,
                                alarmas, imágenes y eventos, obtén una visión completa de tus
                                activos.
                                Beneficio: Mantén una supervisión precisa de toda la operación para
                                detectar problemas y mejorar la productividad de cada vehículo y de
                                la flota completa..</p>
                        </div>
                        <div className='w-full flex flex-row justify-end gap-2  '>
                            <p className='text-sm font-bold text-[#bba4cb]'>Podrás seleccionar rango de fechas y exportarlo</p>
                            <div className=' flex flex-row gap-2 mt-[-3rem]'>
                                <Image src={img9} alt='imgen de excel' width={60} height={60}/>
                                <Image src={img10} alt='imgen de csv' width={60} height={60}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
