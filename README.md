# Samuel Furtado Fortes | Portfolio

Portfolio pessoal de **Samuel Furtado Fortes**, desenvolvedor Full-Stack e estudante de Ciencia da Computacao na UFPI (Universidade Federal do Piaui).

## Sobre o Projeto

Site de portfolio single-page construido com Next.js, apresentando:

- **Hero** com terminal interativo animado
- **Sobre mim** com foto e descricao pessoal
- **Skills** com marquee animado de tecnologias (C#, React, TypeScript, Python, PostgreSQL, etc.)
- **Jornada Profissional** com timeline de experiencias (FADEX, PIBITI)
- **Projetos** com detalhes de projetos academicos e pessoais
- **Contato** com links para LinkedIn, GitHub, WhatsApp e email
- **Tema claro/escuro** com toggle na navegacao flutuante

## Stack

| Tecnologia | Uso |
|---|---|
| [Next.js 15](https://nextjs.org/) | Framework React com App Router |
| [React 19](https://react.dev/) | Biblioteca de UI |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem estatica |
| [Tailwind CSS 3](https://tailwindcss.com/) | Estilizacao utilitaria |
| [shadcn/ui](https://ui.shadcn.com/) + Radix UI | Componentes acessiveis |
| [Lucide Icons](https://lucide.dev/) | Icones |
| [next-themes](https://github.com/pacocoursey/next-themes) | Tema claro/escuro |

## Pre-requisitos

- **Node.js** 18 ou superior
- **npm**, **yarn** ou **pnpm**

## Como executar

```bash
# 1. Clone o repositorio
git clone https://github.com/SamuelFortes/samuel-portfolio.git
cd samuel-portfolio

# 2. Instale as dependencias
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

O site estara disponivel em **http://localhost:3000**.

## Scripts disponiveis

| Comando | Descricao |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de producao |
| `npm run start` | Inicia o servidor de producao |
| `npm run lint` | Executa o linter (ESLint) |

## Estrutura do Projeto

```
samuel_portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout raiz (fontes, tema, metadata)
│   │   ├── page.tsx            # Pagina principal (single-page)
│   │   └── globals.css         # Variaveis CSS e estilos globais
│   ├── components/
│   │   ├── layout/
│   │   │   └── floating-nav.tsx  # Navegacao flutuante inferior
│   │   ├── sections/
│   │   │   ├── hero.tsx          # Secao inicial com terminal
│   │   │   ├── about.tsx         # Secao sobre mim
│   │   │   ├── skills.tsx        # Secao de habilidades
│   │   │   ├── experience.tsx    # Secao de experiencia
│   │   │   ├── projects.tsx      # Secao de projetos
│   │   │   └── contact.tsx       # Secao de contato
│   │   ├── ui/                   # Componentes shadcn/ui
│   │   ├── mode-toggle.tsx       # Toggle de tema
│   │   └── theme-provider.tsx    # Provider de tema
│   ├── hooks/
│   │   └── use-toast.ts          # Hook de notificacoes toast
│   └── lib/
│       ├── utils.ts              # Utilitario cn() para classes
│       └── placeholder-images.*  # Dados de imagens placeholder
├── public/                       # Arquivos estaticos (CV, imagens)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

## Deploy

O projeto pode ser hospedado em qualquer plataforma que suporte Next.js:

- [Render](https://render.com/) (recomendado)
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- Qualquer servidor Node.js com `npm run build && npm run start`

## Autor

**Samuel Furtado Fortes**
- GitHub: [SamuelFortes](https://github.com/SamuelFortes)
- LinkedIn: [dev-samuel-fortes](https://www.linkedin.com/in/dev-samuel-fortes)
- Email: samuelfurtadofortes@gmail.com

## Licenca

Este projeto e de uso pessoal. Todos os direitos reservados.
