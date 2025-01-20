import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="min-h-screen w-full bg-black text-gray-300 py-12 px-8"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-customPurple">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I hold a Bachelor of Engineering in Healthcare Technology and am
              passionate about creating innovative software solutions that make
              a difference. Before diving into the world of engineering, I spent
              five years as a professional poker player, mastering strategy,
              adaptability, and high-pressure decision-making. During my final
              year of education, I worked as a student developer, gaining
              hands-on experience and discovering the joy of bringing ideas to
              life through code. Now, I continue to fuel my passion for software
              development by working on personal projects, exploring new
              technologies, and constantly challenging myself to grow as a
              developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
