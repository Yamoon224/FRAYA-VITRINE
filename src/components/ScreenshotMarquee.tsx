import Image from "next/image";
import { cn } from "@/lib/utils";

type Screenshot = { src: string; alt: string };

const ROTATIONS = ["-rotate-2", "rotate-2", "-rotate-1", "rotate-1", "rotate-3", "-rotate-3"];

export function ScreenshotMarquee({
  screenshots,
  reverse = false,
}: {
  screenshots: Screenshot[];
  reverse?: boolean;
}) {
  const loop = [...screenshots, ...screenshots];

  return (
    <div className="group relative overflow-hidden py-6">
      <div
        className={cn(
          "flex w-max shrink-0 items-start gap-6 [animation-play-state:running] group-hover:[animation-play-state:paused]",
          reverse ? "marquee-track-slow-reverse" : "marquee-track-slow"
        )}
      >
        {loop.map((shot, i) => (
          <div
            key={`${shot.src}-${i}`}
            className={cn(
              "shrink-0 overflow-hidden rounded-[1.6rem] shadow-[0_24px_50px_-20px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:scale-[1.03] hover:rotate-0",
              ROTATIONS[i % ROTATIONS.length]
            )}
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              width={230}
              height={500}
              className="h-[280px] w-auto sm:h-[340px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
