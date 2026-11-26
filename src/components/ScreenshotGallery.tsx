"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Screenshot = { src: string; alt: string };

export function ScreenshotGallery({ screenshots }: { screenshots: Screenshot[] }) {
  return (
    <div className="snap-x snap-mandatory overflow-x-auto pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="mx-auto flex w-max gap-5">
        {screenshots.map((shot, i) => (
          <motion.div
            key={shot.src}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{
              opacity: { duration: 0.5, delay: i * 0.06 },
              y: {
                duration: 3.6 + (i % 3) * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.18,
              },
            }}
            whileHover={{
              y: -14,
              rotate: i % 2 === 0 ? -2 : 2,
              transition: { duration: 0.25, ease: "easeOut" },
            }}
            className="shrink-0 snap-center overflow-hidden rounded-[1.75rem] shadow-[0_24px_50px_-20px_rgba(0,0,0,0.4)]"
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              width={230}
              height={500}
              className="h-[360px] w-auto sm:h-[420px]"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
