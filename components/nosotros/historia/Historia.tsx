'use client'
import React, { useEffect, useRef } from "react";
import Image from "next/image";

import imagen1 from "./assets/imagen1.svg";
import historia from "./assets/historia.avif";
import fecha from "./assets/1997.avif";
import dosmil from "./assets/2000.avif";
import imagen2 from "./assets/imagen2.svg";
import experiencia from "./assets/experiencia.svg";
import Mission from "./assets/mision.avif";
import vision from "./assets/vision.svg";
const brands = [
   "Respeto",
   "inovacion",
   "Trabajo en equipo",
   "Perseverancia",
   "Respeto",
   "inovacion",
   "Trabajo en equipo",
   "Perseverancia",
   "Respeto",
   "inovacion",
   "Trabajo en equipo",
   "Perseverancia",
   "Respeto",
   "inovacion",
   "Trabajo en equipo",
   "Perseverancia",
   "Respeto",
   "inovacion",
   "Trabajo en equipo",
   "Perseverancia",
  ];
export const Historia = () => {
   
  return (
    <>
      <section className=" h-auto   gap-5 relative flex flex-col ">
        <div className=" w-full h-full flex flex-col absolute  items-center mt-20 px-[8.5rem]">
          <div className="">
            <Image
              src={historia}
              alt="Historia de Registel"
              width={900}
              height={900}
              loading="eager"
            />
          </div>
          <div className="w-full flex justify-end">
            <Image
              src={fecha}
              alt="Historia de Registel"
              width={300}
              height={300}
               loading="eager"
            />
          </div>
          <div className="w-full h-full  flex items-end justify-end">
            <Image
              src={dosmil}
              alt="Historia de Registel"
              width={500}
              height={500}
               loading="eager"
            />
          </div>
        </div>
        <div className="w-full h-full flex flex-row gap-5 px-[8.5rem] pt-60 items-center">
          {/* imagen */}
          <div className="w-full h-full flex flex-col gap-4 items-center justify-center  z-40">
            <Image
              src={imagen1}
              alt="Imagen de la historia de Registel"
              width={300}
              height={300}
               loading="eager"
            />
          </div>
          {/* texto */}
          <div className="w-full h-full flex flex-col gap-20 z-40">
            <p className="text-xl font-bold text-[#36508C]">
              En 1997, Registel surgio como respuesta a la creciente necesidad
              en la industria del transporte. La empresa de transporte Coletivo
              de Cali, conocida como "Cooperativa Gris San Fernando Ltda.", fue
              el punto de partida para un proyecto ambicioso que cambiaria la
              forma en que entendemos la movilidad."
            </p>
            <p className="text-xl font-bold text-[#36508C]">
              En ese momento, un joven visionario con formacion en ingenieria
              electrica y electronica identifico el problema de la evasion en el
              transporte publico
            </p>
            <p className="text-xl font-bold text-[#BCABD1] drop-shadow-xl">
              Con dos años de estudios en ingenieria electrica, se percato de un
              problema constanteÑ la alta evasion en el transporte publico.
            </p>
            <p className="text-xl font-bold text-[#36508C]">
              En el año 2000, se lanzo la primera version comercial del sistema,
              marcando el inicio de Registel.
            </p>
          </div>
        </div>
      </section>
      <section className=" h-auto   gap-5 relative flex flex-col ">
        <div className=" w-full h-full flex flex-col absolute  items-center mt-20 px-[8.5rem]">
          <div className="h-full flex items-end">
            <Image
              src={experiencia}
              alt="Historia de Registel"
              width={5000}
              height={5000}
               loading="lazy"
            />
          </div>
        </div>
        <div className="w-full h-full flex flex-row gap-5 px-[8.5rem]  items-center">
          {/* texto */}
          <div className="w-full h-full flex flex-col gap-20 z-40 mt-20">
            <p className="text-xl font-bold text-[#36508C]">
                Desde entonces, nos hemos consolidado como
                líderes en soluciones tecnológicas para la
                movilidad, ofreciendo hardware y software
                innovadores para la gestión y control operativo en
                diversas empresas de transporte.
            </p>
            <p className="text-xl font-bold text-[#36508C]">
                Con más de 24 años de experiencia en el mercado,
                enfrentamos desafíos con determinación, logrando
                un crecimiento constante en ventas. Nos
                destacamos por nuestro enfoque integral en el
                desarrollo de hardware y software, enfocándonos en
                soluciones únicas para el control y gestion
                productiva y operativa en el sector transporte y
                comercial.
            </p>
            <p className="text-xl font-bold text-[#36508C]">
                En Registel, continuamos avanzando con determinacion, ofreciendo soluciones de vanguardia en sensores, contadores de personas
                y desarrollos de software especializados,consolidando nuestra pocicion como lideres en la industria.
            </p>
          </div>
          {/* imagen */}
          <div className="w-full h-full flex flex-col gap-4 items-center justify-center  z-40">
            <Image
              src={imagen2}
              alt="Imagen de la historia de Registel"
              width={300}
              height={300}
               loading="lazy"
            />
          </div>
        </div>
      </section>
      {/* mision */}
      <section className=" h-auto   gap-5 relative flex flex-col mt-10 ">
        <div className=" w-full h-full flex flex-col absolute   px-[8.5rem]">
          <div className="h-full flex items-start">
            <Image
              src={Mission}
              alt="Historia de Registel"
              width={800}
              height={800}
               loading="lazy"
            />
          </div>
        </div>
        <div className="w-full h-full flex flex-row gap-5 px-[8.5rem]  items-center">
          {/* texto */}
          <div className="w-full h-full flex flex-col gap-20 z-40 mt-40">
            <p className="text-xl font-bold text-[#36508C]">
                Garantizar el crecimiento sostenible de Registel, asegurando un aumento anual 
                de las ventas de dos digitos como minimo. materializando a travez de soluciones tecnologicas de ALTA CALIDAD, diseñadas para superar las espectativas de nuestros clientes.
                con un equipo competente y motivado, que mejora las condicciones laborales internas, garantizando la rentabilidad de los socios y con 
                responsabilidad social. Ser reconocida internacionalmente como lider en el desarrollo e implementacion de soluciones tecnologicas innovadoras y sostenibles para la movilidad, en el transporte y el comercio
            </p>
          </div>
        </div>
      </section>
      {/* vision */}
      <section className=" h-auto   gap-5 relative flex flex-col mt-10 ">
        <div className=" w-full h-full flex flex-col absolute   px-[8.5rem]">
          <div className="h-full flex items-start">
            <Image
              src={vision}
              alt="Historia de Registel"
              width={800}
              height={800}
               loading="lazy"
            />
          </div>
        </div>
        <div className="w-full h-full flex flex-row gap-5 px-[8.5rem]  items-center">
          {/* texto */}
          <div className="w-full h-full flex flex-col gap-20 z-40 mt-40">
            <p className="text-xl font-bold text-[#36508C]">
                Liderar en el año 2028 el desarrollo de soluciones tecnologicas que potencien
                los ingresos y servicios proporcionados por los clientes a nivel mundial. Guiados
                por la búsqueda constante de la excelencia, se impulsará la innovación,
                ofreciendo productos y servicios confiables, eficaces y siempre actualizados. Se
                contribuirá de manera significativa al cuidado del medio ambiente mediante el
                uso eficiente de la información, la inteligencia artificial y el internet.
            </p>
          </div>
        </div>
      </section>
      {/* brand movible */}
      <section className="relative w-full overflow-hidden mt-10 mb-10 ">
      <div className="flex animate-scroll whitespace-nowrap">
        {brands.concat(brands).map((brand, index) => (
          <p key={index} className="text-2xl font-bold text-[#36508C]">-{brand}</p>
        ))}
      </div>
    </section>
    {/* personal */}
    
    </>
  );
};
