'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';



import ch2 from './assets/ch2.png'
import ch3 from './assets/ch3.png'
import ch4 from './assets/ch4.png'
import ch5 from './assets/ch5.png'
import ch6 from './assets/ch6.png'
import ch7 from './assets/ch7.png'
import ch8 from './assets/ch8.png'
import modulo1 from './assets/modulo1.png'
import ch9 from './assets/ch9.png'
import ch10 from './assets/ch10.png'
import ch11 from './assets/ch11.png'
import ch12 from './assets/ch12.png'
import ch13 from './assets/ch13.png'

import ch14 from './assets/ch14.png'
import ch15 from './assets/ch15.png'
import ch16 from './assets/ch16.png'

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
    const [positions,setPositions] = useState({
        p1:'top-[50%] left-[40%] z-20',
        p2:'top-[30%] left-[15%] z-20',
        p3:'top-[10%] left-[25%]',
        p4:'top-[10%] left-[55%]',
        p5:'top-[30%] left-[65%] z-10'
    })
    const [containers,setContainers] = useState({
        cart1:'',
        cart2:'',
        cart3:'',
        cart4:'',
        cart5:'',
    })
    const [cambiosCart,setCambiosCart] = useState(1);
    const rotateCart = () =>{

    }
    useEffect(()=>{
        const timeOut = setTimeout(()=>{
            console.log('cargando cambios')
            if(cambiosCart === 5){
                setContainers({
                    cart1:positions.p1,
                    cart2:positions.p2,
                    cart3:positions.p3,
                    cart4:positions.p4,
                    cart5:positions.p5
                })
                setCambiosCart(1)
                
            }else{
                setContainers({
                    cart1:positions[cambiosCart === 1 ? 'p1': cambiosCart === 2 ? 'p2': cambiosCart === 3 ? 'p3' : cambiosCart === 4 ? 'p4' : cambiosCart === 5 ? 'p5' : 'p1'],
                    cart2:positions[cambiosCart === 1 ? 'p2': cambiosCart === 2 ? 'p3': cambiosCart === 3 ? 'p4' : cambiosCart === 4 ? 'p5' : cambiosCart === 5 ? 'p1' : 'p2'],
                    cart3:positions[cambiosCart === 1 ? 'p3': cambiosCart === 2 ? 'p4': cambiosCart === 3 ? 'p5' : cambiosCart === 4 ? 'p1' : cambiosCart === 5 ? 'p2' : 'p3'],
                    cart4:positions[cambiosCart === 1 ? 'p4': cambiosCart === 2 ? 'p5': cambiosCart === 3 ? 'p1' : cambiosCart === 4 ? 'p2' : cambiosCart === 5 ? 'p3' : 'p4'],
                    cart5:positions[cambiosCart === 1 ? 'p5': cambiosCart === 2 ? 'p1': cambiosCart === 3 ? 'p2' : cambiosCart === 4 ? 'p3' : cambiosCart === 5 ? 'p4' : 'p5']
                })
                setCambiosCart(cambiosCart + 1)
                console.log('realizando cambio')
            }
        },5000)
        return ()=> clearTimeout(timeOut)
        
    })
    useEffect(()=>{
        setContainers({
            cart1:positions.p1,
            cart2:positions.p2,
            cart3:positions.p3,
            cart4:positions.p4,
            cart5:positions.p5
        })
    },[])
  return (
    <>
        <section className="w-full md:h-[70vh] h-[60vh] flex flex-row md:px-[8.5rem] p-2  justify-center bg-[#BAA3CA]">
        <div className="md:w-[50rem] w-full  h-full flex flex-col gap-2 justify-end pb-10  ">
          <h1 className="text-3xl font-extrabold text-white">REGISCHECK</h1>
          <p className="text-xl text-white font-medium">
            Es una solución tecnológica avanzada que automatiza el proceso de
            registro y validación de pasajeros en el transporte público. Mediante
            dispositivos se podrá registrar diferentes tarifas para facilitar la
            transparencia y control del trasnporte este sistema asegura una
            gestión eﬁciente y precisa de los datos de los pasajeros.
          </p>
          <div className="w-full flex flex-row gap-5">
            <button className="py-2 px-5 rounded-4xl bg-white mt-5">
              <p className="font-bold text-[#1F4E85] text-3xl">Comprar</p>
            </button>
          </div>
        </div>
        <div className="md:w-[30rem] hidden md:flex relative items-center justify-center ">
          <div className="absolute right-[-10%]  bottom-[-50]">
            {/* <Image alt='imagen de reguisdata' src={camara} width={300} height={500} /> */}
          </div>
        </div>
      </section>
      <section className="w-full h-auto flex flex-row justify-center items-center">
        <div className="w-full md:h-52 flex flex-row justify-items-start  md:mt-10 mt-5">
          <button className="bg-[#1F4E85] px-10 rounded-r-[50] h-24 ">
            <p className="text-white text-xl font-bold">
              Cotiza
              <br />
              <span className="text-white text-lg p-0 m-0">con nosotros</span>
              <br />
              <span className="text-white text-sm">
                gerente@registelcolombia
              </span>
            </p>
          </button>
        </div>
      </section>
      <section className='w-full flex items-center justify-center md:mt-40 mt-20'>
        <div className='md:w-[40rem] w-full flex flex-col gap-10 md:p-0 p-2'>
            <p className='text-xl text-[#1F4E85] font-semibold'>
                El Sistema Integrado Inteligente de Transporte Público es una herramienta
                innovadora que permite a las empresas de transporte gestionar de manera
                eﬁciente el ﬂujo de pasajeros. Este sistema automatiza el registro y validación de
                pasajeros mediante el uso de dispositivos avanzados capaces de leer códigos de
                barras, códigos IQ y huellas dactilares. La información recopilada es transmitida
                en tiempo real a una plataforma central.
            </p>
            <p className='text-xl text-[#1F4E85] font-semibold'>
                Además de mejorar la eﬁciencia operativa, el sistema cumple con las
                regulaciones gubernamentales al proporcionar un seguimiento detallado de los
                pasajeros. optimiza la recaudación de tarifas al minimizar el fraude y los errores
                humanos. Con la capacidad de analizar datos en tiempo real, las empresas
                pueden ajustar recursos y optimizar rutas según la demanda actual y mejorando
                la sostenibilidad del servicio.
            </p>
        </div>
      </section>
      <section className='w-full flex  justify-center relative mt-40  pt-40'>
         <div className='md:w-[60rem] w-full flex md:flex-row flex-col items-center justify-center  '>
            <div className='rounded-3xl bg-[#1F4E85] p-4'>
                <p className='text-white font-bold text-4xl'>BENEFICIOS</p>
            </div>
            <div className='bg-[#DEEFF7] w-full rounded-4xl md:h-[30rem] h-[20rem] relative'>
                <Image alt='imagen carrousel' src={ch2} width={500} className={`md:w-40 w-24 object-contain absolute transition-all ${containers.cart1} `}/>
                <Image alt='imagen carrousel' src={ch3} width={500} className={`md:w-40 w-24 object-contain absolute transition-all ${containers.cart2}`}/>
                <Image alt='imagen carrousel' src={ch4} width={500} className={`md:w-40 w-24 object-contain absolute transition-all ${containers.cart3}`}/>
                <Image alt='imagen carrousel' src={ch5} width={500} className={`md:w-40 w-24 object-contain absolute transition-all ${containers.cart4}`}/>
                <Image alt='imagen carrousel' src={ch6} width={500} className={`md:w-40 w-24 object-contain absolute transition-all ${containers.cart5}`}/>
            </div>
        </div>
        <div className='absolute top-0'>
            <p className='md:text-[10rem] text-[4rem] font-extrabold text-[#DEEFF7]' style={{
                textShadow:'2px 2px 4px rgba(0, 0, 0, 0.5)'
            }}>BENEFICIOS</p>
        </div>
       
      </section>
      <section className='w-full flex items-center justify-center md:mt-40 mt-20'>
            <div className='md:w-[60rem] w-full flex md:flex-row flex-col gap-5'>
                <div className='w-full flex justify-center'>
                    <Image src={ch7} alt='imagen de regischeck' width={1000} className='md:w-96 w-full object-contain' />
                </div>
                <div className='w-full flex md:flex-row flex-col gap-2 md:p-0 p-2'>
                    <div className='w-full flex flex-col gap-5 '>
                        <div className='flex flex-col gap-1 md:text-left text-center'>
                            <p className='text-[#BAA3CA] font-semibold'>Mejora de la Eﬁciencia Operativa:</p>
                            <p className='text-[#1F4E85] text-sm font-semibold'>El lector de tarjetas automatiza el proceso de registro de pasajeros.</p>
                        </div>
                        <div className='flex flex-col gap-1 md:text-left text-center'>
                            <p className='text-[#BAA3CA]  font-semibold'>Control y Seguridad en el Registro de Pasajeros:</p>
                            <p className='text-[#1F4E85] text-sm font-semibold'>Validar la identidad de los pasajeros en tiempo real es crucial en contextos donde se requieren registros detallados como en empresa o universidades.</p>
                        </div>
                        <div className='flex flex-col gap-1 md:text-left text-center'>
                            <p className='text-[#BAA3CA]  font-semibold'>Cumplimiento Regulatorio:</p>
                            <p className='text-[#1F4E85] text-sm font-semibold'>Cumple con las regulaciones gubernamentales que solicitan un seguimiento preciso de los pasajeros.</p>
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-5'>
                        <div className='flex flex-col gap-1 md:text-left text-center'>
                            <p className='text-[#BAA3CA]  font-semibold'>Optimización de la Recaudación de Tarifas:</p>
                            <p className='text-[#1F4E85] text-sm font-semibold'>Recolpilar las tarifas adecuadas de manera eﬁciente y transparente, minimizando las pérdidas por tarifas no pagadas o por errores humanos en la recolección de tarifas.</p>
                        </div>
                        <div className='flex flex-col gap-1 md:text-left text-center'>
                            <p className='text-[#BAA3CA] text font-semibold'>Análisis de Datos y Toma de Decisiones:</p>
                            <p className='text-[#1F4E85] text-sm font-semibold'>Obten la información al alcance para gestionar estrategias pertinentes según la información.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
      </section>
      <section className='w-full flex items-center justify-center md:mt-40 mt-20'>
            <div className='md:w-[60rem] w-full flex md:flex-row flex-col  items-center'>
                <div className='md:w-[30rem] w-full flex items-start md:justify-start justify-center '>
                    <Image src={ch8} alt='ruta registel' width={1290} className='w-96 '/>
                </div>
                <div className='md:w-[30rem] w-full md:p-0 p-2'>
                    <h2 className='text-3xl font-bold text-[#B9A3CC] mb-10'>Caracteristicas</h2>
                    <div className='md:w-[30rem] w-full flex flex-col relative gap-10 items-center justify-center'>
                        <div className='absolute left-2 text-[#1F4E85]'>
                            <p>|</p>
                            <p>|</p>
                            <p>|</p>
                            <p>|</p>
                            <p>|</p>
                            <p>|</p>
                            <p>|</p>
                            <p>|</p>
                            <p>|</p>
                            <p>|</p>
                            <p>|</p>
                            <p>|</p>
                            <p>|</p>
                            <p>|</p>
                            <p>|</p>
                            <p>|</p>
                        </div>
                        <div className='w-full flex flex-row  gap-1 items-center'>
                            <div className='w-5 h-5 bg-[#1F4E85] rounded-full'></div>
                            <p className='text-lg text-[#1F4E85]'>Lectura de documento (código de barras, códigos IQ, NFC)</p>
                        </div>
                        <div className='w-full flex flex-row gap-1 items-center'>
                            <div className='w-5 h-5 bg-[#1F4E85] rounded-full'></div>
                            <p className='text-lg text-[#1F4E85]'>Indicaciones luminosas y auditivas para la validación de los documentos.</p>
                        </div>
                        <div className='w-full flex flex-row gap-1 items-center'>
                            <div className='w-5 h-5 bg-[#1F4E85] rounded-full'></div>
                            <p className='text-lg text-[#1F4E85]'>Validación del usuario en el sistema. Que se encuentre en la base de datos.</p>
                        </div>
                        <div className='w-full flex flex-row gap-1 items-center'>
                            <div className='w-5 h-5 bg-[#1F4E85] rounded-full'></div>
                            <p className='text-lg text-[#1F4E85]'>Transmisión de datos en tiempo real de posición y documentos validados</p>
                        </div>
                        <div className='w-full flex flex-row gap-1 items-center'>
                            <div className='w-5 h-5 bg-[#1F4E85] rounded-full'></div>
                            <p className='text-lg text-[#1F4E85]'>Ubicación, hora y fecha de recepción del usuario niveles de ocupación.</p>
                        </div>
                    </div>
                </div>
            </div>
      </section>
       {/* modulos carrousel */}
        <section className='w-full h-auto mt-20 bg-[#DFE8CF] md:px-[8.5rem] md:pt-10 flex items-center justify-center'>
            <div className='md:w-[70rem] w-full  p-10'>
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
            </div>
        </section>
        {/* opciones  */}
        <section className='w-full flex items-center justify-center pt-20'>
            <div className='w-[60rem] flex md:flex-row flex-col gap-10 items-center justify-center'>
                <div className='w-[24rem] flex flex-col gap-5 items-center justify-center'>
                    <div className='flex flex-row gap-3 p-5  items-center justify-center shadow-2xl rounded-4xl'>
                        <Image alt='pasajeros' src={ch9} width={500} className='w-32 object-contain'/>
                        <p className='text-lg text-[#1F4E85]'>El pasajero registra su carnet, sin necesidad de pasarlo al conductor.</p>
                    </div>
                    <div className='flex flex-row gap-3 p-5 items-center justify-center shadow-2xl rounded-4xl'>
                        <Image alt='pasajeros' src={ch10} width={500} className='w-32 object-contain'/>
                        <p className='text-lg text-[#1F4E85]'>Dispositivo con capacidad de leer cualquier cantidad de documentos con código de barras, IQ o NFC.</p>
                    </div>

                </div> 
                <div className='w-[24rem] flex flex-col gap-5 items-center justify-center'>
                    <div className='flex flex-row gap-3 p-5 items-center justify-center shadow-2xl rounded-4xl'>
                        <Image alt='pasajeros' src={ch11} width={500} className='w-32 object-contain'/>
                        <p className='text-lg text-[#1F4E85]'>Mediante alarma auditiva y visual, valida la información suministrada</p>
                    </div>
                    <div className='flex flex-row gap-3 p-5 items-center justify-center shadow-2xl rounded-4xl'>
                        <Image alt='pasajeros' src={ch12} width={500} className='w-32 object-contain'/>
                        <p className='text-lg text-[#1F4E85]'>La información validada es enviada en tiempo real a la plataforma Regisdata Web, para ser procesada.</p>
                    </div>
                </div>
            </div>
        </section>
        {/* receptores */}
        <section className='w-full flex items-center justify-center pt-20'>
            <div className='w-[60rem] flex flex-row gap-5 items-center justify-center '>
                <Image alt='receptores' width={1290} src={ch13} className='w-full object-contain'/>
            </div>
        </section>
        {/* opciones en vertical */}
        <section className='w-full flex flex-row items-center justify-center pt-20'>
            <div className='w-[60rem] flex flex-col gap-20 justify-center items-center '>
                <div className='w-[20rem] flex flex-col items-center justify-center gap-5'>
                    <Image src={ch14} alt='actualizaciones' width={100} className='w-32 object-contain'/>
                    <p className='text-lg font-bold text-[#1F4E85] text-center'>Las actualizaciones están garantizadas</p>
                    <p className='text-sm font-semibold text-[#1F4E85] text-center'>La plataforma se mejora constantemente en un ambiente colaborativo con todos los demás usuarios, no tienes que asumir todos los costos.</p>
                </div>
                <div className='w-[20rem] flex flex-col items-center justify-center gap-5'>
                    <Image src={ch15} alt='actualizaciones' width={100} className='w-32 object-contain'/>
                    <p className='text-lg font-bold text-[#1F4E85] text-center'>Rapidez de implementación</p>
                    <p className='text-sm font-semibold text-[#1F4E85] text-center'>El proceso de implementación es mucho más rápido y sencillo, no se trata de un producto construido a la medida sino de un servicio acorde a tus necesidades</p>
                </div>
                <div className='w-[20rem] flex flex-col items-center justify-center gap-5'>
                    <Image src={ch16} alt='actualizaciones' width={100} className='w-32 object-contain'/>
                    <p className='text-lg font-bold text-[#1F4E85] text-center'>Posibilidades de Integración</p>
                    <p className='text-sm font-semibold text-[#1F4E85] text-center'>Nuestra plataforma usa tecnologías que se pueden acoplar a diferentes hadware.</p>
                </div>
            </div>
        </section>
    </>
  )
}

