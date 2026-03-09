import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
    {
    role: "Bolsista Voluntário",
    company: "PIBITI - Iniciação em Desenvolvimento Tecnológico e Inovação",
    period: "agosto/2025 - julho/2026",
    activities: [
      "Desenvolvimento Full-Stack de plataforma web voltada para a gestão de saúde pública.",
      "Criação de APIs REST e interfaces responsivas utilizando FastAPI.",
      "Modelagem de bancos de dados relacionais (PostgreSQL).",
      "Levantamento de requisitos técnicos e análise de fluxos assistenciais junto a usuários finais.",
      "Realização de testes de usabilidade (escala SUS) и documentação técnica do sistema.",
      "Controle de versão e organização do repositório do projeto utilizando Git e GitHub.",
    ],
  },
  {
    role: "Estagiário TI",
    company: "Fundação Cultural e de Fomento à Pesquisa, Ensino, Extensão e Inovação - FADEX",
    period: "agosto/2025 - atual",
    activities: [
      "Desenvolvimento Front-End: Atuação no ciclo completo de desenvolvimento de um sistema de Gestão Eletrônica de Documentos, utilizando Next.js (TypeScript) para interfaces modernas.",
      "Elaboração de Procedimentos Operacionais Padrão (POPs) para treinar funcionários no uso do sistema interno.",
      "Realização de tratamento e análise de dados em planilhas Excel.",
      "Desenvolvimento de designs e protótipos para aplicações web utilizando Figma.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight">
            Jornada Profissional
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Minhas experiências práticas e projetos relevantes.
          </p>
        </div>
        <div className="relative pl-8">
          <div className="absolute left-0 top-0 h-full w-0.5 bg-primary/20"></div>
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-10 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary ring-8 ring-background">
                  <Briefcase className="h-4 w-4 p-0.5 text-primary-foreground"/>
                </div>
                <Card className="border-white/20 bg-card/30 shadow-xl backdrop-blur-lg transition-transform duration-300 hover:scale-102 hover:shadow-2xl">
                  <CardHeader>
                    <CardTitle className="text-xl">{exp.role}</CardTitle>
                    <CardDescription className="!mt-1 font-medium text-primary">{exp.company}</CardDescription>
                    <CardDescription>{exp.period}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-inside list-disc space-y-2 text-foreground/80">
                      {exp.activities.map((activity, i) => (
                        <li key={i}>{activity}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
