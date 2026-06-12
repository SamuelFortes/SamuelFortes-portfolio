"use client";

import VerticalTimeline from "@/components/ui/vertical-timeline";
import { useLanguage } from "@/contexts/language-context";

export default function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight">
            {t.journey.title}
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            {t.journey.subtitle}
          </p>
        </div>
        <VerticalTimeline items={t.journey.items} />
      </div>
    </section>
  );
}
