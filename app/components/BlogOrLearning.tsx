"use client";
import React from "react";
const BlogOrLearning: React.FC = () => (
  <section className="blog-learning">
    <h2>What I'm Learning & Writing</h2>
    <ul>
      <li>
        <strong>Case Study</strong> How Python Automation Saved 40+ Hours/Month
        <span style={{ color: "var(--color-primary)" }}> Coming Soon</span>
      </li>
      <li>
        <strong>In Progress</strong> Mastering Advanced SQL and Machine Learning
        Fundamentals
      </li>
    </ul>
    <style jsx>{`
      .blog-learning {
        background: var(--color-card);
        max-width: 700px;
        margin: 40px auto 32px auto;
        border-radius: 15px;
        padding: 28px 22px;
        box-shadow: 0 1px 7px rgba(62, 72, 105, 0.12);
      }
      h2 {
        color: var(--color-primary);
        text-align: center;
        margin-bottom: 15px;
        font-size: 1.17rem;
      }
      ul {
        color: var(--color-secondary);
        font-size: 1.03rem;
        margin: 0;
        padding: 0 0 0 18px;
      }
      li {
        margin-bottom: 12px;
      }
    `}</style>
  </section>
);
export default BlogOrLearning;
