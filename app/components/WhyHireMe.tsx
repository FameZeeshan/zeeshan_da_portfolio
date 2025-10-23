"use client";
import React from "react";
const WhyHireMe: React.FC = () => (
  <section className="why-hire-me">
    <h2>Why Hire Me?</h2>
    <ul>
      <li>
        Proven success in automating business processes and reporting workflows
      </li>
      <li>Hands-on with Python, Pandas, Power BI and Excel automation</li>
      <li>Effective communicator between business and technical teams</li>
      <li>
        Delivered measurable ROI: 90% manual effort reduction, 40 hours/month
        saved
      </li>
      <li>
        Quick learner - applies new analytics tools rapidly to solve real
        business problems
      </li>
    </ul>
    <style jsx>{`
      .why-hire-me {
        background: var(--color-bg);
        border-radius: 15px;
        margin: 38px auto 28px auto;
        padding: 30px 20px;
        max-width: 900px;
        box-shadow: 0 2px 14px rgba(62, 72, 105, 0.12);
      }
      .why-hire-me h2 {
        color: var(--color-primary);
        text-align: center;
        font-weight: bold;
        margin-bottom: 18px;
      }
      .why-hire-me ul {
        list-style: none;
        padding: 0;
        margin: 0 auto;
        font-size: 1.08rem;
        color: var(--color-text);
      }
      .why-hire-me li {
        margin: 0 0 14px 0;
        line-height: 1.6;
      }
    `}</style>
  </section>
);
export default WhyHireMe;
