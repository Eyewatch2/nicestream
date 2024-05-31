import Header from "@/components/Header"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nicestream | Proyectos",   
  };
export default function layout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Header />

            <div className="mt-24 md:mt-40">{children}</div>
        </>
    )
}