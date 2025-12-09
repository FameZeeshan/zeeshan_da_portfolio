"use client";
import React from "react";

const WhyHireMe: React.FC = () => (
  <section className="py-10 bg-background">
    <div className="w-full max-w-4xl px-6 py-8 mx-auto transition-transform duration-300 shadow-md bg-card rounded-2xl hover:shadow-lg border border-gray-100 dark:border-gray-800">
      <h2 className="mb-6 text-2xl font-bold text-center text-primary md:text-3xl">Why Hire Me?</h2>

      <ul className="pl-6 space-y-3 list-disc text-foreground/90 md:text-lg">
        <li>
          Strong track record of transforming manual, Excel-heavy workflows into scalable{" "}
          <strong className="text-primary">automated reporting systems</strong> using Python, Power Query, and VBA.
        </li>

        <li>
          Hands-on expertise in <strong className="text-primary">Python, Pandas, Advanced Excel, Power Query, ETL workflows, and data cleaning</strong>,
          with growing skills in Power BI and SQL.
        </li>

        <li>
          Skilled in <strong className="text-primary">Generative AI–assisted automation</strong> to accelerate documentation, validation logic,
          reporting structures, and workflow optimization.
        </li>

        <li>
          Delivered measurable business impact including <strong className="text-primary">~90% reduction in manual reporting effort</strong> and
          saving <strong className="text-primary">40+ hours per month</strong> through automation improvements.
        </li>

        <li>
          Effective communicator who collaborates seamlessly with business, operations, and technical teams to
          translate requirements into actionable data solutions.
        </li>

        <li>
          Fast learner with a proven ability to adopt new tools, improve processes, and solve data-driven business problems efficiently.
        </li>
      </ul>
    </div>
  </section>
);

export default WhyHireMe;
