import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import SkillsSection from "@/components/sections/skills";
import ExperienceSection from "@/components/sections/experience";
import ProjectsSection from "@/components/sections/projects";
import ContactSection from "@/components/sections/contact";
import FloatingNav from "@/components/layout/floating-nav";

export default function Home() {
  const navItems = [
    { name: "Início", link: "#home", icon: "Home" },
    { name: "Sobre", link: "#about", icon: "User" },
    { name: "Skills", link: "#skills", icon: "Code" },
    { name: "Jornada", link: "#experience", icon: "Briefcase" },
    { name: "Projetos", link: "#projects", icon: "Shapes" },
    { name: "Contato", link: "#contact", icon: "Mail" },
  ];

  return (
    <div className="relative w-full overflow-x-hidden">
      <div className="absolute top-0 left-0 -z-10 h-full w-full bg-gradient-to-br from-[#E0DDF3] via-[#F6F4FA] to-[#F1E0F0] dark:hidden"></div>
      
      <div className="relative z-10">
        <FloatingNav navItems={navItems} />

        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </div>
    </div>
  );
}
