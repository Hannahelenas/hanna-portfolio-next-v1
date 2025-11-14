"use client";

export default function HeroSection() {
  return (
    <div className="bg-(--color-bg-secondary) w-full relative">
      <section
        className="max-w-6xl grid grid-cols-1 lg:grid-cols-1 mx-auto 
       pt-10 lg:pt-18 pb-22 px-5 md:px-10 xl:px-0  "
      >
        <div
          className="flex flex-col justify-center items-center
        lg:items-center"
        >
          <h1
            className="text-5xl lg:text-7xl  leading-tight
            text-(--color-text-secondary) font-display-custom font-bold mb-2 
            text-center
            "
          >
            Hanna Klang Eriksson
          </h1>
          <p
            className="font-serif-custom text-2xl md:text-3xl font-semibold 
          mt-2"
          >
            Frontend developer
          </p>
          <p
            className="mt-4 text-lg md:text-xl text-center
          "
          >
            {" "}
            I build websites and applications with a focus on inclusive design
            and accessibility.
          </p>

          <div className="mt-8 flex gap-3">
            <button
              className="bg-(--color-text-secondary) border 
              border-(--color-text-secondary)
             px-6 py-3  rounded-full text-(--color-text-light)
            transition-all 
            duration-300 ease-in-out hover:cursor-pointer hover:bg-transparent
            hover:text-black 
            hover:border-(--color-text-secondary) font-bold tracking-wide"
            >
              See my portfolio
            </button>
            <button
              className=" border border-(--color-text-secondary)
             px-6 py-3 rounded-full  font-semibold
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
