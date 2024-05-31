import React from "react";
import "atropos/css";
import Title from "@/components/ui/Title";
import CardList from "@/components/CardList";
import { getAllPosts } from "@/lib/posts";
import { revalidatePath } from "next/cache";

const Page = async () => {
  const posts = await getAllPosts("/analytics");
  revalidatePath("/analytics");

  return (
    <section className="max-w-4xl mx-auto mt-24">
      <Title el="h1" text={"Analitycs"} />
      <CardList cols={3} posts={posts} />
    </section>
  );
};

export default Page;
