/** Thin hairline progress bar: gray track, teal fill. */
export function ProgressBar({ value }: { value: number }) {
  return (
    <div
      className="h-[5px] w-full overflow-hidden rounded-full bg-[#e8e8e8]"
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full rounded-full bg-teal"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
