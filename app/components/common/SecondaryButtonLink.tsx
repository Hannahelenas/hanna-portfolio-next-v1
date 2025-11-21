import Link from "next/link";
import { ReactNode } from "react";

interface SecondaryButtonLinkProps {
  children: ReactNode;
  href: string;
}

export default function SecondaryButtonLink({
  children,
  href,
}: SecondaryButtonLinkProps) {
  return (
    <Link
      href={href}
      className="border border-(--color-text)
            px-6 py-3 rounded-full font-semibold
            transition-all 
            duration-300 ease-in-out hover:cursor-pointer 
            hover:bg-(--color-text)
            hover:text-(--color-bg)
            hover:border-(--color-text)"
    >
      {children}
    </Link>
  );
}
