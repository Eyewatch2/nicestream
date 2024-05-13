import React from 'react'
import TestimonialSlider from './ui/TestimonialSlider';
import Title from './ui/Title';


const TestimonialsSection = () => {
    return (
        <section className=''>
            <div className='px-5 md:px-10 py-20 max-w-screen-lg mx-auto text-center border-b border-primary-500/15'>
                <Title el='h2' text={"Testimonios"} />
                <TestimonialSlider />
            </div>
        </section>
    )
}

export default TestimonialsSection