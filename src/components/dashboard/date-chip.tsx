/** Two-part date badge: navy day block over teal month block. */
export function DateChip({ day, month }: { day: string; month: string }) {
  return (
    <span className="inline-flex w-10 shrink-0 flex-col overflow-hidden rounded-[3px] text-center leading-none">
      <span className="bg-navy py-[5px] text-[15px] font-bold text-white">
        {day}
      </span>
      <span className="bg-teal py-[3px] text-[9px] font-medium tracking-wide text-white">
        {month}
      </span>
    </span>
  );
}
