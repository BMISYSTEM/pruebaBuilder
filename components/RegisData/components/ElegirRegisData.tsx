"use client";

import Image from "next/image";
import React from "react";
import { motion, useInView, useScroll } from "motion/react"
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";
import img10 from "../assets/img10.png";

//  modulo de rastreo
import rastreo1 from "../assets/rastreo.png";
// modulo liquidacion
import liquidacion from "../assets/liquidacion.png";
// modulo auditorias
import auditorias from "../assets/auditorias.png";
// modulo de usuario
import usuario from "../assets/modulousuario.png";
// modulo de inidcadores
import indicadores from "../assets/indicadores.png";
import indicador1 from "../assets/indicador1.png";
import indicador2 from "../assets/indicador2.png";
import indicador3 from "../assets/indicador3.png";
import indicador4 from "../assets/indicador4.png";
import indicador5 from "../assets/indicador5.png";
// registradora
import registradora from "../assets/registradora.png";
// configuracion
import configuracion from "../assets/configuracion.png";
// configuracion
import compu from "../assets/compu.png";
import ventana1 from "../assets/ventana1.png";
import ventana2 from "../assets/ventana2.png";
import ventana3 from "../assets/ventana3.png";
// inicio
import inicio from "../assets/inicio.png";
import reportes from "../assets/reportes.png";
import graficos from "../assets/graficos.png";
import usuarios from "../assets/usuarios.png";
import dispositivos from "../assets/dispositivos.png";
import { DivAnimateRigth } from "@/components/Globales/DivAnimateRigth";
import { DivAnimateLefth } from "@/components/Globales/DivAnimateLefth";
export const ElegirRegisData = () => {
    const { scrollYProgress } = useScroll();
  return (
    <>
      <section className="w-full px-[8.5rem] flex flex-col gap-5 pt-40 ">
        <h2 className="text-5xl font-extrabold text-[#1f4e85] text-center">
          ¿Por Qué Elegir Regisdata?
        </h2>
        <p className="text-2xl font-light text-[#1f4e85] text-center">
          Al usar Regisdata, obtienes una solución única que centraliza todas
          tus operaciones, desde la planificación de rutas y la liquidación
          hasta el monitoreo de accesos en espacios de alto tráfico. Nuestra
          plataforma es fácil de usar y se adapta a tus necesidades
        </p>
        <div className="w-full h-full flex flex-row gap-4 justify-center items-center">
          <motion.div 
             initial={{ x: -100,opacity:0 }}
             whileInView={{ opacity: 1, y: 0,x: 0}}
             viewport={{ once: false, amount: 0.2 }}
             transition={{ duration: 0.6 }}
            className="w-full flex gap-2 justify-end ">
            <Image
              alt="Imagen de computador"
              src={img3}
              width={500}
              height={500}
              className=""
            />
          </motion.div>
          <DivAnimateRigth porcentajeDiv={0.2}  className="w-2/3 h-full flex justify-start items-center  mb-30 ml-[-10rem]">
            <p className="text-xl font-bold text-[#bba4cb] animatexView">
              SISTEMA ADAPTABLE <br />A DIFERENTES DISPOSITIVOS
            </p>
          </DivAnimateRigth >
        </div>
      </section>
      <section className="w-full px-[8.5rem] flex flex-row gap-5  items-center relative ">
        <div className="absolute left-[-90] bottom-[-120]">
          <Image
            src={img5}
            alt="aro flotando"
            width={400}
            height={400}
            className="animate-pulse"
          />
        </div>
        <DivAnimateLefth className="w-full h-full flex flex-col gap-5">
          <Image
            alt="Imagen de regisdata celular con varias pantllas flotando"
            src={img4}
            width={400}
            height={400}
            className="z-50"
          />
        </DivAnimateLefth>
        <div className="w-full h-full flex flex-col gap-5 ">
          <DivAnimateRigth className="w-full flex flex-col ">
            <h3 className="py-1 px-4 rounded-xl bg-[#9db1ca] text-white font-light text-xl">
              Monitoreo en Tiempo Real:
            </h3>
            <p className="px-4 text-xl font-light">
              Controla cada vehículo, espacio o usuario al instante.
            </p>
          </DivAnimateRigth>
          <DivAnimateRigth className="w-full flex flex-col ">
            <h3 className="py-1 px-4 rounded-xl bg-[#9db1ca] text-white font-light text-xl">
              Reducción de Costos Operativos:
            </h3>
            <p className="px-4 text-xl font-light">
              Optimizamos tus rutas y procesos de liquidación para que ahorres
              tiempo y recursos.
            </p>
          </DivAnimateRigth>
          <DivAnimateRigth className="w-full flex flex-col ">
            <h3 className="py-1 px-4 rounded-xl bg-[#9db1ca] text-white font-light text-xl">
              Análisis Inteligente de Datos:
            </h3>
            <p className="px-4 text-xl font-light">
              Con inteligencia artificial integrada, toma decisiones
              estratégicas basadas en estadísticas precisas.
            </p>
          </DivAnimateRigth>
        </div>
      </section>
      {/* para quien es ideal  */}
      <section className="w-full h-screen flex flex-row gap-2 px-[8.5rem] overflow-hidden items-center ">
        <DivAnimateLefth porcentajeDiv={0.5} className="w-full h-96 flex flex-col  ">
          <Image
            src={img6}
            alt="Imagen de computador mostrando pantallas flotantes"
            width={500}
            height={500}
          />
        </DivAnimateLefth>
        <div className="w-full flex flex-col relative ">
          <div className="z-30">
            <h4 className="text-3xl  text-[#1f4e85] font-extrabold">
              ¿Para Quién Es Ideal Regisdata?
            </h4>
            <p className="text-2xl font-light text-[#1f4e85]">
              Regisdata es perfecto para empresas en diversos sectores, tales
              como:
            </p>
            <div className="w-full mt-5 flex flex-col gap-10">
              <p className="text-2xl font-light text-[#1f4e85]">
                <span className="text-2xl font-bold text-[#1f4e85]">
                  Empresas de Transporte:{" "}
                </span>
                Optimización de rutas, monitoreo de flota y liquidación de
                efectivo.
              </p>
              <p className="text-2xl font-light text-[#1f4e85]">
                <span className="text-2xl font-bold text-[#1f4e85]">
                  Discotecas y Eventos:
                </span>
                Control de accesos y administración de flujo de personas.
              </p>
              <p className="text-2xl font-light text-[#1f4e85]">
                <span className="text-2xl font-bold text-[#1f4e85]">
                  Baños Públicos y Centros Comerciales:
                </span>
                Optimización de accesos y auditoría en tiempo real..
              </p>
            </div>
          </div>
          <div className="absolute right-[-10rem]">
            <Image
              src={img7}
              alt="manchas moradas flotando"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
      {/* video seccion  */}
      <section className="w-full h-screen bg-[#1f4e85] flex flex-col items-center justify-center">
        <p>Video </p>
      </section>
      {/* modulo de reporte */}
      <section className="w-full  h-auto flex  md:px-[8.5rem] px-2 pt-20 ">
        <div className="w-full h-full flex md:flex-row flex-col-reverse gap-2  ">
          <div className="md:w-2/3 w-full flex flex-col mt-20">
            <DivAnimateLefth porcentajeDiv={1} className=" mr-[-3rem] z-30">
              <Image
                src={img8}
                alt="imagen de modulo de reportes"
                width={600}
                height={600}
                className=""
              />
            </DivAnimateLefth>
            <DivAnimateLefth className="w-full flex flex-col ">
              <p className="text-sm font-bold text-[#bba4cb]">Liquidacion</p>
              <p className="text-sm text-[#1f4e85]">
                {" "}
                Detallado de liquidación / Consolidado vehículos no liquidados /
                Liquidación por liquidador / Categoría de descuento por
                pasajeros / Categoría de descuento por dinero
              </p>
            </DivAnimateLefth>
            <DivAnimateLefth className="w-full flex flex-col ">
              <p className="text-sm font-bold text-[#bba4cb]">General</p>
              <p className="text-sm text-[#1f4e85]">
                Mantenimientos Historial / Puntos de control por vehículo /
                Producción por vehículo / Producción por conductor / Alarmas por
                vehículo / Nivel de ocupación / Comparativo producción por ruta/
                Consolidado productividad por hora / Consolidado de vehiculo /
                Días laborados / Distribución tarifaria por ruta
              </p>
            </DivAnimateLefth>
            <DivAnimateLefth className="w-full flex flex-col ">
              <p className="text-sm font-bold text-[#bba4cb]">
                Consolidado de rutas
              </p>
              <p className="text-sm text-[#1f4e85]">
                Planilla modo de ocupación / Frecuencia de ruta Consolidado de
                despacho / Planilla de despacho por ruta / Boleta de despacho
                por vehículo
              </p>
            </DivAnimateLefth>
            <DivAnimateLefth className="w-full flex flex-col ">
              <p className="text-sm font-bold text-[#bba4cb]">Conductor</p>
              <p className="text-lg text-[#1f4e85]">
                Infracciones de límite de velocidad
              </p>
            </DivAnimateLefth>
            <DivAnimateLefth className="w-full flex flex-col ">
              <p className="text-sm font-bold text-[#bba4cb]">Auditoria</p>
              <p className="text-sm text-[#1f4e85]">
                Auditoria ajustes pre liquidación
              </p>
            </DivAnimateLefth>
          </div>
          <DivAnimateRigth className="w-full h-full flex flex-col gap-5">
            <h5 className="text-6xl font-extrabold text-[#1f4e85]">
              Modulo Reportes
            </h5>
            <div>
              <div className="p-5 rounded-xl bg-[#bba4cb] text-white px-10">
                <p className="text-xl">
                  {" "}
                  Ofrece una visión integral del desempeño del transporte
                  mediante gráficas intuitivas. Obtén información detallada
                  sobre la productividad por ruta, cumplimiento de itinerarios,
                  flujo de pasajeros por hora, descuentos por categoría y
                  capacidad transportadora. Este módulo es esencial para
                  optimizar la operación y tomar decisiones estratégicas.
                  Beneficio: Permite a los gestores tomar decisiones rápidas y
                  basadas en datos. Esto es crucial para responder a cambios en
                  la demanda y necesidades operativas, asegurando que la
                  operación sea flexible y eficiente.
                </p>
              </div>
              <div className="w-full flex flex-row justify-end gap-2  ">
                <p className="text-sm font-bold text-[#bba4cb]">
                  Podrás seleccionar rango de fechas y exportarlo
                </p>
                <div className=" flex flex-row gap-2 mt-[-3rem]">
                  <Image
                    src={img9}
                    alt="imgen de excel"
                    width={60}
                    height={60}
                  />
                  <Image
                    src={img10}
                    alt="imgen de csv"
                    width={60}
                    height={60}
                  />
                </div>
              </div>
            </div>
          </DivAnimateRigth>
        </div>
      </section>
      {/* modulo de rastreo */}
      <section className="w-full  flex  px-[8.5rem] pt-20 ">
        <div className="w-full h-full flex flex-row gap-2  ">
          <DivAnimateLefth className="w-2/3 flex flex-col mt-20">
            <div className=" mr-[-3rem] z-30  flex justify-end">
              <Image
                src={rastreo1}
                alt="imagen de modulo de reportes"
                width={500}
                height={300}
                className=""
              />
            </div>
          </DivAnimateLefth>
          <div className="w-full h-full flex flex-col gap-5">
            <h6 className="text-6xl font-extrabold text-[#1f4e85]">
              Modulo Rastreo
            </h6>
            <div>
              <DivAnimateRigth className="p-5 rounded-xl border-2 border-[#bba4cb] text-[#1f4e85] px-10">
                <p className="text-xl">
                  {" "}
                  Visualiza opciones clave por vehículo o flota, ya sea de forma
                  gráfica o en tablas. Desde puntos de control hasta pasajeros
                  ingresados, alarmas, imágenes y eventos, obtén una visión
                  completa de tus activos. Beneficio: Mantén una supervisión
                  precisa de toda la operación para detectar problemas y mejorar
                  la productividad de cada vehículo y de la flota completa.
                </p>
              </DivAnimateRigth>
              <div className="w-full h-96  flex flex-col justify-start gap-5 mt-5  ">
                <DivAnimateRigth className="relative">
                  <p className="absolute text-lg text-[#1f4e85] px-20">
                    Visualiza la ruta en tiempo real, ya sea por horas o por
                    día, y ﬁltra por vehículo, ﬂota, alarmas, puntos de control,
                    pasajeros, imágenes y mucho más.
                  </p>
                  <p className=" text-6xl font-bold px-14 text-[#bba4cb] m-0 ">
                    1
                  </p>
                </DivAnimateRigth>
                <DivAnimateRigth className="relative mt-5">
                  <p className="absolute text-lg text-[#1f4e85] px-20">
                    Puedes visualizar eventos, alarmas, puntos de control y más.
                    Además, ofrece detalles completos sobre el rendimiento, como
                    el total de pasajeros transportados, la distancia recorrida,
                    el índice de pasajeros por kilómetro (IPK), ocupación,
                    entradas, salidas y velocidad.
                  </p>
                  <p className=" text-6xl font-bold px-14 text-[#bba4cb] m-0 ">
                    2
                  </p>
                </DivAnimateRigth>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Modulo de liquidacion */}
      <section className="w-full  h-auto flex  px-[8.5rem]  ">
        <div className="w-full h-full flex flex-row gap-2  ">
          <DivAnimateLefth className="w-2/3 flex flex-col mt-20">
            <div className=" mr-[-3rem] z-30  flex justify-end">
              <Image
                src={liquidacion}
                alt="imagen de modulo de reportes"
                width={500}
                height={300}
                className=""
              />
            </div>
          </DivAnimateLefth>
          <DivAnimateRigth className="w-full h-auto flex flex-col gap-5">
            <h6 className="text-6xl font-extrabold text-[#1f4e85]">
              Modulo Liquidacion
            </h6>
            <div>
              <div className="p-5 rounded-[4rem] border-2 bg-[#bba4cb] text-white px-10">
                <p className="text-xl">
                  {" "}
                  Visualiza opciones clave por vehículo o flota, ya sea de forma
                  gráfica o en tablas. Desde puntos de control hasta pasajeros
                  ingresados, alarmas, imágenes y eventos, obtén una visión
                  completa de tus activos. Beneficio: Mantén una supervisión
                  precisa de toda la operación para detectar problemas y mejorar
                  la productividad de cada vehículo y de la flota completa.
                </p>
              </div>
              <div className="w-full h-40 flex flex-col justify-start gap-5 mt-5  ">
                <div className="relative">
                  <p className="absolute text-lg text-[#1f4e85] px-20">
                    Visualiza los vehículos liquidados y los pendientes de
                    liquidación, junto con el número de pasajeros. Puedes
                    consultar la información por rango de fechas. Podrás asignar
                    descuentos de uso, como gasolina, llantas, aceite, entre
                    otros, y aplicarlos a la liquidación.
                  </p>
                </div>
              </div>
            </div>
          </DivAnimateRigth>
        </div>
      </section>
      {/* modulo de auditorias */}
      <section className="w-full  flex  px-[8.5rem] pt-20 ">
        <div className="w-full h-full flex flex-row gap-2  ">
          <DivAnimateLefth className="w-2/3 flex flex-col mt-20">
            <div className=" mr-[-3rem] z-30  flex justify-end">
              <Image
                src={auditorias}
                alt="imagen de modulo de reportes"
                width={500}
                height={300}
                className=""
              />
            </div>
          </DivAnimateLefth>
          <DivAnimateRigth className="w-full h-full flex flex-col gap-5">
            <h6 className="text-6xl font-extrabold text-[#1f4e85]">
              Modulo Auditorias
            </h6>
            <div>
              <div className="p-5 rounded-xl border-2 border-[#bba4cb] text-[#1f4e85] px-10">
                <p className="text-xl">
                  {" "}
                  Este módulo registra cada intervención o cambio en los módulos
                  de la plataforma, dejando constancia de la persona
                  responsable. Esto asegura transparencia y control en toda tu
                  operación. Beneﬁcio: Gana seguridad y transparencia en tu
                  operación, facilitando auditorías y el seguimiento de acciones
                  para una administración más eﬁciente.
                </p>
              </div>
            </div>
          </DivAnimateRigth>
        </div>
      </section>
      {/* modulo de usuarios */}
      <section className="w-full  flex  px-[8.5rem] pt-20 ">
        <div className="w-full h-full flex flex-row gap-2  ">
          <DivAnimateLefth className="w-2/3 flex flex-col mt-20">
            <div className=" mr-[-3rem] z-30  flex justify-end">
              <Image
                src={usuario}
                alt="imagen de modulo de reportes"
                width={500}
                height={300}
                className=""
              />
            </div>
          </DivAnimateLefth>
          <DivAnimateRigth className="w-full h-full flex flex-col gap-5">
            <h6 className="text-6xl font-extrabold text-[#1f4e85]">
              Modulo Usuario
            </h6>
            <div>
              <div className="p-5 rounded-[4rem] border-2 bg-[#bba4cb] text-white px-10">
                <p className="text-xl">
                  {" "}
                  Conﬁgura perﬁles especíﬁcos para cada usuario, de modo que
                  solo accedan a la información relevante a su rol (como
                  liquidación, despachos, o auditoría). Esto garantiza que solo
                  personal autorizado pueda hacer cambios críticos en la
                  plataforma. Beneﬁcio: Controla la seguridad de la información,
                  limitando el acceso según el rol y protegiendo los datos de la
                  empresa.
                </p>
              </div>
            </div>
          </DivAnimateRigth>
        </div>
      </section>
      {/* Modulo de Indicadores */}
      <section className="w-full  h-auto flex  px-[8.5rem]  pt-20 ">
        <div className="w-full h-full flex flex-row gap-2  ">
          <DivAnimateLefth className="w-2/3 flex flex-col mt-20 ">
            <div className=" mr-[-3rem] z-30  flex justify-end">
              <Image
                src={indicadores}
                alt="imagen de modulo de reportes"
                width={500}
                height={300}
                className=""
              />
            </div>
          </DivAnimateLefth>
          <div className="w-full h-auto flex flex-col gap-5">
            <h6 className="text-6xl font-extrabold text-[#1f4e85]">
              Modulo Indicadores
            </h6>
            <div>
              <DivAnimateRigth className="p-5 rounded-[4rem] border-2 border-[#bba4cb] text-[#1f4e85] px-10">
                <p className="text-xl">
                  {" "}
                  Ofrece una visión integral del desempeño del transporte
                  mediante gráﬁcas intuitivas. Obtén información detallada sobre
                  la productividad por ruta, cumplimiento de itinerarios, ﬂujo
                  de pasajeros por hora, descuentos por categoría y capacidad
                  transportadora. Este módulo es esencial para optimizar la
                  operación y tomar decisiones estratégicas. Beneﬁcios: Con
                  gráﬁcas intuitivas y datos en tiempo real, puedes tomar
                  decisiones informadas que mejoren la rentabilidad y eﬁciencia
                  operativa.
                </p>
              </DivAnimateRigth>
              <div className="w-full h-auto flex flex-col justify-start gap-2 mt-5  ">
                <DivAnimateLefth className="flex flex-row gap-2 items-center px-20 ">
                  <Image
                    src={indicador1}
                    width={40}
                    height={40}
                    alt="indicador 1 "
                  />
                  <p className=" text-lg text-[#1f4e85] ">
                    Índice de productividad por ruta Cantidad de pasajeros
                  </p>
                </DivAnimateLefth>
                <DivAnimateLefth className="flex flex-row gap-2 items-center px-20 ">
                  <Image
                    src={indicador2}
                    width={40}
                    height={40}
                    alt="indicador 1 "
                  />
                  <p className=" text-lg text-[#1f4e85] ">
                    Índice de Cumplimiento de ruta %
                  </p>
                </DivAnimateLefth>
                <DivAnimateLefth className="flex flex-row gap-2 items-center px-20 ">
                  <Image
                    src={indicador3}
                    width={40}
                    height={40}
                    alt="indicador 1 "
                  />
                  <p className=" text-lg text-[#1f4e85] ">
                    Índice de pasajeros por hora Cantidad de entradas
                  </p>
                </DivAnimateLefth>
                <DivAnimateLefth className="flex flex-row gap-2 items-center px-20 ">
                  <Image
                    src={indicador4}
                    width={40}
                    height={40}
                    alt="indicador 1 "
                  />
                  <p className=" text-lg text-[#1f4e85] ">
                    Índice de descuento de pasajero por categoria
                  </p>
                </DivAnimateLefth>
                <DivAnimateLefth className="flex flex-row gap-2 items-center px-20 ">
                  <Image
                    src={indicador5}
                    width={40}
                    height={40}
                    alt="indicador 1 "
                  />
                  <p className=" text-lg text-[#1f4e85] ">
                    Índice de capacidad transportadora
                  </p>
                </DivAnimateLefth>
                <DivAnimateLefth className="flex flex-row gap-2 items-center px-20 ">
                  <Image
                    src={indicador1}
                    width={40}
                    height={40}
                    alt="indicador 1 "
                  />
                  <p className=" text-lg text-[#1f4e85] ">Viajes</p>
                </DivAnimateLefth>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* modulo de registradora */}
      <section className="w-full  flex  px-[8.5rem] pt-20 ">
        <div className="w-full h-full flex flex-row gap-2  ">
          <DivAnimateRigth className="w-2/3 flex flex-col mt-20 ">
            <div className=" mr-[-3rem] z-30  flex justify-end">
              <Image
                src={registradora}
                alt="imagen de modulo de reportes"
                width={500}
                height={300}
                className=""
              />
            </div>
          </DivAnimateRigth>
          <DivAnimateLefth className="w-full h-full flex flex-col gap-5">
            <h6 className="text-6xl font-extrabold text-[#1f4e85]">
              Modulo Registradora
            </h6>
            <div>
              <div className="p-5 rounded-[4rem] border-2 bg-[#bba4cb] text-white px-10">
                <p className="text-xl">
                  {" "}
                  Visualiza rutas, horarios, vueltas y movimientos de pasajeros
                  de cada vehículo. Esta información te ayuda a optimizar la
                  operación de manera continua, asegurando una alta
                  productividad diaria. Beneﬁcio: Mantén el control de cada
                  vehículo y mejora la eﬁciencia de la ﬂota, tomando decisiones
                  informadas que mejoren la productividad
                </p>
              </div>
            </div>
          </DivAnimateLefth>
        </div>
      </section>
      {/* modulo de Conﬁguración */}
      <section className="w-full  flex  px-[8.5rem] pt-20 ">
        <div className="w-full h-full flex flex-row gap-2  ">

          <DivAnimateRigth className="w-2/3 flex flex-col  ">
            <div className=" mr-[-2rem] z-30  flex justify-end">
              <Image
                src={configuracion}
                alt="imagen de modulo de reportes"
                width={500}
                height={300}
                className=""
              />
            </div>
          </DivAnimateRigth>
          <DivAnimateLefth className="w-full h-full flex flex-col gap-5  ">
            <h6 className="text-6xl font-extrabold text-[#1f4e85]">
              Conﬁguración
            </h6>
            <div>
              <div className="p-5 rounded-xl border-2 border-[#bba4cb] text-[#1f4e85] px-10">
                <p className="text-xl">
                  Ajusta alarmas, rutas, y mantenimientos según las necesidades
                  de tu operación. Cada modiﬁcación queda registrada y solo el
                  personal autorizado puede acceder a estas conﬁguraciones.
                  Beneﬁcio: Personaliza y controla cada aspecto operativo de
                  manera segura, mejorando la administración y protegiendo la
                  integridad de los datos.
                </p>
              </div>
            </div>
          </DivAnimateLefth>
        </div>
      </section>
      {/* computador con modulos  */}
      <section className="w-full  flex flex-col ga-5  px-[8.5rem] pt-20 relative   mt-20 ">
        <div className="w-full h-full flex flex-row gap-2 items-center justify-center relative p-20 ">
          <Image src={compu} alt="aro flotando" width={400} height={400} />
          <Image
            src={ventana1}
            alt="aro flotando"
            width={100}
            height={100}
            className="absolute top-32 right-[35%] "
          />
            <Image
                src={ventana2}
                alt="aro flotando"
                width={100}
                height={100}
                className="absolute top-1 right-[45%] animatexView"
            />
          <Image
            src={ventana3}
            alt="aro flotando"
            width={100}
            height={100}
            className="absolute top-[-50] right-[55%] animatexView"
          />
        </div>
        <div className="w-full  flex flex-row items-center justify-center">
          <p className="text-2xl font-bold text-center text-[#bba4cb] ">
            Información en cualquier <br />
            parte del mundo
          </p>
        </div>
        <div className="absolute left-[-150] top-[0]">
          <Image
            src={img5}
            alt="aro flotando"
            width={300}
            height={400}
            className="animate-pulse"
          />
        </div>
      </section>
      {/* video Regisdata Comercial */}
      <section className="w-full h-screen bg-[#bba4cb] mt-5">
        <p>video</p>
      </section>
      {/* modulos peque */}
      <section className="w-full h-auto flex flex-col gap-5 pt-20">
      <section className="w-full  flex flex-col gap-5  px-[8.5rem] pt-20 ">
        <div className="w-full h-full flex flex-row gap-2  items-center  ">
          <div className="w-2/3 flex flex-col ">
            <div className=" mr-[-3rem] z-30  flex justify-end">
              <Image
                src={inicio}
                alt="imagen de modulo de reportes"
                width={300}
                height={200}
                className=""
              />
            </div>
          </div>
          <div className="w-full h-full flex flex-col gap-5">
            <div>
              <div className="p-5 rounded-[4rem] border-2 bg-[#bba4cb]/20 text-white px-10">
                <h6 className="text-3xl font-extrabold text-[#1f4e85]">
                    Modulo Inicio
                </h6>
                <p className="text-xl text-[#1f4e85]">
                  {" "}
                    Visualiza el general de cada dispositivo de tu negocio de
                    manera fácil, por produccion y ultimo evento reportado.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex flex-row gap-2  items-center mt-20 ">
          <div className="w-2/3 flex flex-col ">
            <div className=" mr-[-3rem] z-30  flex justify-end">
              <Image
                src={reportes}
                alt="imagen de modulo de reportes"
                width={300}
                height={200}
                className=""
              />
            </div>
          </div>
          <div className="w-full h-full flex flex-col gap-5">
            <div>
              <div className="p-5 rounded-[4rem] border-2 bg-[#bba4cb]/20 text-white px-10">
                <h6 className="text-3xl font-extrabold text-[#1f4e85]">
                    Modulo Reportes
                </h6>
                <p className="text-xl text-[#1f4e85]">
                  {" "}
                    Ofrece una visión completa de la liquidación, productividad
                    y comportamiento operativo. Desde detalles sobre traﬁco
                    diario hasta analisis de IA
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex flex-row gap-2  items-center mt-20 ">
          <div className="w-2/3 flex flex-col ">
            <div className=" mr-[-3rem] z-30  flex justify-end">
              <Image
                src={graficos}
                alt="imagen de modulo de reportes"
                width={300}
                height={200}
                className=""
              />
            </div>
          </div>
          <div className="w-full h-full flex flex-col gap-5">
            <div>
              <div className="p-5 rounded-[4rem] border-2 bg-[#bba4cb]/20 text-white px-10">
                <h6 className="text-3xl font-extrabold text-[#1f4e85]">
                Modulo Gráﬁcos
                </h6>
                <p className="text-xl text-[#1f4e85]">
                  {" "}
                    Permite visualizar información clave en gráﬁcos y tablas,
                    brindando una visión completa de tu negocio. Su módulo de
                    inteligencia artiﬁcial mejora el análisis de datos, facilitando
                    la toma de decisiones estratégicas para optimizar tus
                    operaciones de transporte.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex flex-row gap-2  items-center mt-20 ">
          <div className="w-2/3 flex flex-col ">
            <div className=" mr-[-3rem] z-30  flex justify-end">
              <Image
                src={usuarios}
                alt="imagen de modulo de reportes"
                width={300}
                height={200}
                className=""
              />
            </div>
          </div>
          <div className="w-full h-full flex flex-col gap-5">
            <div>
              <div className="p-5 rounded-[4rem] border-2 bg-[#bba4cb]/20 text-white px-10">
                <h6 className="text-3xl font-extrabold text-[#1f4e85]">
                Modulo Usuario
                </h6>
                <p className="text-xl text-[#1f4e85]">
                  {" "}
                  Registra y administra las personas que tendran acceso a tu negocio
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex flex-row gap-2  items-center mt-20 ">
          <div className="w-2/3 flex flex-col ">
            <div className=" mr-[-3rem] z-30  flex justify-end">
              <Image
                src={dispositivos}
                alt="imagen de modulo de reportes"
                width={300}
                height={200}
                className=""
              />
            </div>
          </div>
          <div className="w-full h-full flex flex-col gap-5">
            <div>
              <div className="p-5 rounded-[4rem] border-2 bg-[#bba4cb]/20 text-white px-10">
                <h6 className="text-3xl font-extrabold text-[#1f4e85]">
                Modulo Dispositivos
                </h6>
                <p className="text-xl text-[#1f4e85]">
                  {" "}
                  Gestiona el nombre adecuado para tener un control
                  de cada establecimiento
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </section>
    </>
  );
};

