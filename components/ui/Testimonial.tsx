import Image from 'next/image'
import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa6'

const Testimonial = ({ img, quote, name, role }: { img: { height: number, src: string, width: number }, quote: string, name: string, role: string }) => {
    return (
        <div className="min-h-40 w-full md:flex-row flex-col items-center px-5 flex gap-5">
            <Image className="w-40 aspect-square h-40 object-cover rounded-full" alt={name} width={img.width} height={img.height} src={img.src} />
            <div className='flex flex-col justify-around'>
                <blockquote className='text-start text-gray-400 font-[300]'>
                    <FaQuoteLeft className='inline mr-3' />
                    {quote}
                </blockquote>
                <p className='text-left text-gray-600 text-xs mt-5'>
                    <span> — </span>
                    <span className='font-bold'>
                        {name}
                    </span>
                    <span className='ml-2'>
                        - {role}
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Testimonial