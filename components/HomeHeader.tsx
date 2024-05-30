"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const navItems = [
  {
    label: "nosotros",
    href: "#nosotros",
  },
  {
    label: "portfolio",
    href: "/proyectos",
  },
  {
    label: "analytics",
    href: "/analytics",
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="py-10 px-5 items-center bg-primary-950 md:bg-transparent text-white max-w-screen-xl mx-auto flex justify-between fixed md:absolute z-50 top-0 left-1/2 -translate-x-1/2 w-svw">
        <Link href={"/"} className="md:ml-0 z-[100]">
          <Image
            id="logo"
            width={150}
            height={34}
            src={"/img/logo.svg"}
            alt="Nicestream"
          />
        </Link>
        <div className="">
          {menuOpen ? (
            <MdClose
              className="text-2xl z-[99] relative md:hidden"
              onClick={toggleMenu}
            />
          ) : (
            <FiMenu
              className="text-2xl z-[99] relative md:hidden"
              onClick={toggleMenu}
            />
          )}
          <ul
            className={`gap-5 justify-center items-center h-svh md:h-auto bg-primary-950 md:bg-transparent z-50 fixed md:static top-0 w-full right-0 ${
              menuOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
            } flex flex-col md:flex-row transition duration-300`}
          >
            {navItems.map((item) => {
              return (
                <li
                  className="uppercase navItem navItemAnimated font-[100]
                    before:absolute before:w-0 before:h-px before:bottom-0
                    px-2 py-4 before:left-0 z-10 before:hover:w-full before:-z-10 md:h-full relative
                    before:hover:h-full before:bg-primary-500"
                  key={item.label}
                >
                  <Link
                    onClick={toggleMenu}
                    href={item.href}
                    scroll={item.href.startsWith("#")}
                    className="py-4 px-2"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}

            <li className="navItem uppercase font-[100] hover:scale-110 transition group duration-500">
              <Link
                onClick={toggleMenu}
                href={"#contacto"}
                className="py-3 md:block hidden bg-primary-500 group-hover:bg-primary-300 transition duration-500 rounded-full px-4"
              >
                ¡hablemos!
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
