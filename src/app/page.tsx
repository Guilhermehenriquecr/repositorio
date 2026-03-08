import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Solutions from "@/components/Solutions";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050A14] text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Solutions />
      <Contact />
    </main>
  );
}
