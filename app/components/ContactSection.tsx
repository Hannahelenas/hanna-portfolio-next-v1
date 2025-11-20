"use client";

import PrimaryButtonLink from "./common/PrimaryButtonLink";

const email = "hanna.klang.eriksson@gmail.com";

export default function ContactSection() {
  return (
    <section id="contact" className="py-10 max-w-6xl mx-auto px-5 ">
      <div className="flex flex-col items-center">
        <h2
          className="font-serif-custom text-4xl lg:text-5xl tracking-tight 
        font-semibold text-(--color-text-secondary) mb-10"
        >
          Get in touch
        </h2>
        <p className="mb-10 sm:w-3/4 lg:w-5/9 text-center leading-relaxed">
          I’m currently open to new opportunities. Feel free to reach out with
          projects, feedback, or any questions. I’d love to hear from you!
        </p>
        <div className="mb-10">
          <PrimaryButtonLink href={`mailto:${email}`}>
            Email me
          </PrimaryButtonLink>
        </div>
      </div>
    </section>
  );
}
