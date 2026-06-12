"use client";

import * as React from "react";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { useLanguage } from "@/contexts/language-context";
import type { Language } from "@/locales/types";

const LANGUAGES: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "pt", label: "PT" },
];

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Skeleton className="h-10 w-24 rounded-full" />;
  }

  return (
    <div
      role="group"
      aria-label="Language"
      className="flex items-center gap-1 rounded-full border border-border bg-background/60 p-1"
    >
      <Globe className="ml-1.5 h-4 w-4 shrink-0 text-foreground/70" aria-hidden="true" />
      {LANGUAGES.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => setLanguage(code)}
          aria-pressed={language === code}
          className={cn(
            "rounded-full px-2.5 py-1 font-code text-xs font-bold transition-colors",
            language === code
              ? "bg-primary text-primary-foreground shadow"
              : "text-foreground/60 hover:text-primary"
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
