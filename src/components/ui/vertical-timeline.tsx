import { Briefcase, GraduationCap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { JourneyItem, JourneyType } from "@/locales/types";

const ICONS: Record<JourneyType, LucideIcon> = {
  work: Briefcase,
  education: GraduationCap,
};

export default function VerticalTimeline({ items }: { items: JourneyItem[] }) {
  return (
    <div className="relative">
      <div
        className="absolute left-5 top-0 h-full w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-primary to-accent lg:left-1/2"
        aria-hidden="true"
      />
      <div className="space-y-12 lg:space-y-16">
        {items.map((item, index) => {
          const Icon = ICONS[item.type];
          const isLeft = index % 2 === 0;
          return (
            <div
              key={item.id}
              className="relative grid grid-cols-[2.5rem_1fr] gap-4 lg:grid-cols-[1fr_5rem_1fr] lg:gap-0"
            >
              <div className="z-10 col-start-1 row-start-1 flex justify-center lg:col-start-2">
                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full text-primary-foreground ring-4 ring-background lg:h-14 lg:w-14",
                    item.type === "education"
                      ? "bg-gradient-to-br from-accent to-primary"
                      : "bg-gradient-to-br from-primary to-accent"
                  )}
                >
                  <Icon className="h-5 w-5 lg:h-6 lg:w-6" />
                </div>
              </div>
              <div
                className={cn(
                  "col-start-2 row-start-1 lg:col-start-3",
                  isLeft ? "lg:col-start-1 lg:pr-2" : "lg:col-start-3 lg:pl-2"
                )}
              >
                <Card className="border-white/20 border-b-4 border-b-primary bg-card/30 shadow-xl backdrop-blur-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
                  <CardHeader>
                    <span className="w-fit rounded-md border border-primary px-3 py-0.5 font-code text-sm font-bold text-primary">
                      {item.year}
                    </span>
                    <CardTitle className="!mt-3 text-xl">{item.title}</CardTitle>
                    <CardDescription className="!mt-1 font-medium text-primary">
                      {item.org}
                    </CardDescription>
                    <CardDescription>{item.period}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-inside list-disc space-y-2 text-left text-foreground/80">
                      {item.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
