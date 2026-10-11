import {
  ArrowLeft,
  Bell,
  ClipboardList,
  Gauge,
  Mail,
  Search,
  Settings,
  ShoppingCart,
  User,
} from "lucide-react";

type StripAction = {
  icon: typeof ShoppingCart;
  badge?: string;
  badgeClass: string;
  label: string;
};

const stripActions: StripAction[] = [
  { icon: ShoppingCart, badge: "3", badgeClass: "bg-info", label: "Cart" },
  { icon: Mail, badge: "4", badgeClass: "bg-ok", label: "Mail" },
  { icon: Bell, badge: "3", badgeClass: "bg-warn", label: "Notifications" },
  { icon: ClipboardList, badge: "6", badgeClass: "bg-bad", label: "Tasks" },
];

/** Navy utility strip: back + search on the left, badged icons, gear, avatar. */
function UtilityStrip({ onMenu }: { onMenu?: () => void }) {
  return (
    <div className="flex h-[46px] shrink-0 items-center justify-between bg-navy px-4 text-white">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenu}
          aria-label="Open menu"
          className="grid size-7 place-items-center rounded-full border border-white/50 lg:hidden"
        >
          <span className="flex h-2.5 w-3.5 flex-col justify-between">
            <span className="h-[2px] w-full bg-white" />
            <span className="h-[2px] w-full bg-white" />
            <span className="h-[2px] w-full bg-white" />
          </span>
        </button>
        <button
          type="button"
          aria-label="Go back"
          className="grid size-7 place-items-center rounded-full border border-white/50"
        >
          <ArrowLeft size={13} aria-hidden />
        </button>
        <button type="button" aria-label="Search" className="px-1">
          <Search size={15} className="text-white/90" aria-hidden />
        </button>
      </div>

      <div className="flex items-center gap-4">
        {stripActions.map((action) => (
          <button
            key={action.label}
            type="button"
            aria-label={action.label}
            className="relative px-0.5"
          >
            <action.icon size={15} className="text-white/90" aria-hidden />
            {action.badge && (
              <span
                className={`absolute -top-2 -right-2.5 grid size-[15px] place-items-center rounded-full text-[9px] leading-none font-bold text-white ${action.badgeClass}`}
              >
                {action.badge}
              </span>
            )}
          </button>
        ))}
        <button type="button" aria-label="Settings" className="px-0.5">
          <Settings size={15} className="text-white/90" aria-hidden />
        </button>
        <button
          type="button"
          aria-label="Account"
          className="grid size-[27px] place-items-center overflow-hidden rounded-full bg-[#5d7186]"
        >
          <User size={15} className="text-white" aria-hidden />
        </button>
      </div>
    </div>
  );
}

/** White page header: teal gauge roundel + title / subtitle. */
function PageHeader() {
  return (
    <header className="flex h-[66px] shrink-0 items-center gap-3.5 border-b border-[#e6e6e6] bg-white px-4 sm:px-6">
      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-teal">
        <Gauge size={21} className="text-white" aria-hidden />
      </span>
      <div>
        <h1 className="text-[19px] leading-tight font-medium text-dark">
          CRM Admin Dashboard
        </h1>
        <p className="text-[12px] text-muted">Very detailed &amp; featured admin.</p>
      </div>
    </header>
  );
}

export function Topbar({ onMenu }: { onMenu?: () => void }) {
  return (
    <div className="flex flex-col">
      <UtilityStrip onMenu={onMenu} />
      <PageHeader />
    </div>
  );
}
