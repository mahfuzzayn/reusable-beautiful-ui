import { ArrowUpRight } from "lucide-react";
import { stats } from "@/data/dashboard";
import { Card } from "@/components/ui/card";

export function StatCards() {
  return (
    <section
      aria-label="Project statistics"
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4"
    >
      {stats.map((card) => {
        const green = card.tone === "green";
        return (
          <Card
            key={card.heading}
            className={
              green
                ? "border-transparent bg-linear-to-br from-[#2c8455] to-[#1a4f34] text-white"
                : undefined
            }
          >
            <div className="flex items-start justify-between gap-3 p-5">
              <div className="min-w-0">
                <h3
                  className={`text-[12.5px] font-medium ${
                    green ? "text-[#d9f2e3]" : "text-ink-2"
                  }`}
                >
                  {card.heading}
                </h3>
                <p className="mt-2.5 text-[36px] font-semibold leading-none tracking-tight">
                  {card.value}
                </p>
                <p
                  className={`mt-2.5 flex items-center gap-1 text-[11px] ${
                    green ? "text-[#c9ecd7]" : "text-ink-3"
                  }`}
                >
                  {card.captionTone === "up" ? (
                    <ArrowUpRight
                      size={13}
                      strokeWidth={2.4}
                      className="text-primary-bright"
                      aria-hidden
                    />
                  ) : null}
                  {card.captionTone === "green" && !green ? (
                    <span className="size-1.5 rounded-full bg-primary-bright" aria-hidden />
                  ) : null}
                  <span
                    className={
                      card.captionTone === "green" && !green
                        ? "font-medium text-primary-bright"
                        : undefined
                    }
                  >
                    {card.caption}
                  </span>
                </p>
              </div>
              <span
                className={`flex size-10 shrink-0 items-center justify-center rounded-full ${
                  green
                    ? "bg-white text-primary-deep"
                    : "bg-primary-soft text-primary"
                }`}
                aria-hidden
              >
                <ArrowUpRight size={17} strokeWidth={2.2} />
              </span>
            </div>
          </Card>
        );
      })}
    </section>
  );
}
