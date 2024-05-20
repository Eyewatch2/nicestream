import React from 'react'
import Image from 'next/image';
import Title from './ui/Title';
import SedesContainer from './ui/SedesContainer';



const AboutSection = () => {

  return (
    <section id='nosotros' className='text-gray-400 flex flex-col'>
      <div className='px-5 md:px-0 py-20 max-w-screen-lg mx-auto w-full text-center border-b border-primary-500/15'>
        <div className='max-w-3xl mx-auto'>
          <Title el='h2' text={"Nosotros"} />
          <p data-animate-in className='mx-auto text-xl font-light  max-w-3xl'>La mayor red de oficinas de Social Big Data a lo largo de Latinoamérica y España. <br />
            Nos avalan más de 7 años de experiencia en estrategia de marca, investigación innovación creación de contenido.</p>
        </div>
      </div>
      <div className='md:px-0 w-full py-20 mx-auto text-center'>
        <Title el='h2' text={"Nuestras Sedes"} />
        <SedesContainer />
      </div >

      <div className='px-5 md:px-0 py-20 w-full max-w-screen-lg mx-auto text-center border-b border-primary-500/15'>
        <div className='max-w-3xl mx-auto'>
          <Title el='h2' text={"Mercados Internacionales"} />
          <Image data-animate-in className='w-full mx-auto max-w-xl' width={621} height={124} alt='Lista de banderas: Guatemala, Ecuador, Francia, México, Panamá, Argentina, Alemania, Reino Unido, Italia, Estados Unidos, Nicaragua, China, Colombia, Perú' src={"/img/banderas.png"}></Image>
        </div>
      </div>
    </section>
  )
}

export default AboutSection