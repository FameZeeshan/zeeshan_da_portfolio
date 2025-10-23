"use client";
import React from "react";
type Project = {
  title: string;
  image: string;
  description: string;
  code?: string | null;
  demo?: string | null;
  badge?: string;
};

const projects: Project[] = [
  {
    title: "Automated Global Capacity Dashboard",
    image: "/images/GCD Sample Snap.png",
    description: `Python/Pandas ETL Pipeline with Excel Integration for Live Business Monitoring.
Developed an automated data pipeline using Python (Pandas) to handle data extraction, cleaning, and transformation from multiple Excel sources. Integrated Excel templates linked through Power Query for dynamic data refresh and visualization. Automated repetitive reporting and formatting tasks using VBA scripts, enabling quick updates and near real-time business monitoring. This system streamlined manual workflows, improved data accuracy, and significantly reduced report preparation time.`,
    code: null,
    demo: null,
    badge: "Confidential",
  },

  {
    title: "Global Seat Billing Automation",
    image: "/images/Seat Billing Sample Samp.png",
    description:
      "Developed Python/pandas automation pipeline for seat billing validation. Processed 5K+ records with 95% accuracy, reducing manual effort by 90%. (Project details confidential)",
    code: null,
    demo: null,
    badge: "Confidential",
  },
  {
    title: "Hoteling Seat Allocation Tracker",
    image: "/images/Hotelling Seats Occupancy Visuals.png",
    description:
      "Built an intelligent seat allocation system that automates hybrid workplace seat management. Detects booking conflicts, tracks real-time occupancy across multiple cities, and generates professional heatmap visualizations to see day by day usage and free seats info. Processes any number of allocations with 100% conflict detection accuracy. Tech: Python, Pandas, Matplotlib, Seaborn.",
    code: "https://github.com/FameZeeshan/Hotelling-Seats-Booking.git",
    demo: "/images/Hotelling_Seats_System.html",
  },
];

const Projects: React.FC = () => (
  <section id="projects" className="projects">
    <div className="container">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <img src={p.image} alt={p.title} className="project-img" />
            <h3>{p.title}</h3>
            <p className="project-desc">{p.description}</p>
            {p.badge && <div className="badge">{p.badge}</div>}
            <div className="project-links">
              {p.code && (
                <a href={p.code} target="_blank" rel="noopener noreferrer">
                  Code
                </a>
              )}
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noopener noreferrer">
                  Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    <style jsx>{`
      .projects {
        background: var(--color-bg);
        padding: 44px 0;
      }
      .container {
        max-width: 900px;
        margin: auto;
        padding: 0 20px;
      }
      h2 {
        text-align: center;
        color: var(--color-primary);
        font-size: 1.45rem;
        font-weight: 600;
      }
      .project-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 22px;
        margin-top: 32px;
      }
      .project-card {
        background: var(--color-card);
        color: var(--color-text);
        border-radius: 14px;
        box-shadow: 0 2px 10px rgba(54, 55, 149, 0.07);
        padding: 27px 18px 18px 18px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        transition: background 0.3s, color 0.3s;
      }
      .project-img {
        width: 100%;
        border-radius: 8px;
        margin-bottom: 18px;
        background: var(--color-bg);
      }
      h3 {
        margin: 0 0 11px 0;
        color: var(--color-primary);
        font-size: 1.11rem;
        font-weight: 600;
      }
      .project-desc {
        font-size: 0.99rem;
        margin-bottom: 8px;
        color: var(--color-text);
      }
      .badge {
        margin-bottom: 8px;
        background: var(--color-accent);
        color: var(--color-text);
        font-size: 0.85rem;
        padding: 3px 10px;
        border-radius: 8px;
        font-weight: bold;
        box-shadow: 0 2px 8px rgba(255, 215, 0, 0.06);
      }
      .project-links {
        margin-top: 10px;
        display: flex;
        gap: 16px;
        width: 100%;
      }
      .project-links a {
        color: var(--color-primary);
        font-weight: 600;
        background: var(--color-bg);
        border-radius: 7px;
        padding: 4px 12px;
        text-decoration: none;
        border: 1.5px solid var(--color-primary);
        transition: background 0.21s, color 0.21s;
      }
      .project-links a:hover {
        background: var(--color-primary);
        color: var(--color-card);
      }
      @media (max-width: 700px) {
        .container {
          padding: 0 5px;
        }
        .project-list {
          grid-template-columns: 1fr;
        }
      }
    `}</style>
  </section>
);

export default Projects;
