export default function Footer() {
  return (
    <section id="footer" className="bg-(--color-footer) py-10">
      <nav className="max-w-6xl mx-auto text-white">
        <ul className="flex gap-6 justify-center">
          <li>About</li>
          <li>Contact</li>
          <li>Projects</li>
        </ul>
      </nav>
      <p
        className="text-white font-serif-custom tracking-tighter 
      font-semibold text-center py-2"
      >
        Hanna Klang Eriksson
      </p>
    </section>
  );
}
