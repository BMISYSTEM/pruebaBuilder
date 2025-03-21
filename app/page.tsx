'use server'


import { Aside } from '@/components/aside/Aside'
import { Footer } from '@/components/footer/Footer'
import { Header } from '@/components/header/Header'
import { Navar } from '@/components/navar/navar'
import React from 'react'

const PageMain = () => {
  return (
    <section className='relative flex flex-row '>
        <section className='w-full flex flex-col'>
            <Navar/>
            <Header/>
            <Footer/>
        </section>
        <Aside/>
    </section>
  )
}

export default PageMain