export interface ProjectType {
  name: string;
  description: string;
  link?: string;
  image: string;
  status: "success" | "running" | "failed" | "cancelled" | "skipped";
  type: "personal" | "work" | "school" | "other";
  tags: string[];
}

export const PROJECTS: ProjectType[] = [
  {
    name: "Portfolio",
    description: "My personal portfolio website",
    link: "https://galer7.com",
    image: "https://via.placeholder.com/150",
    status: "success",
    type: "personal",
    tags: ["sst", "vite", "css", "react"],
  },
  {
    name: "History GPT",
    description: "AI-generated visual history",
    link: "https://history-gpt.galer7.com",
    image: "https://via.placeholder.com/150",
    status: "success",
    type: "personal",
    tags: ["ai", "sst"],
  },
  {
    name: "Flagship Founders GenAI",
    description: "Maritime AI assistant",
    link: "https://wavewi.se",
    image: "https://via.placeholder.com/150",
    status: "running",
    type: "work",
    tags: ["sst", "pgvector", "ai", "react"],
  },
  {
    name: "Former",
    description: "Bootstrap Grasshopper components with AI",
    image: "https://via.placeholder.com/150",
    status: "failed",
    type: "personal",
    tags: ["c#", "ai", "grasshopper"],
  },
  {
    name: "SRL Utils",
    description: "AI toolkit for Romanian entrepreneurs",
    image: "https://via.placeholder.com/150",
    status: "skipped",
    type: "personal",
    tags: ["ai"],
  },
  {
    name: "Tribal Wars GPT",
    description: "AI that plays Tribal Wars",
    image: "https://via.placeholder.com/150",
    status: "cancelled",
    type: "personal",
    tags: ["ai"],
  },
];
