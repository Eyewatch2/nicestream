"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { ClientSliderItem } from '@/types/types';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import { useState, useEffect } from 'react';

// Crear un array dinámico de 45 elementos
const clients: ClientSliderItem[] = Array.from({ length: 55 }, (_, index) => ({
    name: `Cliente ${index + 1}`,
    src: `/img/clients/${index + 1}.jpg`,
    width: 255,
    height: 115,
}));

const ClientSlider = () => {
    const [clientsPerSlide, setClientsPerSlide] = useState(3);

    useEffect(() => {
        const updateClientsPerSlide = () => {
            if (window.innerWidth >= 768) {
                setClientsPerSlide(12);
            } else {
                setClientsPerSlide(3);
            }
        };

        // Set the initial value
        updateClientsPerSlide();

        // Update value on window resize
        window.addEventListener('resize', updateClientsPerSlide);
        return () => window.removeEventListener('resize', updateClientsPerSlide);
    }, []);


    const pagination = {
        clickable: true,
        renderBullet: function (_: number, className: string) {
            return `<span class="!w-8 md:!w-16 !h-1 !rounded-none ${className}"></span>`;
        },
    };

    const slides = [];
    for (let i = 0; i < clients.length; i += clientsPerSlide) {
        slides.push(
            <SwiperSlide key={i}>
                <div className={`w-full grid gap-y-3 cursor-grab ${clientsPerSlide === 12 ? 'md:grid-cols-6 grid-rows-2' : 'grid-cols-3'}`}>
                    {clients.slice(i, i + clientsPerSlide).map((client, index) => {
                        const globalIndex = i + index;
                        const addMarginTop = clientsPerSlide === 3 && globalIndex % 2 === 1;
                        return (
                            <Image
                                key={index}
                                alt={client.name}
                                width={client.width}
                                height={client.height}
                                src={client.src}
                                className={`${addMarginTop ? 'mt-5' : ''}`}
                            />
                        );
                    })}
                </div>
            </SwiperSlide>
        );
    }

    return (
        <div data-animate-in>
            <Swiper
                pagination={pagination}
                modules={[Pagination, Autoplay]}
                autoplay={{
                    delay: 5000,
                    pauseOnMouseEnter: true
                }}
                loop={false}
                
            >
                {slides}
            </Swiper>
        </div>
    );
}

export default ClientSlider;
