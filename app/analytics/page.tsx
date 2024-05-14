"use client"
import Atropos from 'atropos/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import 'atropos/css'
import Title from '@/components/ui/Title'
const analytics = [
    {
        label: 'Referendum De Escocia',
        img: '/img/analytics/1.jpg',
        href: '/analytics/referendum-de-escocia',
    },
    {
        label: 'Referendum De Escocia',
        img: '/img/analytics/1.jpg',
        href: '/analytics/referendum-de-escocia',
    },
    {
        label: 'Referendum De Escocia',
        img: '/img/analytics/1.jpg',
        href: '/analytics/referendum-de-escocia',
    },

]

const page = () => {
    return (
        <section className='max-w-4xl mx-auto'>
            <Title el='h1' text={"Analytics"} />
            <div className='grid px-5 md:px-0 md:grid-cols-3 grid-cols-1 gap-5 mb-10'>
                {analytics.map((project) => (
                    <Atropos key={project.label} rotateYInvert rotateXInvert shadow={false} className="my-atropos w-full mx-auto">
                        <Link href={project.href}>
                            <Image alt={`Ubicación de la project de Nicestream en ${project.label}`} className='mx-auto md:w-full' src={project.img} width={317} height={418} />
                        </Link>
                    </Atropos>
                ))}
            </div>

        </section>
    )
}

export default page