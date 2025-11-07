import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main
      className="flex min-h-screen w-full flex-col items-center 
      overflow-x-hidden"
    >
      <HeroSection />
      <ProjectsSection />
      <ContactSection />
      {/*  <section id="about" className="py-10">
        <h2 className="font-serif-custom text-5xl">About</h2>
      </section>
      */}
    </main>
  );
}
