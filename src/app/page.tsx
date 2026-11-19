import About from "@/components/About";
import CursorGlow from "@/components/CursorGlow";
import CurvedLoop from "@/components/CurvedLoop";
import DomainMarquees from "@/components/DomainMarquees";
import EducationSkills from "@/components/EducationSkills";
import ExperienceAccordion from "@/components/ExperienceAccordion";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HorizontalShowcase from "@/components/HorizontalShowcase";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import Projects from "@/components/Projects";
import SmoothScroll from "@/components/SmoothScroll";
import StatementBreak from "@/components/StatementBreak";
import TechArsenal from "@/components/TechArsenal";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Preloader />
      <CursorGlow />
      <Navbar />
      <main className="bg-background overflow-x-clip">
        <Hero />
        <About />
        <HorizontalShowcase />
        <DomainMarquees />
        <TechArsenal />
        <StatementBreak />
        <Projects />
        <ExperienceAccordion />
        <EducationSkills />
        <CurvedLoop />
      </main>
      <Footer />
    </>
  );
}
