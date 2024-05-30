"use client";
import Atropos from "atropos/react";
import "atropos/css";

import Image from "next/image";
import React from "react";

const sedes = [
  {
    img: "/img/sedes/uy.png",
    label: "Uruguay",
    colorClass: "text-[#03A2D3]",
  },
  {
    img: "/img/sedes/pa.png",
    label: "Panamá",
    colorClass: "text-[#4FAA38]",
  },
  {
    img: "/img/sedes/cl.png",
    label: "Chile",
    colorClass: "text-[#CE1B7B]",
  },
  {
    img: "/img/sedes/es.png",
    label: "España",
    colorClass: "text-[#EB883E]",
  },
  {
    img: "/img/sedes/pe.png",
    label: "Perú",
    colorClass: "text-[#EA153F]",
  },
  {
    img: "/img/sedes/py.png",
    label: "Paraguay",
    colorClass: "text-[#1142C1]",
  },
  {
    img: "/img/sedes/ar.png",
    label: "Argentina",
    colorClass: "text-[#40F4FF]",
  },
];



const SedesContainer = () => {
  return (
    <div
      data-animate-stagger={0.2}
      className="flex justify-center w-full max-w-screen-xl mx-auto flex-wrap md:px-10 relative"
    >
      {/* Deshabilita interaccion en mobile */}
      <div className="absolute md:hidden inset-0 w-full h-full z-40"></div>

      {sedes.sort((a, b) => a.label.localeCompare(b.label)).map((sede) => (
        <Atropos
          key={sede.label}
          rotateYInvert
          rotateXInvert
          shadow={false}
          className="w-1/2 md:w-72"
        >
          <div className="atropos-content p-4 md:p-8 relative">
            <Image
              alt={`Ubicación de la sede de Nicestream en ${sede.label}`}
              className="mx-auto md:w-full"
              src={sede.img}
              width={317}
              height={418}
            />
            <div data-atropos-offset="30" className="-mt-2 md:-mt-8">
              <h3 className={`text-lg md:text-2xl ${sede.colorClass}`}>
                {sede.label}
              </h3>
            </div>
          </div>
        </Atropos>
      ))}
    </div>
  );
};

export default SedesContainer;
