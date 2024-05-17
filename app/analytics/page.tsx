
import React from 'react';
import 'atropos/css';
import Title from '@/components/ui/Title';
import CardList from '@/components/CardList';
import { getAllPosts } from '@/lib/posts';
import { Posts } from '@/types/types';

const Page = async () => {
    const posts: Posts = await getAllPosts("analytics");

    return (
        <section className='max-w-4xl mx-auto'>
            <Title el='h1' text={"Analitycs"} />
            <CardList cols={3} />
        </section>
    );
}

export default Page;
