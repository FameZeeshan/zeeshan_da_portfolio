"use client";
import React from "react";

const About: React.FC = () => (
  <section id="about" className="about">
    <div className="container">
      <h2>About Me</h2>
      <div className="about-content">
        <p className="intro">
          I'm an <strong>Associate Manager - Capacity Planner</strong> at
          Sutherland Global Services with 4+ years of operational experience.
          I'm actively transitioning into a{" "}
          <strong>full-time Data Analyst role</strong> by developing expertise
          in <strong>Python, Pandas, SQL, and data automation</strong>.
        </p>
        <h3>My Journey to Data Analytics</h3>
        <p>
          While managing capacity planning operations, I discovered the power of
          data-driven automation. Frustrated by manual Excel-based reporting
          that consumed hours each week, I took the initiative to learn Python
          and built automated solutions using Pandas. This experience
          transformed how I approach problem-solving and sparked my passion to
          transition into a dedicated data analytics role.
        </p>
        <h3>What I Bring to the Table</h3>
        <div className="skills-highlight">
          <div className="skill-box">
            <h4>💻 Technical Skills</h4>
            <p>
              Python, Pandas, Excel, Power BI, VBA-practical tools I use to
              solve real business problems.
            </p>
          </div>
          <div className="skill-box">
            <h4>🔄 Process Automation</h4>
            <p>
              Built 3 production-grade ETL pipelines that eliminate 90% of
              manual reporting efforts.
            </p>
          </div>
          <div className="skill-box">
            <h4>📊 Data-Driven Decision Making</h4>
            <p>
              Transform complex operational data into actionable insights for
              stakeholders.
            </p>
          </div>
          <div className="skill-box">
            <h4>🎯 Operational Expertise</h4>
            <p>
              4+ years managing capacity planning, process optimization, and
              cross-functional teams.
            </p>
          </div>
        </div>
        <h3>Key Achievements</h3>
        <ul className="achievements">
          <li>
            <strong>Automated Production Pipelines:</strong> Built Python/Pandas
            solutions that reduced manual reporting by 90% and improved accuracy
            to 98%
          </li>
          <li>
            <strong>Daily Data Processing:</strong> Process 1000+ billing
            records monthly through automated validation and reconciliation
            workflows
          </li>
          <li>
            <strong>Time Savings:</strong> Automated solutions save 40+ hours
            per month that previously went into manual data entry and reporting
          </li>
          <li>
            <strong>Real Business Impact:</strong> My automation efforts
            improved decision-making speed for capacity planning and resource
            allocation
          </li>
        </ul>
        <p className="closing">
          I'm actively seeking a <strong>Data Analyst position</strong> to apply
          my technical skills, analytical mindset, and operational knowledge to
          drive data-informed business decisions at scale.
        </p>
      </div>
    </div>
    <style jsx>{`
      .about {
        background: var(--color-bg);
        padding: 44px 0;
      }
      .container {
        max-width: 900px;
        margin: auto;
        padding: 0 20px;
        box-sizing: border-box;
        width: 100%;
      }
      h2 {
        color: var(--color-primary);
        font-size: 1.45rem;
        text-align: center;
        margin-bottom: 28px;
        font-weight: 600;
        letter-spacing: 0.02em;
      }
      .about-content {
        background: var(--color-card);
        border-radius: 15px;
        padding: 30px 28px;
        box-shadow: 0 2px 16px rgba(54, 55, 149, 0.07);
        color: var(--color-text);
        transition: background 0.3s, color 0.3s;
      }
      .intro {
        font-size: 1.1rem;
        color: var(--color-secondary);
        margin-bottom: 24px;
        line-height: 1.65;
        font-weight: 500;
      }
      h3 {
        color: var(--color-primary);
        font-size: 1.22rem;
        margin-top: 26px;
        margin-bottom: 14px;
        font-weight: 600;
        letter-spacing: 0.01em;
      }
      p {
        color: var(--color-text);
        line-height: 1.7;
        margin-bottom: 18px;
        font-size: 1.01rem;
      }
      .skills-highlight {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 16px;
        margin: 22px 0;
      }
      .skill-box {
        background: var(--color-bg);
        padding: 18px 16px;
        border-radius: 12px;
        border-left: 4px solid var(--color-primary);
        transition: all 0.2s;
        color: var(--color-text);
      }
      .skill-box:hover {
        box-shadow: 0 4px 16px rgba(54, 55, 149, 0.12);
        transform: translateY(-2px);
      }
      .skill-box h4 {
        color: var(--color-primary);
        margin: 0 0 8px 0;
        font-size: 1.05rem;
        font-weight: 600;
      }
      .skill-box p {
        color: var(--color-text);
        margin: 0;
        font-size: 0.98rem;
        line-height: 1.5;
      }
      .achievements {
        list-style: none;
        padding: 0;
        margin: 18px 0;
      }
      .achievements li {
        padding: 12px 0;
        color: var(--color-text);
        line-height: 1.65;
        font-size: 1.01rem;
      }
      .achievements li strong {
        color: var(--color-primary);
      }
      .closing {
        margin-top: 24px;
        font-style: italic;
        color: var(--color-secondary);
        border-left: 3px solid var(--color-accent);
        padding-left: 16px;
      }
      @media (max-width: 900px) {
        .about-content {
          padding: 22px 20px;
        }
        h3 {
          font-size: 1.12rem;
        }
        .skills-highlight {
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
      }
      @media (max-width: 600px) {
        .about {
          padding: 28px 0;
        }
        .container {
          padding: 0 8px;
        }
        .about-content {
          padding: 16px 12px;
          border-radius: 12px;
        }
        h2 {
          font-size: 1.12rem;
          margin-bottom: 18px;
        }
        .intro {
          font-size: 1.01rem;
        }
        p {
          font-size: 0.98rem;
        }
        h3 {
          font-size: 1.05rem;
          margin-top: 18px;
          margin-bottom: 10px;
        }
        .skills-highlight {
          grid-template-columns: 1fr;
          gap: 10px;
        }
        .skill-box {
          padding: 14px 12px;
        }
        .achievements li {
          font-size: 0.96rem;
          padding: 8px 0;
        }
      }
    `}</style>
  </section>
);

export default About;
