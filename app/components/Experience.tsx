"use client";
import React from "react";

const Experience: React.FC = () => (
  <section id="experience" className="experience">
    <div className="container">
      <h2>Experience</h2>

      <div className="exp-card">
        <h3>Associate Manager – Capacity Planner</h3>
        <p>
          <strong>
            Sutherland Global Services, Chennai | Sep 2020 – Present
          </strong>
        </p>
        <ul>
          <li>
            Lead strategic seating capacity planning and allocation across
            multiple programs and offices.
          </li>
          <li>
            Transform manual, Excel-based processes into automated data-driven
            solutions using Python, Pandas, Power Query, and advanced Excel.
          </li>
          <li>
            Built automated Global Capacity Dashboard integrating seat
            requirement and capacity data for leadership reporting.
          </li>
          <li>
            Designed automated seat billing and FPNA reporting system, reducing
            manual effort by 90% and improving monthly cycles.
          </li>
          <li>
            Developed Hoteling Seat Allocation Tracker and visual dashboards for
            occupancy trends and booking validation.
          </li>
          <li>
            Provide advanced business analysis and reporting using Excel, Power
            Query, VBA, Power BI, and data-driven decision-making frameworks.
          </li>
        </ul>
      </div>

      <div className="exp-card">
        <h3>Production Manager</h3>
        <p>
          <strong>Saman Exports, Chennai | Feb 2019 – Sep 2021</strong>
        </p>
        <ul>
          <li>
            Managed production operations from planning to dispatch, ensuring
            workflow efficiency and timely output.
          </li>
          <li>
            Supervised production and quality teams to maintain high product
            standards.
          </li>
          <li>
            Oversaw procurement and managed material inventory to meet
            production schedules.
          </li>
          <li>Maintained compliance with safety and industry standards.</li>
          <li>
            Ensured timely delivery of finished goods to clients as per
            deadlines and requirements.
          </li>
        </ul>
      </div>

      <div className="exp-card">
        <h3>Public Relation Officer</h3>
        <p>
          <strong>Marshal Travel LLC, Dubai | Oct 2016 – Nov 2018</strong>
        </p>
        <ul>
          <li>
            Coordinated visa processing for company employees and tourists in
            Dubai, liaising with UAE immigration authorities.
          </li>
          <li>
            Managed sensitive documentation and ensured timely approvals and
            issue resolution.
          </li>
          <li>
            Provided high standards of customer service in a fast-paced and
            multicultural environment.
          </li>
          <li>
            Maintained strong communication with internal teams and external
            stakeholders.
          </li>
        </ul>
      </div>

      <div className="exp-card">
        <h3>Web Development Intern</h3>
        <p>
          <strong>Macks Productions, Chennai | Jun 2020</strong>
        </p>
        <ul>
          <li>
            Collaborated with developers and designers to deliver responsive
            websites.
          </li>
          <li>
            Worked on requirement analysis, design, implementation, testing, and
            deployment.
          </li>
          <li>
            Learned industry best practices in full-cycle web development.
          </li>
        </ul>
      </div>
    </div>
    <style jsx>{`
      .experience {
        background: var(--color-bg);
        padding: 20px 0;
      }
      .container {
        max-width: 1200px;
        margin: auto;
        padding: 0 20px;
      }
      h2 {
        color: var(--color-primary);
        text-align: center;
        font-weight: 600;
        font-size: 1.45rem;
        margin-bottom: 26px;
      }
      .exp-card {
        background: var(--color-card);
        color: var(--color-text);
        border-radius: 16px;
        padding: 10px 32px;
        margin-bottom: 20px;
        box-shadow: 0 2px 14px rgba(54, 55, 149, 0.07);
        font-size: 1.04rem;
      }
      h3 {
        color: var(--color-primary);
        font-weight: 600;
        font-size: 1.18rem;
        margin-bottom: 8px;
      }
      ul {
        margin: 14px 0 0 0;
        padding-left: 22px;
      }
      li {
        color: var(--color-text);
        margin-bottom: 11px;
      }
      p {
        color: var(--color-secondary);
        margin-bottom: 10px;
      }
      @media (max-width: 600px) {
        .exp-card {
          padding: 17px 10px;
        }
        h2 {
          font-size: 1.1rem;
        }
        h3 {
          font-size: 1rem;
        }
        .container {
          padding: 0 6px;
        }
      }
    `}</style>
  </section>
);

export default Experience;
