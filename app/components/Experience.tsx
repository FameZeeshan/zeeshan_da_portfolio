"use client";
import React from "react";
import { experiences } from "../data/experience";

const Experience: React.FC = () => (
  <section id="experience" className="py-10 bg-background">
    <div className="w-full max-w-6xl px-4 mx-auto md:px-6">
      <h2 className="mb-10 text-2xl font-semibold text-center text-primary md:text-3xl">Experience</h2>

      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <ExperienceCard
            key={idx}
            title={exp.title}
            company={exp.company}
            duration={exp.duration}
          >
            <ul className="pl-5 space-y-2 list-disc text-foreground/90">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </ExperienceCard>
        ))}
      </div>
    </div>
  </section>
);

const ExperienceCard = ({
  title,
  company,
  duration,
  children,
}: {
  title: string;
  company: string;
  duration: string;
  children: React.ReactNode;
}) => (
  <div className="p-6 transition-all duration-300 shadow-sm bg-card rounded-xl hover:shadow-md border border-transparent hover:border-gray-100 dark:hover:border-gray-800">
    <h3 className="mb-1 text-xl font-bold text-primary">{title}</h3>
    <p className="mb-4 text-sm font-medium text-secondary">
      <strong>{company} | {duration}</strong>
    </p>
    <div className="text-base text-foreground">{children}</div>
  </div>
);

export default Experience;
