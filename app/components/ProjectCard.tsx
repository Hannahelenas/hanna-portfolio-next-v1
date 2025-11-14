"use client";
import Image from "next/image";

import { Project } from "@/data/projects";
import { MdOpenInNew } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io5";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <li className="py-2 h-full flex" key={project.id}>
      <article
        className="max-w-lg px-5 sm:px-10 lg:px-10 xl:px-0 flex 
      flex-col h-full"
      >
        {/* Image container */}
        <div className="relative">
          <Image
            src={project.image}
            alt={project.title}
            width={700}
            height={700}
            className="rounded-t-xl object-cover mx-auto "
            placeholder="blur"
            blurDataURL="data:..."
          />
          <svg
            aria-hidden="true"
            className="absolute left-0 bottom-0 w-full h-[60px] 
            text-(--color-chip)"
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
        {/* Text container */}
        <div
          className="p-5 pt-0 lg:pt-0 lg:pl-6 pb-6 bg-(--color-chip) h-full 
        relative rounded-b-xl"
        >
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-3xl mb-2 font-black tracking-tighter">
                {project.title}
              </h3>
              <p className="text-md font-serif-custom leading-relaxed mb-2">
                {project.description}
              </p>
            </div>

            {/* Bottom links */}
            <div className="flex flex-row gap-4 mt-2">
              <a
                className="flex items-center gap-1 font-bold font-serif-custom 
              hover:underline underline-offset-2"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Projects webpage (opens in a new tab)"
              >
                Visit webpage{" "}
                <MdOpenInNew aria-hidden="true" className="text-2xl" />
              </a>
              <a
                className="flex items-center gap-1 font-bold font-serif-custom 
              hover:underline underline-offset-2"
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Project repo (opens in a new tab)"
              >
                View code{" "}
                <IoLogoGithub aria-hidden="true" className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </article>
    </li>
  );
}
