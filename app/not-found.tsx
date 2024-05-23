"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { connections } from '@/data/data';

import ParticlesContainer from '@/components/ui/ParticlesContainer';
import Image from 'next/image';
const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });


const ErrorPage = () => {


    const globeTexture = '/img/hologram-map.svg';
    const dimensions = 650;
    const arcsData = connections.map(([startLat, startLng, endLat, endLng]) => ({
        startLat, startLng, endLat, endLng,
        color: ['#25a0cd', '#25a0cd']
    }));

    const [points, _] = useState(() => {
        const allPoints = connections.flatMap(([startLat, startLng, endLat, endLng]) => [
            { lat: startLat, lng: startLng, color: '#25a0cd', altitude: 0.1 },
            { lat: endLat, lng: endLng, color: '#25a0cd', altitude: 0.1 }
        ]);
        return allPoints;
    });

    const colorInterpolator = (t: number) => `rgba(37, 160, 215,${Math.sqrt(1 - t)})`;



    return (
        <div>
            <header className='py-10 text-white max-w-screen-xl mx-auto flex justify-between absolute z-50 top-0 left-1/2 -translate-x-1/2 w-svw'>
                <Link href={"/"} className='mx-auto'>
                    <Image id='logo' width={150} height={34} src={"/img/logo.svg"} alt='Nicestream' />
                </Link>


            </header>
            <section className='text-white md:w-[calc(100svw-20px)] max-w-[100svw] overflow-hidden h-svh pt-[calc(2.5rem+5em)] relative bg-cover' style={{ backgroundImage: `url(/img/bg-home.jpg)` }}>
                <div className='max-w-screen-xl py-4 mx-auto flex flex-col gap-10 items-center justify-center h-[calc(100%-(2.5rem+5em))] md:h-auto md:items-stretch'>
                    <div className='flex justify-between max-h-64'>
                        <div className='text-center mx-auto h-fit md:text-start relative z-30'>
                            <h2 className='text-lg md:text-4xl uppercase tracking-[0.8rem] font-[100] mt-5 text-center'>Error</h2>
                            <div className='w-fit bg-gradient-to-t from-[#93959a] to-white bg-clip-text'>
                                <h1 className='text-6xl md:text-8xl font-black 2xl:text-9xl min-w-max text-transparent tracking-wider'>404
                                </h1>
                            </div>
                        </div>
                        <div className='w-fit absolute top-1/2 md:top-28 right-1/2 md:right-0 -translate-y-1/2 translate-x-1/2 z-10 md:translate-x-0 md:-translate-y-1/4 opacity-40 md:z-30'>
                            <div className='relative'>
                                <div className='absolute w-full h-full inset-0 z-10'></div>
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
                                    arcDashAnimateTime={() => Math.random() * 4000 + 500}
                                    arcDashGap={1.5}
                                    arcDashInitialGap={() => Math.random() * 2}
                                    globeImageUrl={globeTexture}
                                    animateIn={true}
                                    waitForGlobeReady={true}
                                    backgroundColor="#00000000"
                                    width={dimensions}
                                    height={dimensions}
                                />
                            </div>
                        </div>

                    </div>
                    <Link className='mx-auto w-fit z-30 relative linkAnimation 2xl:mt-16 2xl:text-3xl hover:text-primary-500 transition duration-500 border border-primary-500 rounded-full px-12 py-4 text-xl font-bold' href={"/"}>
                        <span className='z-30 relative'>VOLVER</span>
                    </Link>
                </div>

                <div className='absolute bottom-0 w-full h-1/4 z-10'>
                    <ParticlesContainer />
                </div>
            </section>
        </div>

    );
};


export default ErrorPage;
