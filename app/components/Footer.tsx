"use client";
import React from "react";
import { FaHeart } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <p className={styles.footerText}>
      Made with{" "}
      <span className={styles.heart}>
        <FaHeart />
      </span>{" "}
      by{" "}
      <a
        href="https://www.linkedin.com/in/famezeeshan"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.author}
      >
        Hafshan
      </a>
    </p>

    <p className={styles.copyright}>
      &copy; {new Date().getFullYear()} Mohammed Zeeshan. All rights reserved.
    </p>
  </footer>
);

export default Footer;
