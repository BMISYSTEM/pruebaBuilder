import { BannerPrincipal } from '@/components/cst/BannerPrincipal';
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "Registel-CST",
  description: "CST de Registel",
  keywords: ["Registel", "Transporte", "Empresa"],
};
const page = () => {
  return (
   <>
    <BannerPrincipal/>
   </>
  )
}

export default page