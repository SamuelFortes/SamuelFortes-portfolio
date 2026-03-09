"use client";

import { Github, Linkedin, Mail, MessageCircle, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/dev-samuel-fortes",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    url: "https://github.com/SamuelFortes",
    icon: Github,
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/5586981802085",
    icon: MessageCircle,
  },
];

const emailAddress = "samuelfurtadofortes@gmail.com";

export default function ContactSection() {
  const { toast } = useToast();

  const handleEmailClick = () => {
    navigator.clipboard.writeText(emailAddress);
    toast({
      title: "Email copiado!",
      description: "O endereço de email foi copiado para a sua área de transferência.",
    });
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mb-12 text-center">
        <h2 className="font-headline text-4xl font-bold tracking-tight">
          Entre em Contato
        </h2>
        <p className="mt-2 text-lg text-muted-foreground">
          Estou sempre aberto a novas oportunidades e colaborações.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center rounded-2xl border border-white/20 bg-card/30 p-6 text-center shadow-lg backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-primary/10"
            >
              <Icon className="mb-4 h-12 w-12 text-primary transition-transform group-hover:scale-110" />
              <p className="text-xl font-semibold text-foreground">{link.name}</p>
            </a>
          );
        })}
        <button
          type="button"
          onClick={handleEmailClick}
          className="group flex flex-col items-center justify-center rounded-2xl border border-white/20 bg-card/30 p-6 text-center shadow-lg backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-primary/10"
        >
          <Mail className="mb-4 h-12 w-12 text-primary transition-transform group-hover:scale-110" />
          <p className="text-xl font-semibold text-foreground">Email</p>
        </button>
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <Separator className="my-16 bg-border/20" />
        <h3 className="font-headline text-3xl font-bold tracking-tight">
          Quer saber mais?
        </h3>
        <p className="mt-4 text-lg text-muted-foreground">
          Faça o download do meu currículo para um resumo completo da minha
          jornada profissional.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="shadow-lg">
            <a href="/samuel-fortes-cv.pdf" download>
              <Download className="mr-2 h-5 w-5" />
              Baixar CV
            </a>
          </Button>
        </div>
      </div>
      
      <footer className="mt-24 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Samuel Furtado Fortes. Todos os direitos reservados.</p>
      </footer>
    </section>
  );
}
