"use client";
import React, { useState } from "react";
import styles from "./Projects.module.css";

import Image from "next/image";
import { projects } from "../data/projects";

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
                <div className={styles.projectImg} style={{ position: "relative" }}>
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className={styles.projectContent}>
                  <h3>{p.title}</h3>
                  <p
                    className={`${styles.description} ${isExpanded ? styles.expanded : ""
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
