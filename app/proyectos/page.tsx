"use client"
import Atropos from 'atropos/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import 'atropos/css'
import Title from '@/components/Title'
const proyectos = [
    {
        label: 'Nicestream',
        img: '/img/portfolio/1.png',
        href: '/proyectos/nicestream',
        colorClass: 'text-[#00aae4]',
    },
    {
        label: 'Nicestream',
        img: '/img/portfolio/1.png',
        href: '/proyectos/nicestream',
        colorClass: 'text-[#00aae4]',
    },
    {
        label: 'Nicestream',
        img: '/img/portfolio/1.png',
        href: '/proyectos/nicestream',
        colorClass: 'text-[#00aae4]',
    },
    {
        label: 'Nicestream',
        img: '/img/portfolio/1.png',
        href: '/proyectos/nicestream',
        colorClass: 'text-[#00aae4]',
    },
    {
        label: 'Nicestream',
        img: '/img/portfolio/1.png',
        href: '/proyectos/nicestream',
        colorClass: 'text-[#00aae4]',
    },
    {
        label: 'Nicestream',
        img: '/img/portfolio/1.png',
        href: '/proyectos/nicestream',
        colorClass: 'text-[#00aae4]',
    },

]

const page = () => {
    return (
        <section className=''>
            <Title el='h1' text={"Portfolio"} />
            <div className='grid px-5 md:px-0 md:grid-cols-4 grid-cols-2 gap-5 max-w-4xl mx-auto mb-10'>
                {proyectos.map((project) => (
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