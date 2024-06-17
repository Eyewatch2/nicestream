import React from "react";
import Image from "next/image";
import Title from "./ui/Title";
import SedesContainer from "./ui/SedesContainer";

const banderas = [
  { src: "/img/banderas/Argentina.png", alt: "Argentina" },
  { src: "/img/banderas/Brasil.png", alt: "Brasil" },
  { src: "/img/banderas/Chile.png", alt: "Chile" },
  { src: "/img/banderas/Colombia.png", alt: "Colombia" },
  { src: "/img/banderas/Ecuador.png", alt: "Ecuador" },
  { src: "/img/banderas/Espana.png", alt: "España" },
  { src: "/img/banderas/Estados_Unidos.png", alt: "Estados Unidos" },
  { src: "/img/banderas/Guatemala.png", alt: "Guatemala" },
  { src: "/img/banderas/Honduras.png", alt: "Honduras" },
  { src: "/img/banderas/Italia.png", alt: "Italia" },
  { src: "/img/banderas/Mexico.png", alt: "México" },
  { src: "/img/banderas/Panama.png", alt: "Panamá" },
  { src: "/img/banderas/Paraguay.png", alt: "Paraguay" },
  { src: "/img/banderas/Peru.png", alt: "Perú" },
  { src: "/img/banderas/Uruguay.png", alt: "Uruguay" },
  { src: "/img/banderas/Venezuela.png", alt: "Venezuela" },
];

const fundationDate = new Date(2009, 0, 1); // 1 de enero de 2009
const currentDate = new Date();
const years = currentDate.getFullYear() - fundationDate.getFullYear()

const AboutSection = () => {
  return (
    <section id="nosotros" className="text-gray-400 flex flex-col">
      <div className="px-5 md:px-0 py-20 max-w-screen-lg mx-auto w-full text-center border-b border-primary-500/15">
        <div className="max-w-3xl mx-auto">
          <Title el="h2" text={"Nosotros"} />
          <p data-animate-in className="mx-auto text-xl font-light  max-w-3xl">
            La mayor red de oficinas de Social Big Data a lo largo de
            Latinoamérica y España. <br />
            Nos avalan más de {years} años de experiencia en estrategia de marca,
            investigación, innovación y creación de contenido.
          </p>
        </div>
      </div>
      <div className="md:px-0 w-full py-20 mx-auto text-center">
        <Title el="h2" text={"Alcance Regional"} />
        <SedesContainer />
      </div>

      <div className="px-5 md:px-0 py-20 w-full max-w-screen-lg mx-auto text-center border-b border-primary-500/15">
        <div className="max-w-3xl mx-auto">
          <Title el="h2" text={"Mercados Internacionales"} />
          <div
            data-animate-stagger={0.1}
            className="grid grid-cols-8 gap-1 max-w-xl mx-auto h-24 w-full"
          >
            {banderas.map((bandera, index) => (
              <Image
                className="w-full aspect-video object-cover"
                key={index}
                width={260}
                height={160}
                alt={bandera.alt}
                src={bandera.src}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
