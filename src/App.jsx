import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Testimonials from "./sections/Testimonials";
import Footer from "./components/layout/Footer";
import Skills from "./sections/Skills";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills/>
      <Projects />
      <Testimonials/>
      <Contact />
      
      <Footer />
    </>
  );
}