import React from 'react';
import PortfolioSlider from './ui/PortfolioSlider';
import ContactForm from './ui/ContactForm';

const PortfolioSection = () => {
    return (
        <div className='relative w-full bg-cover py-28' style={{ backgroundImage: "url('/img/bg-galeria.png')" }}>
            <div className='absolute inset-0 z-10 bg-black opacity-25'></div>
            <div className='px-5 md:px-10 max-w-screen-lg mx-auto text-center relative z-30'>
                <h2 className='text-primary-400 mb-5 text-4xl tracking-widest'>PORTFOLIO</h2>
                <PortfolioSlider />

            </div>
            <div className='w-full flex justify-center'>
                <button className='linkAnimation transition-colors duration-500 after:-z-10 before:-z-10 z-30 border hover:text-primary-500 border-primary-500 text-xl font-bold uppercase rounded-full px-12 py-4 mx-auto mt-10'>Ver Todos</button>
            </div>
            <section id='contacto' className='relative pt-2 z-30'>
                <ContactForm />
            </section>
        </div>
    );
};

export default PortfolioSection;
