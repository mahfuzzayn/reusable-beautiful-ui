import { Pause, Square } from "lucide-react";
import { timeTracker } from "@/data/dashboard";

export function TimeTrackerCard() {
  return (
    <section className="relative overflow-hidden rounded-[20px] bg-linear-to-br from-[#2c7a4f] via-[#1e5b3c] to-[#12301f] p-5 text-white shadow-[0_10px_26px_-12px_rgba(18,48,31,0.55)]">
      {/* Soft decorative rings */}
      <div
        aria-hidden
        className="absolute -right-10 -top-14 size-40 rounded-full border-[14px] border-white/10"
      />
      <div
        aria-hidden
        className="absolute -bottom-16 -left-10 size-36 rounded-full bg-white/5"
      />

      <div className="relative flex items-center justify-between">
        <h3 className="text-[13.5px] font-semibold">Time Tracker</h3>
        <span className="flex items-center gap-1.5 text-[10.5px] font-medium text-white/70">
          <span className="size-1.5 animate-pulse rounded-full bg-primary-bright" aria-hidden />
          Tracking
        </span>
      </div>

      <p className="relative mt-4 text-[34px] font-semibold leading-none tracking-tight [font-variant-numeric:tabular-nums]">
        {timeTracker.elapsed}
      </p>
      <p className="relative mt-1.5 text-[10.5px] text-white/60">
        Today&apos;s focus session
      </p>

      <div className="relative mt-5 flex items-center gap-3">
        <button
          type="button"
          aria-label="Pause tracking"
          className="flex size-11 items-center justify-center rounded-full bg-white text-primary-deep shadow-[0_8px_18px_-8px_rgba(0,0,0,0.4)] transition-transform hover:scale-105"
        >
          <Pause size={16} strokeWidth={2.6} fill="currentColor" aria-hidden />
        </button>
        <button
          type="button"
          aria-label="Stop tracking"
          className="flex size-11 items-center justify-center rounded-full border border-white/20 bg-[#0e2417]/70 text-white transition-transform hover:scale-105"
        >
          <Square size={11} strokeWidth={0} fill="currentColor" aria-hidden />
        </button>
        <p className="ml-auto text-right text-[10.5px] leading-snug text-white/60">
          Design Home Page
          <br />
          started 09:41
        </p>
      </div>
    </section>
  );
}
