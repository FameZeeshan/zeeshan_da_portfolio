"use client";
import React from "react";
import styles from "./Home.module.css";
import { FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

const Home: React.FC = () => (
  <section id="home" className={styles.home}>
    <div className={styles.container}>
      <div className={styles.profileWrapper}>
        <img
          src="/images/Zeeshan.jpg"
          alt="profile"
          className={styles.profilePhoto}
        />
        <div className={styles.profileGlow}></div>
      </div>

      <h1>Mohammed Zeeshan</h1>
      <p className={styles.title}>Data Analyst • Chennai, India</p>
      <p className={styles.tagline}>
        Curious and relentlessly eager to learn, I thrive at turning raw data
        into business insights and process automation.
      </p>

      <div className={styles.iconRow}>
        <a
          href="mailto:zeeshan6143@gmail.com"
          title="Email"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.iconLink} ${styles.email}`}
        >
          <FaEnvelope className={styles.icon} />
          <span className={styles.iconLabel}>Email</span>
        </a>

        <a
          href="https://wa.me/919884291490"
          title="WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.iconLink} ${styles.whatsapp}`}
        >
          <FaWhatsapp className={styles.icon} />
          <span className={styles.iconLabel}>WhatsApp</span>
        </a>

        <a
          href="https://github.com/FameZeeshan"
          title="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.iconLink} ${styles.github}`}
        >
          <FaGithub className={styles.icon} />
          <span className={styles.iconLabel}>GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/famezeeshan/"
          title="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.iconLink} ${styles.linkedin}`}
        >
          <FaLinkedin className={styles.icon} />
          <span className={styles.iconLabel}>LinkedIn</span>
        </a>
      </div>
    </div>
  </section>
);

export default Home;
