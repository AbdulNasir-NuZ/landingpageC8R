"use client";

import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";

const roadmapData = [
  {
    title: "LAUNCH & EVENT",
    bullets: [
      "Welcome all 20 minutes at the celebration",
      "Follows on an occasion, and celebrate!",
      "Community channels welcome!",
    ],
  },
  {
    title: "CRE8TAR COIN",
    bullets: [
      "The core currency of the CRE8TAR ecosystem",
      "Earnable through gameplay and challenges",
      "Used for in-game purchases and marketplace trades",
    ],
  },
  {
    title: "GAME MECHANICS",
    bullets: [
      "Learn the rules of the ninja world",
      "Progression system explained",
      "Unlockable skills revealed",
    ],
  },
  {
    title: "LORE EXPANSION",
    bullets: [
      "New chapters added monthly",
      "Backstory deep dives",
      "Community voting on plot twists",
    ],
  },
  {
    title: "METAVERSE ENTRY",
    bullets: [
      "Virtual dojo integration",
      "Playable avatars in VR",
      "Interconnected metaverse hubs",
    ],
  },
];

export const Roadmap = () => {
  const lineRef = useRef(null);
  const isInView = useInView(lineRef, { once: true });
  const lineControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      lineControls.start({ scaleY: 1, transition: { duration: 1.2 } });
    }
  }, [isInView, lineControls]);

  return (
    <section className="py-16 bg-transparent">
      {/* Header */}
      <div className="text-center mb-12 px-6">
        <h3 className="text-sm font-bold mb-2 text-white uppercase tracking-widest">
          ROADMAP
        </h3>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white uppercase">
          THE PATH OF CRE8TAR
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          A weekly workshop organized by our community, guiding you through each
          phase of our ninja journey.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative w-full max-w-5xl mx-auto">
        {/* Vertical line */}
        <motion.div
          ref={lineRef}
          className="absolute top-0 h-full w-1 bg-gradient-to-b from-gray-300 via-gray-500 to-gray-300 rounded-full origin-top left-1/2 -translate-x-1/2 z-0"
          initial={{ scaleY: 0 }}
          animate={lineControls}
        />

        <div className="flex flex-col space-y-24 relative z-10">
          {roadmapData.map((phase, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`flex items-center w-full ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                {/* Coin */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute left-1/2 -translate-x-1/2 bg-transparent z-20"
                >
                  <div className="relative w-20 h-20">
                    <Image
                      src="/c8coin.png"
                      alt={`Coin ${idx + 1}`}
                      fill
                      className="object-contain"
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
                      {idx + 1}
                    </span>
                  </div>
                </motion.div>

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  viewport={{ once: true }}
                  className="relative w-[90%] sm:w-5/12 p-6 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/40 shadow-lg hover:border-gray-200 transition-all"
                  style={{
                    boxShadow:
                      "0 0 25px rgba(255,255,255,0.15), inset 0 0 8px rgba(255,255,255,0.3)",
                  }}
                >
                  <h2 className="text-xl font-bold uppercase mb-3 text-white">
                    {phase.title}
                  </h2>
                  <ul className="space-y-2 text-gray-200 text-sm">
                    {phase.bullets.map((bullet, i) => (
                      <li key={i}>• {bullet}</li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
