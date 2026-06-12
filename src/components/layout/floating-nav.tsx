"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Home, User, Code, Briefcase, Mail, Shapes } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/contexts/language-context";
import type { Dictionary } from "@/locales/types";

const NAV_ITEMS: { key: keyof Dictionary["nav"]; link: string; Icon: LucideIcon }[] = [
  { key: "home", link: "/", Icon: Home },
  { key: "about", link: "#about", Icon: User },
  { key: "skills", link: "#skills", Icon: Code },
  { key: "journey", link: "#experience", Icon: Briefcase },
  { key: "projects", link: "#projects", Icon: Shapes },
  { key: "contact", link: "#contact", Icon: Mail },
];

const ANCHOR_ITEMS = NAV_ITEMS.filter((item) => item.link.startsWith("#"));

export default function FloatingNav() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>("");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const sections = ANCHOR_ITEMS.map((item) => document.querySelector(item.link));

      let currentSectionId = "";
      for (const section of sections) {
        if (section) {
          const sectionTop = section.getBoundingClientRect().top + window.scrollY - 150;
          if (currentScrollY >= sectionTop) {
            currentSectionId = `#${section.id}`;
          }
        }
      }

      setActiveSection(currentSectionId || ANCHOR_ITEMS[0].link);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    // Set initial active section
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={cn(
        "fixed bottom-4 left-1/2 z-50 flex max-w-[96vw] -translate-x-1/2 items-center justify-center space-x-1 rounded-full border border-border bg-card/30 p-2 shadow-lg backdrop-blur-md transition-transform duration-300 sm:space-x-2",
        isVisible ? "translate-y-0" : "translate-y-24"
      )}
      aria-label="Main navigation"
    >
      {NAV_ITEMS.map((item) => {
        const name = t.nav[item.key];
        const Icon = item.Icon;
        return (
          <Link
            key={item.key}
            href={item.link}
            className={cn(
              "relative flex h-10 w-10 items-center justify-center rounded-full text-foreground/70 transition-colors hover:text-primary sm:h-12 sm:w-12",
              activeSection === item.link && "bg-background/80 text-primary shadow-inner"
            )}
            aria-label={name}
            title={name}
          >
            <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="sr-only">{name}</span>
          </Link>
        );
      })}
      <LanguageToggle />
    </nav>
  );
}
