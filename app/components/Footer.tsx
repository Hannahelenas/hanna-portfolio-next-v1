import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

const linkedinUrl =
  "https://www.linkedin.com/in/hanna-klang-eriksson-286831294/";
const githubUrl = "https://github.com/Hannahelenas";

export default function Footer() {
  return (
    <section
      id="footer"
      className="bg-(--color-bg-secondary) py-10 px-5 sm:px-10 relative"
    >
      <svg
        aria-hidden="true"
        className="absolute -top-10 left-0 w-full h-[60px] 
        text-(--color-bg-secondary)"
        viewBox="0 0 1000 150"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M0,75 C250,0 750,150 1000,75 V150 H0 Z"
        ></path>
      </svg>
      <div
        className="flex flex-row gap-6 items-start justify-between max-w-6xl 
      mx-auto"
      >
        <div className="flex gap-4">
          <a
            className="flex items-center gap-1 font-bold font-serif-custom 
                    hover:underline underline-offset-2"
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hannas Github (opens in a new tab)"
          >
            <IoLogoGithub
              aria-hidden="true"
              className="text-2xl text-(--color-text-secondary)"
            />
          </a>
          <a
            className="flex items-center gap-1 font-bold font-serif-custom 
                    hover:underline underline-offset-2"
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hannas Linkedin (opens in a new tab)"
          >
            <IoLogoLinkedin
              aria-hidden="true"
              className="text-2xl text-(--color-text-secondary)"
            />
          </a>
        </div>
        <p className="text-(--color-text-secondary) font-medium tracking-tight">
          © {new Date().getFullYear()} Hanna Klang Eriksson
        </p>
      </div>
    </section>
  );
}
