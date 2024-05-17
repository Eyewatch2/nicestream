
import React from 'react';
import 'atropos/css';
import Title from '@/components/ui/Title';
import CardList from '@/components/CardList';


const Page = async () => {
    

    return (
        <section className='max-w-4xl mx-auto'>
            <Title el='h1' text={"Portfolio"} noAnimation={true} />
            <CardList cols={4} />
        </section>
    );
}

export default Page;
