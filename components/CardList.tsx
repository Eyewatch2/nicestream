"use client"

import React, { Suspense, useEffect } from 'react'

import Atropos from 'atropos/react';
import Image from 'next/image';
import Link from 'next/link';
import { Posts } from '@/types/types';
import { STABLES } from '@/stables';
import { usePathname } from 'next/navigation';
import { getAllPosts } from '@/lib/posts';

const UPLOAD_DIR = STABLES.UPLOAD_URL;

const Card = ({ cols }: { cols: 4 | 3 }) => {
  const [posts, setPosts] = React.useState<Posts | null>(null);
  const pathname = usePathname();
  const categoryPath = pathname.split('/')[1];


  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getAllPosts(categoryPath);
      setPosts(data);
    }
    fetchPosts();
  }, []);


  const className = cols === 4 ? 'md:grid-cols-4' : 'md:grid-cols-3';

  return (
    <Suspense fallback={<p>loading</p>}>
      <div className={`grid px-5 md:px-0 grid-cols-2 gap-5 mb-10 ${className}`}>
        {posts?.nodes.map((project) => {

          const categoryIndex = project.categories.nodes.findIndex((category) => category.slug === categoryPath);
          const category = project.categories.nodes[categoryIndex]?.slug;
          const title = project.title;
          const image = `${UPLOAD_DIR}/${project.featuredImage?.node?.mediaDetails?.file}`;
          const slug = project.slug;
          const href = `/${category}/${slug}`;


          return (
            <Atropos key={slug} rotateYInvert rotateXInvert shadow={false} className="my-atropos w-full mx-auto">
              <Link href={href}>
                {image && (
                  <Image
                    alt={`Proyecto ${title}`}
                    className='mx-auto md:w-full'
                    src={image}
                    width={category === "proyectos" ? 256 : 256}
                    height={category === "proyectos" ? 370 : 264}
                  />
                )}
              </Link>
            </Atropos>
          );
        })}
      </div>
    </Suspense>
  )
}

export default Card