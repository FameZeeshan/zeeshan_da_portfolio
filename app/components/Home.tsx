"use client";
import React from "react";
import Image from "next/image";
import styles from "./Home.module.css";
import { socialLinks } from "../data/socials";

const Home: React.FC = () => (
  <section id="home" className={styles.home}>
    <div className={styles.container}>
      <div className={styles.profileWrapper}>
        <Image
          src="/images/Zeeshan pic 1125.jpg"
          alt="profile"
          width={150}
          height={150}
          className={styles.profilePhoto}
          priority
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
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            title={link.name}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.iconLink} ${styles[link.className]}`}
          >
            <link.icon className={styles.icon} />
            <span className={styles.iconLabel}>{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Home;
