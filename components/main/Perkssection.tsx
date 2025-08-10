"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const benefits = [
  {
    title: "COLLECTIBLE & UNIQUE NINJAS",
    description:
      "Each ninja is uniquely crafted with rare traits and powerful hidden abilities.",
    icon: (
      <svg className="w-8 h-8 mb-4 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.22-1.79L9 14v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    ),
  },
  {
    title: "STAKING & SHADOW REWARDS",
    description:
      "Stake your ninjas to earn exclusive SHADOW tokens and unlock special perks.",
    icon: (
      <svg className="w-8 h-8 mb-4 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
      </svg>
    ),
  },
  {
    title: "COMMUNITY POWER",
    description:
      "Join a strong community that supports and grows together with exclusive access.",
    icon: (
      <svg className="w-8 h-8 mb-4 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
      </svg>
    ),
  },
  {
    title: "READY TO JOIN THE CLAW?",
    description:
      "Become part of the clan and shape the future of CRE8TAR ninjas with us.",
    icon: (
      <svg className="w-8 h-8 mb-4 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z"/>
      </svg>
    ),
  },
];

const cardHeights = [260, 400, 420, 280];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export const PerksSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-16 bg-transparent" ref={containerRef}>
      {/* Header */}
      <div className="w-full max-w-full text-center px-8 mb-10">
        <h2 className="text-4xl font-extrabold text-white uppercase">UNLOCK THE PERKS</h2>
        <p className="text-gray-300 mt-2 max-w-xl mx-auto">
          Discover the unique features and benefits available to CRE8TAR ninja holders.
        </p>
      </div>

      {/* Grid with animation */}
      <motion.div
        className="mx-auto px-8"
        style={{ maxWidth: 1200 }}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        <div
          className="grid grid-cols-2 gap-6 items-start"
        >
          {benefits.map((benefit, idx) => {
            const height = cardHeights[idx];
            const extraStyle = idx === 2 ? { marginTop: "-140px" } : {};
            const bgColor =
              idx % 2 === 0
                ? "bg-purple-900/40 backdrop-blur-md border border-purple-500/50 shadow-[0_0_15px_rgba(139,92,246,0.5)]"
                : "bg-blue-900/40 backdrop-blur-md border border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.5)]";

            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139, 92, 246, 0.7)" }}
                className={`flex flex-col items-center p-5 rounded-lg ${bgColor}`}
                style={{ height, ...extraStyle }}
              >
                {benefit.icon}
                <h3 className="text-xl font-semibold text-white mb-2 uppercase text-center">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-center text-base leading-relaxed max-w-xs mb-4">
                  {benefit.description}
                </p>

                {(idx === 0 || idx === benefits.length - 1) && (
                  <button
                    onClick={() => window.open("https://www.youtube.com", "_blank")}
                    className="mx-auto w-[200px] py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-300"
                  >
                    Visit YouTube
                  </button>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
