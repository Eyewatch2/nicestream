"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import ParticlesContainer from './ui/ParticlesContainer';
import Globe from 'react-globe.gl';
import { connections } from '@/data/data';





const socials = [
    {
        icon: <FaFacebookF className='text-3xl' />,
        href: "https://www.facebook.com/nicestream"
    },
    {
        icon: <FaInstagram className='text-3xl' />,
        href: "https://www.instagram.com/nicestream/?hl=es"
    },
    {
        icon: <FaLinkedinIn className='text-3xl' />,
        href: "https://www.linkedin.com/company/nicestreamdigital/"
    },

]

const HeroSection = () => {
    const globeTexture = '/img/hologram-map.svg';
    const dimensions = 650;
    const arcsData = connections.map(([startLat, startLng, endLat, endLng]) => ({
        startLat, startLng, endLat, endLng,
        color: ['#25a0cd', '#25a0cd']
    }));

    const [points, _] = useState(() => {
        // Extraer todos los puntos únicos de las conexiones
        const allPoints = connections.flatMap(([startLat, startLng, endLat, endLng]) => [
            { lat: startLat, lng: startLng, color: '#25a0cd', altitude: 0.1 },
            { lat: endLat, lng: endLng, color: '#25a0cd', altitude: 0.1 }
        ]);
        return allPoints;
    });
    const colorInterpolator = (t: number) => `rgba(37, 160, 215,${Math.sqrt(1-t)})`;


    return (
        <section className='md:w-[calc(100svw-20px)] max-w-[100svw] overflow-hidden h-svh pt-[calc(2.5rem+5em)] relative bg-cover' style={{ backgroundImage: `url(/img/bg-home.jpg)` }}>
            <div className='max-w-screen-xl py-4 mx-auto flex flex-col gap-10 items-center justify-center h-[calc(100%-(2.5rem+5em))] md:h-auto md:items-stretch'>
                <div className='flex justify-between max-h-64'>
                    <div className='text-center h-fit md:text-start relative z-30'>
                        <h2 className='text-lg md:text-4xl uppercase tracking-[0.8rem] font-[100]'>It&apos;s Time To</h2>
                        <div className='w-fit bg-gradient-to-t from-[#93959a] to-white bg-clip-text'>
                            <h1 className='text-6xl md:text-8xl font-black text-transparent tracking-wider'>MAKE IT
                                <span className='block'>SOCIAL</span>
                            </h1>
                        </div>

                    </div>
                    <div className='w-fit absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 z-10 md:static h-fit md:translate-x-0 md:-translate-y-1/4 opacity-40 md:z-30'>
                         <Globe
                            ringsData={points}
                            ringAltitude={0.0015}
                            ringColor={() => colorInterpolator}
                            ringPropagationSpeed={0.4}
                            ringRepeatPeriod={2000}
                            ringMaxRadius={2}

                            arcsData={arcsData}
                            arcColor={"color"}
                            arcStroke={0.5}
                            arcAltitudeAutoScale={0.3}

                            globeImageUrl={globeTexture}
                            animateIn={true}
                            waitForGlobeReady={true}
                            backgroundColor="#00000000"
                            width={dimensions}
                            height={dimensions}
                        /> 
                    </div>
                    <ul className='md:flex hidden flex-col gap-14 '>
                        {socials.map((item) => (
                            <li className='transition hover:scale-110' key={item.href}><Link target='_blank' href={item.href}>{item.icon}</Link></li>
                        ))}
                    </ul>
                </div>
                <Link className='w-fit linkAnimation hover:text-primary-500 transition duration-500 border border-primary-500 rounded-full px-12 py-4 text-xl font-bold' href={"#contacto"}>
                    <span className='z-30 relative'>HABLEMOS</span>
                </Link>
            </div>
            <Link href={"#nosotros"} scroll={false}>
                <Image alt='scroll' width={200} height={150} src="/img/scroll-indicator.gif" className='z-20 absolute bottom-0 right-1/2 translate-x-1/2 invert mix-blend-screen' />
            </Link>
            <div className='absolute bottom-0 w-full h-1/4 z-10'>
                <ParticlesContainer />
            </div>
        </section>
    );
};

export default HeroSection;
