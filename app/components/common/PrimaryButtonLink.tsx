import Link from "next/link";
import { ReactNode } from "react";

interface PrimaryButtonLinkProps {
  children: ReactNode;
  href: string;
}

export default function PrimaryButtonLink({
  children,
  href,
}: PrimaryButtonLinkProps) {
  return (
    <Link
      href={href}
      className="bg-(--color-text) border 
            border-(--color-text)
            px-6 py-3  rounded-full text-(--color-bg)
            transition-all duration-300 ease-in-out hover:cursor-pointer 
            hover:bg-transparent
            hover:text-(--color-text) 
            hover:border-(--color-text-secondary) font-semibold tracking-wide"
    >
      {children}
    </Link>
  );
}
