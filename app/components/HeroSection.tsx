"use client";

import PrimaryButtonLink from "./common/PrimaryButtonLink";
import SecondaryButtonLink from "./common/SecondaryButtonLink";

export default function HeroSection() {
  return (
    <div className="bg-(--color-bg-secondary) w-full relative">
      <section
        className="max-w-6xl grid grid-cols-1 lg:grid-cols-1 mx-auto 
       py-15 px-5 md:px-10 xl:px-0"
      >
        <div className="flex flex-col justify-center items-center pb-16">
          <h1
            className="text-5xl lg:text-7xl leading-tight tracking-tighter
            text-(--color-text) font-display-custom font-bold mb-4 
            text-center"
          >
            Hanna Klang Eriksson
          </h1>
          <p
            className="font-serif-custom text-2xl md:text-3xl font-semibold 
          mb-2 text-(--color-text-secondary) tracking-tight"
          >
            Frontend developer
          </p>
          <p
            className="mt-4 text-lg md:text-xl text-center sm:w-3/4 
          leading-relaxed"
          >
            {" "}
            I build apps and websites with a focus on inclusive design and
            accessibility.
          </p>

          <div className="mt-8 flex gap-3">
            <PrimaryButtonLink href="#projects">
              See my portfolio
            </PrimaryButtonLink>
            <SecondaryButtonLink href="#contact">
              Contact me
            </SecondaryButtonLink>
          </div>
        </div>
      </section>
      <svg
        aria-hidden="true"
        className="absolute left-0 -bottom-1 w-full h-16 text-(--color-bg)"
        viewBox="0 0 1000 150"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M0,75 C250,0 750,150 1000,75 V150 H0 Z"
        ></path>
      </svg>
    </div>
  );
}
