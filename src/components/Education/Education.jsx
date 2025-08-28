import React from "react";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-4 rounded"></div>
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          My education has been a journey of learning and development. Here are
          the details of my academic background.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-600 h-full"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#8245ec] border-4 border-gray-900 w-8 h-8 rounded-full flex justify-center items-center z-10"></div>

            {/* Card */}
            <div
              className={`w-full sm:max-w-md p-6 rounded-2xl shadow-lg border border-gray-700 bg-gray-900/70 backdrop-blur-md transition-transform duration-300 hover:scale-105 ${
                index % 2 === 0 ? "sm:ml-0 sm:mr-auto" : "sm:mr-0 sm:ml-auto"
              }`}
            >
              <h3 className="text-xl font-semibold text-white">
                {edu.degree}
              </h3>
              <h4 className="text-md text-gray-300">{edu.school}</h4>
              <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
              <p className="mt-3 text-gray-400 font-medium">
                Grade: {edu.grade}
              </p>
              <p className="mt-2 text-gray-400">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
