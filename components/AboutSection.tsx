"use client"

import React from 'react'
import 'atropos/css'
import Atropos from 'atropos/react';
import Image from 'next/image';

const sedes = [
  {
    img: "/img/sedes/uy.png",
    label: "Uruguay",
    colorClass: "text-[#00aae4]"
  },
  {
    img: "/img/sedes/pa.png",
    label: "Panamá",
    colorClass: "text-[#4faa38]"
  },
  {
    img: "/img/sedes/cl.png",
    label: "Chile",
    colorClass: "text-[#ce1b7b]"
  },
  {
    img: "/img/sedes/es.png",
    label: "España",
    colorClass: "text-[#eb883e]"
  },
]

const AboutSection = () => {

  return (
    <section id='#nosotros' className='text-gray-400 flex flex-col'>
      <div className='px-5 md:px-0 py-20 max-w-screen-lg mx-auto w-full text-center border-b border-primary-500/15'>
        <div className='max-w-3xl mx-auto'>
          <h2 className='mx-auto mb-10 text-primary-500 text-4xl tracking-widest'>NOSOTROS</h2>
          <p className='mx-auto text-xl font-light  max-w-3xl'>La mayor red de oficinas de Social Big Data a lo largo de Latinoamérica y España. <br />
            Nos avalan más de 7 años de experiencia en estrategia de marca, investigación innovación creación de contenido.</p>
        </div>
      </div>
      <div className='md:px-0 w-full md:w-auto py-20 mx-auto text-center'>
        <h2 className='mb-16 text-primary-500 text-4xl tracking-widest'>NUESTRAS SEDES</h2>
        <div className='flex w-full flex-wrap max-w-screen-xl justify-between'>
          {
            sedes.map((sede) => (
              <Atropos key={sede.label} rotateYInvert rotateXInvert shadow={false} className="w-1/2 md:w-1/4 mx-auto">
                <div className="atropos-content p-8 relative">
                  <Image alt={`Ubicación de la sede de Nicestream en ${sede.label}`} className='mx-auto md:w-full' src={sede.img} width={317} height={418} />
                  <div data-atropos-offset="30" className='-mt-2 md:-mt-8'>
                    <h3 className={`text-lg md:text-2xl ${sede.colorClass}`}>{sede.label}</h3>
                  </div>
                </div>
              </Atropos>
            ))
          }


        </div>
      </div>

      <div className='px-5 md:px-0 py-20 w-full max-w-screen-lg mx-auto text-center border-b border-primary-500/15'>
        <div className='max-w-3xl mx-auto'>
          <h2 className='mb-10 text-primary-500 text-3xl tracking-widest'>MERCADOS INTERNACIONALES</h2>
          <Image className='w-full mx-auto max-w-xl' width={621} height={124} alt='Lista de banderas: Guatemala, Ecuador, Francia, México, Panamá, Argentina, Alemania, Reino Unido, Italia, Estados Unidos, Nicaragua, China, Colombia, Perú' src={"/img/banderas.png"}></Image>
        </div>
      </div>
    </section>
  )
}

export default AboutSection