import Image from 'next/image'
import { TarjetaProductos } from './TarjetaProductos'

const data = [
    {
      image:"/Recurso 5iconos.png",
      title:"Regisdata",
      description:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."
    },
    {
      image:"/Recurso 6iconos.png",
      title:"RegisCenter",
      description:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."
    },
    {
      image:"/Recurso 8iconos.png",
      title:"Siconder",
      description:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."
    },
    {
      image:"/Recurso 5iconos.png",
      title:"Regisbus",
      description:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."
    },
    {
      image:"/Recurso 3iconos.png",
      title:"CST",
      description:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."
    },
    {
      image:"/Recurso 4iconos.png",
      title:"VideoBus",
      description:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."
    },
  ]
const ProductLayout = () => {
  return (
    <section className='w-full h-auto flex flex-col mb-2'>
            {/* titulo */}
            <div className='flex flex-col gap-4 px-[8.5rem] mt-20 w-[50rem]'>
                <h2 className='text-[#36508C] text-4xl font-extrabold'>Productos y Servicios</h2>
                <p>Registel se especializa en solucionar a través de
                tecnología la necesidad de Saber mas ...</p>
            </div>
            {/* carrousel */}
            <section className={`w-full  flex items-center justify-center px-[8.5rem] `}>
              <div className='w-full  h-auto overflow-hidden flex flex-row gap-5 mt-10 justify-center items-center pb-2 relative z-[99]'>
                <button 
                title='Anterior'
                className='absolute left-0 w-20 h-20 bg-[#36508C]/60 top-[40%]  
                rounded-full flex justify-center  items-center text-white transition duration-150
                hover:bg-[#36508C]'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </button>
                
                {data.map((e,index)=>(
                  <TarjetaProductos key={index} imagen={e.image} description={e.description} titulo={e.title}/>
                ))}
                
                <button
                title='Siguiente'
                className='absolute  right-0 w-20 h-20 bg-[#36508C]/60 top-[40%] rounded-full flex 
                justify-center items-center text-white transition duration-150
                hover:bg-[#36508C]'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
            </section>
            <section className='w-full  px-[8.5rem] mt-5 flex flex-row gap-5 justify-center items-center '>
                <div className='w-full flex flex-row gap-5 justify-center items-center'>
                  {data.map((e,index)=>(
                    <div key={index}>
                      <Image  src={e.image} alt={e.title} width={50} height={50}/>
                    </div>
                  ))}
                
                </div>
            </section>
          </section>
  )
}

export default ProductLayout