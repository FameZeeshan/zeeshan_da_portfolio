"use client";
import React from "react";
import { skills } from "../data/skills";

const Skills: React.FC = () => {
  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <section id="skills" className="py-10 bg-background">
      <div className="w-full max-w-6xl px-4 mx-auto md:px-6">
        <h2 className="mb-2 text-3xl font-bold text-center text-primary md:text-4xl">Skills & Expertise</h2>
        <p className="mb-10 text-center text-secondary md:text-lg">
          Tools and technologies I work with to deliver data-driven solutions
        </p>

        <div className="space-y-8">
          {categories.map((category) => (
            <div key={category} className="p-6 transition-all duration-300 shadow-sm bg-card rounded-2xl hover:shadow-md border border-gray-100 dark:border-gray-800">
              <h3 className="pb-3 mb-4 text-xl font-semibold border-b border-gray-100 text-primary dark:border-gray-700">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills
                  .filter((s) => s.category === category)
                  .map((skill, idx) => (
                    <div
                      key={idx}
                      className="px-4 py-2 text-sm font-medium transition-all duration-200 border rounded-full bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border-primary/20 text-foreground hover:border-accent hover:text-primary hover:shadow-sm hover:-translate-y-0.5 cursor-default"
                    >
                      {skill.name}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

