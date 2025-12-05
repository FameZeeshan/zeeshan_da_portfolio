"use client";
import React, { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="nav-brand">Zeeshan</div>
        <button
          className={`nav-toggle${open ? " open" : ""}`}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-links${open ? " open" : ""}`}>
          <li>
            <Link href="#home" onClick={() => setOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" onClick={() => setOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="#experience" onClick={() => setOpen(false)}>
              Experience
            </Link>
          </li>
          <li>
            <Link href="#projects" onClick={() => setOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="#skills" onClick={() => setOpen(false)}>
              Skills
            </Link>
          </li>
          <li>
            <Link href="#certifications" onClick={() => setOpen(false)}>
              Certifications
            </Link>
          </li>
          <li>
            <Link href="#contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <Link href="#resume" onClick={() => setOpen(false)}>
              Resume
            </Link>
          </li>
        </ul>
        <ThemeToggle />
        {open && <div className="nav-overlay" onClick={() => setOpen(false)} />}
      </div>
      <style jsx>{`
        .navbar {
          background: linear-gradient(90deg, #005c97 0%, #363795 100%);
          box-shadow: 0 4px 24px rgba(54, 55, 149, 0.09);
          position: sticky;
          top: 0;
          z-index: 99;
          width: 100%;
          overflow-x: hidden;
          transition: background 0.3s ease;
        }
        .dark .navbar {
          background: linear-gradient(90deg, #0d1b2a 0%, #16213e 100%);
        }
        .nav-content {
          max-width: 100%;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 60px;
          position: relative;
          gap: 16px;
        }
        .nav-brand {
          color: #ffd700;
          font-weight: 700;
          font-size: 1.32rem;
          letter-spacing: 0.04em;
          min-width: fit-content;
          flex-shrink: 0;
          transition: color 0.3s ease;
        }
        .dark .nav-brand {
          color: #ffe066;
        }
        .nav-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 36px;
          width: 36px;
          margin-left: auto;
          padding: 0;
          z-index: 101;
          outline: none;
        }
        .nav-toggle:focus {
          outline: none;
        }
        .nav-toggle span {
          display: block;
          background: #fff;
          height: 4px;
          width: 25px;
          margin: 5px 0;
          border-radius: 3px;
          transition: all 0.3s ease;
          transform-origin: center;
        }
        .nav-toggle span:nth-child(2) {
          width: 20px;
        }
        /* Hamburger animation */
        .nav-toggle.open span:nth-child(1) {
          transform: rotate(45deg) translate(8px, 8px);
        }
        .nav-toggle.open span:nth-child(2) {
          opacity: 0;
        }
        .nav-toggle.open span:nth-child(3) {
          transform: rotate(-45deg) translate(8px, -8px);
          width: 25px;
        }

        ul.nav-links {
          list-style: none;
          display: flex;
          gap: 2rem;
          margin: 0;
          padding: 0;
          align-items: center;
          flex-wrap: nowrap;
          justify-content: flex-end;
        }
        ul.nav-links li a {
          color: #fff;
          text-decoration: none;
          font-weight: 500;
          font-size: 1.05rem;
          letter-spacing: 0.03em;
          transition: color 0.2s, background 0.2s;
          padding: 6px 12px;
          border-radius: 5px;
          display: inline-block;
          white-space: nowrap;
        }
        ul.nav-links li a:hover,
        ul.nav-links li a:focus {
          color: #ffd700;
          background: rgba(255, 255, 255, 0.12);
        }
        .dark ul.nav-links li a:hover,
        .dark ul.nav-links li a:focus {
          color: #ffe066;
        }

        /* Desktop Large (1200px+) */
        @media (min-width: 1200px) {
          .nav-content {
            padding: 0 32px;
            height: 62px;
            gap: 20px;
          }
          ul.nav-links {
            gap: 2.4rem;
          }
          ul.nav-links li a {
            font-size: 1.08rem;
            padding: 8px 14px;
          }
        }

        /* Desktop Medium (992px - 1199px) */
        @media (max-width: 1199px) and (min-width: 992px) {
          .nav-content {
            padding: 0 20px;
            height: 58px;
          }
          ul.nav-links {
            gap: 1.6rem;
          }
          ul.nav-links li a {
            font-size: 0.95rem;
            padding: 5px 10px;
          }
        }

        /* Tablet (768px - 991px) - HAMBURGER STARTS HERE */
        @media (max-width: 991px) {
          .nav-toggle {
            display: flex;
          }
          .nav-content {
            padding: 0 14px;
            height: 56px;
          }
          .nav-brand {
            font-size: 1.2rem;
          }
          ul.nav-links {
            position: fixed;
            top: 56px;
            left: 0;
            width: 100vw;
            height: auto;
            max-height: calc(100vh - 56px);
            background: linear-gradient(90deg, #005c97 0%, #363795 100%);
            flex-direction: column;
            gap: 0;
            padding: 12px 8px 16px 8px;
            display: none;
            box-shadow: 0 5px 32px rgba(54, 55, 149, 0.11);
            overflow-y: auto;
            border-bottom: 2px solid #ffd700;
            z-index: 98;
            justify-content: flex-start;
            align-items: stretch;
            transition: background 0.3s ease;
          }
          .dark ul.nav-links {
            background: linear-gradient(90deg, #0d1b2a 0%, #16213e 100%);
          }
          ul.nav-links.open {
            display: flex;
          }
          ul.nav-links li {
            width: 100%;
          }
          ul.nav-links li a {
            font-size: 1.02rem;
            padding: 14px 12px;
            width: 100%;
            text-align: left;
            display: block;
            border-radius: 5px;
            margin-bottom: 4px;
          }
          ul.nav-links li a:hover {
            background: rgba(255, 255, 255, 0.15);
          }
          .nav-overlay {
            background: rgba(0, 0, 0, 0.3);
            position: fixed;
            top: 56px;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 97;
          }
        }

        /* Small Mobile (600px - 767px) */
        @media (max-width: 767px) {
          .nav-content {
            padding: 0 10px;
            height: 54px;
          }
          .nav-brand {
            font-size: 1.12rem;
          }
          .nav-toggle {
            width: 32px;
            height: 32px;
          }
          ul.nav-links {
            top: 54px;
            max-height: calc(100vh - 54px);
            padding: 10px 6px 14px 6px;
          }
          ul.nav-links li a {
            font-size: 0.98rem;
            padding: 12px 10px;
          }
          .nav-overlay {
            top: 54px;
          }
        }

        /* Extra Small Mobile (below 600px) */
        @media (max-width: 599px) {
          .nav-content {
            padding: 0 8px;
            height: 52px;
          }
          .nav-brand {
            font-size: 1.08rem;
          }
          ul.nav-links {
            top: 52px;
            max-height: calc(100vh - 52px);
          }
          ul.nav-links li a {
            font-size: 0.96rem;
            padding: 10px 8px;
          }
          .nav-overlay {
            top: 52px;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
