"use client";

import {
  ArrowDownRight, ArrowRight, ArrowUpRight, CheckCircle2, CircleAlert,
  Clock3, GitBranch, Plus, Server, Sparkles, Zap
} from "lucide-react";
import { activity, integrations, projects } from "@/data/mock-data";
import type { ViewKey } from "@/lib/types";

type Props = { onNavigate: (view: ViewKey) => void };

export function DashboardView({ onNavigate }: Props) {
  const healthy = projects.filter((project) => project.status === "Healthy").length;
  const connected = integrations.filter((item) => item.status === "Connected").length;

  return (
    <div className="view-stack">
      <section className="welcome-row">
        <div><div className="eyebrow"><Sparkles size={14} /> YOUR DEVELOPER COMMAND CENTER</div><h1>Good to see you again.</h1><p>Here&apos;s what&apos;s happening across your ecosystem today.</p></div>
        <button className="primary-button" onClick={() => onNavigate("projects")}><Plus size={17} /> Manage projects</button>
      </section>

      <section className="metric-grid">
        <Metric title="Total projects" value={String(projects.length).padStart(2, "0")} detail="Across your workspace" icon={<GitBranch size={18} />} trend="+2 this month" trendUp />
        <Metric title="Healthy projects" value={`${healthy}/${projects.length}`} detail="Project status overview" icon={<CheckCircle2 size={18} />} trend="Stable" trendUp />
        <Metric title="Connected tools" value={`${connected}/${integrations.length}`} detail="Integrations connected" icon={<Zap size={18} />} trend="Setup needed" />
        <Metric title="Pending actions" value="03" detail="Items to review" icon={<CircleAlert size={18} />} trend="Needs attention" />
      </section>

      <section className="content-grid">
        <div className="panel project-panel">
          <div className="panel-heading"><div><h2>Your projects</h2><p>Keep track of the work you&apos;re building.</p></div><button className="text-button" onClick={() => onNavigate("projects")}>View all <ArrowRight size={15} /></button></div>
          <div className="project-list">
            {projects.slice(0, 4).map((project) => (
              <div className="project-row" key={project.id}>
                <div className={`project-icon ${project.color}`}>{project.initials}</div>
                <div className="project-info"><strong>{project.name}</strong><span>{project.description}</span><div className="progress-track"><div className={`progress-fill ${project.color}`} style={{ width: `${project.progress}%` }} /></div></div>
                <div className="project-meta"><StatusPill status={project.status} /><span>{project.progress}%</span></div>
              </div>
            ))}
          </div>
        </div>

        <div className="panel integrations-panel">
          <div className="panel-heading"><div><h2>Tool connections</h2><p>Your developer stack at a glance.</p></div><button className="square-button" onClick={() => onNavigate("integrations")} aria-label="Manage integrations"><ArrowRight size={16} /></button></div>
          <div className="integration-mini-list">
            {integrations.slice(0, 4).map((item) => <div className="integration-mini" key={item.id}><div className={`integration-logo ${item.color}`}>{item.initials}</div><div className="integration-mini-info"><strong>{item.name}</strong><span>{item.category}</span></div><span className={`connection-dot ${item.status === "Connected" ? "connected" : ""}`} title={item.status} /></div>)}
          </div>
          <button className="secondary-button full-button" onClick={() => onNavigate("integrations")}>Manage integrations <ArrowRight size={15} /></button>
        </div>
      </section>

      <section className="content-grid bottom-grid">
        <div className="panel activity-panel">
          <div className="panel-heading"><div><h2>Recent activity</h2><p>Latest changes across your workspace.</p></div><button className="text-button" onClick={() => onNavigate("activity")}>Activity log <ArrowRight size={15} /></button></div>
          <div className="activity-list">
            {activity.slice(0, 4).map((item) => <div className="activity-row" key={item.id}><span className={`activity-marker ${item.kind}`}><ActivityIcon kind={item.kind} /></span><div className="activity-copy"><strong>{item.title}</strong><span>{item.detail}</span></div><time>{item.time}</time></div>)}
          </div>
        </div>
        <div className="panel assistant-panel">
          <div className="assistant-orb"><Sparkles size={22} /></div><div className="eyebrow">OPTIMUS AI</div><h2>Your ecosystem, one place.</h2><p>Connect your tools to unlock a unified view of your repositories, workflows, agents, and deployments.</p><button className="secondary-button" onClick={() => onNavigate("integrations")}>Set up your tools <ArrowRight size={15} /></button><div className="assistant-decoration"><Server size={60} /></div>
        </div>
      </section>
    </div>
  );
}

function Metric({ title, value, detail, icon, trend, trendUp = false }: { title: string; value: string; detail: string; icon: React.ReactNode; trend: string; trendUp?: boolean }) {
  return <div className="metric-card"><div className="metric-top"><span>{title}</span><span className="metric-icon">{icon}</span></div><div className="metric-value">{value}</div><div className="metric-bottom"><span>{detail}</span><span className={`metric-trend ${trendUp ? "positive" : ""}`}>{trendUp ? <ArrowUpRight size={13} /> : <ArrowDownRight size={13} />}{trend}</span></div></div>;
}

export function StatusPill({ status }: { status: string }) {
  const className = status === "Healthy" || status === "Connected" ? "success" : status === "Needs attention" || status === "Setup required" ? "warning" : "neutral";
  return <span className={`status-pill ${className}`}><span />{status}</span>;
}

function ActivityIcon({ kind }: { kind: string }) {
  if (kind === "success") return <CheckCircle2 size={14} />;
  if (kind === "warning" || kind === "integration") return <CircleAlert size={14} />;
  if (kind === "project") return <GitBranch size={14} />;
  return <Clock3 size={14} />;
}
