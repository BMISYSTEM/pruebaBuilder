import { Empleados } from '@/components/nosotros/empleados/Empleados'
import { Historia } from '@/components/nosotros/historia/Historia'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Registel-Nosotros",
  description: "Historia de registel y empleados",
  keywords: ["Registel", "Transporte", "Empresa"],
};
const page = () => {
  return (
    <>
        <Historia/>
        <Empleados/>
    </>
  )
}

export default page