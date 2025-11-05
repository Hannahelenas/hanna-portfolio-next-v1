"use client";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-10 max-w-6xl mx-auto">
      {" "}
      <h2
        className=" text-3xl lg:text-5xl text-center mb-4 
      font-serif-custom"
      >
        Projects
      </h2>
      <ul className="grid grid-cols-1 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </section>
  );
}
