import React from 'react'
import ClientSlider from './ui/ClientSlider'
import Title from './Title'


const ClientsSection = () => {
    return (
        <section className=''>
            <div className='px-5 md:px-10 py-20 max-w-screen-lg mx-auto text-center'>
                <Title el='h2' text={"Clientes"} />
                <ClientSlider />
            </div>
        </section>
    )
}

export default ClientsSection