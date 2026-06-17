import { Github, Linkedin } from "lucide-react";
import WhatsAppIcon from "@/components/icons/whatsapp-icon";
import type { ProjectCategory, ProjectId } from "@/locales/types";

type IconComponent = React.ComponentType<{ className?: string }>;

export const projectOrder: ProjectId[] = ["saude", "chatbot", "viagens", "spotify"];

export const projectsMeta: Record<
  ProjectId,
  {
    category: ProjectCategory;
    repoUrl: string;
    imageIds: string[];
    tags: string[];
    createdAt: string;
  }
> = {
  saude: {
    category: "fullstack",
    repoUrl: "https://github.com/SamuelFortes/plataforma_virtual",
    imageIds: ["plataforma-saude-1"],
    tags: ["FastAPI", "Python", "React", "Tailwind CSS", "PostgreSQL", "SQLAlchemy", "Alembic", "JWT"],
    createdAt: "07/12/2025",
  },
  chatbot: {
    category: "ia",
    repoUrl: "https://github.com/SamuelFortes/projeto-chatbot-com-IA",
    imageIds: ["chatbot-ia-1"],
    tags: ["Python", "Streamlit", "OpenAI API"],
    createdAt: "19/09/2025",
  },
  viagens: {
    category: "frontend",
    repoUrl: "https://github.com/SamuelFortes/travel-website-reponsive",
    imageIds: ["website-viagens-1"],
    tags: ["HTML5", "CSS3", "JavaScript", "Google Fonts"],
    createdAt: "26/07/2025",
  },
  spotify: {
    category: "fullstack",
    repoUrl: "https://github.com/SamuelFortes/deploy-jornada-full-stack",
    imageIds: ["spotify-clone-1"],
    tags: ["React", "Vite", "Node.js", "Express", "MongoDB", "Axios"],
    createdAt: "23/03/2025",
  },
};

export const socialLinks: { name: string; url: string; icon: IconComponent }[] = [
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
    icon: WhatsAppIcon,
  },
];

export const emailAddress = "samuelfurtadofortes@gmail.com";
