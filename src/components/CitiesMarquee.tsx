const ZONES = [
  "Cocody",
  "Plateau",
  "Marcory",
  "Yopougon",
  "Riviera",
  "Treichville",
  "Angré",
  "Bingerville",
  "Koumassi",
  "Abobo",
];

export function CitiesMarquee() {
  const loop = [...ZONES, ...ZONES];
  return (
    <div className="border-y border-ink-line/10 bg-paper-soft py-5">
      <div className="relative flex overflow-hidden">
        <div className="marquee-track flex shrink-0 items-center gap-10 pr-10">
          {loop.map((zone, i) => (
            <span
              key={`${zone}-${i}`}
              className="flex items-center gap-10 whitespace-nowrap text-sm font-medium text-[var(--text-dark)]/40"
            >
              {zone}
              <span className="h-1.5 w-1.5 rounded-full bg-gold/60" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
