import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import 'swiper/css';
import Footer from "@/components/Footer";

const archivo = Archivo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nicestream | Inicio",
  description: "Nicestream es la principal red de oficinas especializadas en Social Big Data en Latinoamérica y España. Con más de 7 años de experiencia, nos destacamos en estrategias de marca, investigación, innovación y creación de contenido.",
  keywords: "Social Big Data, Latinoamérica, España, Estrategia de marca, Creación de contenido, Social media analytics, Big data analytics, Marketing digital, Análisis de datos, Desarrollo de marca, Marketing en redes sociales, Analytics avanzado, Tendencias de merca, Nicestream, Social Big Data, investigación, innovación, creación de contenido",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={archivo.className}>
        {children}
        <Footer />

      </body>
    </html>
  );
}
