"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type Screenshot = { src: string; alt: string };

export function ScreenshotCarousel({
  screenshots,
  interval = 2600,
}: {
  screenshots: Screenshot[];
  interval?: number;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % screenshots.length);
    }, interval);
    return () => clearInterval(id);
  }, [screenshots.length, interval]);

  return (
    <div className="float-idle relative mx-auto w-[230px] overflow-hidden rounded-[2.4rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] sm:w-[260px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={screenshots[index].src}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Image
            src={screenshots[index].src}
            alt={screenshots[index].alt}
            width={230}
            height={500}
            priority
            className="w-full"
          />
        </motion.div>
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center gap-1.5 pb-3">
        {screenshots.map((shot, i) => (
          <span
            key={shot.src}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-4 bg-gold" : "w-1.5 bg-paper-soft/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
