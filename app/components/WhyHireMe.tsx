"use client";
import React from "react";

const WhyHireMe: React.FC = () => (
  <section className="py-10 bg-background">
    <div className="w-full max-w-4xl px-6 py-8 mx-auto transition-transform duration-300 shadow-md bg-card rounded-2xl hover:shadow-lg border border-gray-100 dark:border-gray-800">
      <h2 className="mb-6 text-2xl font-bold text-center text-primary md:text-3xl">Why Hire Me?</h2>
      <ul className="pl-6 space-y-3 list-disc text-foreground/90 md:text-lg">
        <li>Proven success in automating business processes and reporting workflows</li>
        <li>Hands-on with Python, Pandas, Power BI and Excel automation</li>
        <li>Effective communicator between business and technical teams</li>
        <li>Delivered measurable ROI: 90% manual effort reduction, 40 hours/month saved</li>
        <li>Quick learner - applies new analytics tools rapidly to solve real business problems</li>
      </ul>
    </div>
  </section>
);

export default WhyHireMe;
