"use client";

import { Mail, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Logo from "@/components/logo";
import { useLanguage } from "@/contexts/language-context";
import { socialLinks, emailAddress } from "@/lib/site-data";

const cardClassName = (index: number) =>
  cn(
    "group flex items-center gap-5 rounded-xl border-[3px] border-foreground p-5 text-left shadow-neo transition-all duration-200",
    "hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-neo-lg",
    "active:translate-x-1 active:translate-y-1 active:shadow-neo-sm",
    "bg-primary/10"
  );

const IconBox = ({ children }: { children: React.ReactNode }) => (
  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-foreground text-background transition-transform duration-200 group-hover:scale-105">
    {children}
  </span>
);

export default function ContactSection() {
  const { t } = useLanguage();
  const { toast } = useToast();

  const handleEmailClick = () => {
    navigator.clipboard.writeText(emailAddress);
    toast({
      title: t.contact.emailCopied,
      description: t.contact.emailCopiedDesc,
    });
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mb-12 text-center">
        <h2 className="font-headline text-4xl font-bold tracking-tight">
          {t.contact.title}
        </h2>
        <p className="mt-2 text-lg text-muted-foreground">
          {t.contact.subtitle}
        </p>
      </div>
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
        {socialLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cardClassName(index)}
            >
              <IconBox>
                <Icon className="h-7 w-7" />
              </IconBox>
              <span className="text-xl font-bold text-foreground">{link.name}</span>
            </a>
          );
        })}
        <button
          type="button"
          onClick={handleEmailClick}
          className={cardClassName(socialLinks.length)}
        >
          <IconBox>
            <Mail className="h-7 w-7" />
          </IconBox>
          <span className="text-xl font-bold text-foreground">{t.contact.email}</span>
        </button>
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <Separator className="my-16 bg-border/20" />
        <h3 className="font-headline text-3xl font-bold tracking-tight">
          {t.contact.cvTitle}
        </h3>
        <p className="mt-4 text-lg text-muted-foreground">{t.contact.cvText}</p>
        <div className="mt-8">
          <Button asChild variant="outline" size="lg" className="shadow-lg border-primary/50 bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary">
            <a href="/samuel-fortes-cv.pdf" download>
              <Download className="mr-2 h-5 w-5" />
              {t.contact.cvButton}
            </a>
          </Button>
        </div>
      </div>

      <footer className="mt-24 flex flex-col items-center gap-3 text-center text-muted-foreground">
        <Logo className="text-2xl" />
        <p>
          &copy; {new Date().getFullYear()} Samuel Furtado Fortes. {t.contact.rights}
        </p>
      </footer>
    </section>
  );
}
