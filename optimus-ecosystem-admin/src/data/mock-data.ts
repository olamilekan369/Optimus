import type { Integration, Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "opt-01",
    name: "Optimus Developer OS",
    description: "Personal AI developer command center",
    category: "AI Platform",
    status: "In progress",
    progress: 62,
    updated: "Updated 18 min ago",
    initials: "OP",
    color: "blue"
  },
  {
    id: "whi-02",
    name: "While",
    description: "Autonomous communication and execution",
    category: "AI Communications",
    status: "Healthy",
    progress: 88,
    updated: "Updated 1 hour ago",
    initials: "WH",
    color: "violet"
  },
  {
    id: "abr-03",
    name: "Abracadabra",
    description: "AI-powered call center workflows",
    category: "Voice AI",
    status: "Needs attention",
    progress: 74,
    updated: "Updated yesterday",
    initials: "AB",
    color: "green"
  },
  {
    id: "yon-04",
    name: "YONDI Group",
    description: "Admin tools and business web experiences",
    category: "Web Platform",
    status: "Healthy",
    progress: 93,
    updated: "Updated 2 days ago",
    initials: "YO",
    color: "orange"
  }
];

export const integrations: Integration[] = [
  { id: "github", name: "GitHub", description: "Repositories, commits, pull requests and issues", category: "Development", status: "Setup required", initials: "GH", color: "dark" },
  { id: "supabase", name: "Supabase", description: "Database, authentication and project data", category: "Database", status: "Not connected", initials: "SB", color: "green" },
  { id: "openai", name: "OpenAI", description: "Power Optimus and your AI agents", category: "AI provider", status: "Not connected", initials: "AI", color: "blue" },
  { id: "n8n", name: "n8n", description: "Workflow automation and webhook triggers", category: "Automation", status: "Not connected", initials: "n8", color: "orange" },
  { id: "vercel", name: "Vercel", description: "Deployment status and application hosting", category: "Deployment", status: "Not connected", initials: "VC", color: "dark" },
  { id: "docker", name: "Docker", description: "Isolated development and test workspaces", category: "Infrastructure", status: "Setup required", initials: "DK", color: "violet" }
];

export const activity = [
  { id: 1, title: "Optimus Developer OS project updated", detail: "Project workspace", time: "18 min ago", kind: "project" },
  { id: 2, title: "GitHub integration needs setup", detail: "Integrations", time: "42 min ago", kind: "integration" },
  { id: 3, title: "While marked healthy", detail: "Project health", time: "1 hour ago", kind: "success" },
  { id: 4, title: "Docker worker configuration pending", detail: "Infrastructure", time: "3 hours ago", kind: "warning" },
  { id: 5, title: "YONDI Group project updated", detail: "Project workspace", time: "2 days ago", kind: "project" }
];
