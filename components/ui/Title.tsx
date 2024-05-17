import React from 'react'

const Title = ({ text, el, noAnimation = false }: { text: String, el: "h1" | "h2" | "h3", noAnimation?: boolean }) => {  
    
    const className = `mx-auto text-center overflow-hidden w-fit mb-10 text-primary-500 uppercase text-[1.7rem] md:text-4xl tracking-widest ${noAnimation ? '' : 'title_2'}`
    
    if (el === 'h1') return (
        <h1 className={className}>{text}</h1>
    )
    if (el === 'h2') return (
        <h2 className={className}>{text}</h2>
    )
    return (
        <h3 className={className}>{text}</h3>
    )


}

export default Title