"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative w-full px-5 mt-40 z-[20] flex flex-col items-center"
    >
 
      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col gap-1 justify-center max-w-[1200px] text-left px-6 mx-0">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] mt-12 border border-[#7042f88b] opacity-[0.9] flex items-center ml-0"
        >
          <SparklesIcon className="text-[#b49bff] mr-[8px] h-3 w-3" />
          <h1 className="Welcome-text text-[13px]">
            Emotional AI Avatars That Speak Your Language
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-5xl font-bold text-white max-w-[1200px] mx-auto"
        >
          <span>
            The Future of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Digital Identity.
            </span>{" "}
            <br />
            Lifelike Avatars with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              True Ownership.
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[900px] mx-auto pl-4"
        >
          Blending the decentralized freedom of Web3 with the emotional
          intelligence of Web4. Lifelike AI avatars that mirror human nuance,
          built for ownership and expression. A new layer of digital identity
          authentic, personal, and truly yours.
        </motion.p>

        <div className="flex gap-6 max-w-[640px] justify-center mx-auto mt-6">
          <motion.a
            variants={slideInFromLeft(2)}
            className="py-2 px-12 button-primary text-center text-white cursor-pointer rounded-lg flex-1 flex items-center justify-center"
          >
            Check Demo
          </motion.a>
        </div>
      </div>

      {/* Join Waitlist Section - Centered at Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5 }}
        className="mt-16 bg-opacity-90 backdrop-blur-md rounded-full px-1 py-1 flex items-center space-x-2 w-full max-w-[400px] z-10"
      >
        <label htmlFor="waitlist-email" className="sr-only">
          Email address
        </label>
        <input
          id="waitlist-email"
          type="email"
          placeholder="Your email"
          className="flex-grow rounded-full border border-gray-600 bg-transparent px-3 py-1.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <motion.button
          type="submit"
          className="bg-purple-600 px-5 py-1.5 rounded-full text-white font-semibold transition text-sm"
          whileHover={{ scale: 1.05, cursor: "pointer" }}
          whileTap={{ scale: 0.95 }}
        >
          Join
        </motion.button>
      </motion.div>
    </motion.div>
  );
};