import React from "react";
import { motion } from "framer-motion";
import cpp from "./cpp.png";
import python from "./python.png";
import java from "./java.png";

const skills = [
  {
    name: "Python",
    percentage: 80,
    used_for: "DSA + LeetCode",
    image: python,
    about:
      "Python is a scripting language commonly used for machine learning, deep learning, data science, backend with Flask/Django.",
    color: "orange",
    align: "self-start",
  },
  {
    name: "CPP",
    percentage: 60,
    used_for: "DSA + IoT for EPICS",
    image: cpp,
    about:
      "C++ is a programming language commonly used for game development and IoT. C++ and Java are highly used to improve problem-solving skills.",
    color: "sky",
    align: "self-end",
  },
  {
    name: "Java",
    percentage: 60,
    used_for: "Web Development",
    image: java,
    about:
      "Java is a programming language that is both interpreted and compiled. It is mostly used for web development using Servlets, JSP, Spring, and Spring Boot.",
    color: "cyan",
    align: "self-start",
  },
];

function Programming({ setInfo, setSkills, clr }) {
  return (
    <div>
      <div className="flex flex-wrap gap-6 justify-around h-auto md:h-52 md:w-screen max-w-7xl z-10 pt-10">
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
