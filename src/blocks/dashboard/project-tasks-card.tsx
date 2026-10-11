import { Check, Plus } from "lucide-react";
import { projectTasks } from "@/data/dashboard";
import { Card, CardTitle } from "@/components/ui/card";

export function ProjectTasksCard() {
  return (
    <Card className="p-5">
      <div className="flex items-center justify-between gap-3">
        <CardTitle>Project</CardTitle>
        <button
          type="button"
          className="flex items-center gap-1 rounded-full bg-primary px-3.5 py-1.5 text-[11px] font-medium text-white shadow-[0_6px_14px_-6px_rgba(34,125,82,0.6)] hover:bg-primary-deep"
        >
          <Plus size={13} strokeWidth={2.6} aria-hidden />
          New
        </button>
      </div>

      <ul className="mt-4 space-y-4">
        {projectTasks.map((t) => (
          <li key={t.title} className="flex items-start gap-3">
            <span
              className={`flex size-5 shrink-0 items-center justify-center rounded-full border ${
                t.done
                  ? "border-primary bg-primary text-white"
                  : "border-line bg-canvas text-transparent"
              }`}
              role="img"
              aria-label={t.done ? "Completed" : "Not completed"}
            >
              <Check size={11} strokeWidth={3} aria-hidden />
            </span>
            <div className="min-w-0">
              <p className="text-[12.5px] font-medium leading-5 text-ink">
                {t.title}
              </p>
              <p className="mt-0.5 text-[11px] text-ink-3">{t.due}</p>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
