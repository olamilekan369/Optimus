"use client";

import { Activity, CheckCircle2, CircleAlert, GitBranch, Search, Clock3 } from "lucide-react";
import { activity } from "@/data/mock-data";

export function ActivityView({ searchTerm }: { searchTerm: string }) {
  const filtered = activity.filter((item) => `${item.title} ${item.detail} ${item.kind}`.toLowerCase().includes(searchTerm.toLowerCase()));
  return <div className="view-stack"><section className="page-title-row"><div><div className="eyebrow">AUDIT TRAIL</div><h1>Activity log</h1><p>A timeline of important changes across your workspace.</p></div><div className="integration-summary"><Activity size={18} /><span><strong>{filtered.length} events</strong><small>Sample activity</small></span></div></section><section className="panel activity-page-panel"><div className="panel-heading"><div><h2>Recent events</h2><p>Demo data until integrations are connected.</p></div><div className="filter-control"><Search size={15} /><span>All activity</span></div></div>{filtered.map((item) => <div className="activity-row activity-page-row" key={item.id}><span className={`activity-marker ${item.kind}`}>{item.kind === "success" ? <CheckCircle2 size={15} /> : item.kind === "warning" || item.kind === "integration" ? <CircleAlert size={15} /> : item.kind === "project" ? <GitBranch size={15} /> : <Clock3 size={15} />}</span><div className="activity-copy"><strong>{item.title}</strong><span>{item.detail}</span></div><time>{item.time}</time></div>)}</section></div>;
}
