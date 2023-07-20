import { AboutMe } from "./components/AboutMe";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <AboutMe />
      <Contact />
      <Footer />
    </>
  );
}
