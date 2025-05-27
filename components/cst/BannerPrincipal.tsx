import React from 'react'
import Image from 'next/image'



import cst1 from './assets/cst1.png'
import cst2 from './assets/cst2.png'
import cst3 from './assets/cst3.png'
import cst4 from './assets/cst4.png'
import cst5 from './assets/cst5.png'
import cst6 from './assets/cst6.png'
import cst7 from './assets/cst7.png'
import cst8 from './assets/cst8.png'
import cst9 from './assets/cst9.png'
import cst10 from './assets/cst10.png'
export const BannerPrincipal = () => {
  return (
    <>
       <section className='w-full h-[70vh] flex flex-row px-[8.5rem]  justify-center bg-[#ED9B15]'>
                <div className='w-[50rem]  h-full flex flex-col gap-2 justify-end pb-10  '>
                    <h1 className='text-3xl font-extrabold text-white'>CST <span className='font-normal text-xl'>(Centro de Soporte Técnico)</span></h1>
                    <p className='text-xl text-white font-medium'>
                        Es su aliado en asistencia técnica permanente, brindando soluciones
                        efectivas directamente en las instalaciones de su empresa si se desea.
                        Nos comprometemos a garantizar el óptimo funcionamiento de los
                        equipos contratados, asegurando un servicio de alta calidad.
                    </p>
                    <div className='w-full flex flex-row gap-5'>
                        <button className='py-2 px-5 rounded-4xl bg-[#1F4E85] mt-5'><p className='font-bold text-white text-3xl'>Comprar</p></button>
                    </div>
                </div>
                <div className='w-[30rem] relative items-center justify-center '>
                    <div className='absolute right-[-10%]  bottom-[-50]'>
                        {/* <Image alt='imagen de reguisdata' src={camara} width={300} height={500} /> */}
                    </div>
                </div>
            </section>

            <section className="w-full h-auto flex flex-row justify-center items-center">
        <div className="w-full h-52 flex flex-row justify-items-start  mt-10">
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
      <section className='w-full flex items-center justify-center '>
        <div className='w-[60rem] h-auto flex flex-row relative items-center  justify-center'>
          <div className='w-96 h-96 p-10 bg-[#FBE7C7] rounded-full'>
            <Image alt='imagen de cst' src={cst1} width={1000} className='w-96 object-contain' />
          </div>
          <div className='w-[30rem] px-10 ml-[-2rem] flex items-center bg-[#FBE7C7] h-48 rounded-tr-[4rem] rounded-br-[4rem]'>
            <p className='text-[#1F4E85] font-semibold'>Es una solución integral que ofrece asistencia
              técnica in house para sus sistemas y equipos.
              Nuestro enfoque está en proporcionar un
              servicio eﬁciente y eﬁcaz, minimizando el
              tiempo de adopción y el impacto del cambio,
              mientras aseguramos el funcionamiento
              óptimo de sus equipos con mantenimientos
              preventivos y actualizaciones regulares.</p>
          </div>
        </div>
      </section>
      <section className='w-full flex flex-col items-center justify-center mt-40'>
        <div className='w-[60rem] h-96 flex flex-col items-center justify-center relative'>
          <Image alt='imagen de cst' src={cst2} width={1000} className='w-[60rem] object-contain absolute' />
          <div className='w-[30rem] text-center'>
            <p className='text-xl font-semibold text-[#1F4E85]'>Al elegir el CST de REGISTEL,no solo obtiene un servicio de soporte tecnico, sino un socio confiable que respalda cada paso de su proceso tecnologico, garantizando seguirida, eficiencia y un aumento significativo en la rentabilidad de su empresa</p>
          </div>
        </div>
      </section>

      <section className='w-full flex flex-col items-center justify-center mt-40 bg-[#ED9B15]'>
          <div className='w-[60rem] h-96 flex flex-row items-center justify-center'>
            <div className='w-[20rem] flex flex-col justify-end gap-1 border-r border-white'>
              <p className='text-6xl font-extrabold text-end px-5 text-white'>BE</p>
              <p className='text-6xl font-extrabold text-end px-5 text-white'>NE</p>
              <p className='text-6xl font-extrabold text-end px-5 text-white'>FI</p>
              <p className='text-6xl font-extrabold text-end px-5 text-white'>CIOS</p>
            </div>
            <div className='w-[20rem] flex flex-col gap-2 px-5 '>
              <Image alt='beneficio 1' src={cst3} width={500} className='w-32 h-32 object-contain'/>
              <p className='text-2xl font-semibold text-white'>Valores Agregados</p>
              <p className='text-white'>Disfrute de garantías
              extendidas, auditorías CST
              y servicios de capacitación
              para su personal.</p>
            </div>
          </div>
          <div className='w-[60rem] h-96 flex flex-row items-center justify-center'>
            <div className='w-[20rem] flex flex-col justify-end items-center gap-1 border-r border-white'>
              <Image alt='beneficio 1' src={cst4} width={500} className='w-32 h-32 object-contain'/>
              <p className='text-2xl font-semibold text-white'>Acompañamiento Integral</p>
              <p className='text-end px-5 text-white'>Acompañamos a su equipo
                durante la introducción y
                conﬁguración de nuevos
                equipos, asegurando un
                inicio exitoso.</p>
            </div>
            <div className='w-[20rem] flex flex-col gap-2 px-5 '>
              <Image alt='beneficio 1' src={cst5} width={500} className='w-32 h-32 object-contain'/>
              <p className='text-2xl font-semibold text-white'>Actualizaciones Continuas</p>
              <p className='text-white'>
                Mantenga sus sistemas de
                software y hardware
                siempre actualizados con
                las últimas innovaciones.
              </p>
            </div>
            
          </div>
          <div className='w-[60rem] h-96 flex flex-row items-center justify-center'>
            <div className='w-[20rem] flex flex-col justify-end items-center gap-1 border-r border-white'>
              <Image alt='beneficio 1' src={cst6} width={500} className='w-32 h-32 object-contain'/>
              <p className='text-2xl font-semibold text-white text-end px-5'>Reducción de
                                                                Rechazo por Cambio</p>
              <p className='text-end px-5 text-white'>Minimiza el impacto negativo
              del cambio tecnológico,
              asegurando una integración
              sin inconvenientes.</p>
            </div>
            <div className='w-[20rem] flex flex-col gap-2 px-5 '>
              <Image alt='beneficio 1' src={cst7} width={500} className='w-32 h-32 object-contain'/>
              <p className='text-2xl font-semibold text-white'>Conﬁanza y Seguridad</p>
              <p className='text-white'>
                Ofrecemos autoridad,
                seguridad y respeto en la
                gestión de equipos
                tecnológicos, respaldando
                la conﬁanza en sus
                procesos empresariales.
              </p>
            </div>
            
          </div>
          <div className='w-[60rem] h-96 flex flex-row items-center justify-center'>
            <div className='w-[20rem] flex flex-col justify-end items-center gap-1 border-r border-white'>
              <Image alt='beneficio 1' src={cst8} width={500} className='w-32 h-32 object-contain'/>
              <p className='text-2xl font-semibold text-white text-end px-5'>Apoyo Técnico Constante</p>
              <p className='text-end px-5 text-white'>Realizamos mantenimientos
preventivos programados,
diagnósticos precisos y
certiﬁcaciones de inspección,
garantizando el óptimo
funcionamiento de sus sistemas.</p>
            </div>
            <div className='w-[20rem] flex flex-col gap-2 px-5 '>
              <Image alt='beneficio 1' src={cst9} width={500} className='w-32 h-32 object-contain'/>
              <p className='text-2xl font-semibold text-white'>Adopción Rápida
de Sistemas</p>
              <p className='text-white'>
               Disminuye el tiempo de
adopción de los sistemas de
control, facilitando una
transición suave y eﬁciente.
              </p>
            </div>
            
          </div>
      </section>
      <section className='w-full h-auto flex flex-col items-center justify-center mt-20 '>
        <div className='w-[30rem] h-96 flex flex-col items-center justify-center'>
          <p className='text-center text-[#1F4E85] font-semibold'>El CST se aplica directamente en las instalaciones del cliente,
            proporcionando un servicio personalizado y adaptado a sus
            necesidades especíﬁcas. A través de mantenimientos preventivos y
            actualizaciones constantes, aseguramos que sus sistemas operen
            al máximo rendimiento. Además, nuestro equipo técnico brinda un
            acompañamiento continuo, garantizando que cualquier
            inconveniente sea resuelto de manera inmediata.</p>
        </div>
      </section>
      <section className='w-full h-auto flex flex-col items-center justify-center mt-20 bg-[#ED9B15] pt-10'>
        <Image alt='imagen de cst en operacion' src={cst10} width={1290} height={1290} className='w-full h-auto object-contain'/>
      </section>
    </>
  )
}
