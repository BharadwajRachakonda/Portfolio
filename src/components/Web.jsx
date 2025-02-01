import React from "react";
import { motion } from "framer-motion";
import css from "./css.png";
import tailwind from "./tailwind.png";
import html from "./html.png";
import re from "./react.png";
import figma from "./Figma.png";
import node from "./node.png";
import mongodb from "./mongodb.png";
import express from "./express.png";

const skills = [
  {
    skill: "HTML",
    image: html,
    used_for: "NewsAPP + ToDo on Cloud",
    about: "HTML is a markup language...",
    classDark:
      "shadow-orange-600 hover:shadow-orange-600 bg-gray-700 self-start",
    classLight:
      "shadow-orange-400 hover:shadow-orange-400 bg-gray-200 self-start",
  },
  {
    skill: "CSS",
    image: css,
    used_for: "NewsAPP + ToDo on Cloud",
    about: "Cascading style sheets...",
    classDark: "shadow-blue-600 hover:shadow-blue-600 bg-gray-700 self-end",
    classLight: "shadow-blue-400 hover:shadow-blue-400 bg-gray-200 self-end",
  },
  {
    skill: "Tailwind",
    image: tailwind,
    used_for: "NewsAPP + ToDo on Cloud + Portfolio",
    about: "Tailwind is an extension...",
    classDark: "shadow-sky-600 hover:shadow-sky-600 bg-gray-700 self-start",
    classLight: "shadow-sky-400 hover:shadow-sky-400 bg-gray-200 self-start",
  },
  {
    skill: "React",
    image: re,
    used_for: "NewsAPP + ToDo on Cloud + Portfolio",
    about: "React is a JS library...",
    classDark: "shadow-cyan-600 hover:shadow-cyan-600 bg-gray-700 self-center",
    classLight: "shadow-cyan-400 hover:shadow-cyan-400 bg-gray-200 self-center",
  },
  {
    skill: "Figma",
    image: figma,
    used_for: "Design + Prototyping",
    about: "Figma is a UI tool...",
    classDark:
      "shadow-green-600 hover:shadow-green-600 bg-gray-700 self-center",
    classLight:
      "shadow-green-400 hover:shadow-green-400 bg-gray-200 self-center",
  },
  {
    skill: "NodeJS",
    image: node,
    used_for: "ToDo on Cloud",
    about: "Node.JS is a backend framework...",
    classDark: "shadow-green-600 hover:shadow-green-600 bg-gray-700 self-start",
    classLight:
      "shadow-green-400 hover:shadow-green-400 bg-gray-200 self-start",
  },
  {
    skill: "MongoDB",
    image: mongodb,
    used_for: "ToDo on Cloud",
    about: "MongoDB is a No-SQL database...",
    classDark: "shadow-green-600 hover:shadow-green-600 bg-gray-700 self-end",
    classLight: "shadow-green-400 hover:shadow-green-400 bg-gray-200 self-end",
  },
  {
    skill: "Express",
    image: express,
    used_for: "ToDo on Cloud",
    about: "Express is a framework on Node.JS...",
    classDark:
      "shadow-neutral-200 hover:shadow-neutral-200 bg-gray-700 self-start",
    classLight:
      "shadow-neutral-600 hover:shadow-neutral-600 bg-gray-200 self-start",
  },
];

function Web(props) {
  const { setInfo, setSkills } = props;

  return (
    <div>
      <div className="flex gap-6 md:gap-2 flex-wrap md:m-0 h-auto md:h-52 md:w-screen justify-around max-w-7xl z-10 pt-10">
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
                  percentage: 80,
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

export default Web;
