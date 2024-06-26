"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';

const navItems = [
    {
        label: "inicio",
        href: "/",
    },
    {
        label: "portfolio",
        href: "/proyectos",
    },
    {
        label: "analytics",
        href: "/analytics",
    },
];

const Header = () => {
    const path = usePathname();
    const active = path.split("/")[1];
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className='w-full px-10 py-5 text-white bg-[#111622] fixed top-0 left-0 right-0 z-50'>
            <nav className='flex max-w-screen-xl mx-auto justify-between items-center'>
                <Link href={"/"} className='z-[100]'>
                    <Image width={150} height={34} src={"/img/logo.svg"} alt='Nicestream' />
                </Link>
                <div className='md:hidden'>
                    {menuOpen ? (
                        <MdClose className='text-2xl z-[99] relative' onClick={toggleMenu} />
                    ) : (
                        <FiMenu className='text-2xl z-[99] relative' onClick={toggleMenu} />
                    )}
                </div>
                <ul
                    className={`gap-5 h-svh justify-center items-center md:h-auto bg-[#111622] md:bg-transparent z-50 fixed md:static top-0 w-full md:w-fit right-0 ${
                        menuOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
                    } flex flex-col md:flex-row transition duration-300`}
                >
                    {navItems.map((item) => (
                        <li
                            key={item.label}
                            className={`${
                                item.href.startsWith(`/${active}`) && "font-bold italic text-primary-500"
                            } uppercase navItem font-[100] px-2 py-4 relative md:h-full before:absolute before:w-0 before:h-px before:bottom-0 before:left-0 z-10 before:hover:w-full before:hover:h-full before:bg-primary-500 before:-z-10 hover:text-white transition-colors duration-500 delay-300`}
                        >
                            <Link
                                onClick={toggleMenu}
                                href={item.href}
                                scroll={item.href.startsWith("#")}
                                className='py-4 px-2'
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                    <li className='navItem uppercase font-[100] hover:scale-110 transition group duration-500'>
                        <Link
                            onClick={toggleMenu}
                            href={"#contacto"}
                            className='py-3 md:block hidden bg-primary-500 group-hover:bg-primary-300 transition duration-500 rounded-full px-4'
                        >
                            ¡hablemos!
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
