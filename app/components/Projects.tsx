"use client";
import React, { useState } from "react";
import Image from "next/image";
import { projects } from "../data/projects";

const Projects: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="projects" className="py-10 bg-background">
      <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
        <h2 className="mb-12 text-3xl font-bold text-center text-primary md:text-4xl">Projects</h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const isExpanded = expanded === i;
            return (
              <div
                className="flex flex-col overflow-hidden transition-all duration-300 border border-gray-100 shadow-lg bg-card rounded-2xl hover:shadow-xl hover:-translate-y-1 dark:border-gray-800"
                key={i}
              >
                {/* Image Container */}
                <div className="relative w-full h-56 overflow-hidden md:h-64">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {p.badge && (
                    <span className="absolute px-3 py-1 text-xs font-semibold text-white uppercase rounded-full top-3 right-3 bg-accent/90 backdrop-blur-sm">
                      {p.badge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-6">
                  <h3 className="mb-3 text-xl font-bold text-primary line-clamp-1" title={p.title}>
                    {p.title}
                  </h3>

                  <div className={`text-base text-foreground/80 leading-relaxed ${isExpanded ? "" : "line-clamp-3"}`}>
                    {p.description}
                  </div>

                  {p.description.length > 150 && (
                    <button
                      className="self-start mt-2 text-sm font-medium text-primary hover:text-accent focus:outline-none"
                      onClick={() => setExpanded(isExpanded ? null : i)}
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>
                  )}

                  <div className="flex gap-4 mt-auto pt-6">
                    {p.code && (
                      <a
                        href={p.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 text-sm font-medium text-center transition-colors border rounded-lg text-primary border-primary hover:bg-primary hover:text-white"
                      >
                        Code
                      </a>
                    )}
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 text-sm font-medium text-center text-white transition-colors rounded-lg bg-primary hover:bg-primary/90"
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
