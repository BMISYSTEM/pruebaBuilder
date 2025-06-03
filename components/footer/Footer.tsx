import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


import facebook from './assets/facebook.png'
import instagram from './assets/instagram.png'
import linkedin from './assets/linkedin.png'
import youtube from './assets/youtube.png'
export const Footer = () => {
  return (
    <footer className='w-full h-auto flex flex-col items-center justify-center '>
      {/* mensaje */}
     
      <div className='w-full bg-[#36508C] h-auto MD:mt-20 mt-10 pb-5 gap-5 flex md:flex-row flex-col md:px-[8.5rem] pt-10'>
        <div className='w-full flex flex-col items-center '>
          <div className='md:w-[30rem] w-full flex flex-row justify-center '>
            <div className='flex flex-col gap-2 px-5 border-r-2 border-white'>
              <Link href={'/'}>
                <p className='text-white text-lg font-light'>RegisBus</p>
              </Link>
              <Link href={'/'}>
                <p className='text-white text-lg font-light'>RegisCenter</p>
              </Link>
              <Link href={'/'}>
                <p className='text-white text-lg font-light'>RegisRuta</p>
              </Link>
              <Link href={'/'}>
                <p className='text-white text-lg font-light'>VideoBus</p>
              </Link>
            </div>
            <div className='w-full flex flex-col gap-2 px-5'>
              <p className='text-white font-light text-lg'>+57 316 403 6607</p>
              <p className='text-white font-light text-lg'>gerencia@registelcolombia.com</p>
            </div>
          </div>
          <div className='md:w-[30rem] w-full mt-10 px-5'>
            <p className='text-xs text-white font-light'>2023 Registel S.A.S. - Todos los derechos reservados <br/>
            Este sitio web ha sido creado y es administrado por Registel.co</p>
          </div>
        </div>
        <div className='w-full flex flex-col  items-center px-2'>
          <p className='md:text-lg text-sm text-white font-light p-0 mt-0'>Carrera 8a A No. 34 - 25</p>
          <p className='md:text-lg text-sm text-white font-light p-0 mt-0'>Cali, Colombia</p>
          <p className='md:text-lg text-sm text-white font-light p-0 mt-0'>Phone: (572) 441-5840</p>
          <p className='md:text-lg text-sm text-white font-light p-0 mt-0'>Fax: (572) 371-9131</p>
          <div className='w-full flex flex-row gap-2 justify-center mt-5'>
            <Image src={youtube} alt='youtube' width={40} height={40}/>
            <Image src={facebook} alt='facebook' width={40} height={40}/>
            <Image src={instagram} alt='instagram' width={40} height={40}/>
            <Image src={linkedin} alt='linkeding' width={40} height={40}/>
          </div>
        </div>
      </div>
    </footer>
  )
}
