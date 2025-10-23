"use client";
import React from "react";

const Home: React.FC = () => (
  <section id="home" className="home">
    <div className="container">
      <div className="profile-wrapper">
        <img
          src="/images/zeeshan.jpg"
          alt="profile"
          className="profile-photo"
        />
        <div className="profile-glow"></div>
      </div>
      <h1>Mohammed Zeeshan</h1>
      <p className="title">Data Analyst &bull; Chennai, India</p>
      <p className="tagline">
        Curious and relentlessly eager to learn, I thrive at turning raw data
        into business insights and process automation.
      </p>
      <div className="icon-row">
        <a
          href="mailto:zeeshan6143@gmail.com"
          title="Email"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link email"
        >
          <div className="icon-container">
            <img src="/images/email.png" alt="Email" className="icon-img" />
          </div>
          <span className="icon-label">Email</span>
        </a>
        <a
          href="https://wa.me/919884291490"
          title="WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link whatsapp"
        >
          <div className="icon-container">
            <img
              src="/images/whatsapp.png"
              alt="WhatsApp"
              className="icon-img"
            />
          </div>
          <span className="icon-label">WhatsApp</span>
        </a>
        <a
          href="https://github.com/FameZeeshan"
          title="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link github"
        >
          <div className="icon-container">
            <img src="/images/github.png" alt="Github" className="icon-img" />
          </div>
          <span className="icon-label">GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/famezeeshan/"
          title="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link linkedin"
        >
          <div className="icon-container">
            <img
              src="/images/linkedin.png"
              alt="LinkedIn"
              className="icon-img"
            />
          </div>
          <span className="icon-label">LinkedIn</span>
        </a>
      </div>
    </div>
    <style jsx>{`
      .home {
        background: var(--color-bg);
        padding: 44px 0;
      }
      .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        max-width: 900px;
        margin: auto;
        padding: 0 20px;
        box-sizing: border-box;
        width: 100%;
      }
      .profile-wrapper {
        position: relative;
        margin-bottom: 20px;
      }
      .profile-photo {
        width: 140px;
        height: 140px;
        border-radius: 50%;
        object-fit: cover;
        background: var(--color-card);
        box-shadow: 0 4px 20px rgba(0, 92, 151, 0.15);
        transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        position: relative;
        z-index: 2;
        outline: none;
      }
      .profile-glow {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 160px;
        height: 160px;
        background: radial-gradient(
          circle,
          var(--color-primary-alpha, rgba(0, 92, 151, 0.2)) 0%,
          transparent 70%
        );
        border-radius: 50%;
        z-index: 1;
        animation: glow-pulse 3s ease-in-out infinite;
      }
      @keyframes glow-pulse {
        0%,
        100% {
          transform: translate(-50%, -50%) scale(1);
          opacity: 0.5;
        }
        50% {
          transform: translate(-50%, -50%) scale(1.15);
          opacity: 0.8;
        }
      }
      .profile-photo:hover {
        transform: scale(1.08) translateY(-8px);
        box-shadow: 0 8px 40px rgba(0, 92, 151, 0.25);
      }
      h1 {
        font-size: 2.1rem;
        color: var(--color-primary);
        margin: 0;
        font-weight: 700;
        letter-spacing: 0.02em;
      }
      .title {
        font-size: 1.14rem;
        color: var(--color-secondary);
        margin: 8px 0;
        font-weight: 500;
        letter-spacing: 0.05em;
      }
      .tagline {
        font-size: 1.06rem;
        color: var(--color-text);
        margin: 16px 0 24px 0;
        line-height: 1.6;
        max-width: 600px;
      }
      .icon-row {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: 28px;
        margin-top: 20px;
        flex-wrap: wrap;
        width: 100%;
        padding-bottom: 12px;
      }
      .icon-link {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        transition: all 0.3s ease;
        cursor: pointer;
        transform-origin: center;
        outline: none;
      }
      .icon-link:focus {
        outline: none;
      }
      .icon-container {
        width: 56px;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 12px;
        background: var(--color-card);
        backdrop-filter: blur(10px);
        transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        box-shadow: 0 2px 12px rgba(0, 92, 151, 0.1);
        border: 1px solid var(--color-secondary);
        outline: none;
      }
      .icon-container:focus {
        outline: none;
      }
      .icon-img {
        width: 32px;
        height: 32px;
        display: block;
        object-fit: contain;
        transition: all 0.3s ease;
        outline: none;
      }
      .icon-label {
        display: block;
        font-size: 0.92rem;
        color: var(--color-secondary);
        margin-top: 8px;
        text-align: center;
        letter-spacing: 0.01em;
        font-weight: 500;
        transition: all 0.3s ease;
      }

      /* Hover effects for each icon */
      .icon-link.email:hover .icon-container {
        background: linear-gradient(135deg, #ea4335 0%, #fbbc04 100%);
        transform: translateY(-6px) scale(1.1);
        box-shadow: 0 8px 24px rgba(234, 67, 53, 0.3);
      }
      .icon-link.email:hover .icon-img {
        filter: brightness(0) invert(1);
      }
      .icon-link.email:hover .icon-label {
        color: #ea4335;
      }

      .icon-link.whatsapp:hover .icon-container {
        background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
        transform: translateY(-6px) scale(1.1);
        box-shadow: 0 8px 24px rgba(37, 211, 102, 0.3);
      }
      .icon-link.whatsapp:hover .icon-img {
        filter: brightness(0) invert(1);
      }
      .icon-link.whatsapp:hover .icon-label {
        color: #25d366;
      }

      .icon-link.github:hover .icon-container {
        background: linear-gradient(135deg, #333333 0%, #555555 100%);
        transform: translateY(-6px) scale(1.1);
        box-shadow: 0 8px 24px rgba(51, 51, 51, 0.3);
      }
      .icon-link.github:hover .icon-img {
        filter: brightness(0) invert(1);
      }
      .icon-link.github:hover .icon-label {
        color: #333333;
      }

      .icon-link.linkedin:hover .icon-container {
        background: linear-gradient(135deg, #0a66c2 0%, #004182 100%);
        transform: translateY(-6px) scale(1.1);
        box-shadow: 0 8px 24px rgba(10, 102, 194, 0.3);
      }
      .icon-link.linkedin:hover .icon-img {
        filter: brightness(0) invert(1);
      }
      .icon-link.linkedin:hover .icon-label {
        color: #0a66c2;
      }

      @media (max-width: 700px) {
        .home {
          padding: 28px 0;
        }
        h1 {
          font-size: 1.72rem;
        }
        .container {
          padding: 0 10px;
        }
        .profile-photo {
          width: 120px;
          height: 120px;
        }
        .profile-glow {
          width: 140px;
          height: 140px;
        }
        .icon-row {
          gap: 20px;
          padding-bottom: 7px;
          margin-top: 16px;
        }
        .icon-container {
          width: 48px;
          height: 48px;
        }
        .icon-img {
          width: 28px;
          height: 28px;
        }
        .icon-label {
          font-size: 0.88rem;
          margin-top: 6px;
        }
      }

      @media (max-width: 480px) {
        .home {
          padding: 20px 0;
        }
        .container {
          max-width: 100%;
          padding: 0 8px;
        }
        .profile-photo {
          width: 100px;
          height: 100px;
        }
        .profile-glow {
          width: 120px;
          height: 120px;
        }
        h1 {
          font-size: 1.5rem;
          margin-bottom: 4px;
        }
        .title {
          font-size: 1.02rem;
        }
        .tagline {
          font-size: 0.98rem;
          margin: 12px 0 16px 0;
        }
        .icon-row {
          gap: 12px;
          padding-bottom: 4px;
          margin-top: 12px;
        }
        .icon-container {
          width: 44px;
          height: 44px;
        }
        .icon-img {
          width: 24px;
          height: 24px;
        }
        .icon-label {
          font-size: 0.8rem;
          margin-top: 4px;
        }
      }
    `}</style>
  </section>
);

export default Home;
