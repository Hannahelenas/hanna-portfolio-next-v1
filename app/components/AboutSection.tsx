"use client";
import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="bg-(--color-bg-secondary) w-full">
      <section id="about" className="py-12 max-w-4xl mx-auto px-5 sm:px-10">
        <h2
          className="font-serif-custom text-4xl lg:text-5xl tracking-tighter 
        mb-15  text-center"
        >
          About me
        </h2>
        <h3
          className="font-serif-custom text-4xl lg:text-4xl tracking-tighter 
        mb-4"
        >
          Hanna Klang Eriksson
        </h3>
        <div className="mt-6 text-md leading-relaxed">
          <div className="float-left mr-6 mb-3 w-45 h-45 sm:h-50 sm:w-50 ">
            <Image
              src="/hanna.jpg"
              alt="Hanna"
              width={320}
              height={320}
              className="rounded-full w-full h-full object-cover"
              placeholder="blur"
              blurDataURL="data:..."
            />
          </div>

          {/* Text floating around image */}
          <p className="mb-4">
            Nice to meet you, I´m Hanna! I am a Frontend developer based in
            Uppsala, Sweden. My interest for programming started when I began to
            do small projects in my sparetime while working as a nurse and soon
            it grew from a hobby to a desired career.
          </p>
          <p>
            {" "}
            During my studies in Front-end development I discovered my passion
            for creating inclusive and accessible user experiences, which is
            something I am genuinely dedicated to and thriving to learn more
            about.
          </p>
          <p className="mt-2">
            {" "}
            What I love about coding is that there are so many ways to be
            creative, solve problems and of course that you can always learn
            something new!{" "}
          </p>

          <p className="text-lg font-serif-custom font-semibold mt-4">
            &quot;All development starts with communication. I bring a genuine
            warmth to every project, believing in teamwork. My passion lies in
            crafting impactful solutions, with empathy and a dedicated focus on
            the people who will use them.&quot;
          </p>
        </div>
      </section>
    </div>
  );
}
