export function TaxiMarker({ scale = 1 }: { scale?: number }) {
  return (
    <g transform={`scale(${scale})`} stroke="var(--ink)" strokeWidth="0.9" strokeLinejoin="round">
      <rect x="-28" y="-2" width="56" height="11" rx="4.5" fill="var(--gold)" />
      <path d="M-13 -2 L-8 -13 L8 -13 L13 -2 Z" fill="var(--gold)" />
      <path
        d="M-8 -3.5 L-5.5 -11 L5.5 -11 L8 -3.5 Z"
        fill="var(--ink)"
        opacity="0.65"
        stroke="none"
      />
      {/* passenger silhouette, visible through the windscreen */}
      <circle cx="0" cy="-6" r="2.1" fill="var(--gold-pale)" stroke="none" opacity="0.9" />
      <rect x="-3.6" y="-16" width="7.2" height="3.2" rx="1.1" fill="var(--ink)" stroke="none" />
      <circle cx="-15" cy="10" r="4.6" fill="var(--ink)" stroke="none" />
      <circle cx="15" cy="10" r="4.6" fill="var(--ink)" stroke="none" />
      <circle cx="-15" cy="10" r="1.8" fill="var(--gold)" stroke="none" />
      <circle cx="15" cy="10" r="1.8" fill="var(--gold)" stroke="none" />
    </g>
  );
}
