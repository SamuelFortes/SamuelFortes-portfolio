"use client";

import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/language-context";
import type { ProjectCategory } from "@/locales/types";

export type ProjectFilter = "all" | ProjectCategory;

const FILTERS: ProjectFilter[] = ["all", "fullstack", "frontend", "ia"];

export default function ProjectFilters({
  active,
  onChange,
}: {
  active: ProjectFilter;
  onChange: (filter: ProjectFilter) => void;
}) {
  const { t } = useLanguage();

  return (
    <div className="flex flex-wrap items-center justify-center gap-3" role="group" aria-label={t.projects.title}>
      {FILTERS.map((filter) => (
        <button
          key={filter}
          type="button"
          onClick={() => onChange(filter)}
          aria-pressed={active === filter}
          className={cn(
            "rounded-full border-2 px-5 py-1.5 font-code text-sm font-bold uppercase tracking-wider transition-all duration-200",
            active === filter
              ? "border-primary bg-primary text-primary-foreground shadow-lg"
              : "border-border bg-card/30 text-foreground/70 backdrop-blur-lg hover:border-primary hover:text-primary"
          )}
        >
          {t.projects.filters[filter]}
        </button>
      ))}
    </div>
  );
}
