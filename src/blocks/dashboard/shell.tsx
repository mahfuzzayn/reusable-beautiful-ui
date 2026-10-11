"use client";

import { useState, type ReactNode } from "react";
import { Sidebar } from "./sidebar";
import { Topbar } from "./topbar";

/** Fixed sidebar + scrollable column; off-canvas drawer below lg. */
export function DashboardShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-page">
      {/* desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[220px] lg:block">
        <Sidebar />
      </aside>

      {/* mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${menuOpen ? "" : "pointer-events-none"}`}
        aria-hidden={!menuOpen}
      >
        <div
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-black/50 transition-opacity duration-200 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute inset-y-0 left-0 w-[240px] shadow-2xl transition-transform duration-200 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Sidebar onNavigate={() => setMenuOpen(false)} />
        </div>
      </div>

      <div className="flex min-h-screen flex-col lg:pl-[220px]">
        <Topbar onMenu={() => setMenuOpen(true)} />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
