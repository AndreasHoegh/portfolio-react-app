import React, { useState } from "react";
import { motion } from "framer-motion";

const History = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const paragraphs = [
    "My journey in technology began at Aarhus University, where I specialized in Healthcare Technology Engineering. My curriculum emphasized both software and hardware solutions for medical devices, with a strong focus on C#/.NET development.",
    "I enhanced my technical portfolio through electives in frontend development, machine learning, biomedical data processing, and mobile application development.",
    "As a student software developer at Teknologisk Institut, I built frontend solutions for laboratory management, integrating sensor data from Raspberry Pi devices to improve operational oversight.",
    "During my internship at Santax Medico, I contributed to achieving ISO 14001 environmental certification through analytical work and quality management system implementation.",
    "The culmination of my academic journey was my Bachelor Thesis project - developing a urine test analysis device using Python for image processing. This project demonstrated my ability to combine healthcare technology with practical software solutions to solve real-world problems.",
  ];

  return (
    <div
      name="history"
      className="min-h-screen w-full bg-stone-100 text-gray-800 py-12 px-8"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1200px] 3xl:max-w-[1600px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-bold">
            <p>My Journey So Far</p>
          </div>

          {/* Text Content */}
          <div className="text-lg xl:text-xl 3xl:text-4xl">
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
                className="text-gray-600 hover:text-gray-900 transition-colors mt-4 block"
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

export default History;
