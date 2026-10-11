import { Minus, Plus } from "lucide-react";
import { Panel } from "@/components/dashboard/panel";
import { WorldMap } from "@/components/dashboard/world-map";
import {
  calendarEventDays,
  calendarToday,
  calendarWeeks,
} from "@/data/dashboard";
import { cn } from "@/lib/utils";

/* --------------------------------- map card ------------------------------- */

export function MapPanel() {
  return (
    <Panel title="Google Map" expandControls bodyClassName="relative h-[212px]">
      <WorldMap className="absolute inset-0 size-full" />
      <div className="absolute bottom-4 left-4 rounded-[3px] bg-white px-3.5 py-2.5 shadow-[0_1px_4px_rgba(0,0,0,0.25)]">
        <p className="text-[12.5px] font-bold text-dark">15 Springfield Way</p>
      </div>
      <div className="absolute right-3 bottom-3 flex flex-col overflow-hidden rounded-[3px] shadow-[0_1px_4px_rgba(0,0,0,0.25)]">
        <button
          type="button"
          aria-label="Zoom in"
          className="grid size-6 place-items-center border-b border-[#e5e5e5] bg-white text-[#666]"
        >
          <Plus size={13} aria-hidden />
        </button>
        <button
          type="button"
          aria-label="Zoom out"
          className="grid size-6 place-items-center bg-white text-[#666]"
        >
          <Minus size={13} aria-hidden />
        </button>
      </div>
    </Panel>
  );
}

/* ------------------------------ calendar card ----------------------------- */

const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

export function CalendarPanel() {
  return (
    <Panel title="Calender" expandControls bodyClassName="px-3 pb-3.5">
      <p className="pt-2.5 pb-1">
        <span className="inline-block rounded-l-[4px] bg-teal px-3 py-1 text-[11px] font-medium text-white">
          JUL 2017
        </span>
      </p>
      <div className="grid grid-cols-7">
        {weekdays.map((day) => (
          <p key={day} className="py-1.5 text-center text-[10px] font-bold text-teal">
            {day}
          </p>
        ))}
        {calendarWeeks.flat().map((day, i) => {
          const isLead = i < 6; // June 25–30 lead-in cells
          const isToday = day === calendarToday && !isLead;
          const hasEvent = day !== null && calendarEventDays.has(day) && !isLead;
          return (
            <div key={i} className="relative grid place-items-center py-[5px]">
              {day !== null && (
                <span
                  className={cn(
                    "text-[11.5px] leading-none",
                    isLead
                      ? "text-[#c8c8c8]"
                      : isToday
                        ? "grid size-[22px] place-items-center rounded-full bg-teal font-bold text-white"
                        : "text-body",
                  )}
                >
                  {day}
                </span>
              )}
              {hasEvent && (
                <span
                  className="absolute bottom-0 left-1/2 size-[4px] -translate-x-1/2 rounded-full bg-warn"
                  aria-hidden
                />
              )}
            </div>
          );
        })}
      </div>
    </Panel>
  );
}

/* --------------------------------- footer --------------------------------- */

export function SiteFooter() {
  return (
    <footer className="bg-page pt-8 pb-7 text-center">
      <p className="font-script text-[27px] leading-none text-[#9b9b9b]">
        www.DownloadNewThemes.com
      </p>
      <p className="mt-3 text-[12px] text-muted">
        Copyright © 2016-2017{" "}
        <span className="font-medium text-teal">Thememinister</span>. All rights
        reserved.
      </p>
    </footer>
  );
}
