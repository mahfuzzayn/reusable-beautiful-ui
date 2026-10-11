import { Sidebar } from "@/blocks/dashboard/sidebar";
import { Topbar } from "@/blocks/dashboard/topbar";
import { StatCards } from "@/blocks/dashboard/stat-cards";
import { TasksChart } from "@/blocks/dashboard/tasks-chart";
import { RemindersCard } from "@/blocks/dashboard/reminders-card";
import { ProjectTasksCard } from "@/blocks/dashboard/project-tasks-card";
import { ProjectListCard } from "@/blocks/dashboard/project-list-card";
import { WeeklyPlanCard } from "@/blocks/dashboard/weekly-plan-card";
import { TeamCollabCard } from "@/blocks/dashboard/team-collab-card";
import { TimeTrackerCard } from "@/blocks/dashboard/time-tracker-card";
import { profile } from "@/data/dashboard";

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      <Sidebar />

      <div className="lg:pl-62">
        <Topbar />

        <main className="mx-auto max-w-290 px-5 py-6 lg:px-7">
          {/* Page heading */}
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <h1 className="text-[22px] font-semibold tracking-tight text-ink">
              Dashboard
            </h1>
            <div className="text-right">
              <p className="text-[12.5px] font-medium text-ink">
                {profile.today}
              </p>
              <p className="text-[11.5px] text-ink-3">{profile.greeting}</p>
            </div>
          </div>

          <StatCards />

          {/* Main grid: left column, reminders column, tasks column */}
          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-12">
            <div className="space-y-5 md:col-span-2 xl:col-span-5">
              <TasksChart />
              <ProjectListCard />
              <TeamCollabCard />
            </div>

            <div className="space-y-5 md:col-span-1 xl:col-span-4">
              <RemindersCard />
              <WeeklyPlanCard />
            </div>

            <div className="space-y-5 md:col-span-1 xl:col-span-3">
              <ProjectTasksCard />
              <TimeTrackerCard />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
