export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={className}
      aria-hidden
      role="img"
    >
      <circle cx="18" cy="18" r="15.5" stroke="#1e5b3c" strokeWidth="4.5" />
      <circle cx="18" cy="18" r="6.5" fill="#227d52" />
      <circle cx="18" cy="18" r="2.4" fill="#ffffff" />
    </svg>
  );
}
