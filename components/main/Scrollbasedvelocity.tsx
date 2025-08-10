"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ParallaxProps {
  baseVelocity: number;
  className?: string;
}

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const ParallaxLogo = ({ baseVelocity = 100, className }: ParallaxProps) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const [repetitions, setRepetitions] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateRepetitions = () => {
      if (containerRef.current && logoRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const logoWidth = logoRef.current.offsetWidth;
        const newRepetitions = Math.ceil(containerWidth / logoWidth) + 3;
        setRepetitions(newRepetitions);
      }
    };

    calculateRepetitions();
    window.addEventListener("resize", calculateRepetitions);
    return () => window.removeEventListener("resize", calculateRepetitions);
  }, []);

  const x = useTransform(baseX, (v) => `${wrap(-100 / repetitions, 0, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      ref={containerRef}
      className="w-screen overflow-hidden whitespace-nowrap"
      style={{ margin: 0, padding: 0 }}
    >
      <motion.div className={cn("inline-block", className)} style={{ x }}>
        {Array.from({ length: repetitions }).map((_, i) => (
          <div
            key={i}
            ref={i === 0 ? logoRef : null}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full relative backdrop-blur-md bg-white/10 dark:bg-black/20 border border-white/20 shadow-lg"
            style={{
              whiteSpace: "nowrap",
              margin: "0 10px",
            }}
          >
            {/* Glitter effect */}
            <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
              <div className="shiny-effect" />
            </div>

            <Image
              src="/logo-1.png"
              alt="Logo"
              width={60}
              height={60}
              priority
            />
            <span className="text-xl font-bold text-black dark:text-white">
              CRE8TAR
            </span>
          </div>
        ))}
      </motion.div>

      <style jsx>{`
        .shiny-effect {
          position: absolute;
          top: 0;
          left: -150%;
          width: 150%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent 0%,
            rgba(255, 255, 255, 0.6) 50%,
            transparent 100%
          );
          animation: shine 3s infinite;
        }

        @keyframes shine {
          0% {
            left: -150%;
          }
          50% {
            left: 150%;
          }
          100% {
            left: 150%;
          }
        }
      `}</style>
    </div>
  );
};

export const ScrollBasedVelocity = () => {
  return (
    <main className="w-screen m-0 p-0 flex flex-col items-center bg-white dark:bg-black">
      <section className="w-screen overflow-hidden flex flex-col gap-0 max-w-full m-0 p-0">
        <div className="w-full flex flex-col gap-0 relative">
          <div className="rounded-xl overflow-hidden p-0">
            <ParallaxLogo baseVelocity={5} />
            <ParallaxLogo baseVelocity={-5} />
          </div>
        </div>
      </section>
    </main>
  );
};
