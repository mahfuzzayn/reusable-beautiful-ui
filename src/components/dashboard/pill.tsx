import { cn } from "@/lib/utils";

export type PillTone = "teal" | "ok" | "warn" | "bad" | "info";

const tones: Record<PillTone, string> = {
  teal: "bg-teal",
  ok: "bg-ok",
  warn: "bg-warn",
  bad: "bg-bad",
  info: "bg-info",
};

/** Small solid status pill — rounded-full, white text, bootstrap-era colors. */
export function Pill({
  tone,
  children,
  className,
}: {
  tone: PillTone;
  children: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-[3px] text-[11px] leading-none font-medium text-white",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
