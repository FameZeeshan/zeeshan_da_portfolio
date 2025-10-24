"use client";
import React from "react";
const ImpactBar: React.FC = () => (
  <div className="impact-bar">
    <div>90% Less Manual Work</div>
    <div>40+ Hours Saved/Month</div>
    <div>3 Automation Pipelines</div>
    <div>5,000 Records/Month</div>
    <style jsx>{`
      .impact-bar {
        display: flex;
        flex-wrap: wrap;
        gap: 22px;
        background: var(--color-card);
        justify-content: center;
        margin: 20px auto 20px auto;
        padding: 10px 0;
        font-weight: bold;
        font-size: 1.09rem;
        box-shadow: 0 2px 8px rgba(62, 72, 105, 0.12);
        border-radius: 13px;
        max-width: 1200px;
      }
      .impact-bar div {
        flex: 1 1 140px;
        text-align: center;
        color: var(--color-primary);
      }
    `}</style>
  </div>
);
export default ImpactBar;
