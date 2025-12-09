"use client";
import React from "react";

const BlogOrLearning: React.FC = () => (
  <section className="py-10 bg-background">
    <div className="w-full max-w-3xl px-6 py-8 mx-auto transition-transform duration-300 shadow-sm bg-card rounded-2xl hover:shadow-md border border-gray-100 dark:border-gray-800">
      <h2 className="mb-6 text-2xl font-bold text-center text-primary md:text-3xl">What I'm Learning & Writing</h2>
      <ul className="pl-5 space-y-4 list-disc text-secondary md:text-lg">
        <li>
          <strong className="text-foreground">Case Study:</strong> How Python Automation Saved 40+ Hours/Month
          <span className="ml-2 text-sm font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">Coming Soon</span>
        </li>
        <li>
          <strong className="text-foreground">In Progress:</strong> Mastering Advanced SQL and Machine Learning Fundamentals
        </li>
      </ul>
    </div>
  </section>
);

export default BlogOrLearning;
