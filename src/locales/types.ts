export type Language = "pt" | "en";

export type ProjectCategory = "fullstack" | "frontend" | "ia";

export type ProjectId = "saude" | "chatbot" | "viagens" | "spotify";

export type JourneyType = "work" | "education";

export interface JourneyItem {
  id: string;
  type: JourneyType;
  year: string;
  period: string;
  title: string;
  org: string;
  bullets: string[];
}

export interface ProjectText {
  status: string;
  title: string;
  description: string;
  features: string[];
  developers: string;
  extra?: { label: string; value: string };
}

export interface Dictionary {
  nav: {
    home: string;
    about: string;
    skills: string;
    journey: string;
    projects: string;
    contact: string;
  };
  about: {
    label: string;
    bio: string;
    livesInLabel: string;
    location: string[];
    experienceLabel: string;
    experienceValue: string;
    downloadLabel: string;
    cvFile: string;
  };
  skills: {
    title: string;
    subtitle: string;
  };
  journey: {
    title: string;
    subtitle: string;
    items: JourneyItem[];
  };
  projects: {
    title: string;
    subtitle: string;
    filters: Record<"all" | ProjectCategory, string>;
    repoButton: string;
    detailsButton: string;
    createdLabel: string;
    featuresLabel: string;
    developersLabel: string;
    items: Record<ProjectId, ProjectText>;
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    emailCopied: string;
    emailCopiedDesc: string;
    cvTitle: string;
    cvText: string;
    cvButton: string;
    rights: string;
  };
}
