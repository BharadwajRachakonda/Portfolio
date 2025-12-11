import React from "react";
import { motion } from "framer-motion";
import css from "./css.png";
import tailwind from "./tailwind.png";
import html from "./html.png";
import re from "./react.png";
import node from "./node.png";
import mongodb from "./mongodb.png";
import express from "./express.png";
import sql from "./sql.png";
import flask from "./flask.png";
import nextjs from "./nextjs.png";

/*
percentage should be out of these values
  60, 70, 75, 80, 90, 100
*/

const skills = [
  {
    skill: "CSS",
    image: css,
    used_for:
      "Learned alongside HTML during undergraduate studies and utilized in all subsequent projects.",
    about: "Cascading style sheets...",
    classDark: "shadow-blue-600 hover:shadow-blue-600 bg-gray-700 self-start",
    classLight: "shadow-blue-400 hover:shadow-blue-400 bg-gray-200 self-start",
    percentage: 80,
  },
  {
    skill: "React",
    image: re,
    used_for:
      '"One of my best learnings." Self-taught via YouTube and documentation. Applied in nearly all projects, including this portfolio.',
    about: "React is a JS library for UI...",
    classDark: "shadow-cyan-600 hover:shadow-cyan-600 bg-gray-700 self-end",
    classLight: "shadow-cyan-400 hover:shadow-cyan-400 bg-gray-200 self-end",
    percentage: 80,
  },

  {
    skill: "Tailwind",
    image: tailwind,
    used_for:
      "After CSS I wanted something faster, yet stylish and unique hence I learned TailwindCSS through its documentation and building projects.",
    about: "Tailwind is an extension to CSS...",
    classDark: "shadow-sky-600 hover:shadow-sky-600 bg-gray-700 self-start",
    classLight: "shadow-sky-400 hover:shadow-sky-400 bg-gray-200 self-start",
    percentage: 80,
  },
  {
    skill: "Next.js",
    image: nextjs,
    used_for:
      "Used this for my latest project Type-Together. It helped me to develop things faster than using React alone.",
    about:
      "Next.js is a React framework for server-side rendering and static site generation.",
    classDark: "shadow-black hover:shadow-black bg-gray-700 self-center",
    classLight:
      "shadow-neutral-400 hover:shadow-neutral-400 bg-gray-200 self-center",
    percentage: 60,
  },
  {
    skill: "Express",
    image: express,
    used_for:
      "Used in all of my backend development projects, learned it through YouTube. It is simplistic and easy to write backend with.",
    about: "Express is a framework on Node.JS...",
    classDark: "shadow-black hover:shadow-black bg-gray-700 self-end",
    classLight:
      "shadow-neutral-400 hover:shadow-neutral-400 bg-gray-200 self-end",
    percentage: 80,
  },
  {
    skill: "Flask",
    image: flask,
    used_for:
      "I used Flask whenever I needed to create an API that needed to return a model's prediction. It is used in the Type-Together Project.",
    about:
      "Flask is a lightweight Python web framework for building APIs and web applications.",
    classDark: "shadow-black hover:shadow-black bg-gray-700 self-end",
    classLight:
      "shadow-neutral-400 hover:shadow-neutral-400 bg-gray-200 self-end",
    percentage: 60,
  },

  {
    skill: "SQL",
    image: sql,
    used_for:
      "I used SQL in the Type-Together project to store user data, and I learned it through my college curriculum.",
    about:
      "SQL is a standard language for accessing and manipulating databases.",
    classDark: "shadow-black hover:shadow-black bg-gray-700 self-center",
    classLight:
      "shadow-neutral-400 hover:shadow-neutral-400 bg-gray-200 self-center",
    percentage: 80,
  },
  {
    skill: "NodeJS",
    image: node,
    used_for:
      "I used this as a kick start for backend development, eventually learned Express through YouTube.",
    about: "Node.JS is a backend framework...",
    classDark: "shadow-green-600 hover:shadow-green-600 bg-gray-700 self-start",
    classLight:
      "shadow-green-400 hover:shadow-green-400 bg-gray-200 self-start",
    percentage: 80,
  },
  {
    skill: "MongoDB",
    image: mongodb,
    used_for:
      "I used this for my first End to End project ToDo on Cloud, learned it through MongoDB documentation.",
    about: "MongoDB is a No-SQL database...",
    classDark: "shadow-green-600 hover:shadow-green-600 bg-gray-700 self-end",
    classLight: "shadow-green-400 hover:shadow-green-400 bg-gray-200 self-end",
    percentage: 80,
  },
  {
    skill: "HTML",
    image: html,
    used_for:
      "This laid my foundation for web development, applied the skill in all projects.",
    about: "HTML is a markup language...",
    classDark:
      "shadow-orange-600 hover:shadow-orange-600 bg-gray-700 self-start",
    classLight:
      "shadow-orange-400 hover:shadow-orange-400 bg-gray-200 self-start",
    percentage: 90,
  },
];

function Web(props) {
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

export default Web;
