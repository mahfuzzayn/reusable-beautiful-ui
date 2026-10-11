import { Panel } from "@/components/dashboard/panel";
import { BarChart } from "@/components/dashboard/bar-chart";
import { earningsByMonth, weeklyEarnings } from "@/data/dashboard";

function Legend({
  items,
}: {
  items: { label: string; color: string }[];
}) {
  return (
    <div className="flex justify-end gap-4 pt-2.5">
      {items.map((item) => (
        <span key={item.label} className="flex items-center gap-1.5 text-[11px] text-[#777]">
          <span
            className="inline-block size-2.5 rounded-[1px]"
            style={{ backgroundColor: item.color }}
            aria-hidden
          />
          {item.label}
        </span>
      ))}
    </div>
  );
}

/** Grouped earnings/expenses bars, 0–90 axis, full month labels. */
export function YearEarningsPanel() {
  return (
    <Panel
      title="This Year Earnings & Expenses"
      titleSuffix="(Bar chart)"
      expandControls
      bodyClassName="px-3 pb-2"
    >
      <Legend
        items={[
          { label: "Earnings", color: "#009688" },
          { label: "Expenses", color: "#bdc3c7" },
        ]}
      />
      <BarChart
        groups={earningsByMonth.map((m) => ({
          label: m.month,
          values: [m.earnings, m.expenses],
        }))}
        colors={["#009688", "#bdc3c7"]}
        barWidth={13}
      />
    </Panel>
  );
}

/** Single-series teal bars, Sun–Sat. */
export function WeeklyEarningsPanel() {
  return (
    <Panel title="Weekly Earnings & Exp" expandControls bodyClassName="px-3 pb-2">
      <BarChart
        groups={weeklyEarnings.map((d) => ({ label: d.day, values: [d.value] }))}
        colors={["#009688"]}
        seriesWidth={360}
        barWidth={30}
      />
    </Panel>
  );
}
