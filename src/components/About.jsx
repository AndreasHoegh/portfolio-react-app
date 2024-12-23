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
              I am a Bachelor of Engineering in Healthcare Technology,
              passionate about building excellent software. I used to be a
              professionel poker player for 5 years before I decided to study
              Healtcare technology engineering. While I studied I developed a
              passion for software development, which led me to get a study job
              as a developer for the last year of my education.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
