import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main
      className="flex min-h-screen w-full flex-col items-center 
        "
    >
      <HeroSection />

      <section id="projects" className="py-10">
        <h2 className="font-serif-custom text-3xl lg:text-5xl">Projects</h2>
      </section>
      {/*  <section id="about" className="py-10">
        <h2 className="font-serif-custom text-5xl">About</h2>
      </section>
      <section id="contact" className="py-10">
        <h2 className="font-serif-custom text-5xl">Contact me</h2>
      </section> */}
    </main>
  );
}
