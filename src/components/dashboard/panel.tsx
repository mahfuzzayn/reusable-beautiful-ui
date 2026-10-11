import type { ReactNode } from "react";
import { Maximize2, Minus, Move, X } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * The template's signature "window" card: light-gray title bar with move /
 * minimize / close (or expand) controls, white body, hairline border.
 */
export function Panel({
  title,
  titleSuffix,
  expandControls = false,
  children,
  className,
  bodyClassName,
}: {
  title: string;
  /** Lighter trailing text, e.g. "(Bar chart)". */
  titleSuffix?: string;
  /** Rows 4–5 cards use an expand glyph instead of close. */
  expandControls?: boolean;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
}) {
  return (
    <section
      className={cn(
        "overflow-hidden rounded-[4px] border border-panel-line bg-panel shadow-[0_1px_2px_rgba(0,0,0,0.06)]",
        className,
      )}
    >
      <header className="flex h-[38px] items-center justify-between border-b border-[#dcdfe4] bg-panel-head px-3">
        <h2 className="truncate text-[13px] font-bold text-dark">
          {title}
          {titleSuffix ? (
            <span className="font-normal text-muted"> {titleSuffix}</span>
          ) : null}
        </h2>
        <div className="flex shrink-0 items-center gap-3 text-[#8a959e]">
          <Move size={13} strokeWidth={2.25} aria-hidden />
          <Minus size={14} strokeWidth={2.25} aria-hidden />
          {expandControls ? (
            <Maximize2 size={12} strokeWidth={2.25} aria-hidden />
          ) : (
            <X size={13} strokeWidth={2.25} aria-hidden />
          )}
        </div>
      </header>
      <div className={cn("bg-panel", bodyClassName)}>{children}</div>
    </section>
  );
}
