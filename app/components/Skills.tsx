"use client";
import React from "react";

interface Skill {
  name: string;
  category: string;
}

const skills: Skill[] = [
  { name: "Python", category: "Data & Programming" },
  { name: "Pandas", category: "Data & Programming" },
  { name: "SQL", category: "Data & Programming" },
  { name: "NumPy", category: "Data & Programming" },
  { name: "Matplotlib", category: "Data & Programming" },
  { name: "Seaborn", category: "Data & Programming" },
  { name: "Excel Formulas & Functions", category: "Data & Programming" },
  { name: "Power BI", category: "BI & Visualization" },
  { name: "Power Query", category: "BI & Visualization" },
  // { name: "Tableau", category: "BI & Visualization" },
  { name: "Advanced Excel", category: "BI & Visualization" },
  { name: "Pivot Tables", category: "BI & Visualization" },
  { name: "Data Visualization", category: "BI & Visualization" },
  { name: "VBA", category: "Automation & Tools" },
  { name: "ETL Pipeline Design", category: "Automation & Tools" },
  { name: "Data Validation", category: "Automation & Tools" },
  { name: "GitHub", category: "Automation & Tools" },
  { name: "Google Sheets", category: "Automation & Tools" },
  { name: "Microsoft Copilot", category: "Automation & Tools" },
  { name: "Data Cleaning", category: "Data Analysis & Insights" },
  { name: "Data Quality Assessment", category: "Data Analysis & Insights" },
  { name: "Statistical Analysis", category: "Data Analysis & Insights" },
  { name: "Trend Analysis", category: "Data Analysis & Insights" },
  // {
  //   name: "Forecasting & Predictive Analysis",
  //   category: "Data Analysis & Insights",
  // },
  { name: "Requirements Gathering", category: "Business Analysis" },
  { name: "Process Mapping", category: "Business Analysis" },
  { name: "Business Process Improvement", category: "Business Analysis" },
  { name: "Workflow Optimization", category: "Business Analysis" },
  { name: "Stakeholder Management", category: "Business Analysis" },
  { name: "Data Analysis", category: "Professional Skills" },
  { name: "Process Automation", category: "Professional Skills" },
  { name: "Requirement Analysis", category: "Professional Skills" },
  { name: "Stakeholder Communication", category: "Professional Skills" },
  { name: "Problem Solving", category: "Professional Skills" },
  { name: "Capacity Planning", category: "Professional Skills" },
  { name: "Cross-functional Collaboration", category: "Professional Skills" },
  { name: "Report Writing", category: "Professional Skills" },
  { name: "Presentation Skills", category: "Professional Skills" },
];

const Skills: React.FC = () => {
  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills & Expertise</h2>
        <p className="skills-intro">
          Tools and technologies I work with to deliver data-driven solutions
        </p>
        {categories.map((category) => (
          <div key={category} className="skill-category">
            <h3>{category}</h3>
            <div className="skills-grid">
              {skills
                .filter((s) => s.category === category)
                .map((skill, idx) => (
                  <div key={idx} className="skill-tag">
                    {skill.name}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .skills {
          background: var(--color-bg);
          padding: 44px 0;
        }
        .container {
          max-width: 1200px;
          margin: auto;
          padding: 0 20px;
          width: 100%;
        }
        h2 {
          color: var(--color-primary);
          margin-bottom: 8px;
          text-align: center;
          font-weight: 600;
          font-size: 1.45rem;
          letter-spacing: 0.01em;
        }
        .skills-intro {
          text-align: center;
          color: var(--color-secondary);
          margin-bottom: 28px;
          font-size: 1.01rem;
        }
        .skill-category {
          background: var(--color-card);
          border-radius: 15px;
          padding: 24px;
          margin-bottom: 20px;
          box-shadow: 0 2px 14px rgba(54, 55, 149, 0.07);
          color: var(--color-text);
        }
        .skill-category h3 {
          color: var(--color-primary);
          font-size: 1.18rem;
          margin: 0 0 16px 0;
          font-weight: 600;
          border-bottom: 2px solid var(--color-bg);
          padding-bottom: 10px;
        }
        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .skill-tag {
          background: linear-gradient(
            135deg,
            var(--color-bg) 0%,
            var(--color-card) 100%
          );
          border: 1px solid var(--color-primary);
          padding: 10px 16px;
          border-radius: 20px;
          color: var(--color-secondary);
          font-weight: 500;
          font-size: 1rem;
          box-shadow: 0 1px 6px rgba(54, 55, 149, 0.05);
          transition: all 0.2s;
        }
        .skill-tag:hover {
          background: linear-gradient(
            135deg,
            var(--color-secondary) 0%,
            var(--color-primary) 100%
          );
          border-color: var(--color-accent);
          color: var(--color-bg);
          box-shadow: 0 3px 12px rgba(54, 55, 149, 0.12);
          transform: translateY(-2px);
        }
        @media (max-width: 900px) {
          .skill-category {
            padding: 18px;
          }
          .skill-tag {
            padding: 8px 14px;
            font-size: 0.98rem;
          }
        }
        @media (max-width: 600px) {
          .skills {
            padding: 28px 0;
          }
          .container {
            padding: 0 8px;
          }
          h2 {
            font-size: 1.12rem;
            margin-bottom: 6px;
          }
          .skills-intro {
            font-size: 0.96rem;
            margin-bottom: 18px;
          }
          .skill-category {
            padding: 14px;
            margin-bottom: 14px;
          }
          .skill-category h3 {
            font-size: 1.05rem;
            margin-bottom: 12px;
          }
          .skills-grid {
            gap: 8px;
          }
          .skill-tag {
            padding: 7px 12px;
            font-size: 0.92rem;
          }
        }
      `}</style>
    </section>
  );
};
export default Skills;
