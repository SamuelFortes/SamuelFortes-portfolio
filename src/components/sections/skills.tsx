"use client";

import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

const skills = [
  { name: "C#", color: "bg-primary" },
  { name: "PostgreSQL", color: "bg-destructive" },
  { name: "React", color: "bg-primary" },
  { name: "TypeScript", color: "bg-destructive" },
  { name: "JavaScript", color: "bg-primary" },
  { name: "Linux", color: "bg-destructive" },
  { name: "Git", color: "bg-primary" },
  { name: "Python", color: "bg-destructive" },
  { name: "SQL", color: "bg-primary" },
];

const SkillTag = ({ name, color }: { name: string; color: string }) => {
  return (
    <div className="flex items-center gap-3 rounded-full border-2 border-border/10 bg-card/40 px-5 py-3 shadow-lg backdrop-blur-lg">
      <div className={cn("h-3 w-3 rounded-full", color)} />
      <p className="font-code text-base uppercase tracking-widest text-foreground">
        {name}
      </p>
    </div>
  );
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="mb-12 text-center">
        <h2 className="font-headline text-4xl font-bold tracking-tight">
          Minhas Habilidades
        </h2>
        <p className="mt-2 text-lg text-muted-foreground">
          Tecnologias e ferramentas que utilizo no meu dia a dia.
        </p>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-3xl border border-white/20 bg-card/30 shadow-2xl backdrop-blur-xl">
        <Marquee pauseOnHover className="[--duration:60s]">
          {skills.map((skill) => (
            <SkillTag key={skill.name} {...skill} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent"></div>
      </div>
    </section>
  );
}
