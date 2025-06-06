"use client"

// import required modules
import { Pagination, EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link';
import { STABLES } from '@/stables';
import { useEffect, useState } from 'react';
import { Posts } from '@/types/types';
import { getHighlightedPosts } from '@/lib/posts';
const UPLOAD_DIR = STABLES.UPLOAD_URL;


export default function PortfolioSlider() {
    const [posts, setPosts] = useState<Posts | null>(null);
    useEffect(() => {
        const fetchPosts = async () => {
            const data = await getHighlightedPosts();
            
            setPosts(data);
        }
        fetchPosts();

    }, []);



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
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}

            >
                {posts?.nodes.map((post) => {
                    console.log(post)
                    const image = post?.featuredImage?.node.mediaDetails.sizes[0].sourceUrl;
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
