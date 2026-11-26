import { Star, ShieldCheck } from "lucide-react";

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[260px] rounded-[2.4rem] border-[6px] border-ink-soft bg-ink-soft p-2 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] sm:w-[290px]">
      <div className="absolute left-1/2 top-2 h-5 w-24 -translate-x-1/2 rounded-full bg-ink" />
      <div className="relative overflow-hidden rounded-[1.9rem] bg-gradient-to-b from-[#15130f] to-ink">
        <div className="h-[380px] w-full sm:h-[420px]">
          <div className="relative h-[62%] w-full bg-[radial-gradient(circle_at_30%_20%,#2a2520_0%,#0e0d0b_70%)]">
            <svg
              viewBox="0 0 260 240"
              className="absolute inset-0 h-full w-full opacity-70"
              fill="none"
            >
              {Array.from({ length: 6 }).map((_, i) => (
                <path
                  key={`h-${i}`}
                  d={`M0 ${30 * (i + 1)} H260`}
                  stroke="#322d22"
                  strokeWidth="1"
                />
              ))}
              {Array.from({ length: 6 }).map((_, i) => (
                <path
                  key={`v-${i}`}
                  d={`M${40 * (i + 1)} 0 V240`}
                  stroke="#322d22"
                  strokeWidth="1"
                />
              ))}
              <path
                d="M20 190 C 70 150, 90 120, 130 110 S 200 70, 230 40"
                stroke="#f2a91a"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="2 10"
              />
            </svg>
            <div className="pin-drop absolute left-[18px] top-[178px] h-3 w-3 rounded-full bg-paper-soft ring-4 ring-paper-soft/20" />
            <div
              className="pin-drop absolute left-[216px] top-[28px] h-3.5 w-3.5 rounded-full bg-gold ring-4 ring-gold/25"
              style={{ animationDelay: "1.9s" }}
            />
          </div>

          <div className="relative -mt-6 h-[calc(38%+1.5rem)] rounded-t-3xl bg-ink px-4 pb-4 pt-5">
            <div className="flex items-center justify-between">
              <p className="font-display text-sm font-semibold text-paper-soft">
                Course en approche
              </p>
              <span className="flex items-center gap-1 rounded-full bg-ink-soft px-2 py-0.5 text-[11px] font-medium text-gold">
                <Star size={11} fill="currentColor" strokeWidth={0} />
                4.9
              </span>
            </div>
            <div className="mt-3 flex items-center gap-3 rounded-2xl bg-ink-soft p-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/15">
                <ShieldCheck size={18} className="text-gold" />
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-paper-soft">
                  Kader A. — Gladiateur
                </p>
                <p className="text-xs text-muted">Arrivée dans 3 min</p>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between rounded-2xl border border-ink-line px-3 py-2.5 text-xs text-muted">
              <span>Cocody → Plateau</span>
              <span className="font-semibold text-paper-soft">2 100 FCFA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
