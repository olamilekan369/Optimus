"use client";

import { Search, SlidersHorizontal, Plus, ArrowUpRight, FolderGit2 } from "lucide-react";
import { useMemo, useState } from "react";
import { projects as initialProjects } from "@/data/mock-data";
import { StatusPill } from "@/components/dashboard-view";

type Props = { searchTerm: string };

export function ProjectsView({ searchTerm }: Props) {
  const [filter, setFilter] = useState("All");
  const projects = useMemo(() => initialProjects.filter((project) => {
    const matchesSearch = `${project.name} ${project.description} ${project.category}`.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "All" || project.status === filter;
    return matchesSearch && matchesFilter;
  }), [searchTerm, filter]);

  return <div className="view-stack">
    <section className="page-title-row"><div><div className="eyebrow">WORKSPACE</div><h1>Projects</h1><p>Organize and monitor the products you&apos;re building.</p></div><button className="primary-button" onClick={() => window.alert("Project creation form is the next implementation step.")}><Plus size={17} /> New project</button></section>
    <div className="toolbar"><div className="toolbar-search"><Search size={16} /><span>{searchTerm || "Search all projects using the top search bar"}</span></div><div className="filter-control"><SlidersHorizontal size={15} /><select value={filter} onChange={(event) => setFilter(event.target.value)} aria-label="Filter projects"><option>All</option><option>Healthy</option><option>Needs attention</option><option>In progress</option></select></div></div>
    <section className="projects-grid">
      {projects.map((project) => <article className="project-card" key={project.id}><div className="project-card-top"><div className={`project-icon large ${project.color}`}>{project.initials}</div><button className="icon-button subtle" aria-label={`Open ${project.name}`}><ArrowUpRight size={17} /></button></div><span className="category-label">{project.category}</span><h3>{project.name}</h3><p>{project.description}</p><div className="project-card-status"><StatusPill status={project.status} /><span>{project.updated}</span></div><div className="progress-label"><span>Project progress</span><strong>{project.progress}%</strong></div><div className="progress-track tall"><div className={`progress-fill ${project.color}`} style={{ width: `${project.progress}%` }} /></div></article>)}
      {projects.length === 0 && <div className="empty-state"><FolderGit2 size={28} /><strong>No matching projects</strong><span>Try another search or status filter.</span></div>}
    </section>
  </div>;
}
