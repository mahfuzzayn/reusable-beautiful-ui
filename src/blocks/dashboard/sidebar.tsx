import {
  CalendarDays,
  ChartPie,
  CircleHelp,
  LayoutGrid,
  ListChecks,
  LogOut,
  Settings,
  Users,
  ArrowRight,
} from "lucide-react";
import { generalItems, menuItems } from "@/data/dashboard";
import { Logo } from "./logo";

const icons = {
  dashboard: LayoutGrid,
  tasks: ListChecks,
  calendar: CalendarDays,
  analytics: ChartPie,
  team: Users,
  settings: Settings,
  help: CircleHelp,
  logout: LogOut,
} as const;

function NavButton({
  label,
  icon,
  badge,
  active = false,
}: {
  label: string;
  icon: string;
  badge?: string;
  active?: boolean;
}) {
  const Icon = icons[icon as keyof typeof icons];
  return (
    <a
      href="#"
      aria-current={active ? "page" : undefined}
      className={`flex h-11 items-center gap-3 rounded-xl px-3 text-[13px] font-medium transition-colors ${
        active
          ? "bg-primary text-white shadow-[0_6px_16px_-6px_rgba(34,125,82,0.55)]"
          : "text-ink-2 hover:bg-surface hover:text-ink"
      }`}
    >
      <Icon size={17} strokeWidth={active ? 2.2 : 1.9} aria-hidden />
      <span>{label}</span>
      {badge ? (
        <span
          className={`ml-auto rounded-full px-2 py-0.5 text-center text-[10px] font-semibold leading-4 ${
            active ? "bg-white/20 text-white" : "bg-primary-soft text-primary-deep"
          }`}
        >
          {badge}
        </span>
      ) : null}
    </a>
  );
}

/** Small phone mock used by the app-download banner. */
function PhoneMock() {
  return (
    <svg
      viewBox="0 0 64 104"
      fill="none"
      className="absolute -right-1 bottom-0 h-[104px] w-16 opacity-95"
      aria-hidden
    >
      <rect x="14" y="4" width="36" height="94" rx="8" fill="#12301f" />
      <rect
        x="17.5"
        y="8"
        width="29"
        height="86"
        rx="5.5"
        fill="#2c8455"
        opacity="0.9"
      />
      <rect x="26" y="5.5" width="12" height="3" rx="1.5" fill="#0d2317" />
      <rect x="21" y="16" width="22" height="3.5" rx="1.75" fill="#e3f8ea" opacity="0.85" />
      <rect x="21" y="24" width="14" height="3.5" rx="1.75" fill="#e3f8ea" opacity="0.55" />
      <rect x="21" y="34" width="22" height="18" rx="4" fill="#fefefe" opacity="0.28" />
      <rect x="21" y="57" width="22" height="3.5" rx="1.75" fill="#e3f8ea" opacity="0.55" />
      <rect x="21" y="66" width="10" height="10" rx="3" fill="#fef0e0" opacity="0.8" />
      <rect x="33" y="66" width="10" height="10" rx="3" fill="#ffffff" opacity="0.45" />
      <rect x="21" y="82" width="22" height="4" rx="2" fill="#ffffff" opacity="0.4" />
    </svg>
  );
}

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-[248px] flex-col border-r border-line/80 bg-canvas lg:flex">
      <div className="flex items-center gap-2.5 px-6 pb-5 pt-6">
        <Logo className="size-7" />
        <span className="text-[17px] font-semibold tracking-tight text-ink">
          Donezo
        </span>
      </div>

      <nav className="flex min-h-0 flex-1 flex-col gap-0.5 overflow-y-auto px-3">
        <p className="px-3 pb-1.5 pt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-ink-3">
          Menu
        </p>
        {menuItems.map((item, i) => (
          <NavButton key={item.label} {...item} active={i === 0} />
        ))}

        <p className="px-3 pb-1.5 pt-5 text-[10px] font-medium uppercase tracking-[0.14em] text-ink-3">
          General
        </p>
        {generalItems.map((item) => (
          <NavButton key={item.label} {...item} />
        ))}
      </nav>

      {/* App-download banner */}
      <div className="m-4 mt-5 overflow-hidden rounded-[18px] bg-linear-to-b from-[#2c8455] to-[#16402a] p-4 text-white relative">
        <div
          aria-hidden
          className="absolute -left-8 -top-10 size-28 rounded-full border-[10px] border-white/10"
        />
        <PhoneMock />
        <p className="max-w-[130px] text-[13px] font-semibold leading-snug">
          Download our Mobile App
        </p>
        <p className="mt-1 max-w-[120px] text-[10.5px] leading-snug text-white/70">
          Empower your workflow, track tasks
        </p>
        <a
          href="#"
          className="mt-3.5 inline-flex items-center gap-2 text-[11px] font-medium text-white/90 hover:text-white"
        >
          Download App
          <span className="flex size-6 items-center justify-center rounded-full bg-white text-primary-deep">
            <ArrowRight size={12} strokeWidth={2.4} aria-hidden />
          </span>
        </a>
      </div>
    </aside>
  );
}
