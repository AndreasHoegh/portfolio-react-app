import React from "react";
import { motion } from "framer-motion";

// Importer billeder af skills
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";
import Csharp from "../assets/csharp.png";
import Sql from "../assets/sql.png";
import Next from "../assets/Next.js.png";
import net from "../assets/net.png";

const Skills = () => {
  const skills = [
    { id: 1, name: "HTML", image: HTML },
    { id: 2, name: "CSS", image: CSS },
    { id: 3, name: "JavaScript", image: JavaScript },
    { id: 4, name: "React", image: ReactImg },
    { id: 5, name: "Node.js", image: Node },
    { id: 6, name: "GitHub", image: GitHub },
    { id: 7, name: "Tailwind", image: Tailwind },
    { id: 8, name: "MongoDB", image: Mongo },
    { id: 9, name: "C#", image: Csharp },
    { id: 10, name: "SQL", image: Sql },
    { id: 11, name: "Next.js", image: Next },
    { id: 12, name: ".NET", image: net },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div
      name="skills"
      className="w-full min-h-screen bg-gray-800 text-gray-300"
    >
      <div className="max-w-[1000px] mx-auto p-8 flex flex-col justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-4xl font-bold inline border-b-4 border-gray-600">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8"
        >
          {skills.map(({ id, image, name }) => (
            <motion.div
              key={id}
              variants={item}
              className="group hover:scale-105 duration-500"
            >
              <div className="shadow-md shadow-[#040c16] hover:shadow-customPurple p-6 rounded-xl bg-gray-700 relative overflow-hidden">
                <img
                  className="w-20 mx-auto group-hover:scale-110 duration-300"
                  src={image}
                  alt={`${name} icon`}
                />
                <p className="my-4 group-hover:text-customPurple duration-300">
                  {name}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
