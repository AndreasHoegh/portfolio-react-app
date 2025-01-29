import React from "react";
import { motion } from "framer-motion";
import { data } from "../data/data.js";

const Work = () => {
  const project = data;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      name="work"
      className="w-full md:h-screen min-h-[1024px] text-gray-800 bg-stone-100 pt-8 px-8"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 text-gray-800 border-gray-300">
            Work
          </p>
          <p className="py-6 text-xl font-semibold">
            Check out some of my recent work
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          {project &&
            project.map((item, index) => (
              <motion.div
                key={index}
                variants={projectVariants}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                className="relative group rounded-lg overflow-hidden bg-gray-700 shadow-lg"
              >
                {/* Project Image with Overlay */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="space-x-4">
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
                      >
                        Code
                      </a>
                      <a
                        href={item.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
                      >
                        Live
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.name}
                  </h3>
                  {item.description && (
                    <p className="text-gray-400 mb-4">{item.description}</p>
                  )}
                  {item.tech && (
                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-sm bg-gray-800 text-white rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 border-2 border-gray-600 rounded-lg pointer-events-none"
                  initial={false}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                />
              </motion.div>
            ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Work;
