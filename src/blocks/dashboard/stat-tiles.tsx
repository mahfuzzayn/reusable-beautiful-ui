import { statTiles } from "@/data/dashboard";

/** Four solid-teal counters: white icon left, value + delta right. */
export function StatTiles() {
  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {statTiles.map((tile) => (
        <article
          key={tile.label}
          className="flex h-[86px] items-center justify-between rounded-[4px] bg-teal px-4 shadow-[0_1px_2px_rgba(0,0,0,0.08)]"
        >
          <tile.icon size={30} strokeWidth={1.75} className="text-white" aria-hidden />
          <p className="text-right leading-tight text-white">
            <span className="inline-flex items-center justify-end gap-1 text-[20px] font-bold">
              {tile.value}
              <svg width="9" height="6" viewBox="0 0 9 6" aria-hidden>
                <path d="M4.5 0 9 6H0Z" fill="rgba(255,255,255,0.85)" />
              </svg>
            </span>
            <br />
            <span className="text-[12px] text-white/85">{tile.label}</span>
          </p>
        </article>
      ))}
    </div>
  );
}
