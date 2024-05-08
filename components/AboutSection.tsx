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
    colorClass: "text-[#ce1b7b]"
  },
  {
    img: "/img/sedes/cl.png",
    label: "Chile",
    colorClass: "text-[#4faa38]"
  },
  {
    img: "/img/sedes/es.png",
    label: "España",
    colorClass: "text-[#eb883e]"
  },
]

const AboutSection = () => {

  return (
    <section id='#nosotros' className='text-gray-400 grid grid-cols-1'>
      <div className='px-5 md:px-0 py-20 max-w-2xl mx-auto text-center border-b border-primary-500/10'>
        <h2 className='mb-10 text-primary-500 text-3xl tracking-widest'>NOSOTROS</h2>
        <p>La mayor red de oficinas de Social Big Data a lo largo de Latinoamérica y España. <br />
          Nos avalan más de 7 años de experiencia en estrategia de marca, investigación innovación creación de contenido.</p>
      </div>
      <div className='px-5 md:px-0 py-20 mx-auto text-center border-b border-primary-500/10'>
        <h2 className='mb-10 text-primary-500 text-3xl tracking-widest'>NUESTRAS SEDES</h2>
        <div className='flex w-full justify-between gap-10 md:flex-row flex-col'>
          {
            sedes.map((sede) => (
              <Atropos rotateXInvert rotateYInvert shadow={false} className="w-fit h-fit">
                <div className="atropos-content pb-5">
                  <Image alt={`Ubicación de la sede de Nicestream en ${sede.label}`} src={sede.img} width={250} height={200} />
                  <div data-atropos-offset="30" className='-mt-8'>
                    <h3 className={`text-2xl ${sede.colorClass}`}>{sede.label}</h3>
                  </div>
                </div>
              </Atropos>
            ))
          }


        </div>
      </div>


    </section>
  )
}

export default AboutSection