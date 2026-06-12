import type { Dictionary } from "./types";

export const en: Dictionary = {
  nav: {
    home: "Home",
    about: "About",
    skills: "Skills",
    journey: "Journey",
    projects: "Projects",
    contact: "Contact",
  },
  about: {
    label: "About",
    bio: "I'm a Computer Science student at the Federal University of Piauí (UFPI) and I work as a Full Stack developer, with a consolidated track record and stronger hands-on experience on the Front-end. I'm currently deepening my studies in C# and the .NET ecosystem, directing my focus towards Back-end development and the creation of robust, scalable and efficient systems.",
    livesInLabel: "Lives in",
    location: ["Teresina", "Brazil"],
    experienceLabel: "Experience",
    experienceValue: "1+ year | Internship & Research",
    downloadLabel: "Download",
    cvFile: "Resume.pdf",
  },
  skills: {
    title: "Focus & Skills",
    subtitle: "Technologies and tools I use on a daily basis.",
  },
  journey: {
    title: "Journey",
    subtitle:
      "An overview of my education, hands-on experience and relevant projects.",
    items: [
      {
        id: "ufpi",
        type: "education",
        year: "2023",
        period: "February/2023 - July/2027 (expected)",
        title: "B.Sc. in Computer Science",
        org: "Federal University of Piauí (UFPI)",
        bullets: [
          "Currently in the 6th semester of the program.",
          "Solid foundation in algorithms, data structures, software engineering and databases.",
        ],
      },
      {
        id: "pibiti",
        type: "work",
        year: "2025",
        period: "August/2025 - July/2026",
        title: "Scholarship Researcher",
        org: "PIBITI - Institutional Scholarship Program for Initiation in Technological Development and Innovation",
        bullets: [
          "Full-Stack development of a web platform focused on public health management.",
          "Building REST APIs and responsive interfaces using FastAPI.",
          "Modeling relational databases (PostgreSQL, Supabase).",
          "Gathering technical requirements and analyzing care workflows with end users.",
          "Writing the technical documentation of the system.",
          "Version control and project repository organization using Git and GitHub.",
        ],
      },
      {
        id: "fadex",
        type: "work",
        year: "2025",
        period: "August/2025 - present",
        title: "IT Intern",
        org: "Cultural Foundation for Research, Teaching, Extension and Innovation - FADEX",
        bullets: [
          "Front-End development: working on the full development cycle of an Electronic Document Management system, using Next.js (TypeScript) for modern interfaces.",
          "Writing Standard Operating Procedures (SOPs) to train employees on the internal system.",
          "Data processing and analysis in Excel spreadsheets.",
          "Designing prototypes for web applications using Figma.",
        ],
      },
    ],
  },
  projects: {
    title: "My Projects",
    subtitle: "Projects under development and applied research.",
    filters: {
      all: "All",
      fullstack: "Full-Stack",
      frontend: "Front-End",
      ia: "AI",
    },
    repoButton: "Project Repository",
    detailsButton: "Project Description",
    createdLabel: "Created on:",
    featuresLabel: "Features",
    developersLabel: "Developer(s):",
    items: {
      saude: {
        status: "Academic Project",
        title: "Virtual Health Platform (UBS)",
        description:
          "Integrated management system for Primary Health Care Units, focused on digitizing situational diagnoses and team management.",
        features: [
          "Module for collecting and analyzing health indicators, enabling automated PDF reports on the situation of micro-areas.",
          "Complete system for managing health professionals, role assignment and mapping of Community Health Agents (ACS) coverage areas.",
          "Appointment scheduling with calendar view and time-slot blocking for internal organization of the unit.",
          "Tool to identify critical issues in community health and plan evidence-based interventions.",
          "Dedicated section for sharing training content and guidance for patients and professionals.",
        ],
        developers: "Samuel Furtado Fortes and Caio Victor Ferreira do Nascimento",
        extra: { label: "Architecture:", value: "Full Stack (Decoupled API/Frontend)" },
      },
      chatbot: {
        status: "Personal Project",
        title: "AI ChatBot",
        description:
          "Interactive chat interface integrated with the OpenAI API to simulate a virtual assistant.",
        features: [
          "Use of st.session_state to keep the conversation history (message list) active during navigation.",
          "Asynchronous calls to OpenAI's language model to generate dynamic responses.",
          "Chat input field (st.chat_input) that updates the interface in real time without manual reloading.",
          "Project registered under the ownership of Samuel Furtado Fortes, ensuring transparency and permission for contributions.",
        ],
        developers: "Samuel Furtado Fortes",
        extra: { label: "AI Model:", value: "GPT-4o" },
      },
      viagens: {
        status: "Personal Project",
        title: "Travel Website",
        description:
          "Responsive and dynamic landing page for a travel agency, focused on conversion and user experience.",
        features: [
          "Media queries to adapt the layout to different screen sizes (down to 900px), ensuring smooth navigation on mobile devices.",
          "Menu that automatically changes its appearance (background color and logo) when scrolling through the page.",
          "Side navigation for smartphones with icon animation and background scroll locking for better usability.",
          "Strategically placed contact areas via WhatsApp, E-mail and Phone, optimized for lead generation.",
          "Fixed background images (background-attachment: fixed) to create depth effects while browsing.",
        ],
        developers: "Samuel Furtado Fortes",
        extra: { label: "Type:", value: "Web Design / Front-End" },
      },
      spotify: {
        status: "Study Project",
        title: "Spotify Clone - Full Stack Journey",
        description:
          "Complete web application that replicates the Spotify experience, integrating front-end, back-end and database.",
        features: [
          "Full implementation from the user interface to data persistence, delivering a functional end-to-end application.",
          "Dynamic component that allows track playback, progress control and navigation between songs.",
          "System that consumes data from an API to automatically render lists of artists and songs.",
          "Use of react-router-dom for smooth navigation between specific artist and album pages.",
          "Scripts for bulk data insertion (insertMany) into the database, making it easy to seed the system.",
        ],
        developers: "Samuel Furtado Fortes",
        extra: { label: "Stack:", value: "MERN (MongoDB, Express, React, Node)" },
      },
    },
  },
  contact: {
    title: "Get in Touch",
    subtitle: "I'm always open to new opportunities and collaborations.",
    email: "Email",
    emailCopied: "Email copied!",
    emailCopiedDesc: "The email address has been copied to your clipboard.",
    cvTitle: "Want to know more?",
    cvText:
      "Download my resume for a complete summary of my professional journey.",
    cvButton: "Download CV",
    rights: "All rights reserved.",
  },
};
