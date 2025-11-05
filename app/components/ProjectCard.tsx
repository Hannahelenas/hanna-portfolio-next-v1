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
    <li className="py-2" key={project.id}>
      <article
        className="max-w-6xl px-5 sm:px-10 md:px-10 lg:px-10 xl:px-0
        grid grid-cols-1 lg:grid-cols-2 gap-8 mt-0 py-12"
      >
        {/* Image container */}
        <div className="">
          <Image
            src={project.image}
            alt={project.title}
            width={900}
            height={700}
            className=" rounded-xl object-cover  mx-auto "
            placeholder="blur"
            blurDataURL="data:..."
          />
        </div>
        {/* Text container */}
        <div className="p-0 lg:p-6">
          <div className="flex flex-col justify-between h-full">
            <div>
              <h3 className="text-3xl mb-2 font-black tracking-tighter">
                {project.title}
              </h3>
              <p className="text-md font-serif-custom leading-relaxed mb-2">
                {project.description}
              </p>
            </div>

            {/* Bottom links */}
            <div className="flex flex-row gap-4">
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
