import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
// imagenes
import metodos from './assets/28.png'
import pse from './assets/pse.svg'
import daviplata from './assets/daviplata.svg'
import epayco from './assets/epayco.svg'
import efecty from './assets/efecty.svg'
import mercadopago from './assets/mercadopago.svg'
export const MetodosDePago = () => {
  return (
    <section className='w-full h-screen flex flex-col items-center justify-center  pt-20'>
        <div className='w-full h-full flex flex-col gap-5  items-center justify-start'>
            <Image alt='Imagen de metodos de pago' src={metodos} width={1290} height={100}/>

            <div className='w-full h-full flex flex-row gap-5 items-center justify-center'>
                <Link href={'/'}>
                    <Image src={epayco} alt='epayco' width={100} height={100} />
                </Link>
                <Link href={'/'}>
                    <Image src={mercadopago} alt='mercadopago' width={100} height={100} />
                </Link>
                <Link href={'/'}>
                    <Image src={pse} alt='pse' width={100} height={100} />
                </Link>
                <Link href={'/'}>
                    <Image src={efecty} alt='efecty' width={100} height={100} />
                </Link>
                <Link href={'/'}>
                    <Image src={daviplata} alt='daviplata' width={100} height={100} />
                </Link>
            </div> 
            {/* mensaje */}
            <div className='w-full h-full flex  justify-center px-[8.5rem] gap-3'>
                <p className='text-lg text-[#36508C]'>Canales aliados como bancolombia o efecty (recuerda adjuntar la foto del recibo con el <br/>
                    nombre correspondiene para poder finalizar la transaccion efectivamente)</p>
            </div>
            
        </div>
        <div>
          
          <p className='text-lg text-[#36508C] text-center'>Registel S.A.S. con más de dos décadas de experiencia en el mercado, ha desarrollado altos estándares de calidad para todos sus <br/>
          procesos de diseño, producción, instalación y procesamiento de dispositivos de control de pasajeros y control de rutas.</p>
        </div>
      </section>
  )
}
