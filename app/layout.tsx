import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import 'swiper/css';
import Footer from "@/components/Footer";

const archivo = Archivo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nicestream | Home", 
  description: "Nicestream es la principal red de oficinas especializadas en Social Big Data en Latinoamérica y España. Con más de 7 años de experiencia, nos destacamos en estrategias de marca, investigación, innovación y creación de contenido."
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
