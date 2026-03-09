import { MapPin } from "lucide-react";
import Terminal from "@/components/ui/terminal";

export default function HeroSection() {
  return (
    <section id="home" className="flex min-h-screen items-center justify-center py-24">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Samuel Furtado Fortes
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Full-Stack Developer | Computer Science Student
          </p>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-5 w-5" />
            <span>Teresina, PI</span>
          </div>
          <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            Disponível para Projetos/Estágio
          </div>
        </div>
        <div className="mx-auto w-full max-w-lg">
          <Terminal />
        </div>
      </div>
    </section>
  );
}
