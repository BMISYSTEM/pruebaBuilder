
import { FormularioContacto } from '@/components/FormularioContacto/FormularioContacto';
import { MapRegistel } from '@/components/MapRegistel/MapRegistel';
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
  title: "Registel-Contactenos",
  description: "Pagina de contacto de registel",
  keywords: ["Registel", "Transporte", "Empresa"],
};
const page = () => {
  return (
    <section className='w-full f-full flex flex-col px-[8.5rem] gap-5 '>
      <div className='w-full h-screen flex flex-row gap-2 mt-20'>
        <div className='w-full h-full border-2'>
          
        </div>
        <div className='w-full h-full'>
         <FormularioContacto/>
        </div>
      </div>
     <MapRegistel/>
    </section>
  )
}

export default page