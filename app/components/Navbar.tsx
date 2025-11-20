"use client";
import Link from "next/link";
import { useState } from "react";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import ThemeToggle from "./ThemeToggle";

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

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-(--color-bg-secondary) py-2">
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
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-3xl p-2  
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
      {menuOpen && (
        <div className="lg:hidden px-5 sm:px-10 pb-4">
          <ul
            className="flex flex-col gap-4 
          font-serif"
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
