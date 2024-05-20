"use client"
import Atropos from 'atropos/react';
import 'atropos/css'

import Image from 'next/image'
import React from 'react'

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


const SedesContainer = () => {
    return (
        <div data-animate-stagger className='flex w-full max-w-screen-xl mx-auto flex-wrap md:px-10 relative'>
            <div className='absolute md:hidden inset-0 w-full h-full z-40'></div>

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

  )
}

export default SedesContainer