"use client";

import { useMemo, useState } from "react";
import { Sidebar } from "@/components/sidebar";
import { Topbar } from "@/components/topbar";
import { DashboardView } from "@/components/dashboard-view";
import { ProjectsView } from "@/components/projects-view";
import { IntegrationsView } from "@/components/integrations-view";
import { ActivityView } from "@/components/activity-view";
import { SettingsView } from "@/components/settings-view";
import type { ViewKey } from "@/lib/types";

const pageCopy: Record<ViewKey, { title: string; subtitle: string }> = {
  overview: { title: "Overview", subtitle: "Your projects, tools, and work at a glance." },
  projects: { title: "Projects", subtitle: "Manage the products and applications you are building." },
  integrations: { title: "Integrations", subtitle: "Connect the tools that power your workflow." },
  activity: { title: "Activity log", subtitle: "Review the latest changes across your ecosystem." },
  settings: { title: "Settings", subtitle: "Configure your workspace and preferences." }
};

export function AppShell() {
  const [activeView, setActiveView] = useState<ViewKey>("overview");
  const [searchTerm, setSearchTerm] = useState("");
  const page = useMemo(() => pageCopy[activeView], [activeView]);

  function navigate(view: ViewKey) {
    setActiveView(view);
    setSearchTerm("");
  }

  return <div className="app-shell"><Sidebar activeView={activeView} onNavigate={navigate} /><div className="main-column"><Topbar title={page.title} subtitle={page.subtitle} onSearch={setSearchTerm} /><main className="main-content">{activeView === "overview" && <DashboardView onNavigate={navigate} />}{activeView === "projects" && <ProjectsView searchTerm={searchTerm} />}{activeView === "integrations" && <IntegrationsView searchTerm={searchTerm} />}{activeView === "activity" && <ActivityView searchTerm={searchTerm} />}{activeView === "settings" && <SettingsView />}</main><footer className="app-footer"><span>OPTIMUS ECOSYSTEM ADMIN</span><span><i /> Local development · MVP</span></footer></div></div>;
}
