import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Language from "@/components/Language";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0B0F14]">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Language />
      <Contact />
      <Footer />
    </main>
  );
}