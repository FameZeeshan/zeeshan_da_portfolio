"use client";
import React from "react";
const Testimonials: React.FC = () => (
  <section className="testimonials">
    <h2>Testimonials</h2>
    <div className="testimonial-card">
      <p>
        Mohammed's automation efforts saved our team dozens of hours every month
        and allowed us to focus on higher value analysis.
      </p>
      <span>- Manager, Sutherland Global Services</span>
    </div>
    <div className="testimonial-card">
      <p>
        He learns new analytics technologies rapidly and delivers reliable
        results under tight deadlines.
      </p>
      <span>- Colleague, Data Team</span>
    </div>
    <style jsx>{`
      .testimonials {
        max-width: 700px;
        margin: 40px auto;
      }
      .testimonials h2 {
        color: var(--color-primary);
        text-align: center;
        font-size: 1.24rem;
        font-weight: bold;
        margin-bottom: 24px;
      }
      .testimonial-card {
        background: var(--color-card);
        border-left: 5px solid var(--color-accent);
        padding: 20px;
        border-radius: 9px;
        font-size: 1.01rem;
        color: var(--color-text);
        margin-bottom: 22px;
      }
      .testimonial-card span {
        display: block;
        margin-top: 11px;
        font-size: 0.93rem;
        color: var(--color-secondary);
      }
    `}</style>
  </section>
);
export default Testimonials;
