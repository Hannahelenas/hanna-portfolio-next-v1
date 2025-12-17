import Link from "next/link";
import { RefObject } from "react";

interface MobileNavMenuProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  menuButtonRef: RefObject<HTMLButtonElement | null>;
}

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

export default function MobileNavMenu({
  menuOpen,
  setMenuOpen,
  menuButtonRef,
}: MobileNavMenuProps) {
  return (
    <div
      aria-hidden={!menuOpen}
      className={`
        lg:hidden
        z-50
        absolute left-0 right-0 top-full
        px-5 sm:px-10 pb-4
        bg-(--color-bg-secondary)
        transition-all duration-300 ease-out 
    ${
      menuOpen
        ? "opacity-100 translate-y-0 pointer-events-auto"
        : "opacity-0 -translate-y-2 pointer-events-none"
    }
  `}
    >
      <ul className="flex flex-col gap-4 font-serif">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => {
                menuButtonRef.current?.focus();
                setMenuOpen(false);
              }}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
