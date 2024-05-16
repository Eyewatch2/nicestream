
import React from 'react';
import 'atropos/css';
import Title from '@/components/ui/Title';
import CardList from '@/components/CardList';
import { getAllPosts } from '@/lib/posts';
import { Posts } from '@/types/types';

const Page = async () => {
    // Obtiene los datos de los proyectos desde la API
    const posts: Posts = await getAllPosts("proyectos");
    

    return (
        <section className='max-w-4xl mx-auto'>
            <Title el='h1' text={"Portfolio"} />
            <CardList cols={4} posts={posts} />
        </section>
    );
}

export default Page;
