import React from 'react'
import Image from 'next/image'

import boton1 from './assets/boton1.png'
import boton2 from './assets/boton2.png'
import boton3 from './assets/boton3.png'
import barra1 from './assets/barra1.png'
import barra2 from './assets/barra2.png'
import barra3 from './assets/barra3.png'
import barra4 from './assets/barra4.png'
import barra5 from './assets/barra5.png'
export const BannerPrincipal = () => {

    
  return (
   <>
    <section className='w-full h-[70vh] flex flex-row px-[8.5rem]  justify-center bg-[#1F4E85]'>
                <div className='w-[50rem]  h-full flex flex-col gap-2 justify-end pb-10  '>
                    <h1 className='text-3xl font-extrabold text-white'>REGISBUS</h1>
                    <p className='text-xl text-white font-medium'>
                        Nuestro hardware está diseñado especíﬁcamente para el conteo de
                        personas, utilizando sensores estratégicamente ubicados para el conteo
                        efectivo de personas. Estos componentes electrónicos generan un haz de
                        luz infrarrojo de 940nm entre las barras, que se interrumpe al paso de una
                        persona, registrando así el conteo con una efectividad superior al 98%.
                    </p>
                    <div className='w-full flex flex-row gap-5'>
                        <button className='py-2 px-5 rounded-4xl bg-white mt-5'><p className='font-bold text-[#1F4E85] text-3xl'>Comprar</p></button>
                    </div>
                </div>
                <div className='w-[30rem] relative items-center justify-center '>
                    <div className='absolute right-[-10%]  bottom-[-50]'>
                        {/* <Image alt='imagen de reguisdata' src={camara} width={300} height={500} /> */}
                    </div>
                </div>
            </section>
             <section className='w-full h-auto flex flex-row justify-center items-center'>
            <div className='w-full h-52 flex flex-row justify-items-start  mt-10'>
                <button className='bg-[#1F4E85] px-10 rounded-r-[50] h-24 '>
                    <p className='text-white text-xl font-bold'>Cotiza<br/><span className='text-white text-lg p-0 m-0'>con nosotros</span><br/>
                    <span className='text-white text-sm'>gerente@registelcolombia</span></p>
                </button>
            </div>
        </section>
        <section className='w-full flex flex-col gap-10 items-center justify-center'>
            <div className='w-[50rem] flex justify-center gap-5'>
                <button className='w-72 h-72'>
                    <Image src={boton3} alt='boton 1' width={1000} className='w-full h-full object-contain' />
                </button>
                <button className='w-72 h-72'>
                    <Image src={boton2} alt='boton 1' width={1000} className='w-full h-full object-contain' />
                </button>
                <button className='w-72 h-72'>
                    <Image src={boton1} alt='boton 1' width={1000} className='w-full h-full object-contain' />
                </button>
            </div>
            <div className='w-[50rem] flex justify-center gap-5'>
                <button className='bg-[#DEEFF7] h-32 w-[50rem] rounded-4xl'>
                    <p className='text-5xl text-[#1F4E85] font-extrabold'>Solución completa</p>
                </button>
            </div>
        </section>
        <section className='w-full flex justify-center items-center mt-22'>
            <div className='w-[60rem] flex flex-row gap-5'>
                <div className='w-1/2 flex items-center'>
                    <Image alt='barras' src={barra1} width={1000} className='w-full'/>
                </div>
                <div className='w-1/3 flex items-center'>
                    <p className='text-lg font-semibold text-[#1F4E85]'>
                        Te asesoraremos para que
                        selecciones el equipo que
                        más se acople a tus
                        necesidades y las
                        cantidades
                        correspondientes para su
                        buen funcionamiento
                    </p>
                </div>
            </div>
        </section>
         <section className='w-full flex justify-center items-center mt-[10rem]'>
            <div className='flex flex-col gap-5 items-center'>
                <h2 className='text-5xl font-extrabold text-[#1F4E85]'>Premiun (P)</h2>
                <div className='w-[60rem] flex flex-row gap-5  items-center'>
                    <div className='w-[8rem] h-full flex items-center justify-center '>
                        <Image alt='barra premium ' src={barra2} width={1000} className='w-full h-full object-contain'/>
                    </div>
                    <div className='w-full h-full flex flex-col gap-5 font-bold border border-[#1F4E85] text-sm  px-5 py-5 rounded-4xl'>
                        <div className='w-full flex flex-row gap-5 '>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Funcion</th>    
                                        <th>Caracteristicas</th>    
                                    </tr> 
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='border p-2 '>Efectividad de conteo de personas</td>
                                        <td className='border p-2 '>Mayor al 98%</td>
                                    </tr>
                                    <tr>
                                        <td className='border p-2'>Sensores de detencion de paso</td>
                                        <td className='border p-2'>Infrarrojos 940nm</td>
                                    </tr>
                                    <tr>
                                        <td className='border p-2'>Deteccion del sentido</td>
                                        <td className='border p-2'>Determina si el usuario esta entrando o saliendo</td>
                                    </tr>
                                    <tr>
                                        <td className='border p-2'>Eventos de alarma</td>
                                        <td className='border p-2'>19 eventos que informa sobre posible intento de fraude, evasion, mal funcionamiento he informativos del equipo.</td>
                                    </tr>
                                    <tr>
                                        <td className='border p-2'>Contadores</td>
                                        <td className='border p-2'>
                                            Total dia: conteo de personas movilizadas en el dia<br/>
                                            Numeracion:Conteo consecutivo del total personas<br/>
                                            Entradas: Personas que entraron durante las 24 horas del dia.<br/>
                                            Salidas: Personas que salieron durante las 24 horas del dia.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='border p-2'>Numero de puertas</td>
                                        <td className='border p-2'>
                                            Hasta dos por equipo, Cantidad maxima de puertas que puede controlar un mismo equipo.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='border p-2'>Sistema de audio de 3W</td>
                                        <td className='border p-2'>
                                            Reproduccion de mensajes de audio por tiempo o por evento de bloqueo de sensores de conteo.
                                        </td>
                                    </tr>
                                </tbody>

                            </table>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Funcion</th>    
                                        <th>Caracteristicas</th>    
                                    </tr> 
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='border p-2 '>Buzzer de conteo</td>
                                        <td className='border p-2 '>Al ingresar o descender un pasajero se activa un buzzer</td>
                                    </tr>
                                    <tr>
                                        <td className='border p-2'>Sistema Operativo</td>
                                        <td className='border p-2'>Debian GNU/Linux 9</td>
                                    </tr>
                                    <tr>
                                        <td className='border p-2'>Memoria microSD</td>
                                        <td className='border p-2'>8 Gbytes - 128 GBytes</td>
                                    </tr>
                                    <tr>
                                        <td className='border p-2'>RAM</td>
                                        <td className='border p-2'>1 GBytes</td>
                                    </tr>
                                    <tr>
                                        <td className='border p-2'>Base de datos</td>
                                        <td className='border p-2'>
                                        SQLite
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='border p-2'>GPU</td>
                                        <td className='border p-2'>
                                            H3 Quad-core Cortex-A7 H.265/HEVC 4k
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='border p-2'>CPU</td>
                                        <td className='border p-2'>
                                        Mail400MP2 GPU @600MHz soporta OpenGL ES 2.0
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='border p-2'>Servidor Apache</td>
                                        <td className='border p-2'>
                                        Server Version: Apache/2.4.25 (debian)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='border p-2'>Java</td>
                                        <td className='border p-2'>
                                        Java version "1.8.0_201"
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='border p-2'>Puertos</td>
                                        <td className='border p-2'>
                                        Tres USB 2.0 HOST y un puerto USB 2.0 OTG
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='border p-2'>Serial SCI (2) (RS232 y TTL)</td>
                                        <td className='border p-2'>
                                        4800 - 19200
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='border p-2'>Modulo WIFI</td>
                                        <td className='border p-2'>
                                        802.11 b/g/n
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='border p-2'>Puerto Ethernet</td>
                                        <td className='border p-2'>
                                        10/100M Ethernet RJ45
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='border p-2'>Temperatura de operacion</td>
                                        <td className='border p-2'>
                                        1-10 -70 c
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='border p-2'>Humedad</td>
                                        <td className='border p-2'>
                                        Hasta 90%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='border p-2'>Tempo promedio de respaldo de bateria </td>
                                        <td className='border p-2'>
                                        Si el equipo se queda sin alimentacion desde la bateria delk vehiculo, entra a funcionar la bateria de respaldo                                    </td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                        <div className='w-full flex flex-col gap-2'>
                            <h2 className='text-xl'>Caracteristicas Electricas</h2>
                            <table className='font-semibold'>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Voltaje de alimentacion- Vin</td>
                                        <td>{"9V < Vin < 36V"}</td>
                                    </tr>
                                    <tr>
                                        <td>Consumo de corriente</td>
                                        <td>{"Vin = 12V 0.350A ~ 10% Vin = 24V 0.200A ~ 10%"}</td>
                                    </tr>
                                    <tr>
                                        <td>nominal Suiche ON</td>
                                        <td>{"Vin = 12V 0.350A ~ 10% Vin = 24V 0.200A ~ 10%"}</td>
                                    </tr>
                                    <tr>
                                        <td>Consumo de corriente</td>
                                        <td>{"Vin = 12V 0.730A ~ 10% Vin = 24V 0.430A ~ 10% 1"}</td>
                                    </tr>
                                    <tr>
                                        <td>Suiche OFF Hibernando</td>
                                        <td>{"Hora maximo"}</td>
                                    </tr>
                                    <tr>
                                        <td>Consumo de corriente</td>
                                        <td>{"Bateria de respaldo descargada"}</td>
                                    </tr>
                                    <tr>
                                        <td>Maximo Suiche On</td>
                                        <td>{""}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
         </section>
         <section className='w-full flex flex-col items-center justify-center relative mt-[10rem]'>
            <div className='w-[60rem] flex flex-col gap-5  items-center'>
                <Image alt='barra fondo' src={barra3} width={1000} className='w-full h-full'/>
                <div className='w-full mt-[-10rem] px-10'>
                    <div className='w-2/3 flex flex-col gap-5 text-[#1F4E85] '>
                        <p><span className='bg-[#BBDEEE]/90'>Efectividad de Conteo:</span> Más del 98% gracias a los sensores infrarrojos de 940nm.</p>
                        <p><span className='bg-[#BBDEEE]/90'>Detección de Eventos:</span>  Los tres modelos informan sobre 19
                        eventos relacionados con intentos de fraude, evasión, mal
                        funcionamiento e información del equipo.</p>
                        <p><span className='bg-[#BBDEEE]/90'>Capacidad de Conteo:</span>  Todos los modelos realizan el conteo total
                        de personas movilizadas durante el día. Las versiones Premium
                        y Lite, además, registran los lugares de las entradas y salidas de
                        personas durante las 24 horas del día.</p>
                        <p><span className='bg-[#BBDEEE]/90'>Determinación de Sentido:</span> Las versiones Premium y Lite pueden
                        determinar si el usuario está entrando o saliendo, mientras que
                        el modelo Super Lite no tiene esta capacidad.</p>
                        <p><span className='bg-[#BBDEEE]/90'>Duración de la Batería de Respaldo:</span> Varía entre los modelos, con
                        4 horas para el Premium y 20 horas para Lite y Super Lite.</p>
                    </div>
                </div>
            </div>
         </section>
         <section className='w-full flex flex-col items-center justify-center mt-[10rem]'>
            <Image alt='barra fondo' src={barra4} width={1000} className='w-2/3 h-full  mr-[7rem]'/>
         </section>
         <section className='w-full flex flex-col items-center justify-center mt-[10rem]'>
            <Image alt='barra fondo' src={barra5} width={1000} className='w-2/3 h-full  mr-[7rem]'/>
         </section>
         <section className='w-full h-auto flex flex-col items-center justify-center mt-[10rem]'>
            <div className='w-[30rem] h-auto flex flex-col gap-3 items-center justify-center text-center'>
                <h4 className='text-[#1F4E85] font-semibold'>Premium</h4>
                <p className='text-[#1F4E85]'>La solución más completa, con capacidad de determinar el sentido de entrada y
                salida, y una batería de respal4 horas.</p>
                <h4 className='text-[#1F4E85] font-semibold'>Lite</h4>
                <p className='text-[#1F4E85]'>Balance perfecto entre funcionalidad y costo, con capacidad de determinar el
    sentido de entrada y salida, y una batería de respaldo de 20 horas.</p>
                <h4 className='text-[#1F4E85] font-semibold'>Super Lite</h4>
                <p className='text-[#1F4E85]'>Opción económica con funcionalidades esenciales, batería de respaldo de 20 horas,
    pero sin capacidad de determinar el sentido de entrada y salida.</p>

            </div>

         </section>
   
   </>
  )
}
