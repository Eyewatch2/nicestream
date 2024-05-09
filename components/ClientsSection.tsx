import React from 'react'
import ClientSlider from './ui/ClientSlider'


const ClientsSection = () => {
    return (
        <section className=''>
            <div className='px-5 md:px-10 py-20 max-w-screen-lg mx-auto text-center border-b border-primary-500/15'>
                <h2 className='text-primary-500 mb-5 text-4xl tracking-widest'>CLIENTES</h2>
                <ClientSlider />
            </div>
        </section>
    )
}

export default ClientsSection