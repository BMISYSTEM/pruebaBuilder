
import { Aside } from '@/components/aside/Aside'
import { Footer } from '@/components/footer/Footer'
import { Header } from '@/components/header/Header'
import { Navar } from '@/components/navar/navar'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: "Registel",
    description: "Registel es una empresa de transporte",
    keywords: ["Registel", "Transporte", "Empresa"],
  };
interface props{
    children: React.ReactNode
}
const ClientLayout = ({children}:Readonly<props>) => {
  return (
    <section className='relative flex flex-row h-full m-0 p-0'>
            <section className='w-full flex flex-col'>
                <Navar/>
                <main className=''>
                    {children}
                </main>
                <Footer/>
            </section>
            <Aside/>
        </section>
  )
}

export default ClientLayout