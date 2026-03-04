import React, { useState } from "react";
import { motion } from "framer-motion";

const History = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const paragraphs = [
    {
      label: "Where it started",
      text: "Aarhus University was where I first fell down the rabbit hole of Healthcare Technology Engineering. A field that sits at the intersection of software, hardware, and actually helping people. Most of my time there was spent deep in C#/.NET, figuring out how code could meaningfully interact with the physical world of medical devices.",
    },
    {
      label: "Going deeper",
      text: "Frontend development, machine learning, biomedical data processing, mobile apps. I kept adding electives, chasing whatever seemed interesting or usefull",
    },
    {
      label: "First real job",
      text: "At Teknologisk Institut I got to build frontend tools for lab management that talked to sensors. Seeing something you built actually get used by real people, was when it clicked for me.",
    },
    {
      label: "A detour into quality",
      text: "My internship at Santax Medico took me somewhere unexpected: ISO 14001 environmental certification. A lot of analytical work and quality system wrangling, but it gave me an appreciation for the unglamorous side of engineering. The documentation, the processes, the compliance.",
    },
    {
      label: "The thesis",
      text: "For my Bachelor project I built a urine test analysis device using Python and image processing. It sounds niche, but it was the most rewarding thing I'd done. Combining everything I'd learned into something that could genuinely matter in a clinical setting.",
    },
  ];

  return (
    <div
      name="history"
      className="min-h-screen w-full bg-stone-100 text-gray-800 py-20 px-8"
      style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
    >
      {/* Decorative top rule */}
      <div className="max-w-[1200px] mx-auto mb-16">
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-stone-400" />
          <span
            className="text-xs tracking-[0.3em] text-stone-500 uppercase"
            style={{ fontFamily: "sans-serif" }}
          >
            Background
          </span>
          <div className="h-px flex-1 bg-stone-400" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1200px] w-full grid sm:grid-cols-[1fr_2fr] gap-12 px-4">
          {/* Title */}
          <div className="sm:text-right">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl xl:text-5xl font-bold leading-tight text-stone-800"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              My Journey
              <br />
              <span className="text-stone-400">So Far</span>
            </motion.h2>

            {/* Vertical accent line — desktop only */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden sm:block h-24 w-px bg-stone-400 ml-auto mt-8 origin-top"
            />
          </div>

          {/* Text Content */}
          <div>
            {/* Mobile View */}
            <div className="sm:hidden space-y-6">
              {paragraphs
                .slice(0, isExpanded ? paragraphs.length : 2)
                .map((para, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.15 }}
                  >
                    <span
                      className="text-xs tracking-widest text-stone-400 uppercase block mb-1"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      {para.label}
                    </span>
                    <p className="text-base leading-loose text-stone-700">
                      {para.text}
                    </p>
                  </motion.div>
                ))}
              <motion.button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-4 text-sm tracking-widest uppercase text-stone-500 hover:text-stone-900 transition-colors border-b border-stone-400 pb-0.5"
                style={{ fontFamily: "sans-serif" }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {isExpanded ? "Show Less" : "Read More"}
              </motion.button>
            </div>

            {/* Desktop View */}
            <div className="hidden sm:block space-y-8">
              {paragraphs.map((para, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <span
                    className="text-xs tracking-[0.25em] text-stone-400 uppercase block mb-2 group-hover:text-stone-600 transition-colors"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    {para.label}
                  </span>
                  <p className="text-lg xl:text-xl leading-loose text-stone-700 border-l-2 border-transparent group-hover:border-stone-400 pl-4 transition-all duration-300">
                    {para.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom rule */}
      <div className="max-w-[1200px] mx-auto mt-20">
        <div className="h-px bg-stone-300" />
      </div>
    </div>
  );
};

export default History;
