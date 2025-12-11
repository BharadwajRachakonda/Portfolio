import React from "react";
import { motion } from "framer-motion";
import cpp from "./cpp.png";
import python from "./python.png";
import java from "./java.png";
import javaScript from "./javascript.png";

const skills = [
  {
    name: "Python",
    percentage: 80,
    used_for:
      "I am not a fan of ML, but I use Python for everything, whether web dev using Flask or DSA practice. I do a bit of basic ML in Python as well. Learned it during College",
    image: python,
    about:
      "Python is commonly used for machine learning, backend with Flask/Django.",
    color: "orange",
    align: "self-start",
  },
  {
    name: "CPP",
    percentage: 80,
    used_for:
      "In my journey of problem-solving I understood that someday company's might not allow Python. So I learned C++ too through NPTEL.",
    image: cpp,
    about: "C++ is commonly used for game development and IoT.",
    color: "sky",
    align: "self-end",
  },
  {
    name: "Java",
    percentage: 60,
    used_for:
      "Java was a part of my curriculum in college. I learned it because our professor was good at teaching it, and Java is a standard for many company's.",
    image: java,
    about:
      "Java is both interpreted and compiled. It is mostly used for web development.",
    color: "cyan",
    align: "self-end",
  },
  {
    name: "JavaScript",
    percentage: 70,
    used_for:
      "I learned JS from YouTube, but I explored more during my projects.",
    image: javaScript,
    about: "JavaScript is used for web development...",
    color: "orange",
    align: "self-start",
  },
];

function Programming({ setInfo, setSkills, clr }) {
  return (
    <div>
      <div className="flex flex-wrap gap-6 justify-center md:justify-around h-auto md:h-52 md:w-screen max-w-7xl z-10 pt-10">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.75, delay: index * 0.1 }}
            className={`m-3 md:m-0 group cursor-pointer backdrop-blur-md shadow-lg flex justify-center items-center hover:scale-105 transition-all duration-75 ease-in rounded-lg p-2 hover:shadow-2xl hover:drop-shadow-2xl flex-col opacity-80 font-semibold backdrop-saturate-176 ${
              clr === "dark"
                ? `bg-gray-700 shadow-${skill.color}-600 hover:shadow-${skill.color}-600`
                : `bg-gray-200 shadow-${skill.color}-400 hover:shadow-${skill.color}-400`
            } ${skill.align}`}
            onClick={() => {
              setInfo({
                percentage: skill.percentage,
                used_for: skill.used_for,
                skill: skill.name,
                image: skill.image,
                about: skill.about,
              });
              setSkills(true);
            }}
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="group-hover:animate-none h-12 w-12 inline-block group-hover:scale-105 transition ease-in-out duration-75"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Programming;
