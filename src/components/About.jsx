import React, { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import hero from "../assets/hero.png";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isExpanded, setIsExpanded] = useState(false);

  const paragraphs = [
    "I'm a Healthcare Technology Engineer with a passion for creating innovative software solutions that make a difference.",
    "My unique background as a former professional poker player taught me invaluable lessons in strategy, adaptability, and performing under pressure - skills that I now apply to software development.",
    "I thrive on bringing ideas to life through code and am constantly seeking new challenges to expand my technical expertise.",
    "When I'm not coding, you'll find me playing padel tennis, enjoying board games, traveling, or diving into a good book.",
  ];

  return (
    <div
      name="about"
      className="min-h-screen w-full bg-gray-800 text-gray-300 py-12 px-8"
    >
      <div className="flex flex-col justify-center items-center w-full h-full max-w-[1400px] mx-auto">
        <div className="max-w-[1200px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-bold inline border-b-4 border-gray-600">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1200px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-bold">
            <p>Nice to meet you. Please take a look around.</p>
            <motion.div
              ref={ref}
              className="mt-8 max-w-[300px] overflow-hidden rounded-lg 3xl:max-w-[500px]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: isInView ? 0.7 : 0,
                scale: isInView ? 1 : 0.9,
              }}
              transition={{
                duration: 2.5,
                ease: "easeOut",
              }}
            >
              <img
                src={hero}
                alt="Profile"
                className="w-full h-full object-cover transform transition duration-500"
              />
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="text-lg xl:text-xl 2xl:text-2xl 3xl:text-4xl">
            {/* Mobile View */}
            <div className="sm:hidden space-y-4">
              {paragraphs
                .slice(0, isExpanded ? paragraphs.length : 2)
                .map((para, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 }}
                    className="leading-relaxed"
                  >
                    {para}
                  </motion.p>
                ))}
              <motion.button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-gray-400 hover:text-white transition-colors mt-4 block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isExpanded ? "Show Less" : "Read More..."}
              </motion.button>
            </div>

            {/* Desktop View */}
            <div className="hidden sm:block space-y-4">
              {paragraphs.map((para, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="leading-relaxed"
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
