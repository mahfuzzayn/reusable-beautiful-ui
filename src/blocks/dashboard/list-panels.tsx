import { Ban, Square } from "lucide-react";
import { Panel } from "@/components/dashboard/panel";
import { Pill } from "@/components/dashboard/pill";
import { DateChip } from "@/components/dashboard/date-chip";
import { ProgressBar } from "@/components/dashboard/progress-bar";
import {
  announcements,
  noticeBoard,
  pendingWorks,
  runningProjects,
  upcomingEvents,
  workDeadlines,
} from "@/data/dashboard";
import { cn } from "@/lib/utils";

/* ------------------------------ upcoming events --------------------------- */

export function UpcomingEventsPanel() {
  return (
    <Panel title="Upcoming Events" bodyClassName="divide-y divide-row-line">
      <ul>
        {upcomingEvents.map((event) => (
          <li key={`${event.day}-${event.title}`} className="flex items-center gap-3 px-3.5 py-[11px]">
            <DateChip day={event.day} month={event.month} />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[12.5px] font-medium text-dark">
                {event.title}
              </p>
              <p className="truncate text-[11.5px] text-muted">{event.place}</p>
            </div>
            <Pill tone="teal" className="shrink-0">
              {event.action}
            </Pill>
          </li>
        ))}
      </ul>
    </Panel>
  );
}

/* ----------------------------- running projects --------------------------- */

export function RunningProjectsPanel() {
  return (
    <Panel title="Running Projects" bodyClassName="divide-y divide-row-line">
      <ul>
        {runningProjects.map((project) => (
          <li key={project.name} className="px-3.5 py-[11px]">
            <div className="mb-1.5 flex items-center justify-between gap-2">
              <p className="truncate text-[12.5px] font-medium text-dark">
                {project.name}
              </p>
              <Pill tone={project.statusTone}>{project.status}</Pill>
            </div>
            <ProgressBar value={project.progress} />
          </li>
        ))}
      </ul>
    </Panel>
  );
}

/* ------------------------------ pending works ----------------------------- */

export function PendingWorksPanel() {
  return (
    <Panel title="Pending Works" bodyClassName="divide-y divide-row-line">
      <ul>
        {pendingWorks.map((row) => (
          <li key={row.task} className="flex items-center gap-2.5 px-3.5 py-[11px]">
            <Ban size={14} className="shrink-0 text-bad" aria-hidden />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[12.5px] font-medium text-dark">
                {row.task}
              </p>
              <p className="truncate text-[11px] text-muted">{row.date}</p>
            </div>
            <Pill tone={row.statusTone} className="shrink-0">
              {row.status}
            </Pill>
          </li>
        ))}
      </ul>
    </Panel>
  );
}

/* ------------------------------ shared table bits ------------------------- */

function Table({
  head,
  children,
}: {
  head: React.ReactNode[];
  children: React.ReactNode;
}) {
  return (
    <table className="w-full text-left text-[12px]">
      <thead>
        <tr className="border-b border-panel-line">
          {head.map((cell, i) => (
            <th
              key={i}
              className={cn(
                "px-3.5 py-[9px] text-[11.5px] font-bold text-[#555]",
                i > 0 && "text-right",
              )}
            >
              {cell}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-row-line">{children}</tbody>
    </table>
  );
}

function Row({
  highlight,
  children,
}: {
  highlight?: boolean;
  children: React.ReactNode;
}) {
  return (
    <tr className={cn(highlight && "bg-row-hl")}>{children}</tr>
  );
}

/* ----------------------------- works deadlines ---------------------------- */

export function WorksDeadlinesPanel() {
  return (
    <Panel title="Works Deadlines">
      <Table head={["Task Name(s)", "End Deadlines"]}>
        {workDeadlines.map((row) => (
          <Row key={row.name} highlight={row.highlight}>
            <td className="px-3.5 py-[9.5px] text-body">{row.name}</td>
            <td className="px-3.5 py-[9.5px] text-right text-body">{row.date}</td>
          </Row>
        ))}
      </Table>
    </Panel>
  );
}

/* --------------------------- works announcements -------------------------- */

export function WorksAnnouncementsPanel() {
  return (
    <Panel title="Works Announcements">
      <Table head={["Works Type", "Name Of Worker"]}>
        {announcements.map((row) => (
          <Row key={row.type} highlight={row.highlight}>
            <td className="px-3.5 py-[9.5px]">
              <span className="flex items-center gap-2 text-body">
                <Square size={10} strokeWidth={2.25} className="shrink-0 text-[#b3b3b3]" aria-hidden />
                {row.type}
              </span>
            </td>
            <td className="px-3.5 py-[9.5px] text-right text-body">
              {row.worker}
            </td>
          </Row>
        ))}
      </Table>
    </Panel>
  );
}

/* ------------------------------- notice board ----------------------------- */

export function NoticeBoardPanel() {
  return (
    <Panel title="Notice Board">
      <Table head={["Notice", "Published By", "Date Added"]}>
        {noticeBoard.map((row) => (
          <Row key={row.added} highlight={row.highlight}>
            <td className="px-3.5 py-[9.5px] text-body">{row.notice}</td>
            <td className="px-3.5 py-[9.5px] text-right text-body">{row.by}</td>
            <td className="px-3.5 py-[9.5px] text-right whitespace-nowrap text-body">
              {row.added}
            </td>
          </Row>
        ))}
      </Table>
    </Panel>
  );
}
