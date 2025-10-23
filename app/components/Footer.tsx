"use client";
import React from "react";
const Footer: React.FC = () => (
  <footer className="footer">
    &copy; {new Date().getFullYear()} Mohammed Zeeshan. All rights reserved.
    <style jsx>{`
      .footer {
        text-align: center;
        padding: 22px 0 12px 0;
        background: var(--color-bg);
        color: var(--color-text);
        font-size: 1.05rem;
        letter-spacing: 0.01em;
        margin-top: 0;
      }
    `}</style>
  </footer>
);
export default Footer;
