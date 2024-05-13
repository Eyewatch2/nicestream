import Title from '@/components/ui/Title';
import Image from 'next/image';
import React from 'react'

const page = async () => {
    const data = await fetch('https://fakestoreapi.com/products/1').then(res => res.json());

    return (
        <section>
            <div className='max-w-4xl mx-auto flex flex-col gap-5'>
                <Title text={data.title} el='h1' />
                <Image width={400} height={500} className='mx-auto' src={data.image} alt={data.title} />
                <p className='text-gray-600 my-5'>{data.description}</p>
            </div>
        </section>
    )
}

export default page