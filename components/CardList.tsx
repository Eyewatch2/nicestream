"use client"

import React, { Suspense } from 'react'

import Atropos from 'atropos/react';
import Image from 'next/image';
import Link from 'next/link';
import { Posts } from '@/types/types';

const UPLOAD_DIR = process.env.WORDPRESS_UPLOADS_URL;

const Card = ({ posts, cols }: { posts: Posts, cols: 4 | 3 }) => {

  const className = cols === 4 ? 'md:grid-cols-4' : 'md:grid-cols-3';

  return (
    <Suspense fallback={<p>loading</p>}>
      <div className={`grid px-5 md:px-0 grid-cols-2 gap-5 mb-10 ${className}`}>
        {posts.nodes.map((project) => {

          const category = project.categories.nodes[0]?.slug;
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