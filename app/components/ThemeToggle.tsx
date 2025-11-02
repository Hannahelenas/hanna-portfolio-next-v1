/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  /* if (resolvedTheme === "dark") {
    return <FiSun onClick={() => setTheme("light")} size={25} />;
  }

  if (resolvedTheme === "light") {
    return <FiMoon onClick={() => setTheme("dark")} size={25} />;
  } */

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full transition hover:cursor-pointer 
      hover:border-(--color-text) border border-transparent"
      aria-label={
        resolvedTheme === "dark"
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
    >
      {resolvedTheme === "dark" ? (
        <FiSun size={22} aria-hidden="true" />
      ) : (
        <FiMoon size={22} aria-hidden="true" />
      )}
    </button>
  );
}
