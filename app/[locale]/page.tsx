import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-background text-foreground overflow-hidden">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Education />
      <Skills />
      <Footer />
    </main>
  );
}
