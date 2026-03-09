import { Pin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function AboutSection() {
  const profileImage = PlaceHolderImages.find(p => p.id === 'profile-picture');

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <Card className="transform border-white/20 bg-card/30 shadow-xl backdrop-blur-lg transition-transform duration-300 hover:scale-105">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="font-headline text-2xl">Sobre mim</CardTitle>
            <Pin className="h-6 w-6 -rotate-45 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:text-left">
              <Avatar className="h-44 w-44 shrink-0">
                {profileImage && (
                  <AvatarImage src={profileImage.imageUrl} alt={profileImage.description} data-ai-hint={profileImage.imageHint} />
                )}
                <AvatarFallback>SFF</AvatarFallback>
              </Avatar>
              <p className="text-lg leading-relaxed text-foreground/80">
                Sou estudante de Ciência da Computação na Universidade Federal do Piauí (UFPI) e atuo como desenvolvedor Full Stack, com uma trajetória consolidada e maior experiência prática no Front-end. Atualmente, estou aprofundando meus estudos em C# e no ecossistema .NET, direcionando meu foco para o desenvolvimento Back-end e a criação de sistemas robustos, escaláveis e eficientes. Minha jornada une a sensibilidade de interface do Front-end com o rigor técnico da engenharia de software, buscando sempre aplicar conhecimento acadêmico em soluções de alto impacto.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
