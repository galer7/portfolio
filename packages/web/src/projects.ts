export const PROJECTS: ProjectType[] = [
  {
    name: "Portfolio",
    description: "My personal portfolio website",
    link: "https://galer7.com",
    image: "https://via.placeholder.com/150",
    status: "complete",
    type: "personal",
    tags: ["sst", "vite", "css", "react"],
  },
  {
    name: "History GPT",
    description: "AI-generated visual history",
    image: "https://via.placeholder.com/150",
    status: "in-progress",
    type: "personal",
    tags: ["ai", "react"],
  },
  {
    name: "Flagship Founders GenAI",
    description: "Maritime AI assistant",
    image: "https://via.placeholder.com/150",
    status: "in-progress",
    type: "work",
    tags: ["sst", "pgvector", "ai", "react"],
  },
  {
    name: "Former",
    description: "Bootstrap Grasshopper components with AI",
    image: "https://via.placeholder.com/150",
    status: "abandoned",
    type: "personal",
    tags: ["c#", "ai", "grasshopper"],
  },
  {
    name: "SRL Utils",
    description: "AI toolkit for Romanian entrepreneurs",
    image: "https://via.placeholder.com/150",
    status: "on-hold",
    type: "personal",
    tags: ["ai"],
  },
  {
    name: "Tribal Wars GPT",
    description: "AI that plays Tribal Wars",
    image: "https://via.placeholder.com/150",
    status: "on-hold",
    type: "personal",
    tags: ["ai"],
  },
];

export interface ProjectType {
  name: string;
  description: string;
  link?: string;
  image: string;
  status: "complete" | "pending" | "in-progress" | "abandoned" | "on-hold";
  type: "personal" | "work" | "school" | "other";
  tags: string[];
}
