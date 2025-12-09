"use client";
import React from "react";

const About: React.FC = () => (
  <section id="about" className="py-10 bg-background">
    <div className="w-full max-w-6xl px-4 mx-auto md:px-6">
      <h2 className="mb-8 text-2xl font-semibold text-center text-primary md:text-3xl">About Me</h2>

      <div className="p-6 transition-all duration-300 shadow-lg bg-card rounded-2xl md:p-8 hover:shadow-xl text-foreground">
        <p className="mb-6 text-lg font-medium leading-relaxed text-secondary md:text-xl">
          I'm an <strong>Associate Manager - Capacity Planner</strong> at
          Sutherland Global Services with 4+ years of operational experience.
          I'm actively transitioning into a{" "}
          <strong className="text-primary">full-time Data Analyst role</strong> by developing expertise
          in{" "}
          <strong className="text-primary">
            Python, Pandas, VBA, data automation, and Generative AI tools
          </strong>
          .
        </p>

        <h3 className="mt-8 mb-4 text-xl font-semibold text-primary md:text-2xl">My Journey to Data Analytics</h3>
        <p className="mb-6 text-base leading-relaxed md:text-lg">
          While managing capacity planning operations, I discovered the power of
          data-driven automation. Frustrated by manual Excel-based reporting
          that consumed hours each week, I took the initiative to learn Python
          and built automated solutions using Pandas. This hands-on experience
          transformed my approach to business challenges and sparked my passion
          for dedicated, impactful data analytics.
        </p>
        <p className="mb-6 text-base leading-relaxed md:text-lg">
          Today, I actively leverage{" "}
          <strong className="text-primary">Generative AI (such as ChatGPT & Copilot)</strong>
          to generate code, test solutions, and quickly iterate for business
          needs. These tools help me accelerate development, automate more
          effectively, and ensure my solutions are robust and adaptable.
        </p>

        <h3 className="mt-8 mb-4 text-xl font-semibold text-primary md:text-2xl">What I Bring to the Table</h3>
        <div className="grid grid-cols-1 gap-4 my-6 md:grid-cols-2 lg:grid-cols-4">
          <SkillBox title="💻 Technical Skills">
            Python, Pandas, SQL, Excel, Power BI, VBA, Generative AI—practical
            tools I use to solve real business problems and automate workflows.
          </SkillBox>
          <SkillBox title="🔄 Process Automation">
            Built 3 production-grade ETL pipelines that eliminate 90% of
            manual reporting efforts, applying AI-assisted code generation for
            faster and more accurate automation.
          </SkillBox>
          <SkillBox title="📊 Data-Driven Decision Making">
            Transform complex operational data into actionable insights for
            stakeholders, driving timely and informed decisions.
          </SkillBox>
          <SkillBox title="🎯 Operational Expertise">
            4+ years managing capacity planning, process optimization, and
            cross-functional teams, consistently improving efficiency using
            data and automation.
          </SkillBox>
        </div>

        <h3 className="mt-8 mb-4 text-xl font-semibold text-primary md:text-2xl">Key Achievements</h3>
        <ul className="pl-6 my-6 space-y-3 list-disc text-foreground md:text-lg">
          <li>
            <strong className="text-primary">Automated Production Pipelines:</strong> Built AI-assisted
            Python/Pandas solutions that reduced manual reporting by 90% and
            improved accuracy to 98%.
          </li>
          <li>
            <strong className="text-primary">Daily Data Processing:</strong> Processed 1000+ billing
            records monthly through automated validation and reconciliation
            workflows.
          </li>
          <li>
            <strong className="text-primary">Generative AI Adoption:</strong> Use Generative AI tools to
            generate, test, and refine code—speeding up development cycles and
            enhancing solution reliability.
          </li>
          <li>
            <strong className="text-primary">Time Savings:</strong> Automated solutions save 40+ hours
            per month previously spent on manual data entry and reporting.
          </li>
          <li>
            <strong className="text-primary">Real Business Impact:</strong> Automation efforts improved
            decision-making speed for capacity planning and resource allocation.
          </li>
        </ul>

        <p className="mt-8 pl-4 border-l-4 border-accent italic text-secondary md:text-lg">
          I'm actively seeking a <strong className="text-primary">Data Analyst position</strong> to apply
          my technical skills, analytical mindset, and operational knowledge to
          drive data-informed business decisions at scale.
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
