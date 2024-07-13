"use client";

import { projects } from "@/constants/projectjs";
import ProjectCard from "../ProjectCard";


export function Projects() {


  return (
    <section id="projects" className="col-span-full">
      <h2 className="md:text-5xl text-3xl my-8 text-white font-bold"><span className="text-secondary"># </span>Projetos</h2>
      <div className="flex flex-col gap-6">
        {
          projects.map(({ description, link, name, stack, thumbnail }) => (
            <ProjectCard
              description={description}
              link={link}
              stack={stack}
              thumbnail={thumbnail}
              name={name}
              key={`project-card-${name}`}
            />
          ))
        }
      </div>
    </section>
  );
}
