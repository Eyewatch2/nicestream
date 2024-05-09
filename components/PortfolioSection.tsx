import React from 'react';
import PortfolioSlider from './ui/PortfolioSlider';

const PortfolioSection = () => {
    return (
        <div className='relative h-[200svh] w-full bg-cover py-20 md:py-40' style={{ backgroundImage: "url('/img/bg-galeria.png')" }}>
            <div className='absolute inset-0 z-10 bg-black opacity-25'></div>
            <div className='px-5 md:px-10 max-w-screen-lg mx-auto text-center relative z-30'>
                <h2 className='text-primary-400 mb-5 text-4xl tracking-widest'>PORTFOLIO</h2>
                <PortfolioSlider />
            </div>
        </div>
    );
};

export default PortfolioSection;
