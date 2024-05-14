import Title from '@/components/ui/Title';
import Image from 'next/image';
import React, { Suspense } from 'react'

const fetchDataWithDelay = async (url: string, delay: number) => {
    return new Promise(resolve => {
        setTimeout(async () => {
            const response = await fetch(url);
            const data = await response.json();
            resolve(data);
        }, delay);
    });
};


const page = async () => {
    const data = await fetchDataWithDelay('https://fakestoreapi.com/products/1', 3000) as { description: string; image: string; title: string };

    return (
        <section>
            <div className='max-w-4xl mx-auto flex flex-col gap-5'>
                <Suspense fallback={<div>Loading...</div>}>
                    <Title text={data.title} el='h1' />
                    <Image width={400} height={500} className='mx-auto' src={data.image} alt={data.title} />
                    <p className='text-gray-600 my-5'>{data.description}</p>
                </Suspense>
            </div>
        </section>
    )
}

export default page