export default function Home() {
  return (
    <div
      className="flex min-h-screen items-center justify-center 
    "
    >
      <main
        className="flex min-h-screen w-full max-w-6xl flex-col items-center 
      justify-between py-32 px-16  "
      >
        <section>
          <h1
            className="text-center text-5xl font-black 
          text-(--color-text-secondary)"
          >
            Nice to meet you! I&apos;m Hannna Klang Eriksson.
          </h1>
        </section>

        <section id="projects" className="py-10">
          Projects
        </section>
        <section id="about" className="py-10">
          About
        </section>
        <section id="contact" className="py-10">
          Contact
        </section>
      </main>
    </div>
  );
}
