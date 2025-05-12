'use client'
import Image from 'next/image'
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import banner from './assets/banner.png'
import mapa from './assets/mapa.png'
import gps from './assets/gps.png'
import caract1 from './assets/caract1.png'
import caract2 from './assets/caract2.png'
import modulo1 from './assets/modulo1.png'

import ben1 from './assets/ben1.png'
import ben2 from './assets/ben2.png'
import ben3 from './assets/ben3.png'
import ben4 from './assets/ben4.png'
import ben5 from './assets/ben5.png'
import eficiencia from './assets/eficiencia.png'
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
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
                <Image src={mapa} width={1920} height={1000} alt='mapa' className='w-full h-full object-contain'/>
            </div>
        </section>
        {/* regisruta */}
        <section className='w-full h-auto flex flex-col gap-2 items-center pb-20 '>
            <div className='w-[60rem] h-full flex flex-col items-center  gap-5 relative '>
                <h1 className='text-2xl font-bold text-[#1F4E85]'>RegisRuta</h1>
                <div className='mx-20'>
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
                <div className='absolute right-[-50] top-[30]'>
                    <Image src={gps} alt='imagen de gps' className='w-24 h-auto'/>
                </div>
            </div>
        </section>
        {/*  caracteristicas*/}
        <section className='w-full h-screen flex flex-col gap-2 items-center  mt-20'>
            <div className='w-[60rem] flex flex-col gap-5'>
                <h2 className='text-5xl font-bold text-[#1F4E85]'>Características</h2>
                <div className='w-full flex flex-row h-auto gap-2'>
                    <div className='flex flex-col gap-2'>
                        <div className='w-40 h-40 '>
                            <Image src={caract1} alt='caracteristica 1 ' width={1000} height={1000} className='w-40 h-40 object-contain '/>
                        </div>

                    </div>
                    <div>
                        <div className='w-full h-20 '>
                            <p className='text-[#1F4E85] font-semibold'>Puedes conﬁgurar nuestra plataforma, para que los despachos de los
                            vehículos no sea amañado. Por el contrario, sea equitativo para todos.</p>
                        </div>
                        <div className='w-full h-20 '>
                            <p className='text-[#1F4E85] font-semibold'>Permite a las empresas obtener resultados operativos en tiempo real
                            con indicadores y gráﬁcos adaptados a sus necesidades.</p>
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-row h-auto gap-2'>
                    <div className='flex flex-col gap-2'>
                        <div className='w-40 h-40 '>
                            <Image src={caract2} alt='caracteristica 2 ' width={1000} height={1000} className='w-40 h-40 object-contain '/>
                        </div>

                    </div>
                    <div>
                        <div className='w-full h-20 '>
                            <p className='text-[#1F4E85] font-semibold'>Utiliza tecnología GPS para establecer puntos de control virtuales y
                            garantizar la precisión de los datos.</p>
                        </div>
                        <div className='w-full h-20 '>
                            <p className='text-[#1F4E85] font-semibold'>Ofrece un software aplicativo y administrativo para convertir los datos
                            en información valiosa para la toma de decisiones.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* modulos carrousel */}
        <section className='w-full h-screen  mt-20 bg-[#DFE8CF] px-[8.5rem] pt-10'>
            <Carousel 
                 responsive={responsive}
                 autoPlay={true}
                 swipeable={true}
                 draggable={true}
                 showDots={true}
                 infinite={true}
                 partialVisible={false}
                 dotListClass="custom-dot-list-style"
            >
                <div className='w-80 h-[35rem] bg-white  rounded-xl shadow-xl py-2 px-4 flex flex-col gap-2'>
                    <div className='w-full h-1/3 flex items-center'>
                        <Image alt='imagen de modulo 1' src={modulo1} width={1290} height={1000} className='w-full h-auto'/>
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <h3 className='text-3xl text-center font-bold text-[#1F4E85]'>Modulo Reportes</h3>
                        <p className='text-[#1F4E85]'>
                            Ofrece una visión completa de la
                            liquidación, productividad y
                            comportamiento operativo. Desde
                            detalles sobre liquidaciones y
                            descuentos hasta informes sobre
                            mantenimiento despachos de
                            vehículos, producción por
                            conductor, etc. Este módulo
                            proporciona información clave
                            para optimizar la operación y
                            mejorar la eﬁciencia en el servicio
                            de transporte.
                        </p>
                        <p className='text-[#1F4E85] text-sm font-bold'>Liquidación, General, Consolidado
                        de rutas, Conductor, Auditorias</p>
                    </div>
                </div>
                <div className='w-80 h-[35rem] bg-white  rounded-xl shadow-xl py-2 px-4 flex flex-col gap-2'>
                    <div className='w-full h-1/3 flex items-center'>
                        <Image alt='imagen de modulo 1' src={modulo1} width={1290} height={1000} className='w-full h-auto'/>
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <h3 className='text-3xl text-center font-bold text-[#1F4E85]'>Modulo Rastreo</h3>
                        <p className='text-[#1F4E85]'>
                            Visualiza opciones clave por
                            vehículo o ﬂota, ya sea de forma
                            gráﬁca o en tablas. Desde puntos
                            de control hasta pasajeros
                            ingresados, alarmas, imágenes y
                            eventos, obtén una visión
                            completa de tus activos.
                        </p>
                        <p className='text-[#1F4E85] text-sm font-bold'></p>
                    </div>
                </div>
                <div className='w-80 h-[35rem] bg-white  rounded-xl shadow-xl py-2 px-4 flex flex-col gap-2'>
                    <div className='w-full h-1/3 flex items-center'>
                        <Image alt='imagen de modulo 1' src={modulo1} width={1290} height={1000} className='w-full h-auto'/>
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <h3 className='text-3xl text-center font-bold text-[#1F4E85]'>Modulo Auditorias</h3>
                        <p className='text-[#1F4E85]'>
                            Registra todas las novedades
                            en la aplicación, registrando
                            cualquier modiﬁcación o
                            intervención en los diferentes
                            módulos y dejando constancia
                            del funcionario que la ejecutó.
                        </p>
                        <p className='text-[#1F4E85] text-sm font-bold'></p>
                    </div>
                </div>
                
            </Carousel>
        </section>
        {/* beneficios  */}
        <section className='w-full h-auto flex justify-center mt-20'>
            <div className='w-[60rem] h-full flex flex-col gap-5 p-2'>
                <h4 className='text-5xl font-bold text-[#1F4E85] '>Beneficios</h4>
                {/* beneficios */}
                <section className='w-full flex flex-row gap-5'>
                    <div className='w-full flex flex-col gap-5'>
                        {/* uno  */}
                        <div className='flex flex-row relative h-24 '>
                            {/* imagen */}
                            <div className='absolute'>
                                <Image src={ben1} alt='beneficio 1 ' width={500} height={500} className='w-24 h-24'/>
                            </div>
                            {/* texto */}
                            <div className=' '>
                                <p className='text-lg text-[#1F4E85] border h-auto ml-20 w-96 px-4 rounded-xl border-[#1F4E85]'>Información sin manipulaciones,
                                    clara y en tiempo real (toma de
                                    decisiones oportunas y efectivas)</p>
                            </div>
                        </div>
                        <div className='flex flex-row relative h-24'>
                            {/* imagen */}
                            <div className='absolute'>
                                <Image src={ben2} alt='beneficio 1 ' width={500} height={500} className='w-24 h-24'/>
                            </div>
                            {/* texto */}
                            <div className=' '>
                                <p className='text-lg text-[#1F4E85] h-20 border ml-20 w-96 px-4 rounded-xl border-[#1F4E85]'>Control de despachos y rutas.</p>
                            </div>
                        </div>
                        <div className='flex flex-row relative h-24'>
                            {/* imagen */}
                            <div className='absolute'>
                                <Image src={ben3} alt='beneficio 1 ' width={500} height={500} className='w-24 h-24'/>
                            </div>
                            {/* texto */}
                            <div className=' border ml-20 w-96 px-4 rounded-xl border-[#1F4E85]'>
                                <p className='text-lg text-[#1F4E85]'>Facilita un mejor control de
                                despachos y la recuperación de
                                vueltas no autorizadas.</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-5'>
                        {/* uno  */}
                        <div className='flex flex-row relative h-24 '>
                            {/* imagen */}
                            <div className='absolute'>
                                <Image src={ben4} alt='beneficio 1 ' width={500} height={500} className='w-24 h-24'/>
                            </div>
                            {/* texto */}
                            <div className=' '>
                                <p className='text-lg text-[#1F4E85] border h-auto ml-20 w-96 px-4 rounded-xl border-[#1F4E85]'>
                                Proporciona datos precisos
                                para el control de despachos
                                y la facturación, mejorando
                                la gestión ﬁnanciera.
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-row relative h-24'>
                            {/* imagen */}
                            <div className='absolute'>
                                <Image src={ben5} alt='beneficio 1 ' width={500} height={500} className='w-24 h-24'/>
                            </div>
                            {/* texto */}
                            <div className=' '>
                                <p className='text-lg text-[#1F4E85] h-24 border ml-20 w-96 px-4 rounded-xl border-[#1F4E85]'>
                                    Facilita la asignación eﬁciente de
                                    recursos, asegurando un uso óptimo
                                    de la fuerza laboral y vehículos.    
                                </p>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </section>
        {/* eficiencia */}
        <section className='w-full h-auto flex justify-center pt-20'>
            <div className='w-[60rem] h-full flex flex-col gap-5 p-2 items-center '>
               <Image  alt='eficiencia ' src={eficiencia} width={1290} height={1000} className='w-44 h-auto'/>
               <p className='text-lg font-semibold text-[#1F4E85] text-center max-w-[40rem]'>Se utiliza para mejorar signiﬁcativamente la eﬁciencia operativa en el
                    sector de transporte público. Proporciona datos precisos y en tiempo
                    real, permitiendo a las empresas tomar decisiones informadas, reducir
                    costos y mejorar la experiencia general de los usuarios del transporte
                    público. Con Regisruta, las empresas pueden avanzar hacia un
                    enfoque más moderno y tecnológico en la gestión de sus ﬂotas.</p>
            </div>
        </section>
        {/* soluciones  */}
        <section className='w-full h-auto flex justify-center mt-20'>
            <div className='w-[60rem] h-full flex flex-col gap-5 p-2'>
                <h4 className='text-7xl font-bold text-[#1F4E85] '>Soluciones que Ofrecemos</h4>
                {/* beneficios */}
                <section className='w-full flex flex-row gap-5 mt-10'>
                    <div className='w-1/3 flex items-center'>
                   
                      <video controls width="640" height="360" autoPlay={true} muted
                        loop
                        playsInline  >
                        <source
                            src="https://res.cloudinary.com/drfsgwnql/video/upload/v1747067046/hhyqp6ntn93bkeyiuw00.mp4"
                            type="video/mp4"
                            
                        />
                        Tu navegador no soporta el video.
                    </video>  
                        
                    </div>
                    <div className='w-2/3 flex flex-col gap-5'>
                        <div className='border border-[#1F4E85] rounded-xl p-2' >
                            <h5 className='text-xl text-[#1F4E85] font-bold'>Control de Rutas y Flota</h5>
                            <p className='text-[#1F4E85] text-sm'>Con nuestra plataforma regisdata transporte web, gestione los despachos bien sea
                                automáticos o manuales, controle los tiempos y recorridos en ruta, valide
                                cumplimiento de rutas, y lo mejor, adaptada a las necesidades de cada cliente.
                                Utilizando dispositivos a bordo de los vehículos, proporcionamos información en
                                tiempo real y sin errores sobre el rendimiento operativo.</p>
                        </div>
                        <div className='border border-[#1F4E85] rounded-xl p-2' >
                            <h5 className='text-xl text-[#1F4E85] font-bold'>Despachos Automatizados</h5>
                            <p className='text-[#1F4E85] text-sm'>Programa despachos de la ﬂota automaticamente y de forma aleatoria o programada.
                            Permite que haya equidad en la operación y ahorra en costos operativos.</p>
                            <p className='text-[#1F4E85] text-sm'>Tecnología modular, lo que permite acoplarse a otros equipos o programas, como
                            video cámaras, lectores de código, tarjetas inteligentes y aplicativos para los usuarios.</p>
                        </div>
                        <div className='border border-[#1F4E85] rounded-xl p-2' >
                            <h5 className='text-xl text-[#1F4E85] font-bold'>Software Amigable Aplicativo
                            Para Celulares</h5>
                            <p className='text-[#1F4E85] text-sm'>Nuestro software convierte los datos recopilados por REGISRUTA en
                            información real para la toma de decisiones efectivas. Los datos se transmiten
                            en tiempo real a través de equipos GPS, lo que permite a las empresas tener
                            una visión completa de su operación.</p>
                        </div>
                        <div className='border border-[#1F4E85] rounded-xl p-2' >
                            <h5 className='text-xl text-[#1F4E85] font-bold'>Recuperación de la Inversión
                            en Corto Plazo</h5>
                            <p className='text-[#1F4E85] text-sm'>Controla kilometraje operativo y no operativo, desplazamientos no autorizados,
                                consumo de combustible, inicio y ﬁn de la operación, disminuye recurso humano
                                utilizado actualmente en operaciones manuales.</p>
                            <p className='text-[#1F4E85] text-sm'>Obten la información en tiempo real, sin manipulaciones para gestionar
                            estratégicamente tu ﬂota y convierte todo esto en mayor rentabilidad.    </p>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    </>
  )
}
