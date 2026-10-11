/**
 * The template's hand-drawn-looking bar charts: dashed horizontal gridlines,
 * a 0–90 y-axis, flat bars (teal for earnings, gray for expenses).
 */
export type BarGroup = { label: string; values: number[] };

export function BarChart({
  groups,
  colors,
  seriesWidth = 700,
  barWidth,
  gap = 3,
  yMax = 90,
  yStep = 10,
}: {
  groups: BarGroup[];
  /** Fill color per series within a group. */
  colors: string[];
  /** Width of the SVG viewBox — set smaller for the weekly card. */
  seriesWidth?: number;
  barWidth: number;
  gap?: number;
  yMax?: number;
  yStep?: number;
}) {
  const left = 26;
  const right = 8;
  const top = 10;
  const bottom = 22;
  const height = 264;
  const plotW = seriesWidth - left - right;
  const plotH = height - top - bottom;
  const groupW = plotW / groups.length;
  const pairW = colors.length * barWidth + (colors.length - 1) * gap;
  const ticks = Array.from({ length: yMax / yStep + 1 }, (_, i) => i * yStep);
  const y = (v: number) => top + plotH - (v / yMax) * plotH;

  return (
    <svg
      viewBox={`0 0 ${seriesWidth} ${height}`}
      className="h-auto w-full"
      role="img"
      aria-label="Bar chart"
    >
      {ticks.map((t) => (
        <g key={t}>
          <line
            x1={left}
            x2={seriesWidth - right}
            y1={y(t)}
            y2={y(t)}
            stroke="#e4e4e4"
            strokeWidth={1}
            strokeDasharray="4 3"
          />
          <text
            x={left - 6}
            y={y(t) + 3}
            textAnchor="end"
            fontSize="9.5"
            fill="#999"
          >
            {t}
          </text>
        </g>
      ))}
      {groups.map((g, gi) => {
        const gx = left + gi * groupW + (groupW - pairW) / 2;
        return (
          <g key={g.label}>
            {g.values.map((v, si) => (
              <rect
                key={si}
                x={gx + si * (barWidth + gap)}
                y={y(v)}
                width={barWidth}
                height={Math.max(plotH - (y(v) - top), 1)}
                rx={1}
                fill={colors[si]}
              />
            ))}
            <text
              x={left + gi * groupW + groupW / 2}
              y={height - 6}
              textAnchor="middle"
              fontSize="9"
              fill="#999"
            >
              {g.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
