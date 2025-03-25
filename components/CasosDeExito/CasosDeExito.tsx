import React from 'react'

export const CasosDeExito = () => {
  return (
    <section className='w-full h-auto  flex flex-col items-center justify-center'>
        <div className='w-full h-full flex flex-row gap-5 px-[8.5rem] items-center justify-center'>
          {/* recuadros */}
          <div className='w-full h-full flex flex-wrap gap-3 '>
            <div className='rounded-2xl w-40 h-40 bg-linear-to-t from-sky-500 to-indigo-500'></div>
            <div className='rounded-2xl w-40 h-40 bg-linear-to-t from-sky-500 to-indigo-500'></div>
            <div className='rounded-2xl w-40 h-40 bg-linear-to-t from-sky-500 to-indigo-500'></div>
            <div className='rounded-2xl w-40 h-40 bg-linear-to-t from-sky-500 to-indigo-500'></div>
          </div>
          {/* mensaje */}
          <div className='w-full h-full flex flex-col  gap-3 items-start justify-center'>
            <h5 className='text-4xl text-[#36508C] font-extrabold '>Casos de exito</h5>
            <p className='text-[#36508C] text-lg'>
                Registel se especializa en dar informacion
                que facilita el manejo de la flota a las
                empresas y propietarios de vehiculos y de
                almacenes, baños, eventos y centros
                comerciales.
            </p>
          </div>
        </div>
        {/* mensaJE */}
        <div className='w-full mt-5 px-[8.5rem] text-center'>
          <p className='text-[#36508C] text-lg'>
            REGISTEL S.A.S. es pionero en soluciones tecnológicas para el conteo de personas en el transpote público y 
            <br/>
            establecimientos comerciales. Cuenta con más de 25 años de experiencia innovando y asesorando a sus clientes.
          </p>
        </div>
      </section>
  )
}
