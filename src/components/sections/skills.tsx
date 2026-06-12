"use client";

import type { IconType } from "react-icons";
import {
  SiPostgresql,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiLinux,
  SiGit,
  SiPython,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { Database } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/language-context";

type Tech = {
  name: string;
  Icon: IconType | typeof Database;
  color: string;
  position: string;
  duration: string;
  delay: string;
};

const techs: Tech[] = [
  { name: "C#",         Icon: TbBrandCSharp, color: "#9B4F96", position: "left-[16%] top-[6%]",    duration: "7.2s", delay: "0s"    },
  { name: "React",      Icon: SiReact,       color: "#61DAFB", position: "left-[45%] top-[2%]",    duration: "8.0s", delay: "0.9s"  },
  { name: "TypeScript", Icon: SiTypescript,  color: "#3178C6", position: "right-[16%] top-[8%]",   duration: "6.8s", delay: "1.8s"  },
  { name: "JavaScript", Icon: SiJavascript,  color: "#F7DF1E", position: "left-[12%] top-[40%]",   duration: "7.6s", delay: "2.7s"  },
  { name: "Python",     Icon: SiPython,      color: "#3776AB", position: "left-[46%] top-[38%]",   duration: "6.4s", delay: "3.6s"  },
  { name: "PostgreSQL", Icon: SiPostgresql,  color: "#4169E1", position: "right-[12%] top-[42%]",  duration: "8.4s", delay: "4.5s"  },
  { name: "Git",        Icon: SiGit,         color: "#F05032", position: "left-[20%] bottom-[6%]", duration: "7.0s", delay: "5.4s"  },
  { name: "SQL",        Icon: Database,      color: "#A855F7", position: "left-[47%] bottom-[2%]", duration: "7.8s", delay: "6.3s"  },
  { name: "Linux",      Icon: SiLinux,       color: "#FCC624", position: "right-[20%] bottom-[8%]",duration: "6.6s", delay: "7.2s"  },
];

const TechTile = ({
  tech,
  floating,
  index,
}: {
  tech: Tech;
  floating: boolean;
  index: number;
}) => {
  const Icon = tech.Icon;
  const animNum = (index % 9) + 1;

  return (
    <div
      className={cn(
        "flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 transition-all duration-500 hover:bg-white/25 hover:scale-110 cursor-default",
        floating && cn("absolute", tech.position)
      )}
      style={
        floating
          ? {
              animationName: `float${animNum}`,
              animationDuration: tech.duration,
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
              animationDelay: tech.delay,
            }
          : undefined
      }
      title={tech.name}
    >
      <Icon className="h-10 w-10" style={{ color: tech.color }} aria-hidden="true" />
      <span className="sr-only">{tech.name}</span>
    </div>
  );
};

export default function SkillsSection() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="mb-12 text-center">
        <h2 className="font-headline text-4xl font-bold tracking-tight">
          {t.skills.title}
        </h2>
        <p className="mt-2 text-lg text-muted-foreground">{t.skills.subtitle}</p>
      </div>

      {/* Desktop: floating tiles around the "S" letter */}
      <div className="relative mx-auto hidden h-[32rem] max-w-3xl sm:block">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-headline text-[26rem] font-black leading-none text-primary/15 blur-[2px]"
        >
          S
        </span>
        {techs.map((tech, i) => (
          <TechTile key={tech.name} tech={tech} floating index={i} />
        ))}
      </div>

      {/* Mobile: simple grid */}
      <div className="grid grid-cols-3 place-items-center gap-4 sm:hidden">
        {techs.map((tech, i) => (
          <TechTile key={tech.name} tech={tech} floating={false} index={i} />
        ))}
      </div>
    </section>
  );
}
