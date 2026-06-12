"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "@/components/logo";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/contexts/language-context";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/locales/types";

const NAV_ITEMS: { key: keyof Dictionary["nav"]; link: string }[] = [
  { key: "about",    link: "#about"      },
  { key: "skills",   link: "#skills"     },
  { key: "journey",  link: "#experience" },
  { key: "projects", link: "#projects"   },
  { key: "contact",  link: "#contact"    },
];

export default function Header() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>("#about");
  const [scrolled, setScrolled]           = useState(false);
  const [mobileOpen, setMobileOpen]       = useState(false);

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 10);

      let current = "";
      for (const item of NAV_ITEMS) {
        const el = document.querySelector(item.link);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 140;
          if (window.scrollY >= top) current = item.link;
        }
      }
      if (current) setActiveSection(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/75 backdrop-blur-[30px] [backdrop-filter:saturate(180%)_blur(30px)] shadow-sm border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo — links back to landing */}
        <Link href="/" className="shrink-0">
          <Logo className="text-2xl md:text-3xl" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.key}
              href={item.link}
              className={cn(
                "relative py-1 font-headline text-sm font-semibold uppercase tracking-[0.12em] transition-colors duration-200",
                "after:absolute after:bottom-0 after:left-0 after:h-[3px] after:rounded-full after:bg-primary",
                "after:w-0 after:transition-[width] after:duration-500 hover:after:w-full",
                activeSection === item.link
                  ? "text-primary after:!w-full"
                  : "text-foreground/65 hover:text-primary"
              )}
            >
              {t.nav[item.key]}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <button
            className="flex md:hidden items-center justify-center rounded-md p-2 text-foreground/70 transition-colors hover:text-primary"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/10">
          <nav className="container mx-auto flex flex-col px-4 py-2" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.key}
                href={item.link}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "border-b border-white/5 py-4 px-2 font-headline text-sm font-semibold uppercase tracking-[0.12em] transition-colors last:border-0",
                  activeSection === item.link ? "text-primary" : "text-foreground/65"
                )}
              >
                {t.nav[item.key]}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
