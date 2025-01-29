import React from "react";

const History = () => {
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
          <div className="text-lg xl:text-xl 3xl:text-4xl">
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
