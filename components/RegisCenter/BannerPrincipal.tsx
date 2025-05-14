'use client'

import Image from 'next/image'
import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';


import camara from './assets/camara.png'
import centro from './assets/centros.png'
import banos from './assets/banos.png'
import discoteca from './assets/discoteca.png'
import eventos from './assets/eventos.png'
import ben1 from './assets/ben1.png'
import ben2 from './assets/ben2.png'
import ben3 from './assets/ben3.png'
import ben4 from './assets/ben4.png'
import fondo from './assets/fondo.png'
import fondo2 from './assets/fondo2.png'


import image1 from './assets/image1.png'
import image2 from './assets/image2.png'
import image4 from './assets/image4.png'
import imagen5 from './assets/imagen5.png'
import imagen6 from './assets/imagen6.png'
import imagen7 from './assets/imagen7.png'
import imagen8 from './assets/imagen8.png'
import imagen9 from './assets/imagen9.png'
import imagen10 from './assets/imagen10.png'
import imagen11 from './assets/imagen11.svg'
import centrosc from './assets/centroc.png'

import lmapa from './assets/lmapa.png'
import ldoc from './assets/ldoc.png'
import ltra from './assets/ltra.png'
import lperso from './assets/lperso.png'
import lruta from './assets/lruta.png'
import ldinero from './assets/ldinero.png'
import discotecas  from './assets/discotecas.png'
import camaras  from './assets/camaras.png'

