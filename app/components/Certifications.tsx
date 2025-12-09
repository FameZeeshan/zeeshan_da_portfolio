"use client";
import React from "react";
import { certifications } from "../data/certifications";

const Certifications: React.FC = () => (
  <section id="certifications" className="py-10 bg-background">
    <div className="w-full max-w-5xl px-4 mx-auto md:px-6">
      <div className="p-8 transition-shadow duration-300 shadow-sm bg-card rounded-2xl hover:shadow-lg border border-gray-100 dark:border-gray-800">
        <h2 className="mb-6 text-2xl font-semibold text-center text-primary md:text-3xl">
          Certifications & Courses
        </h2>
        <ul className="space-y-4">
          {certifications.map((cert, idx) => (
            <li key={idx} className="flex flex-col md:flex-row md:items-center justify-between p-3 transition-colors rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50">
              <span className="text-lg font-medium text-foreground">
                {cert.title} <span className="text-secondary font-normal text-base">- {cert.provider}</span>
              </span>
              <span className="text-sm font-semibold text-primary mt-1 md:mt-0 whitespace-nowrap">
                ({cert.date})
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Certifications;
