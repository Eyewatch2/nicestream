import Header from "@/components/Header"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nicestream | Analytics",   
  };

export default function layout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <Header />

            {children}
        </section>
    )
}