"use client";
import React from "react";
import Image from "next/image";
import { socialLinks } from "../data/socials";

const Home: React.FC = () => (
  <section id="home" className="flex flex-col items-center justify-center min-h-[calc(100vh-60px)] py-10 bg-background md:py-16">
    <div className="container flex flex-col items-center max-w-4xl px-4 text-center">
      {/* Profile Image Wrapper */}
      <div className="relative mb-8 group">
        <div className="absolute inset-0 transition-opacity duration-300 rounded-full opacity-75 animate-pulse bg-gradient-to-r from-primary to-secondary blur-xl group-hover:opacity-100"></div>
        <Image
          src="/images/Zeeshan pic 1125.jpg"
          alt="Mohammed Zeeshan - Data Analyst"
          width={180}
          height={180}
          className="relative z-10 border-4 border-white rounded-full shadow-2xl dark:border-gray-800"
          priority
        />
      </div>

      <h1 className="mb-4 text-4xl font-bold tracking-tight text-primary md:text-6xl">
        Mohammed Zeeshan
      </h1>
      <p className="mb-6 text-xl font-medium text-secondary md:text-2xl">
        Data Analyst • Chennai, India
      </p>
      <p className="max-w-2xl mb-10 text-lg leading-relaxed text-foreground/80 md:text-xl">
        Analytical and process-driven professional with 8 years of experience in data analysis, automation, reporting, and operational problem-solving. I specialize in transforming manual workflows into scalable, automated solutions using Python, Pandas, Power Query, Excel, and Generative AI assisted automation.
      </p>

      {/* Social Icons */}
      <div className="flex flex-wrap justify-center gap-6">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            title={link.name}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 transition-all duration-300 rounded-full shadow-sm bg-card hover:shadow-lg hover:-translate-y-1 group"
          >
            <link.icon className="text-2xl text-primary transition-colors group-hover:text-accent" />
            <span className="font-medium text-foreground group-hover:text-primary">
              {link.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Home;
