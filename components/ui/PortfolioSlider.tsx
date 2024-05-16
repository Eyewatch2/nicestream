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
import { Posts } from '@/types/types';
import Link from 'next/link';

const UPLOAD_DIR = process.env.NEXT_PUBLIC_WORDPRESS_UPLOADS_URL;


export default function PortfolioSlider({ posts }: { posts: Posts }) {

    const pagination = {
        clickable: true,
        renderBullet: function (_: number, className: string) {
            return `<span class="!w-8 md:!w-16 !h-1 !bg-white !rounded-none ${className}"></span>`;
        },
    };

    return (
        <div className='mt-10'>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1.5}
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
                pagination={pagination}
                modules={[EffectCoverflow, Pagination, Navigation]}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}

            >
                {posts.nodes.map((post) => {
                    const image = `${UPLOAD_DIR}/${post?.featuredImage?.node.mediaDetails.file}`;                    
                    const slug = post.slug;

                    return (
                        <SwiperSlide key={slug}>
                            <Link href={`/proyectos/${slug}`}>
                                <Image alt='Porfolio Image' className='w-full h-full' width={497} height={717} src={image} />
                            </Link>
                        </SwiperSlide>

                    )
                })}
              


            </Swiper>
            <div className='swiper-button-next lg:hover:scale-110 transition !text-primary-500'></div>
            <div className='swiper-button-prev lg:hover:scale-110 transition !text-primary-500'></div>
        </div >
    );
}
