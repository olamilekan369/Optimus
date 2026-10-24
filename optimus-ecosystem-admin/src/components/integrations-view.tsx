"use client";

import { Check, ExternalLink, Plug, Settings2, ShieldCheck, Unplug } from "lucide-react";
import { useState } from "react";
import { integrations as initialIntegrations } from "@/data/mock-data";
import { StatusPill } from "@/components/dashboard-view";

export function IntegrationsView({ searchTerm }: { searchTerm: string }) {
  const [statuses, setStatuses] = useState<Record<string, string>>({});
  const items = initialIntegrations.filter((item) => `${item.name} ${item.description} ${item.category}`.toLowerCase().includes(searchTerm.toLowerCase()));
  const connectedCount = initialIntegrations.filter((item) => (statuses[item.id] ?? item.status) === "Connected").length;

  function toggleConnection(id: string) {
    const item = initialIntegrations.find((entry) => entry.id === id);
    if (!item) return;
    const current = statuses[id] ?? item.status;
    if (current === "Connected") {
      setStatuses((old) => ({ ...old, [id]: "Not connected" }));
      return;
    }
    window.alert(`${item.name} is currently a UI placeholder. Real OAuth/API connection requires a secure server-side integration.`);
    setStatuses((old) => ({ ...old, [id]: "Setup required" }));
  }

  return <div className="view-stack">
    <section className="page-title-row"><div><div className="eyebrow">CONNECTED WORKSPACE</div><h1>Integrations</h1><p>Bring your developer tools into one command center.</p></div><div className="integration-summary"><span className="integration-summary-icon"><Plug size={17} /></span><span><strong>{connectedCount} of {initialIntegrations.length}</strong><small>tools connected</small></span></div></section>
    <div className="integration-callout"><div className="callout-icon"><ShieldCheck size={20} /></div><div><strong>Secure connections by design</strong><p>Provider credentials will be stored server-side. Never paste private API keys into the dashboard or commit them to GitHub.</p></div></div>
    <div className="integration-categories"><span>ALL TOOLS</span><span>DEVELOPMENT</span><span>AI & AUTOMATION</span><span>INFRASTRUCTURE</span></div>
    <section className="integration-grid">
      {items.map((item) => { const status = (statuses[item.id] ?? item.status) as typeof item.status; return <article className="integration-card" key={item.id}><div className="integration-card-head"><div className={`integration-logo large ${item.color}`}>{item.initials}</div><StatusPill status={status} /></div><span className="category-label">{item.category}</span><h3>{item.name}</h3><p>{item.description}</p><div className="integration-card-footer"><span className="integration-security"><ShieldCheck size={13} /> Secure OAuth/API</span><button className={status === "Connected" ? "secondary-button compact" : "primary-button compact"} onClick={() => toggleConnection(item.id)}>{status === "Connected" ? <><Unplug size={14} /> Disconnect</> : <><Settings2 size={14} /> Configure</>}</button></div></article>; })}
    </section>
    <p className="fine-print"><Check size={14} /> Connection status is currently demo state. Real provider authorization is not yet implemented.</p>
  </div>;
}
