"use client";
import React, { useState } from "react";
import styles from "./Projects.module.css";

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
    image: "/images/GCD Sample Snap.webp",
    description: `Python/Pandas ETL Pipeline with Excel Integration for Live Business Monitoring.
Developed an automated data pipeline using Python (Pandas) to handle data extraction, cleaning, and transformation from multiple Excel sources. Integrated Excel templates linked through Power Query for dynamic data refresh and visualization. Automated repetitive reporting and formatting tasks using VBA scripts, enabling quick updates and near real-time business monitoring. This system streamlined manual workflows, improved data accuracy, and significantly reduced report preparation time.`,
    badge: "Confidential",
  },
  {
    title: "Global Seat Billing Automation",
    image: "/images/Seat Billing Sample.webp",
    description:
      "Developed Python/pandas automation pipeline for seat billing validation. Processed 5K+ records with 95% accuracy, reducing manual effort by 90%. (Project details confidential)",
    badge: "Confidential",
  },
  {
    title: "Hoteling Seat Allocation Tracker",
    image: "/images/Hotelling Seats Occupancy Visuals.webp",
    description:
      "Built an intelligent seat allocation system that automates hybrid workplace seat management. Detects booking conflicts, tracks real-time occupancy across multiple cities, and generates professional heatmap visualizations. Processes any number of allocations with 100% conflict detection accuracy. Tech: Python, Pandas, Matplotlib, Seaborn.",
    code: "https://github.com/FameZeeshan/Hotelling-Seats-Booking.git",
    demo: "/images/Hotelling_Seats_System.html",
  },
  {
    title: "Swiggy Restaurant Data Visualization",
    image: "/images/Swiggy Project Snap.webp",
    description:
      "This project analyzes the Swiggy restaurant dataset to uncover insights into restaurant distribution, pricing trends, customer ratings, delivery times, and food preferences across major Indian cities. Using Python with pandas and matplotlib, the study covers 8,680 restaurants across 9 cities and 833 areas. It highlights restaurant concentration in metros, regional pricing patterns, popular cuisines, and the correlation between delivery times and ratings. The insights have been visually validated, and key results are hard-coded in the functions for clear output.",
    code: "https://github.com/FameZeeshan/Swiggy-Data-Analytics.git",
    demo: "/images/swiggy_project.html",
  },
];

const Projects: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2>Projects</h2>
        <div className={styles.projectList}>
          {projects.map((p, i) => {
            const isExpanded = expanded === i;
            return (
              <div className={styles.projectCard} key={i}>
                <img
                  src={p.image}
                  alt={p.title}
                  className={styles.projectImg}
                />
                <div className={styles.projectContent}>
                  <h3>{p.title}</h3>
                  <p
                    className={`${styles.description} ${
                      isExpanded ? styles.expanded : ""
                    }`}
                  >
                    {p.description}
                  </p>
                  {p.description.length > 180 && (
                    <button
                      className={styles.readMore}
                      onClick={() => setExpanded(isExpanded ? null : i)}
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>
                  )}
                  {p.badge && <span className={styles.badge}>{p.badge}</span>}
                  <div className={styles.projectLinks}>
                    {p.code && (
                      <a
                        href={p.code}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code
                      </a>
                    )}
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
