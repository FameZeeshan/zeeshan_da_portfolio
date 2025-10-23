"use client";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import WhyHireMe from "./components/WhyHireMe";
import ImpactBar from "./components/ImpactBar";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import BlogOrLearning from "./components/BlogOrLearning"; // Optional
import Testimonials from "./components/Testimonials"; // New
import Contact from "./components/Contact";

import Footer from "./components/Footer";

export default function Page() {
  return (
    <div className="main-container">
      <Navbar />
      <Home />
      <About />
      <WhyHireMe />
      <ImpactBar />
      <Projects />
      <Experience />
      <Skills />
      <Certifications />
      {/* <BlogOrLearning />
      <Testimonials /> */}
      <Contact />
      <Footer />
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        body {
          background: #f4f6fc;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
        html {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
        .main-container {
          max-width: 100vw;
          width: 100vw;
          margin: 0;
          border-radius: 0px;
          background: #fff;
          box-shadow: none;
          overflow: hidden;
        }

        /* Large desktop */
        @media (min-width: 1500px) {
          .main-container {
            max-width: 100vw;
            width: 100vw;
            margin: 0;
            border-radius: 0px;
          }
        }

        /* Standard desktop */
        @media (min-width: 1200px) and (max-width: 1499px) {
          .main-container {
            max-width: 100vw;
            width: 100vw;
            margin: 0;
            border-radius: 0px;
          }
        }

        /* Tablet and smaller desktops */
        @media (min-width: 900px) and (max-width: 1199px) {
          .main-container {
            max-width: 100vw;
            width: 100vw;
            margin: 0;
            border-radius: 0px;
          }
        }

        /* Smaller tablets */
        @media (min-width: 600px) and (max-width: 899px) {
          .main-container {
            max-width: 100vw;
            width: 100vw;
            margin: 0;
            border-radius: 0px;
          }
        }

        /* Mobile devices */
        @media (max-width: 599px) {
          .main-container {
            max-width: 100vw;
            width: 100vw;
            margin: 0;
            border-radius: 0px;
          }
        }
      `}</style>
    </div>
  );
}
