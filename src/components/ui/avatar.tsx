import React from "react";
import { cn } from "@/lib/utils";

const tones = {
  green: "bg-linear-to-br from-[#3fae74] to-[#1e5b3c]",
  orange: "bg-linear-to-br from-[#f5b968] to-[#e08a1a]",
  teal: "bg-linear-to-br from-[#67c1b0] to-[#2d8577]",
  moss: "bg-linear-to-br from-[#8fb59c] to-[#557a63]",
  ink: "bg-linear-to-br from-[#4b5a51] to-[#26332b]",
} as const;

export function Avatar({
  initials,
  tone = "green",
  className,
}: {
  initials: string;
  tone?: keyof typeof tones;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "flex size-9 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold tracking-wide text-white",
        tones[tone],
        className,
      )}
      aria-hidden
    >
      {initials}
    </span>
  );
}
