import React from "react";

const History = () => {
  return (
    <div
      name="history"
      className="min-h-screen w-full bg-stone-100 text-gray-800 py-12 px-8"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-gray-300">
              History
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>My Journey So Far</p>
          </div>
          <div>
            <p>
              My journey in technology began at Aarhus University, where I
              specialized in Healthcare Technology Engineering. My curriculum
              emphasized both software and hardware solutions for medical
              devices, with a strong focus on C#/.NET development. I enhanced my
              technical portfolio through electives in frontend development,
              machine learning, biomedical data processing, and mobile
              application development. As a student software developer at
              Teknologisk Institut, I built frontend solutions for laboratory
              management, integrating sensor data from Raspberry Pi devices to
              improve operational oversight. During my internship at Santax
              Medico, I contributed to achieving ISO 14001 environmental
              certification through analytical work and quality management
              system implementation. The culmination of my academic journey was
              my Bachelor Thesis project - developing a urine test analysis
              device using Python for image processing. This project
              demonstrated my ability to combine healthcare technology with
              practical software solutions to solve real-world problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
