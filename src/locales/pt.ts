import type { Dictionary } from "./types";

export const pt: Dictionary = {
  nav: {
    home: "Início",
    about: "Sobre",
    skills: "Skills",
    journey: "Jornada",
    projects: "Projetos",
    contact: "Contato",
  },
  about: {
    label: "Sobre",
    bio: "Sou estudante de Ciência da Computação na Universidade Federal do Piauí (UFPI) e atuo como desenvolvedor Full Stack, com uma trajetória consolidada e maior experiência prática no Front-end. Atualmente, estou aprofundando meus estudos em C# e no ecossistema .NET, direcionando meu foco para o desenvolvimento Back-end e a criação de sistemas robustos, escaláveis e eficientes.",
    livesInLabel: "Mora em",
    location: ["Teresina", "Brasil"],
    experienceLabel: "Experiência",
    experienceValue: "1+ ano | Estágio & Pesquisa",
    downloadLabel: "Download",
    cvFile: "Currículo.pdf",
  },
  skills: {
    title: "Foco & Skills",
    subtitle: "Tecnologias e ferramentas que utilizo no meu dia a dia.",
  },
  journey: {
    title: "Jornada",
    subtitle:
      "Uma visão geral sobre minha formação, experiências práticas e projetos relevantes.",
    items: [
      {
        id: "ufpi",
        type: "education",
        year: "2023",
        period: "fevereiro/2023 - julho/2027 (previsão)",
        title: "Bacharelado em Ciência da Computação",
        org: "Universidade Federal do Piauí (UFPI)",
        bullets: [
          "Atualmente no 6º período do curso.",
          "Formação com base sólida em algoritmos, estruturas de dados, engenharia de software e bancos de dados.",
        ],
      },
      {
        id: "pibiti",
        type: "work",
        year: "2025",
        period: "agosto/2025 - julho/2026",
        title: "Bolsista",
        org: "PIBITI - Programa Institucional de Bolsas de Iniciação em Desenvolvimento Tecnológico e Inovação",
        bullets: [
          "Desenvolvimento Full-Stack de plataforma web voltada para a gestão de saúde pública.",
          "Criação de APIs REST e interfaces responsivas utilizando FastAPI.",
          "Modelagem de bancos de dados relacionais (PostgreSQL, Supabase).",
          "Levantamento de requisitos técnicos e análise de fluxos assistenciais junto a usuários finais.",
          "Realização da documentação técnica do sistema.",
          "Controle de versão e organização do repositório do projeto utilizando Git e GitHub.",
        ],
      },
      {
        id: "fadex",
        type: "work",
        year: "2025",
        period: "agosto/2025 - atual",
        title: "Estagiário TI",
        org: "Fundação Cultural e de Fomento à Pesquisa, Ensino, Extensão e Inovação - FADEX",
        bullets: [
          "Desenvolvimento Front-End: Atuação no ciclo completo de desenvolvimento de um sistema de Gestão Eletrônica de Documentos, utilizando Next.js (TypeScript) para interfaces modernas.",
          "Elaboração de Procedimentos Operacionais Padrão (POPs) para treinar funcionários no uso do sistema interno.",
          "Realização de tratamento e análise de dados em planilhas Excel.",
          "Desenvolvimento de designs e protótipos para aplicações web utilizando Figma.",
        ],
      },
    ],
  },
  projects: {
    title: "Meus Projetos",
    subtitle: "Projetos em desenvolvimento e pesquisa aplicada.",
    filters: {
      all: "Todos",
      fullstack: "Full-Stack",
      frontend: "Front-End",
      ia: "IA",
    },
    repoButton: "Repositório do Projeto",
    detailsButton: "Descrição do Projeto",
    createdLabel: "Criado em:",
    featuresLabel: "Funcionalidades",
    developersLabel: "Desenvolvedor(es):",
    items: {
      saude: {
        status: "Projeto Acadêmico",
        title: "Plataforma Virtual de Saúde (UBS)",
        description:
          "Sistema de gestão integrada para Unidades Básicas de Saúde, focado na digitalização de diagnósticos situacionais e gestão de equipas.",
        features: [
          "Módulo para recolha e análise de indicadores de saúde, permitindo a geração de relatórios PDF automatizados sobre a situação das microáreas.",
          "Sistema completo para gerir profissionais de saúde, atribuição de cargos e mapeamento de áreas de atuação dos Agentes Comunitários de Saúde (ACS).",
          "Funcionalidade de marcação de consultas com vista de calendário e bloqueio de horários para organização interna da unidade.",
          "Ferramenta para identificar nós críticos na saúde da comunidade e planear intervenções baseadas em evidências.",
          "Secção dedicada à partilha de conteúdos de formação e orientações para pacientes e profissionais.",
        ],
        developers: "Samuel Furtado Fortes e Caio Victor Ferreira do Nascimento",
        extra: { label: "Arquitetura:", value: "Full Stack (API/Frontend desacoplados)" },
      },
      chatbot: {
        status: "Projeto Pessoal",
        title: "ChatBot com IA",
        description:
          "Interface de Chat interativa integrada à API da OpenAI para simulação de assistente virtual.",
        features: [
          "Utilização do st.session_state para manter o histórico da conversa (lista_mensagens) ativo durante a navegação.",
          "Implementação de chamadas assíncronas ao modelo de linguagem da OpenAI para gerar respostas dinâmicas.",
          "Campo de input de chat (st.chat_input) que atualiza a interface em tempo real sem a necessidade de recarregamento manual.",
          "Projeto registrado sob a titularidade de Samuel Furtado Fortes, garantindo transparência e permissão para contribuições.",
        ],
        developers: "Samuel Furtado Fortes",
        extra: { label: "Modelo de IA:", value: "GPT-4o" },
      },
      viagens: {
        status: "Projeto Pessoal",
        title: "Website de Viagens",
        description:
          "Landing page responsiva e dinâmica para agência de turismo com foco em conversão e experiência do utilizador.",
        features: [
          "Utilização de media queries para adaptar o layout a diferentes tamanhos de ecrã (até 900px), garantindo uma navegação fluida em dispositivos móveis.",
          "Implementação de um menu que altera a sua aparência (cor de fundo e logótipo) automaticamente ao fazer scroll pela página.",
          "Sistema de navegação lateral para smartphones com animação de ícone e bloqueio de scroll no fundo para melhor usabilidade.",
          "Áreas estrategicamente posicionadas para contacto via WhatsApp, E-mail e Telefone, otimizadas para gerar leads.",
          "Uso de imagens de fundo fixas (background-attachment: fixed) para criar efeitos de profundidade durante a navegação.",
        ],
        developers: "Samuel Furtado Fortes",
        extra: { label: "Tipo:", value: "Web Design / Front-End" },
      },
      spotify: {
        status: "Projeto de Estudo",
        title: "Spotify Clone - Jornada Full Stack",
        description:
          "Aplicação web completa que replica a experiência do Spotify, com integração entre front-end, back-end e base de dados.",
        features: [
          "Implementação completa desde a interface do utilizador até à persistência de dados, garantindo uma aplicação ponta-a-ponta funcional.",
          "Componente dinâmico que permite a reprodução de faixas, controlo de progresso e navegação entre músicas.",
          "Sistema que consome dados de uma API para renderizar listas de artistas e músicas de forma automática.",
          "Utilização de react-router-dom para navegação fluida entre páginas de artistas e álbuns específicos.",
          "Inclusão de scripts para inserção em massa de dados (insertMany) na base de dados, facilitando o povoamento inicial do sistema.",
        ],
        developers: "Samuel Furtado Fortes",
        extra: { label: "Stack:", value: "MERN (MongoDB, Express, React, Node)" },
      },
    },
  },
  contact: {
    title: "Entre em Contato",
    subtitle: "Estou sempre aberto a novas oportunidades e colaborações.",
    email: "Email",
    emailCopied: "Email copiado!",
    emailCopiedDesc:
      "O endereço de email foi copiado para a sua área de transferência.",
    cvTitle: "Quer saber mais?",
    cvText:
      "Faça o download do meu currículo para um resumo completo da minha jornada profissional.",
    cvButton: "Baixar CV",
    rights: "Todos os direitos reservados.",
  },
};
