import { weeklyPlan } from "@/data/dashboard";
import { Card, CardTitle } from "@/components/ui/card";

/* Donut geometry. Products + On Hold = the filled 74%; the rest stays track. */
const R = 54;
const CIRC = 2 * Math.PI * R;
const GAP = 4; // surface gap between arcs

export function WeeklyPlanCard() {
  const { center, centerLabel, segments } = weeklyPlan;
  const values = segments.map((s) => Number.parseInt(s.value, 10) / 100);
  const arcLens = values.map((v) => v * CIRC);
  const starts = arcLens.map((_, i) =>
    arcLens.slice(0, i).reduce((a, b) => a + b, 0),
  );

  const arcs = segments.map((s, i) => ({
    color: s.color,
    dash: `${Math.max(0, arcLens[i] - GAP)} ${CIRC - Math.max(0, arcLens[i] - GAP)}`,
    rotate: (starts[i] / CIRC) * 360,
    title: `${s.label} ${s.value}`,
  }));

  return (
    <Card className="flex flex-col p-5">
      <CardTitle>Weekly Plan</CardTitle>

      <figure
        className="mx-auto mt-4 w-full max-w-45"
        role="img"
        aria-label="Donut chart: 74 percent of this week's plan is covered — Products 49 percent, On Hold 25 percent."
      >
        <svg viewBox="0 0 140 140" className="w-full">
          {/* Track */}
          <circle
            cx="70"
            cy="70"
            r={R}
            fill="none"
            stroke="#edf1ee"
            strokeWidth="16"
          />
          {arcs.map((a) => (
            <circle
              key={a.title}
              cx="70"
              cy="70"
              r={R}
              fill="none"
              stroke={a.color}
              strokeWidth="16"
              strokeDasharray={a.dash}
              strokeLinecap="butt"
              transform={`rotate(${a.rotate - 90} 70 70)`}
            >
              <title>{a.title}</title>
            </circle>
          ))}
          <text
            x="70"
            y="68"
            textAnchor="middle"
            fontSize="24"
            fontWeight="600"
            fill="#1d2b23"
          >
            {center}
          </text>
          <text
            x="70"
            y="86"
            textAnchor="middle"
            fontSize="9.5"
            fill="#939c96"
          >
            {centerLabel}
          </text>
        </svg>
      </figure>

      <figcaption className="mt-4 space-y-2.5">
        {segments.map((s) => (
          <div key={s.label} className="flex items-center gap-2.5 text-[12px]">
            <span
              className="size-2.5 rounded-full"
              style={{ backgroundColor: s.color }}
              aria-hidden
            />
            <span className="text-ink-2">{s.label}</span>
            <span className="ml-auto font-semibold text-ink">{s.value}</span>
          </div>
        ))}
      </figcaption>

      <button
        type="button"
        className="mt-5 w-full rounded-full bg-primary-deep py-2.5 text-[12px] font-medium text-white shadow-[0_8px_18px_-8px_rgba(30,91,60,0.6)] transition-colors hover:bg-primary"
      >
        Today Tasks
      </button>
    </Card>
  );
}
