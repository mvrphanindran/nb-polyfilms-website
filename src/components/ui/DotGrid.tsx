export function DotGrid({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`grid grid-cols-6 gap-[7px] ${className}`}
    >
      {Array.from({ length: 24 }).map((_, i) => (
        <span key={i} className="h-[3px] w-[3px] rounded-full bg-current" />
      ))}
    </div>
  );
}
