import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

export default function Footer() {
  return (
    <section id="footer" className="bg-(--color-footer) py-10 px-5 sm:px-10">
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
      <div
        className="flex flex-row gap-6 justify-start sm:justify-end max-w-6xl 
      mx-auto"
      >
        <a
          className="flex items-center gap-1 font-bold font-serif-custom 
                    hover:underline underline-offset-2 "
          href="https://github.com/Hannahelenas"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Hannas Github (opens in a new tab)"
        >
          <IoLogoGithub
            aria-hidden="true"
            className="text-2xl text-(--color-text-light) "
          />
        </a>
        <a
          className="flex items-center gap-1 font-bold font-serif-custom 
                    hover:underline underline-offset-2"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Hannas Linkedin (opens in a new tab)"
        >
          <IoLogoLinkedin
            aria-hidden="true"
            className="text-2xl  text-(--color-text-light) "
          />
        </a>
      </div>
    </section>
  );
}
