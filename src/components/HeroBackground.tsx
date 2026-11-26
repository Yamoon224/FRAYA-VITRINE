"use client";

import { TaxiMarker } from "./icons/TaxiMarker";
import { useMotionAllowed } from "@/lib/useMotionAllowed";

/* Routes span the full width of the hero, crossing behind whatever text
   sits in front (the text wrapper is stacked above this layer), so the
   traffic genuinely drives across the whole scene rather than hugging
   the margins. */
const ROUTES = [
  { d: "M-50 410 C 180 320, 340 460, 610 330 S 980 160, 1300 230", width: 2, opacity: 1 },
  { d: "M-50 110 C 240 40, 420 190, 700 95 S 1020 10, 1300 70", width: 1.5, opacity: 0.6 },
  {
    d: "M1300 300 C 1000 230, 850 350, 600 270 S 250 150, -50 220",
    width: 1.5,
    opacity: 0.45,
  },
  {
    d: "M1300 460 C 980 410, 800 480, 520 430 S 180 480, -50 440",
    width: 1.25,
    opacity: 0.35,
  },
];

const MOBILE_ROUTES = [
  { d: "M-20 70 C 60 40, 140 90, 220 55 S 340 20, 420 50", width: 2, opacity: 0.8 },
  { d: "M-20 30 C 80 60, 160 10, 260 35 S 360 60, 420 25", width: 1.5, opacity: 0.5 },
];

const DURATIONS = [9, 13, 11, 15];
const BEGINS = ["0s", "-5s", "-3s", "-7s"];
const SCALES = [1.4, 1.1, 1.15, 0.95];
const TAXI_OPACITIES = [0.95, 0.8, 0.75, 0.6];

export function HeroBackground() {
  const driving = useMotionAllowed();

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="blob-drift absolute -right-32 top-0 h-[520px] w-[520px] rounded-full opacity-50 blur-[90px] sm:-right-40 sm:h-[560px] sm:w-[560px]"
        style={{
          background: "radial-gradient(circle, var(--gold) 0%, transparent 75%)",
        }}
      />
      <div
        className="blob-drift-slow absolute -left-24 bottom-0 h-[380px] w-[380px] rounded-full opacity-25 blur-[80px]"
        style={{
          background: "radial-gradient(circle, var(--gold-deep) 0%, transparent 70%)",
        }}
      />

      {/* Tablet/desktop: full-width route illustration */}
      <svg
        viewBox="0 0 1200 500"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 hidden h-full w-full opacity-[0.35] sm:block"
        fill="none"
      >
        {ROUTES.map((r, i) => (
          <path
            key={i}
            d={r.d}
            stroke="var(--gold)"
            strokeWidth={r.width}
            className="route-flow"
            style={{ animationDelay: `-${i * 1.5}s`, opacity: r.opacity }}
          />
        ))}
      </svg>
      {driving && (
        <svg
          viewBox="0 0 1200 500"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 hidden h-full w-full sm:block"
        >
          {ROUTES.map((r, i) => (
            <g key={i} opacity={TAXI_OPACITIES[i]}>
              <TaxiMarker scale={SCALES[i]} />
              <animateMotion
                path={r.d}
                dur={`${DURATIONS[i]}s`}
                begin={BEGINS[i]}
                repeatCount="indefinite"
                rotate="auto"
              />
            </g>
          ))}
        </svg>
      )}

      {/* Mobile: a thin strip confined to the top padding, clear of the text below */}
      <svg
        viewBox="0 0 400 110"
        preserveAspectRatio="xMidYMin meet"
        className="absolute inset-x-0 top-0 h-full w-full opacity-[0.35] sm:hidden"
        fill="none"
      >
        {MOBILE_ROUTES.map((r, i) => (
          <path
            key={i}
            d={r.d}
            stroke="var(--gold)"
            strokeWidth={r.width}
            className="route-flow"
            style={{ animationDelay: `-${i * 2}s`, opacity: r.opacity }}
          />
        ))}
      </svg>
      {driving && (
        <svg
          viewBox="0 0 400 110"
          preserveAspectRatio="xMidYMin meet"
          className="absolute inset-x-0 top-0 h-full w-full sm:hidden"
        >
          {MOBILE_ROUTES.map((r, i) => (
            <g key={i} opacity={i === 0 ? 0.9 : 0.65}>
              <TaxiMarker scale={0.55} />
              <animateMotion
                path={r.d}
                dur={`${7 + i * 3}s`}
                begin={i === 0 ? "0s" : "-3s"}
                repeatCount="indefinite"
                rotate="auto"
              />
            </g>
          ))}
        </svg>
      )}
    </div>
  );
}
