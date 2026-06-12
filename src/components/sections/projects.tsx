"use client";

import { useState } from "react";
import Image from "next/image";
import type { IconType } from "react-icons";
import {
  SiFastapi,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiPostgresql,
  SiSqlalchemy,
  SiJsonwebtokens,
  SiStreamlit,
  SiOpenai,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiGooglefonts,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiAxios,
} from "react-icons/si";
import { Github, Users, ScrollText, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { projectOrder, projectsMeta } from "@/lib/site-data";
import ProjectFilters, { type ProjectFilter } from "@/components/project-filters";
import { useLanguage } from "@/contexts/language-context";

const TAG_ICONS: Record<string, IconType> = {
  FastAPI: SiFastapi,
  Python: SiPython,
  React: SiReact,
  "Tailwind CSS": SiTailwindcss,
  PostgreSQL: SiPostgresql,
  SQLAlchemy: SiSqlalchemy,
  JWT: SiJsonwebtokens,
  Streamlit: SiStreamlit,
  "OpenAI API": SiOpenai,
  HTML5: SiHtml5,
  CSS3: SiCss,
  JavaScript: SiJavascript,
  "Google Fonts": SiGooglefonts,
  Vite: SiVite,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  MongoDB: SiMongodb,
  Axios: SiAxios,
};

export default function ProjectsSection() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<ProjectFilter>("all");

  const visibleProjects = projectOrder.filter(
    (id) => filter === "all" || projectsMeta[id].category === filter
  );

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mb-10 text-center">
        <h2 className="font-headline text-4xl font-bold tracking-tight">
          {t.projects.title}
        </h2>
        <p className="mt-2 text-lg text-muted-foreground">
          {t.projects.subtitle}
        </p>
      </div>

      <div className="mb-12 flex items-center justify-center gap-4">
        <Filter className="h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
        <ProjectFilters active={filter} onChange={setFilter} />
      </div>

      <div key={filter} className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((id, index) => {
          const meta = projectsMeta[id];
          const text = t.projects.items[id];
          const projectImage = meta.imageIds[0]
            ? PlaceHolderImages.find((p) => p.id === meta.imageIds[0])
            : null;

          return (
            <Card
              key={id}
              className="flex animate-fade-up flex-col overflow-hidden border-white/10 bg-card/40 shadow-xl backdrop-blur-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {projectImage && (
                <div className="h-44 w-full overflow-hidden border-b border-white/10">
                  <Image
                    src={projectImage.imageUrl}
                    alt={text.title}
                    width={800}
                    height={450}
                    data-ai-hint={projectImage.imageHint}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              )}
              <CardContent className="flex flex-1 flex-col gap-3 p-5">
                <h3 className="font-headline text-lg font-bold uppercase tracking-wide">
                  {text.title}
                </h3>
                <Badge className="w-fit bg-primary font-code uppercase tracking-wider text-primary-foreground hover:bg-primary">
                  {t.projects.filters[meta.category]}
                </Badge>
                <p className="font-code text-xs text-muted-foreground">
                  {t.projects.createdLabel} {meta.createdAt}
                </p>
                <Separator className="bg-white/10" />
                <p className="font-code text-sm leading-relaxed text-foreground/80">
                  {text.description}
                </p>
                <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
                  {meta.tags.map((tag) => {
                    const TagIcon = TAG_ICONS[tag];
                    return TagIcon ? (
                      <span key={tag} title={tag} className="text-foreground/60 transition-colors hover:text-primary">
                        <TagIcon className="h-5 w-5" aria-hidden="true" />
                        <span className="sr-only">{tag}</span>
                      </span>
                    ) : (
                      <Badge key={tag} variant="outline" className="font-code text-[10px]">
                        {tag}
                      </Badge>
                    );
                  })}
                </div>
              </CardContent>
              <CardFooter className="grid grid-cols-2 gap-3 border-t border-white/10 bg-card/30 p-4">
                <Button asChild variant="outline" title={t.projects.repoButton}>
                  <a href={meta.repoUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">{t.projects.repoButton}</span>
                  </a>
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" title={t.projects.detailsButton}>
                      <ScrollText className="h-5 w-5" />
                      <span className="sr-only">{t.projects.detailsButton}</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto">
                    <DialogHeader>
                      <Badge variant="secondary" className="w-fit">{text.status}</Badge>
                      <DialogTitle className="font-headline text-2xl">
                        {text.title}
                      </DialogTitle>
                      <DialogDescription>{text.description}</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-5 text-sm">
                      <div>
                        <h4 className="mb-3 font-headline font-bold">{t.projects.featuresLabel}</h4>
                        <ul className="space-y-3">
                          {text.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="mt-1.5 block h-2 w-2 shrink-0 rounded-full bg-primary"></span>
                              <span className="text-foreground/80">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Separator className="bg-white/10" />
                      <div className="flex flex-col gap-2 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 shrink-0" />
                          <span className="font-semibold">{t.projects.developersLabel}</span>
                          <span>{text.developers}</span>
                        </div>
                        {text.extra && (
                          <div className="flex items-center gap-2">
                            <span className="font-semibold">{text.extra.label}</span>
                            <span>{text.extra.value}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
