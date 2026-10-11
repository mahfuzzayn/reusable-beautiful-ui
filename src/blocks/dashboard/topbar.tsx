import { Bell, ChevronDown, Globe, Search } from "lucide-react";
import { menuItems, profile } from "@/data/dashboard";
import { Logo } from "./logo";

function MobileNav() {
  return (
    <div className="scrollbar-hide mt-3 flex gap-2 overflow-x-auto lg:hidden">
      {menuItems.map((item, i) => (
        <a
          key={item.label}
          href="#"
          className={`flex h-9 shrink-0 items-center gap-2 rounded-full px-4 text-[12px] font-medium ${
            i === 0
              ? "bg-primary text-white"
              : "border border-line bg-surface text-ink-2"
          }`}
        >
          {item.label}
          {item.badge ? (
            <span
              className={`rounded-full px-1.5 text-[10px] font-semibold leading-4 ${
                i === 0 ? "bg-white/20" : "bg-primary-soft text-primary-deep"
              }`}
            >
              {item.badge}
            </span>
          ) : null}
        </a>
      ))}
    </div>
  );
}

export function Topbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-line/60 bg-canvas/90 px-5 py-3.5 backdrop-blur lg:px-7">
      <div className="flex items-center gap-3">
        {/* Mobile logo */}
        <span className="flex items-center gap-2 lg:hidden">
          <Logo className="size-6" />
          <span className="text-[15px] font-semibold text-ink">Donezo</span>
        </span>

        {/* Search */}
        <div className="flex h-11 w-full max-w-[430px] items-center gap-2.5 rounded-full border border-line bg-surface px-4 shadow-[0_1px_2px_rgba(16,24,20,0.04)] focus-within:border-primary/40">
          <Search size={16} className="shrink-0 text-ink-3" aria-hidden />
          <input
            type="search"
            placeholder="Search for tasks, projects, or contacts"
            className="w-full bg-transparent text-[12.5px] text-ink placeholder:text-ink-3 focus:outline-none"
            aria-label="Search"
          />
        </div>

        {/* Actions */}
        <div className="ml-auto flex items-center gap-2.5">
          <button
            type="button"
            aria-label="Notifications"
            className="relative flex size-10 items-center justify-center rounded-full border border-line bg-surface text-ink-2 transition-colors hover:text-ink"
          >
            <Bell size={17} aria-hidden />
            <span className="absolute right-2.5 top-2.5 size-2 rounded-full bg-primary-bright ring-2 ring-surface" />
          </button>
          <button
            type="button"
            aria-label="Language"
            className="hidden size-10 items-center justify-center rounded-full border border-line bg-surface text-ink-2 transition-colors hover:text-ink sm:flex"
          >
            <Globe size={17} aria-hidden />
          </button>
          <button
            type="button"
            className="h-10 rounded-full bg-primary-deep px-5 text-[12px] font-medium text-white shadow-[0_8px_18px_-8px_rgba(30,91,60,0.6)] transition-colors hover:bg-primary"
          >
            Invite
          </button>
          <div className="flex items-center gap-2">
            <span className="flex size-10 items-center justify-center rounded-full bg-linear-to-br from-[#3fae74] to-[#1e5b3c] text-[12px] font-semibold text-white">
              {profile.initials}
            </span>
            <span className="hidden text-[12.5px] font-medium text-ink md:block">
              {profile.name}
            </span>
            <ChevronDown size={14} className="hidden text-ink-3 md:block" aria-hidden />
          </div>
        </div>
      </div>
      <MobileNav />
    </header>
  );
}
