"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { TestimonialItem } from '@/types/types';
import Testimonial from './Testimonial';

const testimonials: TestimonialItem[] = [
    {
        img: {
            width: 318,
            height: 400,
            src: "/img/testimonios/1.png"
        },
        quote: "Desde hace algunos años que trabajamos nuestra estrategia digital con Nicestream, estamos muy contentos y es un placer contar con ellos, realmente son un equipo que han empujado a CAMEDUR a avanzar en la transformación digital, queremos ser una institución de referencia en el departamento y en la región en este aspecto.",
        name: "Dr. Yamandu Fernandez",
        role: "Director Tecnico General de CAMEDUR"
    },
    {
        img: {
            width: 800,
            height: 800,
            src: "/img/testimonios/2.png"
        },
        quote: "Hubo un cambio sustancial tanto en la comunicación como en los resultados comerciales desde que integramos a Nicestream al equipo de CRAMI, las gráficas en ventas y en todo lo digital hablan por sí solas, entraron como nuestra agencia digital, hoy son aliados estratégicos, no solo por el profesionalismo sino por su manera de pensar y como se involucran en nuestros desafíos.",
        name: "Nicolás López",
        role: "Jefe Departamento Comercial y Marketing de CRAMI"
    },
]

export default function App() {
    const pagination = {
        clickable: true,
        renderBullet: function (_: number, className: string) {
            return `<span class="!w-16 !h-1 !rounded-none ${className}"></span>`;
        },
    };

    return (
        <div>
            <Swiper
                spaceBetween={30}
                pagination={pagination}
                modules={[Pagination]}
                autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
                loop={true}

            >
                {testimonials.map(testimonial => (
                    <SwiperSlide>
                        <Testimonial img={testimonial.img} name={testimonial.name} quote={testimonial.quote} role={testimonial.role} key={testimonial.name} />
                    </SwiperSlide>
                ))}


            </Swiper>
        </div>
    );
}
