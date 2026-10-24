"use client";

import { Bell, Command, Search } from "lucide-react";

type TopbarProps = { title: string; subtitle: string; onSearch: (value: string) => void };

export function Topbar({ title, subtitle, onSearch }: TopbarProps) {
  return (
    <header className="topbar">
      <div className="page-heading"><div className="breadcrumb">Workspace <span>/</span> <strong>{title}</strong></div><p>{subtitle}</p></div>
      <div className="topbar-actions">
        <label className="search-box"><Search size={16} /><input placeholder="Search projects..." onChange={(event) => onSearch(event.target.value)} /><kbd><Command size={11} /> K</kbd></label>
        <button className="icon-button" aria-label="Notifications"><Bell size={18} /><span className="notification-dot" /></button>
        <span className="topbar-avatar">OL</span>
      </div>
    </header>
  );
}
