import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const navItems = [
    {
        label: "nosotros",
        href: "#nosotros"
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
    return (
        <header className='py-10 text-white max-w-screen-xl mx-auto flex justify-between absolute z-50 top-0 left-1/2 -translate-x-1/2 w-svw'>
            <Link href={"/"} className='mx-auto md:ml-0'>
                <Image width={150} height={34} src={"/img/logo.svg"} alt='Nicestream' />
            </Link>
            <ul className='gap-5 items-center hidden md:flex'>
                {navItems.map((item) => {
                    return (
                        <li className='uppercase navItem font-[100]
                    before:absolute before:w-0 before:h-px before:bottom-0 
                    px-2 py-4 before:left-0 z-10 before:hover:w-full before:-z-10 h-full relative 
                    before:hover:h-full before:bg-primary-500' key={item.label}>
                            <Link href={item.href} scroll={item.href.startsWith("#")} className='py-4 px-2'>{item.label}</Link>
                        </li>
                    )
                })}

                <li className='uppercase font-[100] hover:scale-110 transition group duration-500'><Link href={"#contacto"} className='py-3 bg-primary-500 group-hover:bg-primary-300 transition duration-500 rounded-full px-4'>¡hablemos!</Link></li>
            </ul>
        </header>
    )
}

export default Header