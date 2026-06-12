import Link from "next/link";
import Waves from "@/components/ui/waves";
import Logo from "@/components/logo";
import { socialLinks } from "@/lib/site-data";

export default function Landing() {
  return (
    <div className="relative flex h-dvh flex-col overflow-hidden">
      <Waves />

      <header className="relative z-10 flex items-center justify-between px-6 py-6 sm:px-10">
        <Logo className="text-2xl md:text-3xl" />
        <Link
          href="/portfolio"
          className="font-headline text-sm font-bold tracking-[0.25em] text-foreground/80 transition-colors hover:text-primary"
        >
          PORTFÓLIO
        </Link>
      </header>

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center gap-5 px-4 text-center">
        <Logo className="text-3xl md:text-4xl" />
        <h1 className="font-headline text-5xl font-bold tracking-tight text-foreground md:text-7xl">
          Samuel Furtado Fortes
        </h1>
        <p className="font-code text-lg font-bold md:text-2xl">
          <span className="text-accent">&lt;</span>
          <span className="text-foreground">Full-Stack Developer</span>
          <span className="text-accent">{" />"}</span>
        </p>
      </main>

      <footer className="relative z-10 flex items-center justify-center gap-7 pb-14">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              title={link.name}
              className="text-foreground/70 transition-all duration-200 hover:scale-110 hover:text-primary"
            >
              <Icon className="h-6 w-6" />
            </a>
          );
        })}
      </footer>
    </div>
  );
}
