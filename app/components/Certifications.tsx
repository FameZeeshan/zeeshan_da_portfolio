"use client";
import React from "react";
const certifications = [
  {
    title: "Data Analysis with Python & Pandas",
    provider: "LinkedIn Learning",
    date: "Sep–Oct 2025",
  },
  {
    title: "Data Analysis with Python",
    provider: "Coursera",
    date: "Jul 2025",
  },
  {
    title: "Python for Data Science, AI Development",
    provider: "Coursera",
    date: "Sep 2023",
  },
  {
    title: "Python For Everybody Specialization",
    provider: "Coursera",
    date: "Jul 2023",
  },
  { title: "AWS Fundamentals", provider: "Coursera", date: "Oct 2020" },
  {
    title: "Frontend Web Developer React JS",
    provider: "Skill Safari",
    date: "Feb 2024",
  },
];

const Certifications: React.FC = () => (
  <section className="certifications-section">
    <div className="cert-card card">
      <h2>Certifications & Courses</h2>
      <ul>
        {certifications.map((cert, idx) => (
          <li key={idx}>
            <strong>{cert.title}</strong> - {cert.provider}{" "}
            <span className="cert-date">({cert.date})</span>
          </li>
        ))}
      </ul>
    </div>
    <style jsx>{`
      .certifications-section {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
      }
      .cert-card {
        background: var(--color-card);
        color: var(--color-text);
        border-radius: 18px;
        box-shadow: 0 2px 18px rgba(62, 72, 105, 0.11);
        padding: 38px 28px;
        max-width: 800px;
        width: 100%;
        margin: 42px auto 36px auto;
        transition: background 0.3s, color 0.3s;
      }
      h2 {
        text-align: center;
        color: var(--color-primary);
        margin-bottom: 18px;
      }
      ul {
        padding: 0;
        list-style: none;
        margin: 0;
      }
      li {
        margin-bottom: 13px;
        color: var(--color-text);
        font-size: 1.06rem;
      }
      .cert-date {
        color: var(--color-primary);
      }
      @media (max-width: 600px) {
        .cert-card {
          padding: 22px 6px;
        }
      }
    `}</style>
  </section>
);

export default Certifications;
