import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import WhyHireMe from "./components/WhyHireMe";
import ImpactBar from "./components/ImpactBar";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
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
      <Contact />
      <Footer />
    </div>
  );
}
