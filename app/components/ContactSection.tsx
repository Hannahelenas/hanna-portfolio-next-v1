"use client";

const email = "hanna.klang.eriksson@gmail.com";

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 max-w-6xl mx-auto px-5 ">
      <div className="flex flex-col items-center">
        <h2 className="font-serif-custom text-4xl lg:text-5xl tracking-tighter">
          Get in touch
        </h2>
        <p className="mt-8 sm:w-3/4 lg:w-5/9 text-center leading-relaxed">
          I’m currently open to new opportunities. Feel free to reach out with
          projects, feedback, or any questions. I’d love to hear from you!
        </p>
        <div className="mt-8 mb-8">
          <a
            href={`mailto:${email}`}
            className="bg-(--color-text-secondary) border 
            border-(--color-text-secondary)
            px-6 py-3 rounded-full text-(--color-text-light)
            transition-all duration-300 ease-in-out 
            hover:cursor-pointer hover:bg-transparent
            hover:text-black hover:border-(--color-text-secondary)
            font-semibold tracking-wide inline-block text-center"
          >
            Email me
          </a>
        </div>
      </div>
    </section>
  );
}
