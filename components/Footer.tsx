import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';



const socials = [
    {
        icon: <FaFacebookF className='text-3xl scale-90' />,
        href: "https://www.facebook.com/nicestream"
    },
    {
        icon: <FaInstagram className='text-3xl' />,
        href: "https://www.instagram.com/nicestream/?hl=es"
    },
    {
        icon: <FaLinkedinIn className='text-3xl' />,
        href: "https://www.linkedin.com/company/nicestreamdigital/"
    },

]
const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer className='h-32 flex flex-col justify-center items-center text-black gap-3'>
            <p className='text-lg text-center'>
                © Todos los derechos reservados - {currentYear}. Desarrollado por {" "}
                <Link className='text-primary-500 hover:text-primary-400 transition' href={"/"}>
                    Nicestream
                </Link>
            </p>
            <div className='hidden md:flex gap-5'>
                {socials.map((item) => (
                    <span key={item.href} className='relative w-8 h-8 group'>
                        <Link
                            className='absolute text-primary-500 group-hover:translate-x-[2px] group-hover:translate-y-[2px] footerSocialLink transition duration-300'
                            href={item.href} target='_blank'>
                            {item.icon}
                        </Link>
                        <Link
                            className='absolute inset-0 text-primary-500 hover:scale-110 footerSocialLink hover:text-black transition duration-300'
                            href={item.href} target='_blank'>
                            {item.icon}
                        </Link>
                    </span>
                ))
                }
            </div>
        </footer>
    )
}

export default Footer