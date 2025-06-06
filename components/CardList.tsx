"use client";

import React, { useEffect } from "react";

import Atropos from "atropos/react";
import Image from "next/image";
import Link from "next/link";
import { Posts } from "@/types/types";
import { STABLES } from "@/stables";
import { usePathname } from "next/navigation";


const UPLOAD_DIR = STABLES.UPLOAD_URL;

const Card = ({ cols, posts }: { cols: 4 | 3; posts: Posts | null }) => {
  const pathname = usePathname();
  const categoryPath = pathname.split("/")[1];

  const className = cols === 4 ? "md:grid-cols-4" : "md:grid-cols-3";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`grid px-5 md:px-0 grid-cols-2 gap-5 mb-10 ${className}`}>
      {!posts && (
        <>
          <div
            className={`w-full bg-gray-200 animate-pulse ${
              categoryPath === "proyectos"
                ? "aspect-[496/717]"
                : "aspect-square"
            }`}
          ></div>
          <div
            className={`w-full bg-gray-200 animate-pulse ${
              categoryPath === "proyectos"
                ? "aspect-[496/717]"
                : "aspect-square"
            }`}
          ></div>
          <div
            className={`w-full bg-gray-200 animate-pulse ${
              categoryPath === "proyectos"
                ? "aspect-[496/717]"
                : "aspect-square"
            }`}
          ></div>
          <div
            className={`w-full bg-gray-200 animate-pulse aspect-[496/717] ${
              categoryPath !== "proyectos" && "hidden"
            }`}
          ></div>
        </>
      )}

      {posts?.nodes.map((project, index) => {
        const categoryIndex = project.categories.nodes.findIndex(
          (category) => category.slug === categoryPath
        );
        const category = project.categories.nodes[categoryIndex]?.slug;
        const title = project.title;
        const image = project.featuredImage?.node?.mediaDetails?.sizes[0]?.sourceUrl;
        const slug = project.slug;
        const href = `/${category}/${slug}`;

        return (
        <Atropos
            key={slug}
            rotateYInvert
            rotateXInvert
            shadow={false}
            style={{ "--i": index + 1 } as React.CSSProperties}
            className="w-full mx-auto my-card"
        >
            <Link href={href}>
              {image && (
                <Image
                  alt={`Proyecto ${title}`}
                  className={`mx-auto md:w-full ${
                    category === "proyectos"
                      ? "aspect-[496/717]"
                      : "aspect-square"
                  } object-cover`}
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
  );
};

export default Card;
