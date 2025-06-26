import React from "react";
import { motion } from "framer-motion";
import figma from "./Figma.png";
import git from "./git.png";
import github from "./Github.png";
import postman from "./Postman.png";
import vscode from "./VSCode.png";
import servicenow from "./Servicenow.png";

const skills = [
  {
    skill: "Figma",
    image: figma,
    used_for: "Design + Prototyping",
    about: "Figma is a UI tool...",
    classDark:
      "shadow-green-600 hover:shadow-green-600 bg-gray-700 self-center",
    classLight:
      "shadow-green-400 hover:shadow-green-400 bg-gray-200 self-center",
    percentage: 60,
  },
  {
    skill: "Git",
    image: git,
    used_for: "Version Control",
    about: "Git is a distributed version control system...",
    classDark:
      "shadow-orange-600 hover:shadow-orange-600 bg-gray-700 self-start",
    classLight:
      "shadow-orange-400 hover:shadow-orange-400 bg-gray-200 self-start",
    percentage: 70,
  },
  {
    skill: "GitHub",
    image: github,
    used_for: "Code Hosting",
    about: "GitHub is a platform for hosting and collaborating on code...",
    classDark: "shadow-gray-600 hover:shadow-gray-600 bg-gray-700 self-end",
    classLight: "shadow-gray-400 hover:shadow-gray-400 bg-gray-200 self-end",
    percentage: 60,
  },
  {
    skill: "VSCode",
    image: vscode,
    used_for: "Code Editing",
    about: "VSCode is a source-code editor developed by Microsoft...",
    classDark: "shadow-blue-600 hover:shadow-blue-600 bg-gray-700 self-end",
    classLight: "shadow-blue-400 hover:shadow-blue-400 bg-gray-200 self-end",
    percentage: 80,
  },
  {
    skill: "Postman",
    image: postman,
    used_for: "API Testing",
    about: "Postman is a tool for testing APIs...",
    classDark:
      "shadow-orange-600 hover:shadow-orange-600 bg-gray-700 self-start",
    classLight:
      "shadow-orange-400 hover:shadow-orange-400 bg-gray-200 self-start",
    percentage: 70,
  },
  {
    skill: "ServiceNow",
    image: servicenow,
    used_for: "IT Service Management",
    about:
      "ServiceNow is a cloud-based platform for automating IT management workflows and business processes.",
    classDark:
      "shadow-green-800 hover:shadow-green-800 bg-gray-700 self-center",
    classLight:
      "shadow-green-300 hover:shadow-green-300 bg-gray-200 self-center",
    percentage: 70,
  },
];

function Tools(props) {
  const { setInfo, setSkills } = props;

  return (
    <div>
      <div className="flex gap-6 md:gap-2 flex-wrap md:m-0 h-auto md:h-52 md:w-screen justify-center md:justify-around max-w-7xl z-10 pt-10">
        {skills.map((item, index) => (
          <motion.div
            key={item.skill}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.75, delay: index * 0.1 }}
            className={`m-3 md:m-0 group cursor-pointer backdrop-blur-md shadow-lg flex justify-center items-center hover:scale-105 transition-all duration-75 ease-in rounded-lg p-2 hover:shadow-2xl hover:drop-shadow-2xl flex-col opacity-80 font-semibold backdrop-saturate-176 ${
              props.clr === "dark" ? item.classDark : item.classLight
            }`}
          >
            <div
              className="flex flex-col justify-center items-center"
              onClick={() => {
                setInfo({
                  percentage: item.percentage,
                  used_for: item.used_for,
                  skill: item.skill,
                  image: item.image,
                  about: item.about,
                });
                setSkills(true);
              }}
            >
              <img
                src={item.image}
                alt={item.skill}
                className="group-hover:animate-none h-12 w-12 inline-block group-hover:scale-105 transition ease-in-out duration-75"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Tools;