export const BannerPrincipal = () => {
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
  return (
    <>
        <section className='w-full h-[70vh] flex flex-row px-[8.5rem]  justify-center bg-[#7E0E2E]'>
                <div className='w-[30rem]  h-full flex flex-col gap-2 justify-end pb-10  '>
                    <h1 className='text-3xl font-extrabold text-white'>RegisCenter</h1>
                    <p className='text-xl text-white font-medium'>
                        Es una herramienta diseñada por Registel para el sector
                        comercial, enfocada en el conteo de personas. Esta solución
                        utiliza tecnología avanzada para proporcionar datos precisos
                        sobre el ﬂujo de personas en establecimientos comerciales,
                        baños, discotecas, eventos y todos los sectores que necesiten
                        controlar con alta precisión el ﬂujo de personas.
                    </p>
                    <div className='w-full flex flex-row gap-5'>
                        <button className='py-1 px-4 rounded-xl bg-white'><p className='font-bold text-[#7E0E2E]'>Barras</p></button>
                        <button className='py-1 px-4 rounded-xl bg-white'><p className='font-bold text-[#7E0E2E]'>Camara</p></button>
                    </div>
                </div>
                <div className='w-[30rem] relative items-center justify-center '>
                    <div className='absolute right-[-10%]  bottom-[-50]'>
                        <Image alt='imagen de reguisdata' src={camara} width={300} height={500} />
                    </div>
                </div>
            </section>
        <section className='w-full h-auto flex flex-row justify-center items-center'>
            <div className='w-full h-52 flex flex-row justify-items-start  mt-10'>
                <button className='bg-[#ED9B15] px-10 rounded-r-[50] h-24 '>
                    <p className='text-white text-xl font-bold'>Cotiza<br/><span className='text-white text-lg p-0 m-0'>con nosotros</span><br/>
                    <span className='text-white text-sm'>gerente@registelcolombia</span></p>
                </button>
            </div>
        </section>
        <section className='w-full h-auto flex justify-center items-center'>
            <div className='w-[50rem] h-full flex flex-col justify-center mt-10'>
                <h1 className='text-4xl font-bold text-[#1F4E85]'>RegisCenter</h1>
                <p className='text-[#1F4E85] text-xl'>Se presenta como una solución integral para la gestión del ﬂujo de personas en el sector
                    comercial, con un enfoque en la eﬁciencia, la transparencia y la optimización.</p>
            </div>
        </section>
        <section className='w-full h-auto flex justify-center items-center mt-10'>
            <div className='w-[50rem] h-full flex flex-row gap-7 justify-center mt-10'>
                <div className='w-44 flex flex-col gap-5 justify-center '>
                    <Image src={centro} alt='uso' width={500} height={500} className='w-44 h-44 object-contain'/>
                    <p className='text-center text-[#1F4E85]'>Optimiza la disposición
                    de tiendas y estrategias
                    de marketing mediante
                    el análisis de tráﬁco y
                    comportamiento del
                    cliente.</p>
                </div>
                <div className='w-44 flex flex-col gap-5 justify-center '>
                    <Image src={banos} alt='uso' width={500} height={500} className='w-44 h-44 object-contain'/>
                    <p className='text-center text-[#1F4E85]'>
                        Mejora la gestión de
                        limpieza y asegura un
                        recaudo justo con datos
                        precisos de aﬂuencia en
                        tiempo real.   
                    </p>
                </div>
                <div className='w-44 flex flex-col gap-5 justify-center '>
                    <Image src={discoteca} alt='uso' width={500} height={500} className='w-44 h-44 object-contain'/>
                    <p className='text-center text-[#1F4E85]'>
                        Gestiona el aforo en tiempo
                        real, valida ingresos y
                        optimiza la seguridad para
                        una experiencia más segura
                        y agradable.   
                    </p>
                </div>
                <div className='w-44 flex flex-col gap-5 justify-center '>
                    <Image src={eventos} alt='uso' width={500} height={500} className='w-44 h-44 object-contain'/>
                    <p className='text-center text-[#1F4E85]'>
                            Controla el aforo en
                            tiempo real, mejora la
                            seguridad y optimiza la
                            logística, garantizando
                            una experiencia ﬂuida
                            para los asistentes.  
                    </p>
                </div>
            </div>
        </section>
        <section className='relative w-full h-auto  overflow-hidden'>
            <Image alt='fondo' src={fondo} width={1000} className='w-full  absolute object-cover top-[20%] '/>
            <section className='w-full  h-screen  flex justify-center items-center pt-20'>
                <div className='w-[50rem] z-50 h-screen  flex flex-col gap-5'>
                    <h2 className='text-7xl font-extrabold text-center text-[#BBDEEE]'>Beneﬁcios</h2>
                    <div className='w-full flex flex-row items-center gap-5'>
                        {/* imagen */}
                        <div className='w-28 h-28 overflow-hidden flex items-center '>
                        <Image alt='beneficio' src={ben1} width={100} height={100} className='w-24 h-24 object-contain'/> 
                        </div>
                        {/* texto */}
                        <div className='w-full flex flex-col'>
                            <h3 className='text-2xl font-bold text-[#BBDEEE]'>Conteo Preciso:</h3>
                            <p className='text-xl text-[#1F4E85] font-semibold'>
                                Nuestro sensor de conteo inteligente registra con precisión la
                                entrada y salida de personas, brindándole datos en tiempo real.
                            </p>
                        </div>
                    </div>
                    <div className='w-full flex flex-row items-center gap-5'>
                        {/* imagen */}
                        <div className='w-28 h-28 overflow-hidden flex items-center '>
                        <Image alt='beneficio' src={ben2} width={100} height={100} className='w-24 h-24 object-contain'/> 
                        </div>
                        {/* texto */}
                        <div className='w-full flex flex-col'>
                            <h3 className='text-2xl font-bold text-[#BBDEEE]'>Optimización del Personal:</h3>
                            <p className='text-xl text-[#1F4E85] font-semibold'>
                                Con la información pertinente, se pueden generar estrategias
                                como horarios, cantidad de personal y días de apertura.
                            </p>
                        </div>
                    </div>
                    <div className='w-full flex flex-row items-center gap-5'>
                        {/* imagen */}
                        <div className='w-28 h-28 overflow-hidden flex items-center '>
                        <Image alt='beneficio' src={ben3} width={100} height={100} className='w-24 h-24 object-contain'/> 
                        </div>
                        {/* texto */}
                        <div className='w-full flex flex-col'>
                            <h3 className='text-2xl font-bold text-[#BBDEEE]'>Recaudo Justo:</h3>
                            <p className='text-xl text-[#1F4E85] font-semibold'>
                                Si el acceso es pago, el conteo preciso garantiza un recaudo
                                justo y transparente, eliminando la posibilidad de evasiones.
                            </p>
                        </div>
                    </div>
                    <div className='w-full flex flex-row items-center gap-5'>
                        {/* imagen */}
                        <div className='w-28 h-28 overflow-hidden flex items-center '>
                        <Image alt='beneficio' src={ben4} width={100} height={100} className='w-24 h-24 object-contain'/> 
                        </div>
                        {/* texto */}
                        <div className='w-full flex flex-col'>
                            <h3 className='text-2xl font-bold text-[#BBDEEE]'>Análisis de Tráﬁco:</h3>
                            <p className='text-xl text-[#1F4E85] font-semibold'>
                                Proporciona un análisis detallado del tráﬁco para maximizar
                                oportunidades en el manejo del negocio.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='w-full h-[200vh] flex  justify-center'>
                <div className='w-[70rem] top-[50%]  pt-[20%]'>
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
                                <Image alt='imagen de modulo 1' src={discoteca} width={1290} height={1000} className='w-full h-auto'/>
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
                                <Image alt='imagen de modulo 1' src={discoteca} width={1290} height={1000} className='w-full h-auto'/>
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
                                <Image alt='imagen de modulo 1' src={discoteca} width={1290} height={1000} className='w-full h-auto'/>
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

                </div>
            </section>
        </section>
        <section className='w-full flex items-center justify-center mt-[-20rem]'>
            <div className='w-[50rem] h-[150vh]  relative '>
                <Image src={image1} alt='imagen 1 ' width={1000} className='absolute w-[45rem] h-auto right-0'/>
                <Image src={image2} alt='imagen 1 ' width={1000} className='absolute w-[35rem] h-auto left-0 top-[10rem] shadow'/>
                <Image src={image4} alt='imagen 1 ' width={1000} className='absolute w-[35rem] h-auto left-[20%] top-[30rem] shadow'/>
            </div>
        </section>
        <section className='w-full flex items-center justify-center '>
            <div className='w-[50rem] h-screen  relative '>
                <div className='absolute right-0 top-[15rem] w-[35rem]'>
                    <p className='text-3xl font-bold text-end text-[#1F4E85]'>Reportes en Excel</p>
                    <Image src={imagen6} alt='imagen 1 ' width={1000} className='absolute w-[35rem] h-auto  shadow'/>
                </div>
                <div className='absolute w-[35rem] h-auto left-0'>
                    <p className='text-4xl font-bold text-center text-[#1F4E85]'>Analisis y gráﬁcos</p>
                    <Image src={imagen5} alt='imagen 1 ' width={1000} className='absolute w-[35rem] h-auto left-0'/>
                </div>
            </div>
        </section>
        <section className='w-full h-screen flex justify-center  relative mt-20 overflow-hidden'>
            <Image alt='fondo' src={fondo2} width={1290} className=' absolute w-full h-auto object-cover '/>

            <div className='w-[40rem]  z-50 relative'>
                <div className='w-[30rem]  z-50 absolute top-[10%] left-3'>
                   <Image alt='imagen' src={imagen7} className='w-full'/> 
                </div>
                <div className='w-[25rem]  z-50 absolute top-[55%]'>
                   <Image alt='imagen' src={imagen9} className='w-full'/> 
                </div>
                <div className='w-[20rem]  z-50 absolute top-[30%] right-[15%]'>
                   <Image alt='imagen' src={imagen8} className='w-full'/> 
                </div>
                <div className='w-[20rem]  z-50 absolute top-[70%] right-[15%]'>
                   <Image alt='imagen' src={imagen10} className='w-full'/> 
                </div>
            </div>

        </section>
        <section className='w-full flex justify-center mt-20'>
            <div className='w-[40rem] flex flex-col gap-5'>
                <div className='w-full flex flex-col gap-2'>
                    <div className='bg-[#CBD6E2] rounded-xl p-2'>
                        <p className='text-xl font-semibold text-[#1F4E85]'>Permite controlar, almacenar y obtener información de la
                        producción (número de personas = productividad)</p>
                    </div>
                    <p className='text-lg text-[#1F4E85] px-5'>Tener datos más exactos sobre la productividad de su negocio</p>
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <div className='bg-[#CBD6E2] rounded-xl p-2'>
                        <p className='text-xl font-semibold text-[#1F4E85]'>Control sobre los ingresos de acuerdo con el número de personas</p>
                    </div>
                    <p className='text-lg text-[#1F4E85] px-5'>Mejora la administración de los ingresos por cover, ticket, Etc.</p>
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <div className='bg-[#CBD6E2] rounded-xl p-2'>
                        <p className='text-xl font-semibold text-[#1F4E85]'>Audio para programar mensajes educativos, informativos y/o
                        publicitarios (algunas referencias)</p>
                    </div>
                    <p className='text-lg text-[#1F4E85] px-5'>Efectividad del 99% en el conteo de personas</p>
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <div className='bg-[#CBD6E2] rounded-xl p-2'>
                        <p className='text-xl font-semibold text-[#1F4E85]'>Equipos inteligentes: posee una Activación Automática de alarmas
                        contra atentados hacia el producto (fraudes)</p>
                    </div>
                    <p className='text-lg text-[#1F4E85] px-5'>Ingreso y salida del establecimiento totalmente despejada</p>
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <div className='bg-[#CBD6E2] rounded-xl p-2'>
                        <p className='text-xl font-semibold text-[#1F4E85]'>Brinda un mejor servicio al usuario, ya que no existen obstáculos</p>
                    </div>
                    <p className='text-lg text-[#1F4E85] px-5'></p>
                </div>
            </div>
        </section>
        <section className='w-full flex justify-center mt-20'>
            <div className='w-[60rem] flex flex-row gap-5'>
                <div className='w-1/3 flex items-center'>
                    <Image alt='imagen ' src={centrosc} width={1000} className='w-full object-contain'/>
                </div>
                <div className='w-1/2 flex flex-col gap-5 '>
                    <h4 className='text-4xl font-extrabold text-[#1F4E85]'>Centros Comerciales:</h4>
                    <p className='text-sm text-[#1F4E85] font-semibold'>
                        En el sector comercial, Regiscenter no solo cuenta personas, sino que transforma datos en
                        conocimientos accionables para una gestión más inteligente. Proporciona las herramientas
                        para un análisis detallado del tráﬁco en centros comerciales, permitiéndote ajustar la
                        disposición de tiendas y espacios para maximizar oportunidades de venta. Además,
                        Regiscenter facilita estrategias de marketing personalizadas al entender los patrones de
                        comportamiento del consumidor. Con Regiscenter, optimizas la experiencia del cliente,
                        mejoras la disposición de áreas y pasillos, y generas una gestión más eﬁciente y estratégica
                        para maximizar beneﬁcios en el sector comercial.
                    </p>
                    <div className='w-full flex flex-col gap-5 px-5'>
                        <div className='flex flex-row gap-3 items-center'>
                            <div className='w-32'>
                                <Image alt='lupa' src={lmapa} width={100} className='w-full object-contain'/>
                            </div>
                            <div>
                                <p className='text-sm text-[#1F4E85] font-semibold'>
                                    Análisis de Tráﬁco: Conoce la aﬂuencia de personas en diferentes
                                    áreas del centro comercial. Ajusta la disposición de atención y
                                    estrategias de venta.
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-row gap-3 items-center'>
                            <div className='w-32'>
                                <Image alt='lupa' src={ldoc} width={100} className='w-full object-contain'/>
                            </div>
                            <div>
                                <p className='text-sm text-[#1F4E85] font-semibold'>
                                    Segmentación de Audiencia: Entiende los patrones de
                                    comportamiento del consumidor según la hora del día o el día de
                                    la semana. Diseña estrategias de marketing especíﬁcas para
                                    cada segmento.
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-row gap-3 items-center'>
                            <div className='w-32'>
                                <Image alt='lupa' src={ltra} width={100} className='w-full object-contain'/>
                            </div>
                            <div>
                                <p className='text-sm text-[#1F4E85] font-semibold'>
                                    Mejora la Experiencia del Cliente: Utiliza la información de tráﬁco
                                    para optimizar la disposición de áreas de descanso, pasillos y
                                    áreas de espera, mejorando la comodidad del cliente.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='w-full flex justify-center mt-20'>
            <div className='w-[60rem] flex flex-row gap-5'>
                <div className='w-1/2 flex flex-col gap-5 '>
                    <h4 className='text-4xl font-extrabold text-[#1F4E85]'>Baños públicos:</h4>
                    <p className='text-sm text-[#1F4E85] font-semibold'>
                        Con RegisCenter para baños públicos, ofrecemos una solución integral para mejorar
                        la gestión y la experiencia del usuario en estos espacios. Nuestro avanzado sensor
                        de conteo inteligente proporciona datos precisos y en tiempo real sobre la aﬂuencia
                        de personas en los baños. Esto no solo facilita la optimización del personal de
                        limpieza, garantizando baños más limpios y agradables, sino que también permite
                        un recaudo justo y transparente si se aplica un sistema de pago.
                    </p>
                    <div className='w-full flex flex-col gap-5 '>
                        <div className='flex flex-row gap-3 items-center'>
                            <div className='w-32'>
                                <Image alt='lupa' src={lperso} width={100} className='w-full object-contain'/>
                            </div>
                            <div>
                                <p className='text-sm text-[#1F4E85] font-semibold'>
                                    Conteo Preciso: Nuestro sensor de conteo inteligente registra con
                                    precisión la entrada y salida de personas en baños públicos,
                                    brindándote datos en tiempo real con sistemas anti-fraude que te
                                    garantiza un 99% de efecticidad
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-row gap-3 items-center'>
                            <div className='w-32 '>
                                <Image alt='lupa' src={lruta} width={1000} className='w-full  object-contain'/>
                            </div>
                            <div>
                                <p className='text-sm text-[#1F4E85] font-semibold'>
                                    Optimización del Personal: Al conocer la ocupación actual, puedes
                                    asignar recursos de limpieza de manera eﬁciente, asegurando
                                    baños más limpios y mejorando la experiencia del usuario.
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-row gap-3 items-center '>
                            <div className='w-32 '>
                                <Image alt='lupa' src={ldinero} width={100} className='w-full object-contain'/>
                            </div>
                            <div>
                                <p className='text-sm text-[#1F4E85] font-semibold'>
                                    Recaudo Justo: Si el acceso a los baños es pago, el conteo preciso
                                    garantiza un recaudo justo y transparente, eliminando la
                                    posibilidad de evasiones.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-1/3 flex items-center'>
                    <Image alt='imagen ' src={imagen11} width={1000} className='w-full object-contain'/>
                </div>
            </div>
        </section>
        <section className='w-full flex justify-center mt-20'>
            <div className='w-[60rem] flex flex-row gap-5'>
                <div className='w-1/3 flex items-center'>
                    <Image alt='imagen ' src={discotecas} width={1000} className='w-full object-contain'/>
                </div>
                <div className='w-1/2 flex flex-col gap-5 '>
                    <h4 className='text-4xl font-extrabold text-[#1F4E85]'>Discotecas:</h4>
                    <p className='text-sm text-[#1F4E85] font-semibold'>
                        En el entorno dinámico de las discotecas, RegisCenter se convierte en tu aliado
                        para un control de aforo eﬁcaz y una experiencia mejorada para los asistentes.
                        Nuestro sistema informa en tiempo real la cantidad de personas que han ingresado
                        y salido del lugar, permitiendo evitar sobrecupos y garantizar la seguridad y
                        comodidad. Además, valida los ingresos al veriﬁcar si el número de personas que
                        ingresaron coincide con los ingresos generados. Optimiza la disposición de
                        personal de seguridad según la aﬂuencia prevista, brindando una experiencia más
                        segura y agradable.
                    </p>
                    <div className='w-full flex flex-col gap-5 '>
                        <div className='flex flex-row gap-3 items-center'>
                            <div className='w-32'>
                                <Image alt='lupa' src={lperso} width={100} className='w-full object-contain'/>
                            </div>
                            <div>
                                <p className='text-sm text-[#1F4E85] font-semibold'>
                                    Validación de Ingresos: Veriﬁca si el número de personas que
                                    ingresaron coincide con los ingresos generados. Identiﬁca
                                    discrepancias y toma medidas inmediatas.
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-row gap-3 items-center'>
                            <div className='w-32 '>
                                <Image alt='lupa' src={ltra} width={1000} className='w-full  object-contain'/>
                            </div>
                            <div>
                                <p className='text-sm text-[#1F4E85] font-semibold'>
                                    Optimización del Personal: Al conocer la ocupación actual, puedes
                                    asignar recursos de limpieza de manera eﬁciente, asegurando
                                    baños más limpios y mejorando la experiencia del usuario.
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-row gap-3 items-center '>
                            <div className='w-32 '>
                                <Image alt='lupa' src={camaras} width={100} className='w-full object-contain'/>
                            </div>
                            <div>
                                <p className='text-sm text-[#1F4E85] font-semibold'>
                                    Mejora en la Seguridad: Garantiza la seguridad de los asistentes
                                    evitando aglomeraciones. Optimiza la disposición de personal de
                                    seguridad según la aﬂuencia prevista.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='w-full flex justify-center mt-20'>
            <div className='w-[60rem] flex flex-row gap-5'>
               
                <div className='w-1/2 flex flex-col gap-5 '>
                    <h4 className='text-4xl font-extrabold text-[#1F4E85]'>Eventos:</h4>
                    <p className='text-sm text-[#1F4E85] font-semibold'>
                        Es la solución ideal para la gestión de eventos, permitiendo
                        un control de aforo en tiempo real, mejorando la seguridad
                        y optimizando la logística. Nuestro sistema proporciona
                        datos precisos sobre la cantidad de personas ingresando y
                        saliendo del evento, facilitando la organización y
                        garantizando una experiencia ﬂuida para los asistentes.
                    </p>
                    <div className='w-full flex flex-col gap-5 px-5'>
                        <div className='flex flex-row gap-3 items-center'>
                            <div className='w-32'>
                                <Image alt='lupa' src={ldoc} width={100} className='w-full object-contain'/>
                            </div>
                            <div>
                                <p className='text-sm text-[#1F4E85] font-semibold'>
                                    Control de Aforo: Evita sobrecupos y garantiza la
                                    seguridad al controlar el número de asistentes en
                                    tiempo real.
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-row gap-3 items-center'>
                            <div className='w-32'>
                                <Image alt='lupa' src={lmapa} width={100} className='w-full object-contain'/>
                            </div>
                            <div>
                                <p className='text-sm text-[#1F4E85] font-semibold'>
                                    Mejora en la Logística: Optimiza la disposición de
                                    personal y recursos según la aﬂuencia prevista.
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-row gap-3 items-center'>
                            <div className='w-32'>
                                <Image alt='lupa' src={ltra} width={100} className='w-full object-contain'/>
                            </div>
                            <div>
                                <p className='text-sm text-[#1F4E85] font-semibold'>
                                    Seguridad Mejorada: Asegura una experiencia
                                    segura y agradable para todos los asistentes
                                    mediante un control eﬁciente del ﬂujo de personas.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className='w-1/3 flex items-center'>
                    <Image alt='imagen ' src={discotecas} width={1000} className='w-full object-contain'/>
                </div>
            </div>
        </section>
    </>
  )
}
