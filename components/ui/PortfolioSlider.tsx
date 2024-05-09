"use client"

// import required modules
import { Pagination, EffectCoverflow, Navigation } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';




export default function PortfolioSlider() {
    const pagination = {
        clickable: true,
        renderBullet: function (_: number, className: string) {
            return `<span class="!w-16 !h-1 !rounded-none ${className}"></span>`;
        },
    };

    return (
        <div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },

                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="mySwiper"
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}

            >

                <SwiperSlide>
                    <Image alt='Porfolio Image' width={496} height={715} src={"/img/portfolio/1.png"} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image alt='Porfolio Image' width={496} height={715} src={"/img/portfolio/1.png"} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image alt='Porfolio Image' width={496} height={715} src={"/img/portfolio/1.png"} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image alt='Porfolio Image' width={496} height={715} src={"/img/portfolio/1.png"} />
                </SwiperSlide>


            </Swiper>
            <div className='swiper-button-next'></div>
            <div className='swiper-button-prev'></div>

        </div >
    );
}
