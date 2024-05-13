import React from 'react'

const Title = ({ text, el }: { text: String, el: "h1" | "h2" | "h3" }) => {
    if (el === 'h1') return (
        <h1 className='mx-auto text-center w-fit mb-10 text-primary-500 uppercase text-4xl tracking-widest'>{text}</h1>
    )
    if (el === 'h2') return (
        <h2 className='mx-auto text-center w-fit mb-10 text-primary-500 uppercase text-4xl tracking-widest'>{text}</h2>
    )
    return (
        <h3 className='mx-auto text-center w-fit mb-10 text-primary-500 uppercase text-4xl tracking-widest'>{text}</h3>
    )


}

export default Title