import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Github, Users, Wrench, Cpu, Code } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const projects = [
  {
    status: "Projeto Acadêmico",
    title: "Plataforma Virtual de Saúde (UBS)",
    description: "Sistema de gestão integrada para Unidades Básicas de Saúde, focado na digitalização de diagnósticos situacionais e gestão de equipas.",
    imageIds: ["plataforma-saude-1"],
    tags: ["FastAPI", "Python", "React", "Tailwind CSS", "PostgreSQL", "SQLAlchemy", "Alembic", "JWT"],
    features: [
      "Módulo para recolha e análise de indicadores de saúde, permitindo a geração de relatórios PDF automatizados sobre a situação das microáreas.",
      "Sistema completo para gerir profissionais de saúde, atribuição de cargos e mapeamento de áreas de atuação dos Agentes Comunitários de Saúde (ACS).",
      "Funcionalidade de marcação de consultas com vista de calendário e bloqueio de horários para organização interna da unidade.",
      "Ferramenta para identificar nós críticos na saúde da comunidade e planear intervenções baseadas em evidências.",
      "Secção dedicada à partilha de conteúdos de formação e orientações para pacientes e profissionais.",
    ],
    repoUrl: "https://github.com/cocaioo/plataforma_virtual",
    developers: "Samuel Furtado Fortes e Caio Victor Ferreira do Nascimento",
    architecture: "Full Stack (Decoupled API/Frontend)",
  },
  {
    status: "Projeto Pessoal",
    title: "ChatBot com IA",
    description: "Interface de Chat interativa integrada à API da OpenAI para simulação de assistente virtual.",
    imageIds: ["chatbot-ia-1"],
    tags: ["Python", "Streamlit", "OpenAI API"],
    features: [
      "Utilização do st.session_state para manter o histórico da conversa (lista_mensagens) ativo durante a navegação.",
      "Implementação de chamadas assíncronas ao modelo de linguagem da OpenAI para gerar respostas dinâmicas.",
      "Campo de input de chat (st.chat_input) que atualiza a interface em tempo real sem a necessidade de recarregamento manual.",
      "Projeto registrado sob a titularidade de Samuel Furtado Fortes, garantindo transparência e permissão para contribuições.",
    ],
    repoUrl: "https://github.com/SamuelFortes/projeto-chatbot-com-IA",
    developers: "Samuel Furtado Fortes",
    model: "GPT-4o",
  },
  {
    status: "Projeto Pessoal",
    title: "Website de Viagens",
    description: "Landing page responsiva e dinâmica para agência de turismo com foco em conversão e experiência do utilizador.",
    imageIds: ["website-viagens-1"],
    tags: ["HTML5", "CSS3", "JavaScript", "Google Fonts"],
    features: [
      "Utilização de media queries para adaptar o layout a diferentes tamanhos de ecrã (até 900px), garantindo uma navegação fluida em dispositivos móveis.",
      "Implementação de um menu que altera a sua aparência (cor de fundo e logótipo) automaticamente ao fazer scroll pela página.",
      "Sistema de navegação lateral para smartphones com animação de ícone e bloqueio de scroll no fundo para melhor usabilidade.",
      "Áreas estrategicamente posicionadas para contacto via WhatsApp, E-mail e Telefone, otimizadas para gerar leads.",
      "Uso de imagens de fundo fixas (background-attachment: fixed) para criar efeitos de profundidade durante a navegação.",
    ],
    repoUrl: "https://github.com/SamuelFortes/travel-website-reponsive",
    developers: "Samuel Furtado Fortes",
    type: "Web Design / Front-End",
  },
  {
    status: "Projeto de Estudo",
    title: "Spotify Clone - Jornada Full Stack",
    description: "Aplicação web completa que replica a experiência do Spotify, com integração entre front-end, back-end e base de dados.",
    imageIds: ["spotify-clone-1"],
    tags: ["React", "Vite", "Node.js", "Express", "MongoDB", "Axios"],
    features: [
      "Implementação completa desde a interface do utilizador até à persistência de dados, garantindo uma aplicação ponta-a-ponta funcional.",
      "Componente dinâmico que permite a reprodução de faixas, controlo de progresso e navegação entre músicas.",
      "Sistema que consome dados de uma API para renderizar listas de artistas e músicas de forma automática.",
      "Utilização de react-router-dom para navegação fluida entre páginas de artistas e álbuns específicos.",
      "Inclusão de scripts para inserção em massa de dados (insertMany) na base de dados, facilitando o povoamento inicial do sistema.",
    ],
    repoUrl: "https://github.com/SamuelFortes/deploy-jornada-full-stack",
    developers: "Samuel Furtado Fortes",
    stack: "MERN (MongoDB, Express, React, Node)",
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mb-16 text-center">
        <h2 className="font-headline text-4xl font-bold tracking-tight">
          Meus Projetos
        </h2>
        <p className="mt-2 text-lg text-muted-foreground">
          Projetos em desenvolvimento e pesquisa aplicada.
        </p>
      </div>

      <div className="mx-auto max-w-5xl space-y-16">
        {projects.map((project, index) => {
          const projectImage = project.imageIds[0] ? PlaceHolderImages.find(p => p.id === project.imageIds[0]) : null;

          return (
            <Card key={index} className="flex flex-col overflow-hidden border-white/20 bg-card/30 shadow-xl backdrop-blur-lg">
              <CardContent className="p-6">
                <div className="flex flex-col gap-8">
                  <div>
                    <Badge variant="secondary" className="mb-4">{project.status}</Badge>
                    <h3 className="font-headline text-2xl font-bold">{project.title}</h3>
                    <p className="mt-1 text-muted-foreground">{project.description}</p>
                  </div>

                  {projectImage && (
                    <div className="relative w-full overflow-hidden rounded-lg">
                      <Image
                        src={projectImage.imageUrl}
                        alt={`${project.title} - Imagem do projeto`}
                        width={1200}
                        height={800}
                        data-ai-hint={projectImage.imageHint}
                        className="h-auto w-full rounded-lg"
                      />
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                  
                  <ul className="space-y-3">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1.5 block h-2 w-2 shrink-0 rounded-full bg-primary"></span>
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild className="w-fit">
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2" />
                      Repositório do Projeto
                    </a>
                  </Button>

                </div>
              </CardContent>
              <CardFooter className="mt-auto bg-card/20 p-4 text-sm text-muted-foreground">
                <div className="flex w-full flex-col gap-3">
                   {project.developers && (
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span className="font-semibold">Desenvolvedor(es):</span>
                      <span>{project.developers}</span>
                    </div>
                  )}
                  {project.architecture && (
                    <div className="flex items-center gap-2">
                      <Wrench className="h-4 w-4" />
                      <span className="font-semibold">Arquitetura:</span>
                      <span>{project.architecture}</span>
                    </div>
                  )}
                   {project.model && (
                    <div className="flex items-center gap-2">
                      <Cpu className="h-4 w-4" />
                      <span className="font-semibold">Modelo de IA:</span>
                      <span>{project.model}</span>
                    </div>
                  )}
                  {project.type && (
                    <div className="flex items-center gap-2">
                      <Code className="h-4 w-4" />
                      <span className="font-semibold">Tipo:</span>
                      <span>{project.type}</span>
                    </div>
                  )}
                  {project.stack && (
                    <div className="flex items-center gap-2">
                      <Wrench className="h-4 w-4" />
                      <span className="font-semibold">Stack:</span>
                      <span>{project.stack}</span>
                    </div>
                  )}
                </div>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </section>
  );
}
