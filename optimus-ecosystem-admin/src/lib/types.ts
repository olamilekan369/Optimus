export type ViewKey = "overview" | "projects" | "integrations" | "activity" | "settings";

export type ProjectStatus = "Healthy" | "Needs attention" | "In progress";

export type Project = {
  id: string;
  name: string;
  description: string;
  category: string;
  status: ProjectStatus;
  progress: number;
  updated: string;
  initials: string;
  color: "blue" | "violet" | "green" | "orange";
};

export type IntegrationStatus = "Connected" | "Not connected" | "Setup required";

export type Integration = {
  id: string;
  name: string;
  description: string;
  category: string;
  status: IntegrationStatus;
  initials: string;
  color: "blue" | "violet" | "green" | "orange" | "dark";
};
