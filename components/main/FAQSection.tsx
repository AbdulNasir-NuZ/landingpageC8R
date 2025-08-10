"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { slideInFromTop, slideInFromLeft } from "@/lib/motion";

export const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is nftninja?",
      answer:
        "nftninja is a collection of 5,000 unique, masked ninja NFTs living on the Ethereum blockchain. Each ninja is packed with distinct traits, rarity, and hidden utility within the ecosystem.",
    },
    {
      question: "How can I mint a ninja?",
      answer:
        "Connect your wallet to our minting portal during the sale period. Select your desired quantity and confirm the transaction.",
    },
    {
      question: "Will there be a game or metaverse integration?",
      answer:
        "Yes! We're developing a P2E game where your ninjas can battle, complete missions, and earn $SHADOW tokens.",
    },
    {
      question: "What is $shadow and how do I earn it?",
      answer:
        "$SHADOW is our utility token earned through gameplay, staking, and community participation.",
    },
    {
      question: "What can I do with my nftninja?",
      answer:
        "Use as avatars, stake for rewards, participate in governance, or trade on secondary markets.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="w-full px-4 pt-12 pb-20 sm:px-8 md:px-12 lg:px-24 overflow-visible"
      style={{
        background: "inherit",
        marginTop: 0,
      }}
    >
      {/* Header */}
      <motion.div variants={slideInFromTop} className="text-center mt-12 mb-16">
        <h2 className="text-5xl font-extrabold text-white mb-2 uppercase">
          FAQ
        </h2>
        <motion.p
          variants={slideInFromLeft(0.3)}
          className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto"
        >
          Here are some of the most common queries to help you get started.
        </motion.p>
      </motion.div>

      {/* FAQ Items */}
      <div className="max-w-4xl mx-auto space-y-6 overflow-visible">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            variants={slideInFromLeft(0.3 + index * 0.1)}
            className="overflow-visible"
          >
            <motion.div
              className="p-6 rounded-xl relative overflow-hidden
                backdrop-blur-md bg-gradient-to-br from-[#1a103d]/70 to-[#012c3d]/70 
                border border-transparent hover:border-indigo-400/60
                shadow-[0_0_15px_rgba(138,43,226,0.4)] hover:shadow-[0_0_25px_rgba(138,43,226,0.7)]
                transition-all duration-300 cursor-pointer"
              onClick={() => toggleFAQ(index)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  <span className="text-purple-400 mr-2">{index + 1}.</span>
                  {faq.question}
                </h3>

                {/* Toggle Icon */}
                <motion.svg
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="white"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </motion.svg>
              </div>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="pt-4"
                  >
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
