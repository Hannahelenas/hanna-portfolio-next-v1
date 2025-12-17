"use client";
import Link from "next/link";
import { useState } from "react";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import ThemeToggle from "./ThemeToggle";
import { useRef } from "react";
import MobileNavMenu from "./MobileNavMenu";

const navLinks = [
  {
    name: "About",
    href: "/#about",
  },
  {
    name: "Projects",
    href: "/#projects",
  },
  {
    name: "Contact",
    href: "/#contact",
  },
];

const animationClass: string = "animate-fade-in-up";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <nav className="relative bg-(--color-bg-secondary) py-2">
      <div
        className="max-w-6xl mx-auto grid grid-cols-2 
        lg:grid-cols-3 items-center pl-5 pr-2 sm:pl-10 sm:pr-7 xl:px-0"
      >
        {/* Logo text */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-serif-custom tracking-tighter 
          font-semibold py-2 text-(--color-text)
          "
        >
          Hanna Klang Eriksson
        </Link>

        {/* Desktop links */}
        <ul
          className=" hidden lg:flex justify-center gap-8 font-serif-custom 
        font-semibold"
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              {" "}
              <Link href={link.href}> {link.name} </Link>{" "}
            </li>
          ))}
        </ul>

        {/* Navbar button container */}
        <div
          className="flex justify-end items-center gap-1  
         "
        >
          <div className={`${animationClass} delay-1`}>
            <ThemeToggle />
          </div>
          <button
            ref={menuButtonRef}
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-3xl p-2 hover:cursor-pointer
            "
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <IoCloseOutline aria-hidden="true" focusable="false" />
            ) : (
              <IoMenuOutline aria-hidden="true" focusable="false" />
            )}
          </button>
        </div>

        <div />
      </div>
      {/* Mobile navlink menu */}
      <MobileNavMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        menuButtonRef={menuButtonRef}
      />
    </nav>
  );
}
