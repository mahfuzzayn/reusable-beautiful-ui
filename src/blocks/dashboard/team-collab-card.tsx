import { Calendar, FileText } from "lucide-react";
import { teamActivity } from "@/data/dashboard";
import { Avatar } from "@/components/ui/avatar";
import { Card, CardTitle } from "@/components/ui/card";

const initialsOf = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

export function TeamCollabCard() {
  return (
    <Card className="p-5">
      <CardTitle>Team Collaboration</CardTitle>

      <ul className="mt-4 space-y-3.5">
        {teamActivity.map((row) => (
          <li key={row.name} className="flex items-center gap-3">
            <Avatar initials={initialsOf(row.name)} tone={row.tone} />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[12.5px] font-semibold text-ink">
                {row.name}
              </p>
              <p className="truncate text-[11px] text-ink-3">{row.task}</p>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <span className="text-[10.5px] text-ink-3">{row.date}</span>
              {row.icon === "file" ? (
                <FileText size={15} strokeWidth={2} className="text-primary" aria-hidden />
              ) : (
                <Calendar size={15} strokeWidth={2} className="text-ink-3" aria-hidden />
              )}
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
