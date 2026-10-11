import { projectList } from "@/data/dashboard";
import { Card, CardTitle } from "@/components/ui/card";

export function ProjectListCard() {
  return (
    <Card className="p-5">
      <div className="flex items-center justify-between gap-3">
        <CardTitle>Project List</CardTitle>
        <a
          href="#"
          className="text-[11.5px] font-medium text-primary hover:text-primary-deep"
        >
          See All
        </a>
      </div>

      <ul className="mt-4 space-y-4">
        {projectList.map((p) => (
          <li key={p.name}>
            <div className="flex items-center gap-2.5">
              <span
                className="size-2.5 shrink-0 rounded-full"
                style={{ backgroundColor: p.color }}
                aria-hidden
              />
              <span className="text-[12.5px] font-medium text-ink">{p.name}</span>
              <span className="ml-auto text-[11.5px] font-semibold text-ink-2">
                {p.progress}%
              </span>
            </div>
            <div
              className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#edf1ee]"
              role="progressbar"
              aria-valuenow={p.progress}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${p.name} progress`}
            >
              <div
                className="h-full rounded-full"
                style={{ width: `${p.progress}%`, backgroundColor: p.color }}
              />
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
