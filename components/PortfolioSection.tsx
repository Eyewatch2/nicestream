import React from 'react';
import PortfolioSlider from './ui/PortfolioSlider';
import ContactForm from './ui/ContactForm';
import { getHighlightedPosts } from '@/lib/posts';
import Link from 'next/link';
import Title from './ui/Title';

const PortfolioSection = async () => {
    const highlightedPosts = await getHighlightedPosts();
    return (
        <div className='relative w-full bg-cover py-28' style={{ backgroundImage: "url('/img/bg-galeria.png')" }}>
            <div className='absolute inset-0 z-10 bg-black opacity-25'></div>
            <div className='px-5 md:px-10 max-w-screen-lg mx-auto text-center relative z-30'>
                <Title text={"Portfolio"} el='h2' />
                <PortfolioSlider posts={highlightedPosts} />

            </div>
            <div className='w-full flex justify-center'>
                <Link href={"/proyectos"} className='linkAnimation transition-colors duration-500 after:-z-10 before:-z-10 z-30 border hover:text-primary-500 border-primary-500 text-xl font-bold uppercase rounded-full px-12 py-4 mx-auto mt-10'>Ver Todos</Link>
            </div>
            <section id='contacto' className='relative pt-2 z-30'>
                <ContactForm />
            </section>
        </div>
    );
};

export default PortfolioSection;
