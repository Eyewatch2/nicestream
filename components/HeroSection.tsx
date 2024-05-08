import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';



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
    return (
        <section className='w-svh h-svh pt-[calc(2.5rem+5em)] relative' style={{ backgroundImage: `url(/img/bg-home.jpg)` }}>
            <div className='max-w-screen-xl px-10 py-4 mx-auto flex flex-col gap-10 items-center justify-center h-[calc(100%-(2.5rem+5em))] md:h-auto md:items-stretch'>
                <div className='flex justify-between'>
                    <div className='text-center md:text-start'>
                        <h2 className='text-lg md:text-4xl uppercase tracking-[0.8rem] font-[100]'>It's Time To</h2>
                        <div className='w-fit bg-gradient-to-t from-[#93959a] to-white bg-clip-text'>
                            <h1 className='text-6xl md:text-8xl font-black text-transparent tracking-wider'>MAKE IT
                                <span className='block'>SOCIAL</span>
                            </h1>
                        </div>
                    </div>
                    <ul className='md:flex hidden flex-col gap-14 '>
                        {socials.map((item) => (
                            <li className='transition hover:scale-110' key={item.href}><Link target='_blank' href={item.href}>{item.icon}</Link></li>
                        ))}
                    </ul>
                </div>
                <Link className='w-fit linkAnimation hover:text-primary-500 transition duration-500 border border-primary-500 rounded-full px-12 py-4 text-xl font-bold' href={"#contacto"}>
                    <span className='z-10 relative'>HABLEMOS</span>
                </Link>
            </div>
            <Link href={"#nosotros"}>
                <Image alt='scroll' width={200} height={200} src="/img/scroll-indicator.gif" className='absolute bottom-0 right-1/2 translate-x-1/2 invert mix-blend-screen' />
            </Link>
        </section>
    );
};

export default HeroSection;
