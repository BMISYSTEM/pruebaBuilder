'use client'
import { BannerInformativo1 } from '@/components/bannerInfotmativo1/BannerInformativo1'
import { BannerInicio } from '@/components/banners/BannerInicio'
import { CasosDeExito } from '@/components/CasosDeExito/CasosDeExito'
import { MetodosDePago } from '@/components/MetodosDePago/MetodosDePago'
import ProductLayout from '@/components/Productos/ProductLayout'
import { Regisbus } from '@/components/regisbus/Regisbus'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'


const page = () => {
 
  return (
    <>
      {/* productos y servicios */}
      <ProductLayout/>
      {/* banner informativo */}
      <BannerInformativo1/>
      {/* producto regisbus */}
      <Regisbus/>
      {/* casos de exito  */}
      <CasosDeExito/>
      {/* metodos de pago  */}
      <MetodosDePago/>
    </>
  )
}

export default page