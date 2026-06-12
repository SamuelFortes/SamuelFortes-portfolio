import AboutSection from "@/components/sections/about";
import SkillsSection from "@/components/sections/skills";
import ExperienceSection from "@/components/sections/experience";
import ProjectsSection from "@/components/sections/projects";
import ContactSection from "@/components/sections/contact";
import Header from "@/components/layout/header";

export default function PortfolioPage() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <Header />
      <main className="container mx-auto px-4 pt-16 sm:px-6 lg:px-8">
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}
