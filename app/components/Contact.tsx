"use client";
import React from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";
import styles from "./Contact.module.css";

const Contact: React.FC = () => (
  <section id="contact" className={styles.contactSection}>
    <div className={styles.contactCard}>
      <h2 className={styles.title}>Contact</h2>

      <div className={styles.contactGrid}>
        {/* Left Column */}
        <div className={styles.contactColumn}>
          <p>
            <FaMapMarkerAlt className={styles.icon} />
            <span>
              <strong>Location:</strong> Kundrathur, Chennai, India
            </span>
          </p>

          <p>
            <FaPhoneAlt className={styles.icon} />
            <span>
              <strong>Phone:</strong>{" "}
              <a href="tel:919884291490">+91 9884291490</a>
            </span>
          </p>

          <p>
            <FaWhatsapp className={`${styles.icon} ${styles.whatsapp}`} />
            <span>
              <strong>WhatsApp:</strong>{" "}
              <a
                href="https://wa.me/919884291490"
                target="_blank"
                rel="noopener noreferrer"
              >
                +91 9884291490
              </a>
            </span>
          </p>

          <p>
            <FaEnvelope className={styles.icon} />
            <span>
              <strong>Email:</strong>{" "}
              <a href="mailto:zeeshan6143@gmail.com">zeeshan6143@gmail.com</a>
            </span>
          </p>
        </div>

        {/* Right Column */}
        <div className={styles.contactColumn}>
          <p>
            <FaLinkedin className={`${styles.icon} ${styles.linkedin}`} />
            <span>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/famezeeshan"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/famezeeshan
              </a>
            </span>
          </p>

          <p>
            <FaGithub className={`${styles.icon} ${styles.github}`} />
            <span>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/FameZeeshan"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/FameZeeshan
              </a>
            </span>
          </p>

          <div className={styles.resumeContainer}>
            <a href="Zeeshan_C_1125.pdf" download>
              <button className={styles.resumeBtn}>
                <FaDownload className={styles.btnIcon} />
                <span>Download Resume</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
