import React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "rounded-[20px] border border-line bg-surface shadow-[0_1px_2px_rgba(16,24,20,0.04)]",
        className,
      )}
      {...props}
    />
  );
}

export function CardTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      className={cn("text-[13.5px] font-semibold text-ink", className)}
      {...props}
    />
  );
}
