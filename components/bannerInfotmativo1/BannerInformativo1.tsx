import React, { useState } from 'react'
import { BannerInicio } from '../banners/BannerInicio'
const data = [
    {
      imagen:"/banner.jpeg",
      titulo:"Ingresa a nuestro FanPage @registel.co",
      descripcion:"y mantente actualizado de todo lo que hacemos",
      button:"Ir a Facebook",
      link:"/productos"
    },
    {
      imagen:"/banner.jpeg",
      titulo:"Ingresa a nuestro FanPage @registel.co",
      descripcion:"y mantente actualizado de todo lo que hacemos",
      button:"Ir a Facebook",
      link:"/productos"
    },
    {
      imagen:"/devrier.png",
      titulo:"Ingresa a nuestro FanPage @registel.co",
      descripcion:"y mantente actualizado de todo lo que hacemos",
      button:"Ir a Facebook",
      link:"/productos"
    },
    {
      imagen:"/devrier.png",
      titulo:"Ingresa a nuestro FanPage @registel.co",
      descripcion:"y mantente actualizado de todo lo que hacemos",
      button:"Ir a Facebook",
      link:"/productos"
    },
  ]
export const BannerInformativo1 = () => {
    const [bannerVisible,setBannerVisible] = useState(1)
  return (
    <section className='w-full overflow-hidden  h-screen  flex items-center '>
    <div className=' absolute w-full flex-row  '>
      {data.map((item, index) => (
        <div key={index} className={`${bannerVisible === index ? 'flex' : 'hidden '} w-full    flex-row items-center  justify-center  gap-2 `}>
          <BannerInicio  imagen={item.imagen} descripcion={item.descripcion} titulo={item.titulo} />
        </div>
      ))}
    </div>
  </section>
  )
}
