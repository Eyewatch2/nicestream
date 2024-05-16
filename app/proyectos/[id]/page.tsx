"use client"
import Title from '@/components/ui/Title';
import { getSinglePost } from '@/lib/posts';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { PostsNode } from '@/types/types';

const Page = () => {
    const params = useParams();
    const { id } = params;
    const [post, setPost] = useState<PostsNode | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                if (id) {
                    const postData = await getSinglePost(id as string);
                    setPost(postData);
                }

            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };

        fetchPost();
    }, [id]);

    if (!post) {
        // Opcional: Muestra un mensaje de carga mientras se carga el post
        return <p className='text-center'>Loading...</p>;
    }

    return (
        <section>
            <div className='max-w-4xl mx-auto flex flex-col gap-5'>
                <Title text={post.title} el='h1' />
                <div className='flex flex-col items-center text-gray-600 md:px-0 px-5' dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
        </section>
    );
}

export default Page;
