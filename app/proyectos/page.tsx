
import React from 'react';
import 'atropos/css';
import Title from '@/components/ui/Title';
import CardList from '@/components/CardList';
import { getAllPosts } from '@/lib/posts';
import { revalidatePath } from 'next/cache';


const Page = async () => {
    const posts = await getAllPosts('/proyectos');
    revalidatePath('/proyectos');
    return (
        <section className='max-w-4xl mx-auto'>
            <Title el='h1' text={"Portfolio"} noAnimation={true} />
            <CardList posts={posts} cols={4} />
        </section>
    );
}

export default Page;
