"use client";

import {
  Activity, Bot, Boxes, ChevronDown, CircleHelp, Code2, LayoutDashboard,
  Plug, Settings2, ShieldCheck, Workflow
} from "lucide-react";
import type { ViewKey } from "@/lib/types";

type SidebarProps = {
  activeView: ViewKey;
  onNavigate: (view: ViewKey) => void;
};

const navigation: { label: string; key: ViewKey; icon: typeof LayoutDashboard }[] = [
  { label: "Overview", key: "overview", icon: LayoutDashboard },
  { label: "Projects", key: "projects", icon: Boxes },
  { label: "Integrations", key: "integrations", icon: Plug },
  { label: "Activity log", key: "activity", icon: Activity },
  { label: "Settings", key: "settings", icon: Settings2 }
];

export function Sidebar({ activeView, onNavigate }: SidebarProps) {
  return (
    <aside className="sidebar">
      <button className="brand" onClick={() => onNavigate("overview")} aria-label="Go to overview">
        <span className="brand-mark"><Code2 size={21} /></span>
        <span className="brand-copy"><strong>OPTIMUS</strong><small>ECOSYSTEM ADMIN</small></span>
      </button>

      <div className="workspace-switcher">
        <span className="workspace-avatar">O</span>
        <span className="workspace-copy"><strong>Personal workspace</strong><small>Developer account</small></span>
        <ChevronDown size={15} className="muted-icon" />
      </div>

      <div className="nav-label">WORKSPACE</div>
      <nav className="nav-list" aria-label="Main navigation">
        {navigation.map(({ label, key, icon: Icon }) => (
          <button key={key} className={`nav-item ${activeView === key ? "active" : ""}`} onClick={() => onNavigate(key)}>
            <Icon size={18} strokeWidth={1.8} />
            <span>{label}</span>
            {key === "integrations" && <span className="nav-count">6</span>}
          </button>
        ))}
      </nav>

      <div className="nav-label nav-label-spaced">AI & AUTOMATION</div>
      <button className="nav-item nav-placeholder" onClick={() => onNavigate("overview")}><Bot size={18} strokeWidth={1.8} /><span>AI agents</span><span className="soon">Soon</span></button>
      <button className="nav-item nav-placeholder" onClick={() => onNavigate("overview")}><Workflow size={18} strokeWidth={1.8} /><span>Workflows</span><span className="soon">Soon</span></button>

      <div className="sidebar-bottom">
        <div className="security-note"><ShieldCheck size={17} /><span><strong>Workspace security</strong><small>Connect tools securely</small></span></div>
        <button className="help-link" onClick={() => onNavigate("settings")}><CircleHelp size={17} /> Help & setup guide</button>
        <div className="profile-row"><span className="profile-avatar">OL</span><span className="profile-copy"><strong>Developer</strong><small>Local workspace</small></span><span className="online-dot" /></div>
      </div>
    </aside>
  );
}
