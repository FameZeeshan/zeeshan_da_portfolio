"use client";
import React from "react";

const About: React.FC = () => (
  <section id="about" className="py-10 bg-background">
    <div className="w-full max-w-6xl px-4 mx-auto md:px-6">
      <h2 className="mb-8 text-2xl font-semibold text-center text-primary md:text-3xl">About Me</h2>

      <div className="p-6 transition-all duration-300 shadow-lg bg-card rounded-2xl md:p-8 hover:shadow-xl text-foreground">
        <p className="mb-6 text-lg font-medium leading-relaxed text-secondary md:text-xl">
          I'm an <strong>Associate Manager – Capacity Planning</strong> at Sutherland Global Services with
          <strong className="text-primary"> 8 years</strong> of experience spanning data analysis, reporting automation,
          and operational analytics. I specialize in transforming manual, Excel-heavy workflows into scalable,
          automated solutions using <strong className="text-primary">Python (Pandas), Power Query, VBA, and Advanced Excel</strong>,
          and I apply <strong className="text-primary">Generative AI–assisted automation</strong> to accelerate documentation,
          validation, and reporting logic.
        </p>

        <h3 className="mt-8 mb-4 text-xl font-semibold text-primary md:text-2xl">My Journey to Data & Automation</h3>
        <p className="mb-6 text-base leading-relaxed md:text-lg">
          While managing capacity planning operations, I saw the opportunity to use data and automation to remove heavy
          manual effort. I learned Python and built production-grade ETL and reporting pipelines that replaced repetitive
          Excel tasks and improved data quality. This hands-on work shaped my approach to business problems and motivated
          my transition into analytics and process automation.
        </p>
        <p className="mb-6 text-base leading-relaxed md:text-lg">
          I regularly apply <strong className="text-primary">Generative AI–assisted automation</strong> to speed up code iteration,
          draft documentation and business logic, and validate reporting rules — while ensuring final solutions remain robust
          and auditable.
        </p>

        <h3 className="mt-8 mb-4 text-xl font-semibold text-primary md:text-2xl">What I Bring to the Table</h3>
        <div className="grid grid-cols-1 gap-4 my-6 md:grid-cols-2 lg:grid-cols-4">
          <SkillBox title="💻 Technical Skills">
            Python, Pandas, Power Query, Advanced Excel, VBA, ETL workflows, Data Cleaning, EDA, Power BI (beginner), SQL (learning).
          </SkillBox>
          <SkillBox title="🔄 Process Automation">
            Built multiple production-grade ETL and reporting pipelines that reduced manual reporting effort by up to 90% and improved consistency.
            Applied Generative AI–assisted automation to accelerate documentation and logic development while maintaining validation checks.
          </SkillBox>
          <SkillBox title="📊 Data & Reporting">
            Transform complex operational datasets into clear, leadership-ready insights, dashboards, and Excel reports to support decision-making.
          </SkillBox>
          <SkillBox title="🎯 Operational Expertise">
            Hands-on experience in capacity analytics, reporting support, workflow optimization, and cross-functional stakeholder collaboration.
          </SkillBox>
        </div>

        <h3 className="mt-8 mb-4 text-xl font-semibold text-primary md:text-2xl">Key Achievements</h3>
        <ul className="pl-6 my-6 space-y-3 list-disc text-foreground md:text-lg">
          <li>
            <strong className="text-primary">Automation Impact:</strong> Developed Python/Pandas pipelines and Excel automation that reduced manual effort by up to <strong>~90%</strong>.
          </li>
          <li>
            <strong className="text-primary">High-volume Processing:</strong> Built billing validation workflows processing <strong>5,000+ records per month</strong> with improved accuracy.
          </li>
          <li>
            <strong className="text-primary">Generative AI–Assisted Automation:</strong> Use Generative AI methods to speed development of documentation, testing scaffolds, and validation logic—while retaining rigorous manual checks.
          </li>
          <li>
            <strong className="text-primary">Time Savings:</strong> Delivered automation that saves <strong>40+ hours per month</strong> previously spent on manual data entry and reporting.
          </li>
          <li>
            <strong className="text-primary">Business Outcomes:</strong> Automation and reporting improvements led to faster, more reliable leadership decisions for planning and reporting activities.
          </li>
        </ul>

        <p className="mt-8 pl-4 border-l-4 border-accent italic text-secondary md:text-lg">
          I am open to roles as a <strong className="text-primary">Data Analyst, Business Analyst, or Client Relations / Reporting Analyst</strong>,
          where I can apply analytics, automation, and stakeholder collaboration to deliver measurable impact.
        </p>
      </div>
    </div>
  </section>
);

const SkillBox = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="p-4 transition-all duration-200 border-l-4 rounded-lg bg-background border-primary hover:shadow-lg hover:-translate-y-1">
    <h4 className="mb-2 text-lg font-semibold text-primary">{title}</h4>
    <p className="text-sm leading-relaxed text-foreground">{children}</p>
  </div>
);

export default About;
