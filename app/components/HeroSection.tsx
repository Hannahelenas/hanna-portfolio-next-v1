"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="bg-(--color-bg-secondary) w-full relative">
      <section
        className="max-w-6xl grid grid-cols-1 lg:grid-cols-2 mx-auto 
       pt-10 lg:pt-18 pb-22 px-5 md:px-10 xl:px-0  "
      >
        <div
          className="flex flex-col justify-center items-center
        lg:items-start"
        >
          <h1
            className="text-4xl lg:text-5xl font-black tracking-tighter 
            text-[--color-text]"
          >
            Hanna Klang Eriksson
          </h1>
          <h2 className="font-bold mt-4 text-2xl">Frontend Developer</h2>
          <p
            className="mt-4 text-lg font-serif-custom text-center 
          lg:text-start"
          >
            {" "}
            I build websites and applications with a focus on inclusive design
            and accessibility.
          </p>

          <div className="mt-4 flex gap-3">
            <button
              className="bg-[#2c3e50] border border-(--color-text-secondary)
             px-6 py-3  rounded-full text-white
            transition-all 
            duration-300 ease-in-out hover:cursor-pointer hover:bg-transparent
            hover:text-black 
            hover:border-(--color-text-secondary) font-bold tracking-wide"
            >
              See my portfolio
            </button>
            <button
              className="bg-[#34495e] border border-(--color-text-secondary)
             px-6 py-3 rounded-full text-white font-semibold
            transition-all 
            duration-300 ease-in-out hover:cursor-pointer 
            hover:bg-(--color-text-secondary)
            hover:text-white
            hover:border-(--color-text-secondary)"
            >
              Contact me
            </button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end mt-10 lg:mt-0 ">
          <Image
            src="/hanna.jpg"
            alt="Hanna"
            width={320}
            height={320}
            className="rounded-full w-55 h-55 md:w-60 md:h-60  
              lg:w-80 lg:h-80 object-cover"
            placeholder="blur"
            blurDataURL="data:..."
          />
        </div>
      </section>
      <svg
        aria-hidden="true"
        className="absolute left-0 bottom-0 w-full h-[60px] text-(--color-bg)"
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
