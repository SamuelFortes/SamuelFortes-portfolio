"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Home, User, Code, Briefcase, Mail, Shapes } from "lucide-react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";

const ICONS: { [key: string]: React.ElementType } = {
  Home,
  User,
  Code,
  Briefcase,
  Mail,
  Shapes,
};

type NavItem = {
  name: string;
  link: string;
  icon: string;
};

export default function FloatingNav({ navItems }: { navItems: NavItem[] }) {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const sections = navItems.map((item) => document.querySelector(item.link));

      let currentSectionId = "";
      for (const section of sections) {
        if (section) {
          const sectionTop = section.getBoundingClientRect().top + window.scrollY - 150;
          if (currentScrollY >= sectionTop) {
            currentSectionId = `#${section.id}`;
          }
        }
      }
      
      setActiveSection(currentSectionId || (navItems.length > 0 ? navItems[0].link : ""));
      
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
  }, [lastScrollY, navItems]);

  return (
    <nav
      className={cn(
        "fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center justify-center space-x-2 rounded-full border border-border bg-card/30 p-2 shadow-lg backdrop-blur-md transition-transform duration-300",
        isVisible ? "translate-y-0" : "translate-y-24"
      )}
      aria-label="Main navigation"
    >
      {navItems.map((item) => {
        const Icon = ICONS[item.icon];
        return (
          <Link
            key={item.name}
            href={item.link}
            className={cn(
              "relative flex h-12 w-12 items-center justify-center rounded-full text-foreground/70 transition-colors hover:text-primary",
              activeSection === item.link && "bg-background/80 text-primary shadow-inner"
            )}
            aria-label={item.name}
            title={item.name}
          >
            {Icon && <Icon className="h-6 w-6" />}
            <span className="sr-only">{item.name}</span>
          </Link>
        );
      })}
      <ModeToggle />
    </nav>
  );
}
