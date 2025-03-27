import React from 'react'

export const FormularioContacto = () => {
  return (
    <form action="/contactenos" className='w-full h-full flex flex-col gap-3'>
    <div className='w-full flex flex-row gap-2 p-2 items-center'>
      <label htmlFor="" className='text-[#1F4E85] text-xl font-bold w-30'>Nombre</label>
      <input type="text" className='bg-slate-200 w-full rounded-xl p-2' />
    </div>
    <div className='w-full flex flex-row gap-2 p-2 items-center'>
      <label htmlFor="" className='text-[#1F4E85] text-xl font-bold w-30'>Email</label>
      <input type="text" className='bg-slate-200 w-full rounded-xl p-2' />
    </div>
    <div className='w-full flex flex-row gap-2 p-2 items-center'>
      <label htmlFor="" className='text-[#1F4E85] text-xl font-bold w-30'>Numero</label>
      <input type="tel" className='bg-slate-200 w-full rounded-xl p-2' />
    </div>
    <div className='w-full flex flex-row gap-2 p-2 items-center'>
      <input type="checkbox" className='bg-slate-200  rounded-xl p-2 ' />
      <label htmlFor="" className='text-[#1F4E85] text-xl font-bold w-full'>Recibir Noticias</label>
    </div>
    <div className='relative w-full h-auto'>
      <textarea name="" id="" className='w-full border border-slate-200 rounded-xl  h-72 p-2'></textarea>
      <button className='absolute bg-[#1F4E85] px-4 py-2 rounded-4xl text-white font-bold text-2xl z-50 right-0 top-[85%]'>
        ENVIAR
      </button>
    </div>
</form>
  )
}
