"use client";

import { Bell, Database, KeyRound, MonitorCog, ShieldCheck, UserRound } from "lucide-react";

const sections = [
  { icon: UserRound, title: "Workspace profile", detail: "Workspace name, owner, and personal preferences", action: "Edit profile" },
  { icon: ShieldCheck, title: "Security & access", detail: "Session controls, permissions, and integration access", action: "Review security" },
  { icon: KeyRound, title: "API keys & secrets", detail: "Configure server-side credentials using environment variables", action: "View setup guide" },
  { icon: Database, title: "Database", detail: "Configure Supabase and PostgreSQL connections", action: "Configure database" },
  { icon: MonitorCog, title: "Desktop agent", detail: "Windows agent enrollment and local execution permissions", action: "Setup agent" },
  { icon: Bell, title: "Notifications", detail: "Choose which events should be surfaced to you", action: "Notification settings" }
];

export function SettingsView() {
  return <div className="view-stack"><section className="page-title-row"><div><div className="eyebrow">PREFERENCES</div><h1>Settings</h1><p>Configure your workspace and the way Optimus operates.</p></div></section><section className="panel settings-panel"><div className="panel-heading"><div><h2>Workspace configuration</h2><p>Settings are a starter interface and are not persisted yet.</p></div></div>{sections.map(({ icon: Icon, title, detail, action }) => <button className="settings-row" key={title} onClick={() => window.alert(`${title}: settings flow will be implemented with the corresponding backend integration.`)}><span className="settings-icon"><Icon size={18} /></span><span className="settings-copy"><strong>{title}</strong><small>{detail}</small></span><span className="settings-action">{action} <span>›</span></span></button>)}</section><div className="settings-note"><ShieldCheck size={18} /><div><strong>Keep credentials private</strong><p>Use local environment variables for development and your hosting provider&apos;s encrypted environment settings in production. Never commit secrets.</p></div></div></div>;
}
