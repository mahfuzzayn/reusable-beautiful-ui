import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { navItems } from "@/data/dashboard";
import { cn } from "@/lib/utils";

/** Full-height black menu: teal ring emblem, "CRM ADMIN" wordmark, 30 links. */
export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="flex h-full flex-col bg-ink">
      <Link
        href="/"
        onClick={onNavigate}
        className="flex h-[66px] shrink-0 items-center gap-2.5 px-5"
      >
        <span className="grid size-10 place-items-center rounded-full border-2 border-teal/80 text-teal">
          <svg viewBox="0 0 24 24" className="size-6" aria-hidden>
            <circle cx="12" cy="8.2" r="3.4" fill="currentColor" />
            <path
              d="M4.4 20.4a8 8 0 0 1 15.2 0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <span className="text-[16px] leading-none tracking-wide">
          <span className="font-bold text-teal">CRM</span>{" "}
          <span className="font-bold text-white">ADMIN</span>
        </span>
      </Link>

      <nav className="sidebar-scroll flex-1 overflow-y-auto pb-6">
        <ul>
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href="/"
                onClick={onNavigate}
                aria-current={item.active ? "page" : undefined}
                className={cn(
                  "flex h-[40px] items-center gap-2.5 border-l-[3px] px-[13px] text-[13px] transition-colors",
                  item.active
                    ? "border-teal bg-white/[0.04] font-medium text-white"
                    : "border-transparent text-white/65 hover:bg-white/5 hover:text-white",
                )}
              >
                <item.icon
                  size={15}
                  strokeWidth={2}
                  className={cn(
                    "shrink-0",
                    item.active ? "text-teal" : "text-white/50",
                  )}
                  aria-hidden
                />
                <span className="truncate">{item.label}</span>
                {!item.active && (
                  <ChevronLeft
                    size={14}
                    className="ms-auto shrink-0 text-white/35"
                    aria-hidden
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
