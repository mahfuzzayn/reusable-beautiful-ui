import { Plus } from "lucide-react";
import { reminders } from "@/data/dashboard";
import { Card, CardTitle } from "@/components/ui/card";

export function RemindersCard() {
  return (
    <Card className="p-5">
      <div className="flex items-center justify-between gap-3">
        <CardTitle>Reminders</CardTitle>
        <a
          href="#"
          className="flex items-center gap-1 text-[11.5px] font-medium text-primary hover:text-primary-deep"
        >
          <Plus size={13} strokeWidth={2.6} aria-hidden />
          Add reminder
        </a>
      </div>

      <ul className="mt-4 space-y-4">
        {reminders.map((r) => (
          <li key={r.title} className="flex items-start gap-3">
            <span
              className="mt-1 size-2.5 shrink-0 rounded-full"
              style={{ backgroundColor: r.dot }}
              aria-hidden
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[12.5px] font-medium text-ink">
                {r.title}
              </p>
              <p className="mt-0.5 text-[11px] text-ink-3">{r.date}</p>
            </div>
            {r.action ? (
              <button
                type="button"
                className="shrink-0 rounded-full bg-primary px-3.5 py-1.5 text-[10.5px] font-medium text-white shadow-[0_6px_14px_-6px_rgba(34,125,82,0.6)] hover:bg-primary-deep"
              >
                {r.action}
              </button>
            ) : null}
          </li>
        ))}
      </ul>
    </Card>
  );
}
