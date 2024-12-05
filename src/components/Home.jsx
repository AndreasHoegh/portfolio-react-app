import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import hero from "../assets/hero.png";

const Home = () => {
  return (
    <div
      name="home"
      className=" h-screen bg-stone-100 min-h-[1024px] pt-24 w-screen "
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full mt-6">
        <h1 className="text-4xl sm:text-7xl font-bold text-customPurple">
          Welcome to my
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold">Personal Website</h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          My name is{" "}
          <span className="text-customPurple font-semibold">
            Andreas Høgh.{" "}
          </span>{" "}
          Currently, I'm focused on building responsive full-stack web
          applications
        </p>

        {/* Circle and btn Container */}
        <div className="flex justify-between mb-8 max-w-screen">
          <button className=" group border-y-2 py-2 px-2 my-4 h-10 text-xs sm:text-lg hover:bg-customPurple hover:border-customPurple hover:text-white">
            <Link
              to="work"
              smooth={true}
              duration={500}
              className="flex items-center"
            >
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 my-1" />
              </span>
            </Link>
          </button>
          {/* Image */}
          <div className="mr-24">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.4, duration: 1.2, ease: "easeInOut" },
              }}
              className=" md:w-[368px] md:h-[368px] w-[148px] h-[208px]  mix-blend-darken absolute ml-4 sm:ml-8 mt-8 md:mt-4 "
            >
              <img src={hero} alt="Description of the" className="w-full  " />
            </motion.div>

            {/* circle */}
            <motion.svg
              className="w-[200px] h-[330px] md:w-[500px] md:h-[700px] stroke-customPurple"
              fill="transparent"
              viewBox="0 0 506 506"
            >
              <motion.circle
                cx="253"
                cy="253"
                r="250"
                strokeWidth={6}
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
                initial={{ strokeDasharray: "24 10 0 0" }}
                animate={{
                  strokeDasharray: [
                    "15 120 25 25",
                    "16 25 92 72",
                    "4 250 22 22",
                  ],
                  rotate: [120, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
