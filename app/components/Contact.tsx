"use client";
import React from "react";

const Contact: React.FC = () => (
  <section id="contact" className="contact-section">
    <div className="contact-card card">
      <h2>Contact</h2>
      <p>
        <strong>Location</strong> Kundrathur, Chennai, India
      </p>
      <p>
        <strong>Phone</strong>{" "}
        <a href="tel:919884291490" style={{ color: "var(--color-link)" }}>
          +91 9884291490
        </a>
      </p>
      <p>
        <strong>WhatsApp</strong>{" "}
        <a
          href="https://wa.me/919884291490"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#25D366" }}
        >
          +91 9884291490
        </a>
      </p>
      <p>
        <strong>Email</strong>{" "}
        <a
          href="mailto:zeeshan6143@gmail.com"
          style={{ color: "var(--color-link)" }}
        >
          zeeshan6143@gmail.com
        </a>
      </p>
      <p>
        <strong>LinkedIn</strong>{" "}
        <a
          href="https://www.linkedin.com/in/famezeeshan"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--color-link)" }}
        >
          https://www.linkedin.com/in/famezeeshan
        </a>
      </p>
      <p>
        <strong>GitHub</strong>{" "}
        <a
          href="https://github.com/FameZeeshan"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--color-link)" }}
        >
          https://github.com/FameZeeshan
        </a>
      </p>
      <a href="resume.pdf" id="resume" download>
        <button>Download Resume</button>
      </a>
    </div>
    <style jsx>{`
      .contact-section {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
      }
      .contact-card {
        background: var(--color-card);
        color: var(--color-text);
        border-radius: 18px;
        box-shadow: 0 2px 18px rgba(62, 72, 105, 0.11);
        padding: 38px 28px;
        max-width: 900px;
        width: 100%;
        margin: 42px auto 42px auto;
        transition: background 0.3s, color 0.3s;
        text-align: center;
      }
      h2 {
        color: var(--color-primary);
        margin-bottom: 20px;
      }
      p {
        margin-bottom: 12px;
        font-size: 1.05rem;
      }
      a {
        color: var(--color-link);
        text-decoration: none;
        transition: color 0.16s;
      }
      a:visited {
        color: var(--color-link-visited);
      }
      a:focus,
      a:hover {
        color: var(--color-link-hover);
        outline: 2px solid var(--color-primary);
        outline-offset: 2px;
      }
      button {
        margin-top: 12px;
        border-radius: 7px;
        padding: 7px 18px;
        background: var(--color-primary);
        color: var(--color-card);
        border: none;
        transition: background 0.18s, color 0.18s;
      }
      button:hover {
        background: var(--color-accent);
        color: var(--color-text);
      }
      @media (max-width: 600px) {
        .contact-card {
          padding: 22px 8px;
        }
      }
    `}</style>
  </section>
);

export default Contact;
