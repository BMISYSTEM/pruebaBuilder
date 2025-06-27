"use client";
import Image from "next/image";
import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
const BannerPrincipal = () => {
  return (
    <section className="w-full h-[70vh] flex flex-row px-[8.5rem]  justify-center bg-[#bca5cc]">
      <div className="w-[30rem]  h-full flex flex-col gap-2 justify-end pb-10  ">
        <h1 className="text-3xl font-extrabold text-white">RegisData</h1>
        <p className="text-xl text-white font-medium">
          {" "}
          Es un sistema integral que facilita el análisis y monitoreo de
          operaciones. Incluye modulos estadísticos, de control de flota,
          administrativos y de auditoría. También cuenta con un módulo de
          liquidación para el recaudo físico de dinero y un módulo de despachos.
          Además, ofrece la opción de acoplar un módulo contable para una
          gestión financiera más completa.nnnnnnn
        </p>
        <div className="w-full flex flex-row gap-5">
          <button className="py-1 px-4 rounded-xl bg-white">
            <p className="font-bold text-[#bca5cc]">Transporte</p>
          </button>
          <button className="py-1 px-4 rounded-xl bg-white">
            <p className="font-bold text-[#bca5cc]">Comercial</p>
          </button>
        </div>
      </div>
      <div className="w-[30rem] relative ">
        <div className="absolute  bottom-[-150]">
          <Image
            alt="imagen de reguisdata"
            src={img1}
            width={500}
            height={500}
          />
        </div>
        <div className="absolute  bottom-[-140] ml-[12rem] ">
          <Image
            alt="imagen de reguisdata"
            src={img2}
            width={300}
            height={300}
            className="animate-pulse"
          />
        </div>
      </div>
    </section>
  );
};

export default BannerPrincipal;
