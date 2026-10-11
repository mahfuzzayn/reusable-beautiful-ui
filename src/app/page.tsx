import { DashboardShell } from "@/blocks/dashboard/shell";
import { StatTiles } from "@/blocks/dashboard/stat-tiles";
import {
  NoticeBoardPanel,
  PendingWorksPanel,
  RunningProjectsPanel,
  UpcomingEventsPanel,
  WorksAnnouncementsPanel,
  WorksDeadlinesPanel,
} from "@/blocks/dashboard/list-panels";
import {
  WeeklyEarningsPanel,
  YearEarningsPanel,
} from "@/blocks/dashboard/charts-row";
import {
  CalendarPanel,
  MapPanel,
  SiteFooter,
} from "@/blocks/dashboard/bottom-row";

export default function Page() {
  return (
    <DashboardShell>
      <div className="p-3">
        <StatTiles />

        <div className="mt-3 grid items-start gap-3 md:grid-cols-2">
          <UpcomingEventsPanel />
          <RunningProjectsPanel />
          <PendingWorksPanel />
          <WorksDeadlinesPanel />
          <WorksAnnouncementsPanel />
          <NoticeBoardPanel />
        </div>

        <div className="mt-3 grid items-start gap-3 xl:grid-cols-[2fr_1fr]">
          <YearEarningsPanel />
          <WeeklyEarningsPanel />
        </div>

        <div className="mt-3 grid items-start gap-3 xl:grid-cols-[2fr_1fr]">
          <MapPanel />
          <CalendarPanel />
        </div>
      </div>

      <SiteFooter />
    </DashboardShell>
  );
}
