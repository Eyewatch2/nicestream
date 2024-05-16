import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import 'swiper/css';
import Footer from "@/components/Footer";

const archivo = Archivo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nicestream | Home", 
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
