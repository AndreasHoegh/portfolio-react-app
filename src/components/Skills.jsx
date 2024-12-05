import React from "react";

// Importer billeder af skills
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Sql from "../assets/sql.png";
import Csharp from "../assets/csharp.png";
import NodeJS from "../assets/nodejs.png";
import Jenkins from "../assets/jenkins.png";

// Opret en array-liste med skills
const skillsData = [
  { name: "HTML", image: HTML },
  { name: "CSS", image: CSS },
  { name: "JavaScript", image: JavaScript },
  { name: "React", image: ReactImg },
  { name: "GitHub", image: GitHub },
  { name: "C#", image: Csharp },
  { name: "Tailwind", image: Tailwind },
  { name: "Firebase", image: FireBase },
  { name: "SQL", image: Sql },
  { name: "NodeJS", image: NodeJS },
  { name: "Jenkins", image: Jenkins },
];

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full md:h-screen min-h-[1024px] bg-stone-100 px-8"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full pt-8">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-customPurple">
            Skills
          </p>
          <p className="py-4 text-xl font-semibold border-b-2 border-customPurple border-opacity-15">
            These are the technologies I've worked with
          </p>
        </div>

        {/* Grid af skills */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="bg-[#a9acaa] shadow-md shadow-[#7ae491] hover:scale-110 duration-200"
            >
              <img
                className="w-20 h-20 mx-auto mt-2"
                src={skill.image}
                alt={`${skill.name} icon`}
              />
              <p className="my-4">{skill.name.toUpperCase()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
