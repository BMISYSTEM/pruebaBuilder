import Image from "next/image";
import React from "react";
// imagenes
import vb1 from './assets/vb1.png'
import vb2 from './assets/vb2.png'
import vb3 from './assets/vb3.png'
import vb4 from './assets/vb4.png'
import vb5 from './assets/vb5.png'
import vb6 from './assets/vb6.png'
export const BannerPrincipal = () => {
  return (
    <>
      <section className="w-full h-[70vh] flex flex-row px-[8.5rem]  justify-center bg-[#ED9B15]">
        <div className="w-[50rem]  h-full flex flex-col gap-2 justify-end pb-10  ">
          <h1 className="text-3xl font-extrabold text-white">videoBus </h1>
          <p className="text-xl text-white font-medium">
            Es una solución tecnológica avanzada que automatiza el proceso de
            registro y validación de pasajeros en el transporte público.
            Mediante dispositivos se podrá registrar diferentes tarifas para
            facilitar la transparencia y control del trasnporte este sistema
            asegura una gestión eficiente y precisa de los datos de los
            pasajeros.
          </p>
          <div className="w-full flex flex-row gap-5">
            <button className="py-2 px-5 rounded-4xl bg-[#1F4E85] mt-5">
              <p className="font-bold text-white text-3xl">Comprar</p>
            </button>
          </div>
        </div>
        <div className="w-[30rem] relative items-center justify-center ">
          <div className="absolute right-[-10%]  bottom-[-50]">
            {/* <Image alt='imagen de reguisdata' src={camara} width={300} height={500} /> */}
          </div>
        </div>
      </section>
      <section className="w-full h-auto flex flex-row justify-center items-center">
        <div className="w-full h-52 flex flex-row justify-items-start  mt-10">
          <button className="bg-[#1F4E85] px-10 rounded-r-[50] h-24 ">
            <p className="text-white text-xl font-bold">
              Cotiza
              <br />
              <span className="text-white text-lg p-0 m-0">con nosotros</span>
              <br />
              <span className="text-white text-sm">
                gerente@registelcolombia
              </span>
            </p>
          </button>
        </div>
      </section>
      <section className="w-full flex flex-col gap-5 items-center justify-center">
        <h2 className="text-3xl font-semibold text-[#1F4E85]">On line/Of line</h2>
        <div className="w-[60rem] flex md:flex-row flex-col justify-center items-center gap-5">
            <div>
                <Image alt="irmax matrix" src={vb1} width={500} height={500} className="w-60 object-contain"/>
                <p className="text-center"></p>
            </div>
            <div>
                <Image alt="modelo RGT-USB30" src={vb2} width={500} height={500} className="w-60 object-contain mb-[-5rem]"/>
                <p className="text-center"></p>
            </div>
            <div>
                <Image alt="modelo IP5M" src={vb3} width={500} height={500} className="w-60 object-contain"/>
                <p className="text-center"></p>
            </div>
        </div>
      </section>
      <section className="mt-60 w-full flex flex-col justify-center items-center">
        <div className="w-[40rem] flex flex-col gap-10 items-center">
            <Image alt="Camara 1 " src={vb4} width={1290} height={1290} className="w-96 object-contain"/>
            <p className="text-xl text-[#1F4E85]">IRMA MATRIX es una tecnología avanzada diseñada para el conteo preciso
                de personas en diversas aplicaciones. Utiliza sensores infrarrojos para
                asegurar una alta precisión y fiabilidad en el monitoreo del flujo de pasajeros</p>
        </div>
        <div className="mt-[10rem] md:w-[50rem] w-full flex flex-col gap-10 items-center">
            <h3 className="text-3xl font-bold text-[#1F4E85] text-center">ESPECIFICACIONES TECNICAS</h3>
            <div className="border px-10 pt-5 border-[#1F4E85] rounded-4xl">
                <table className=" text-sm font-semibold ">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-[#1F4E85]">
                            <td className="text-[#1F4E85]">Dimensiones (Ancho × altura × longitud)</td>
                            <td className="text-[#1F4E85]">Sensor: 58 × 22 × 188 mm | ver figura de al lado (Ancho × altura × longitud)</td>
                        </tr>
                        <tr className="border-b border-[#1F4E85]">
                            <td className="text-[#1F4E85]">Carcasa</td>
                            <td className="text-[#1F4E85]">Aluminio, carcasa de fundición a presión Aperturas ópticas son de policarbonato.</td>
                        </tr>
                        <tr className="border-b border-[#1F4E85]">
                            <td className="text-[#1F4E85]">Clase de protección Interfaz</td>
                            <td className="text-[#1F4E85]">IP65 (IP67 a solicitud ) Ethernet, 100 Mbit/s CAN, máx. 125 kbit/s</td>
                        </tr>
                        <tr className="border-b border-[#1F4E85]">
                            <td className="text-[#1F4E85]">Conexión</td>
                            <td className="text-[#1F4E85]">Interfaz iris-connector (sCON)</td>
                        </tr>
                        <tr className="border-b border-[#1F4E85]">
                            <td className="text-[#1F4E85]">Sistema de cableado</td>
                            <td className="text-[#1F4E85]">M12 conector para cable Ethernet o CAN Cables segun normas EN45545-2 y EN50306</td>
                        </tr>
                        <tr className="border-b border-[#1F4E85]">
                            <td className="text-[#1F4E85]">Homologaciones de tipo, normas Integración en el vehículo / arquitectura de sistema</td>
                            <td className="text-[#1F4E85]">EN50155, ECE, CE, EN50121-3-2, EN45545-2, EMV-06 Ethernet por API, VDV301, direct UDP CAN por API Gateway a interfazes IBIS y J1708</td>
                        </tr>
                        <tr className="border-b border-[#1F4E85]">
                            <td className="text-[#1F4E85]">Alimentación eléctrica</td>
                            <td className="text-[#1F4E85]">24 VDC o 48 V PoE Consumo electrico: Típico 6 W; 8 W PoE</td>
                        </tr>
                        <tr className="border-b border-[#1F4E85]">
                            <td className="text-[#1F4E85]">Peso sin conector de iris (sCON)</td>
                            <td className="text-[#1F4E85]">Surface mount: aprox. 260 g  Flush mount: aprox. 340 g</td>
                        </tr>
                        <tr className="border-b border-[#1F4E85]">
                            <td className="text-[#1F4E85]">Píxeles</td>
                            <td className="text-[#1F4E85]">500</td>
                        </tr>
                        <tr className="border-b border-[#1F4E85]">
                            <td className="text-[#1F4E85]">MTBF</td>
                            <td className="text-[#1F4E85]">1,2 millones horas</td>
                        </tr>
                        <tr className="border-b border-[#1F4E85]">
                            <td className="text-[#1F4E85]">Iluminación exterior requerida</td>
                            <td className="text-[#1F4E85]">0 LUX</td>
                        </tr>
                        <tr className="border-b border-[#1F4E85]">
                            <td className="text-[#1F4E85]">Altura mínima de instalación</td>
                            <td className="text-[#1F4E85]">Siempre que los pasajeros puedan pasar de forma vertical por debajo del sensor {'<'} 1,80 m</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </section>
      <section className="mt-60 w-full flex flex-col justify-center items-center">
        <div className="md:w-[40rem] w-full flex flex-col gap-10 items-center">
            <h4 className="text-3xl font-bol text-[#1F4E85]">Modelo RGT-USB30-DL36</h4>
            <Image alt="Camara 1 " src={vb5} width={1290} height={1290} className="w-96 object-contain"/>
            <p className="text-xl text-[#1F4E85]">Este modelo está especialmente diseñado para ser utilizado con equipos
            Regisbus Premium. Utiliza un sensor OV7725 y un lente de 1/4 pulgadas,
            proporcionando una resolución máxima de 640x480 píxeles. La cámara
            emplea un formato de compresión MJPEG/YUV2 y soporta varias
            resoluciones y tasas de cuadros, ajustables desde 5 fps hasta 30 fps.</p>
        </div>
        <div className="mt-[10rem] md:w-[60rem] w-full flex flex-col gap-10 items-center">
            <h4 className="text-3xl font-bold text-[#1F4E85] text-center">ESPECIFICACIONES TECNICAS CAMRAS</h4>
            <div className="flex md:flex-row flex-col gap-5">
                <div className="border px-10 pt-5 border-[#1F4E85] rounded-4xl">
                    <table className=" text-sm font-semibold ">
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Modelo</td>
                                <td className="text-[#1F4E85]">RGT-USB30-DL36</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Sensor</td>
                                <td className="text-[#1F4E85]">OV7725</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Tamaño del lente</td>
                                <td className="text-[#1F4E85]">1/4 inch</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Tamaño del pixel</td>
                                <td className="text-[#1F4E85]">6.0um X 6.0um</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Area de la imagen</td>
                                <td className="text-[#1F4E85]">3984 μm x 2952 μm</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Máxima resolución</td>
                                <td className="text-[#1F4E85]">640(H)X480(V)</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Formato de compresión</td>
                                <td className="text-[#1F4E85]">MJPEG / YUV2(YUYV)</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Resolución y ciadros</td>
                                <td className="text-[#1F4E85]">"640X480 MJPEG@ 30fps YUY2@ 30fps/ / 352X288 MJPEG@ 30fps YUY2@ 30fps 320X240 MJPEG@30fps YUY2@ 30fps/ 160X120 MJPEG@ 30fps YUY2@ 30fps"</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Cuadros ajustables</td>
                                <td className="text-[#1F4E85]">5 fps、10 fps、15 fps、20 fps、25 fps、30 fps</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">USB Protocolo</td>
                                <td className="text-[#1F4E85]">USB2.0 HS/FS USB1.1/USB1.0</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Relación S/N</td>
                                <td className="text-[#1F4E85]">50dB</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Rango dinámico</td>
                                <td className="text-[#1F4E85]">60dB</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Sensibilidad</td>
                                <td className="text-[#1F4E85]">3.8V/lux-sec@550nm</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Mínima iluminación</td>
                                <td className="text-[#1F4E85]">0. 2lux</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Tipo de disparo</td>
                                <td className="text-[#1F4E85]">Parámetros del lente Standard 3.6mm,</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Connecting Port type</td>
                                <td className="text-[#1F4E85]">USB2.0 High Speed</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Driver de protocolo libre</td>
                                <td className="text-[#1F4E85]">USB Video Class(UVC)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="border px-10 pt-5 border-[#1F4E85] rounded-4xl">
                    <table className=" text-sm font-semibold ">
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">AEC</td>
                                <td className="text-[#1F4E85]">Support</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">AEB</td>
                                <td className="text-[#1F4E85]">Support</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">AGC</td>
                                <td className="text-[#1F4E85]">Support</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Parámetros ajustables</td>
                                <td className="text-[#1F4E85]">
                                    Brightness, Contrast, Saturation, Hue, Sharpness, Gamma, White balance, Backlight Contrast, Exposure
                                </td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Parámetros del lente</td>
                                <td className="text-[#1F4E85]">Standard 3.6mm, optional 6/8mm</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">LED</td>
                                <td className="text-[#1F4E85]">24PCS IR LED</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Fuente de poder</td>
                                <td className="text-[#1F4E85]">USB BUS POWER 4P-2.0mm socket</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Voltaje de operación</td>
                                <td className="text-[#1F4E85]">DC5V</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Corriente de trabajo</td>
                                <td className="text-[#1F4E85]">110mA~130mA</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Temperatura de operación</td>
                                <td className="text-[#1F4E85]">-10～70</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Cable</td>
                                <td className="text-[#1F4E85]">Standard 1M / optional 2M,3M,5M</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Sistema operativos requeridos</td>
                                <td className="text-[#1F4E85]">"WinXP/Vista/Win7/Win8 Linux with UVC（above linux-2.6.26） MAC-OS X 10.4.8 or later Android 4.0 or above with UVC"</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      </section>
      <section className="mt-60 w-full flex flex-col justify-center items-center">
        <div className="md:w-[40rem] w-full flex flex-col gap-10 items-center">
            <h4 className="text-3xl font-bol text-[#1F4E85]">Modelo IP5M-D1188EW-28MM</h4>
            <Image alt="Camara 1 " src={vb6} width={1290} height={1290} className="w-96 object-contain"/>
            <p className="text-xl text-[#1F4E85]">
                Este modelo es ideal para aplicaciones tanto ON line como OFF line,
                operando de forma independiente. Utiliza un sensor de escaneo
                progresivo CMOS de 5 megapíxeles, proporcionando una alta resolución de 2592x1944 píxeles. La cámara cuenta con LEDs infrarrojos para visión nocturna con un alcance de hasta 30 metros.
            </p>
        </div>
        <div className="mt-[10rem] md:w-[60rem] w-full flex flex-col gap-10 items-center">
            <h4 className="text-3xl font-bold text-[#1F4E85] text-center">ESPECIFICACIONES TECNICAS CAMRAS</h4>
            <div className="flex md:flex-row flex-col gap-5">
                <div className="w-1/2  border px-10 pt-5 border-[#1F4E85] rounded-4xl">
                    <table className=" text-sm font-semibold ">
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Modelo</td>
                                <td className="text-[#1F4E85]">IP5M-D1188EW-28MM</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Sensor</td>
                                <td className="text-[#1F4E85]">5 progressive scan CMOS</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Pixeles efectivos</td>
                                <td className="text-[#1F4E85]">2592(H) x 1944(V)</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Sistema de escaneo</td>
                                <td className="text-[#1F4E85]">Progresivo</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Velocidad electrónica de disparo</td>
                                <td className="text-[#1F4E85]">Auto/Manual, 1/3(4)~1/100000s</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Iluminacion minima</td>
                                <td className="text-[#1F4E85]">0. 1Lux/F2.0(Color), 0Lux/F2.0(IR on)</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Relación S/N</td>
                                <td className="text-[#1F4E85]">MJPEG / YUV2（YUYV）</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Maxima longitud LEDs infrarrojo</td>
                                <td className="text-[#1F4E85]">30m</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Dia / Noche</td>
                                <td className="text-[#1F4E85]">BLC / HLC / DWDR</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Balance de blancos</td>
                                <td className="text-[#1F4E85]">Auto/Manual</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Control de ganancia</td>
                                <td className="text-[#1F4E85]">Auto/Manua</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Zoom digital</td>
                                <td className="text-[#1F4E85]">16x</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Reducción de ruido</td>
                                <td className="text-[#1F4E85]">3D</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Mínima iluminación</td>
                                <td className="text-[#1F4E85]">0. 2lux</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Longitud focal</td>
                                <td className="text-[#1F4E85]">2.8 mm</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Maxima apertura</td>
                                <td className="text-[#1F4E85]">F2.0</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Control de foco</td>
                                <td className="text-[#1F4E85]">Manual</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Angulo de visión</td>
                                <td className="text-[#1F4E85]">H: 103°</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Tipo de lente</td>
                                <td className="text-[#1F4E85]">Fixed lens</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className=" w-1/2 border px-10 pt-5 border-[#1F4E85] rounded-4xl">
                    <table className=" text-sm font-semibold ">
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Compresión</td>
                                <td className="text-[#1F4E85]">H.264/H.264H/H.264B/MJPEG</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Resolución</td>
                                <td className="text-[#1F4E85]">1.3MP(1280×960)/720P(1280×720)/  VGA(640×480)</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Rata de cuadros</td>
                                <td className="text-[#1F4E85]">Main Stream: 1.3MP/720P(1~25fps)</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Rata de bits</td>
                                <td className="text-[#1F4E85]">
                                    Substream: VGA (1~25/30fps)
                                </td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Ethernet</td>
                                <td className="text-[#1F4E85]">H.264: 32Kbps~8192Kbps RJ-45 (10/100Base-T)</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Micro SD</td>
                                <td className="text-[#1F4E85]">Hasta 256 GB</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Protocolo</td>
                                <td className="text-[#1F4E85]">IPv4/IPv6, HTTP, HTTPS, TCP/IP, UDP, UPnP, ICMP, IGMP, RTSP, RTP, SMTP, NTP, DHCP, DNS, PPPOE, DDNS, FTP, IP Filter, QoS</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Compatibilidad</td>
                                <td className="text-[#1F4E85]">ONVIF , CGI</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Interoperabilidad</td>
                                <td className="text-[#1F4E85]">DC12V, 2.0A</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Consumo de energía</td>
                                <td className="text-[#1F4E85]">{'<'} 4.6W (IR on)</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Ambiente de trabajo</td>
                                <td className="text-[#1F4E85]">-30°C~+50°C, (-22°F~122°F) Less than 95%RH</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Protección de ingreso</td>
                                <td className="text-[#1F4E85]">IP67</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Resistencia vandálica</td>
                                <td className="text-[#1F4E85]">IK10</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Dimensiones</td>
                                <td className="text-[#1F4E85]">Φ110mm x 81mm (Φ 4.33” x 3.19”)</td>
                            </tr>
                            <tr className="border-b border-[#1F4E85]">
                                <td className="text-[#1F4E85]">Peso</td>
                                <td className="text-[#1F4E85]">2.2lbs</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};
