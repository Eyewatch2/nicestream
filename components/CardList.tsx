"use client"

import React, { useEffect } from 'react'

import Atropos from 'atropos/react';
import Image from 'next/image';
import Link from 'next/link';
import { Posts } from '@/types/types';
import { STABLES } from '@/stables';
import { usePathname } from 'next/navigation';
import { getAllPosts } from '@/lib/posts';
import gsap from 'gsap';

const UPLOAD_DIR = STABLES.UPLOAD_URL;

const Card = ({ cols }: { cols: 4 | 3 }) => {
  const [posts, setPosts] = React.useState<Posts | null>(null);
  const pathname = usePathname();
  const categoryPath = pathname.split('/')[1];

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getAllPosts(categoryPath);
      setPosts(data);
      animateCards();
    }
    fetchPosts();
  }, []);

  const animateCards = () => {
    const tl = gsap.timeline({ defaults: { duration: 0.5 } });
    tl.from('.my-cards', { opacity: 0, y: 100, stagger: 0.1 });
  }

  const className = cols === 4 ? 'md:grid-cols-4' : 'md:grid-cols-3';

  return (
    <div className={`grid px-5 md:px-0 grid-cols-2 gap-5 mb-10 ${className}`}>
      {!posts && (
        <>
          <div className={`w-full bg-gray-200 animate-pulse ${categoryPath === "proyectos" ? "aspect-[496/717]":"aspect-square"}`}></div>
          <div className={`w-full bg-gray-200 animate-pulse ${categoryPath === "proyectos" ? "aspect-[496/717]":"aspect-square"}`}></div>
          <div className={`w-full bg-gray-200 animate-pulse ${categoryPath === "proyectos" ? "aspect-[496/717]":"aspect-square"}`}></div>
          <div className={`w-full bg-gray-200 animate-pulse aspect-[496/717] ${categoryPath !== "proyectos" && "hidden"}`}></div>
        </>
      )}

      {posts?.nodes.map((project) => {

        const categoryIndex = project.categories.nodes.findIndex((category) => category.slug === categoryPath);
        const category = project.categories.nodes[categoryIndex]?.slug;
        const title = project.title;
        const image = `${UPLOAD_DIR}/${project.featuredImage?.node?.mediaDetails?.file}`;
        const slug = project.slug;
        const href = `/${category}/${slug}`;


        return (
          <Atropos key={slug} rotateYInvert rotateXInvert shadow={false} className="my-cards w-full mx-auto">
            <Link href={href}>
              {image && (
                <Image
                  alt={`Proyecto ${title}`}
                  className={`mx-auto md:w-full ${category === "proyectos" ? "aspect-[496/717]" : "aspect-square"} object-cover`}
                  src={image}
                  width={category === "proyectos" ? 496 : 264}
                  height={category === "proyectos" ? 717 : 264}
                />
              )}
            </Link>
          </Atropos>
        );
      })}
    </div>
  )
}

export default Card