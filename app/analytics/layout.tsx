import Header from "@/components/Header"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nicestream | Analytics",
    description: "Nicestream es la principal red de oficinas especializadas en Social Big Data en Latinoamérica y España. Con más de 7 años de experiencia, nos destacamos en estrategias de marca, investigación, innovación y creación de contenido. Nuestro enfoque en el anál",
   
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