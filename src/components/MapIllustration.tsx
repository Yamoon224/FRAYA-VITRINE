"use client";

import { TaxiMarker } from "./icons/TaxiMarker";
import { useMotionAllowed } from "@/lib/useMotionAllowed";

const ROUTE = "M50 230 C 120 150, 90 70, 180 60 S 320 120, 300 40 S 400 10, 430 30";
const STREETS_H = [40, 90, 140, 190, 230];
const STREETS_V = [60, 130, 210, 290, 360, 420];
const BLOCKS = [
  { x: 20, y: 10, w: 40, h: 25 },
  { x: 95, y: 15, w: 55, h: 30 },
  { x: 200, y: 95, w: 60, h: 35 },
  { x: 330, y: 140, w: 50, h: 40 },
  { x: 60, y: 160, w: 45, h: 30 },
  { x: 260, y: 20, w: 40, h: 25 },
  { x: 370, y: 60, w: 40, h: 30 },
];

export function MapIllustration({ className }: { className?: string }) {
  const driving = useMotionAllowed();

  return (
    <svg
      viewBox="0 0 460 260"
      className={className}
      fill="none"
      role="img"
      aria-label="Carte stylisée montrant un trajet suivi en temps réel"
    >
      <rect x="0" y="0" width="460" height="260" fill="var(--ink)" />

      {STREETS_H.map((y) => (
        <line key={`h-${y}`} x1="0" y1={y} x2="460" y2={y} stroke="var(--ink-line)" strokeWidth="1" />
      ))}
      {STREETS_V.map((x) => (
        <line key={`v-${x}`} x1={x} y1="0" x2={x} y2="260" stroke="var(--ink-line)" strokeWidth="1" />
      ))}

      {BLOCKS.map((b, i) => (
        <rect
          key={i}
          x={b.x}
          y={b.y}
          width={b.w}
          height={b.h}
          rx="4"
          fill="var(--ink-soft)"
          opacity="0.7"
        />
      ))}

      <path d={ROUTE} stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" className="route-flow" />

      <circle cx="50" cy="230" r="6" fill="var(--paper-soft)" />
      <circle cx="430" cy="30" r="4" fill="var(--gold)" />
      <circle cx="430" cy="30" r="9" fill="none" stroke="var(--gold)" strokeWidth="1.5" opacity="0.6">
        <animate attributeName="r" values="7;14;7" dur="2.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0;0.6" dur="2.4s" repeatCount="indefinite" />
      </circle>

      {driving && (
        <g opacity="0.95">
          <TaxiMarker scale={0.55} />
          <animateMotion path={ROUTE} dur="6s" repeatCount="indefinite" rotate="auto" />
        </g>
      )}
    </svg>
  );
}
