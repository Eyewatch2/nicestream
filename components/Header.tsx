"use client"

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const navItems = [
    {
        label: "nosotros",
        href: "/#nosotros"
    },
    {
        label: "portfolio",
        href: "/proyectos"
    },
    {
        label: "analytics",
        href: "/analytics"
    },


]

const Header = () => {
    const path = usePathname()
    const active = path.split("/")[1]
    

    return (
        <header className='w-full px-10 py-5 text-white bg-[#111622] mb-10'>
            <nav className='flex max-w-screen-xl mx-auto justify-between items-center'>
                <Link href={"/"} className='mx-auto md:ml-0'>
                    <Image width={150} height={34} src={"/img/logo.svg"} alt='Nicestream' />
                </Link>
                <ul className='gap-5 items-center hidden md:flex'>
                    {navItems.map((item) => {
                        return (
                            <li className={`${item.href.startsWith(`/${active}`) && "font-bold italic text-primary-500"} uppercase navItem font-[100]
                    before:absolute before:w-0 before:h-px before:bottom-0 
                    px-2 py-4 before:left-0 z-10 before:hover:w-full before:-z-10 h-full relative 
                    before:hover:h-full hover:text-white transition-colors duration-500 delay-300 before:bg-primary-500`} key={item.label}>
                                <Link href={item.href} scroll={item.href.startsWith("#")} className='py-4 px-2'>{item.label}</Link>
                            </li>
                        )
                    })}

                    <li className='navItem uppercase font-[100] hover:scale-110 transition group duration-500'><Link href={"#contacto"} className='py-3 bg-primary-500 group-hover:bg-primary-300 transition duration-500 rounded-full px-4'>¡hablemos!</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header