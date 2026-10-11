import { tasksChart } from "@/data/dashboard";
import { Card, CardTitle } from "@/components/ui/card";

/* Plot geometry (SVG units). Bars share one baseline; tops rounded by 4. */
const W = 560;
const H = 224;
const PAD_L = 36;
const PAD_R = 552;
const BASE_Y = 186;
const PLOT_H = 176;
const GROUP_W = (PAD_R - PAD_L) / 7; // 74
const BAR_W = 16;
const BAR_GAP = 4;

const y = (v: number) => BASE_Y - (v / 100) * PLOT_H;
const groupCenter = (i: number) => PAD_L + GROUP_W * i + GROUP_W / 2;

/** Bar path with rounded data-end (top) and a square baseline. */
function barPath(x: number, v: number) {
  const top = y(v);
  const r = Math.min(4, v > 0 ? 4 : 0);
  return `M ${x} ${BASE_Y} V ${top + r} Q ${x} ${top} ${x + r} ${top} H ${
    x + BAR_W - r
  } Q ${x + BAR_W} ${top} ${x + BAR_W} ${top + r} V ${BASE_Y} Z`;
}

export function TasksChart() {
  const { days, tasks, remaining, lastMonth, ticks } = tasksChart;

  return (
    <Card className="p-5">
      <div className="flex flex-wrap items-center gap-3">
        <CardTitle>Tasks overview</CardTitle>
        <div className="ml-auto flex rounded-full border border-line bg-canvas p-1">
          {["Weekly", "Monthly", "Yearly"].map((tab, i) => (
            <button
              key={tab}
              type="button"
              className={`rounded-full px-3.5 py-1.5 text-[11px] font-medium ${
                i === 0 ? "bg-primary-soft text-primary-deep" : "text-ink-3"
              }`}
              aria-pressed={i === 0}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Legend — identity never rides on color alone; values ride on the axis. */}
      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] text-ink-2">
        <span className="flex items-center gap-1.5">
          <span className="size-2 rounded-[3px] bg-primary" aria-hidden /> Tasks
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-2 rounded-[3px] bg-primary-mist" aria-hidden /> Remaining
        </span>
        <span className="flex items-center gap-1.5">
          <svg width="16" height="4" aria-hidden className="-ml-0.5">
            <line
              x1="0"
              y1="2"
              x2="16"
              y2="2"
              stroke="#f0a435"
              strokeWidth="2"
              strokeDasharray="4 3"
              strokeLinecap="round"
            />
          </svg>
          vs last month
        </span>
      </div>

      <figure className="mt-2" role="img" aria-label="Grouped bar chart: tasks completed and remaining per weekday, with last month's trend.">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="presentation">
          {/* Horizontal hairline grid + tick labels */}
          {ticks.map((t) => (
            <g key={t}>
              <line
                x1={PAD_L}
                x2={PAD_R}
                y1={y(t)}
                y2={y(t)}
                stroke="#eef1ef"
                strokeWidth="1"
              />
              <text
                x={PAD_L - 8}
                y={y(t) + 3.5}
                textAnchor="end"
                fontSize="10"
                fill="#939c96"
              >
                {t}
              </text>
            </g>
          ))}

          {/* Grouped bars */}
          {days.map((d, i) => {
            const c = groupCenter(i);
            const x1 = c - BAR_W - BAR_GAP / 2;
            const x2 = c + BAR_GAP / 2;
            return (
              <g key={`${d}${i}`}>
                <path d={barPath(x1, tasks[i])} fill="#227d52">
                  <title>{`${d}: ${tasks[i]} tasks completed`}</title>
                </path>
                <path d={barPath(x2, remaining[i])} fill="#a6dfc0">
                  <title>{`${d}: ${remaining[i]} remaining`}</title>
                </path>
                <text
                  x={c}
                  y={H - 6}
                  textAnchor="middle"
                  fontSize="10.5"
                  fill="#939c96"
                >
                  {d}
                </text>
              </g>
            );
          })}

          {/* Last month reference trend */}
          <polyline
            points={lastMonth
              .map((v, i) => `${groupCenter(i)},${y(v)}`)
              .join(" ")}
            fill="none"
            stroke="#f0a435"
            strokeWidth="2"
            strokeDasharray="5 6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <title>Same days last month</title>
          </polyline>

          {/* Baseline */}
          <line
            x1={PAD_L}
            x2={PAD_R}
            y1={BASE_Y}
            y2={BASE_Y}
            stroke="#e8ede9"
            strokeWidth="1"
          />
        </svg>
      </figure>
    </Card>
  );
}
