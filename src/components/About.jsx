import React, { useContext, useState } from "react";
import cpp from "./cpp.png";
import python from "./python.png";
import java from "./java.png";
import css from "./css.png";
import tailwind from "./tailwind.png";
import html from "./html.png";
import re from "./react.png";
import figma from "./Figma.png";
import node from "./node.png";
import mongodb from "./mongodb.png";
import express from "./express.png";
import ScrollAnimation from "react-animate-on-scroll";
import Skills from "./Skills";
import skillContext from "../context/skills/skillContext";

function About(props) {
  const context = useContext(skillContext);
  const { skills, setSkills } = context;
  const [info, setInfo] = useState({
    percentage: "",
    used_for: "",
    skill: "",
    image: "",
    about: "",
  });

  return (
    <div
      id="About"
      className={`md:h-screen flex justify-center items-center delay-75`}
    >
      <div className="flex flex-col gap-y-8 justify-center items-center z-10">
        {skills && (
          <Skills
            percentage={info.percentage}
            used_for={info.used_for}
            skill={info.skill}
            image={info.image}
            clr={props.clr}
            about={info.about}
          />
        )}
        <h1 className="text-3xl max-[768px]:text-xl">Skills</h1>
        <div>
          <div className="flex flex-row gap-4 md:gap-2 flex-wrap md:m-0 h-auto md:h-48 md:w-screen justify-around">
            <ScrollAnimation
              animateIn="fadeIn"
              className={
                `m-3 md:m-0 group cursor-pointer self-start backdrop-blur-md shadow-lg flex justify-center items-center hover:scale-110 transition-all duration-75 ease-in rounded-lg p-2 hover:shadow-2xl hover:drop-shadow-2xl hover:decoration-purple-50 flex-col group opacity-80 font-semibold backdrop-saturate-176 delay-75  ` +
                (props.clr === "dark"
                  ? `bg-gray-700 shadow-orange-600 hover:shadow-orange-600`
                  : `bg-gray-200 shadow-orange-400 hover:shadow-orange-400`)
              }
              duration={2}
              delay={50}
            >
              <div
                className="flex flex-col justify-center items-center group"
                onClick={() => {
                  setInfo({
                    percentage: 80,
                    used_for: "DSA + LeetCode",
                    skill: "Python",
                    image: python,
                    about:
                      "python is a scripting language commanly used for machine learng, deep learning, data science, backend with flask / dijango.",
                  });
                  setSkills(true);
                }}
              >
                <img
                  src={python}
                  alt="Python"
                  className={`group-hover:animate-none h-12 w-12 inline-block group-hover:scale-110 transition ease-in-out duration-75 `}
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="fadeIn"
              delay={100}
              className={
                `m-3 md:m-0 group cursor-pointer   self-end backdrop-blur-md shadow-lg flex justify-center items-center hover:scale-110 transition-all duration-75 ease-in rounded-lg p-2 hover:shadow-2xl hover:drop-shadow-2xl hover:decoration-purple-50 flex-col group opacity-80 font-semibold backdrop-saturate-176 delay-75  ` +
                (props.clr === "dark"
                  ? `bg-gray-700 shadow-sky-600 hover:shadow-sky-600`
                  : `bg-gray-200 shadow-sky-400 hover:shadow-sky-400`)
              }
              duration={2}
            >
              <div
                className="flex flex-col justify-center items-center"
                onClick={() => {
                  setInfo({
                    percentage: 60,
                    used_for: "DSA + IOT for EPICS",
                    skill: "CPP",
                    image: cpp,
                    about:
                      "CPP is a programing language commonly used for game development and IOT, CPP and JAVA are highly used to improve problem-solving skills.",
                  });
                  setSkills(true);
                }}
              >
                <img
                  src={cpp}
                  alt="CPP"
                  className={`group-hover:animate-none motion-safe: h-12 w-12 inline-block    group-hover:scale-110 transition ease-in-out duration-75 `}
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="fadeIn"
              delay={200}
              className={
                `m-3 md:m-0 group cursor-pointer   self-center backdrop-blur-md shadow-lg flex justify-center items-center hover:scale-110 transition-all duration-75 ease-in rounded-lg p-2 hover:shadow-2xl hover:drop-shadow-2xl hover:decoration-purple-50 flex-col group opacity-80 font-semibold backdrop-saturate-176 delay-75  ` +
                (props.clr === "dark"
                  ? `bg-gray-700 shadow-cyan-600 hover:shadow-cyan-600`
                  : `bg-gray-200 shadow-cyan-400 hover:shadow-cyan-400`)
              }
              duration={2}
            >
              <div
                className="flex flex-col justify-center items-center"
                onClick={() => {
                  setInfo({
                    percentage: 60,
                    skill: "Java",
                    image: java,
                    about:
                      "Java is a programing laguage that is both interprited and compiled. java is used mostly for web development using servlets / jsp / spring / spring boot.",
                  });
                  setSkills(true);
                }}
              >
                <img
                  src={java}
                  alt="Java"
                  className={`group-hover:animate-none  h-12 w-12 inline-block    group-hover:scale-110 transition ease-in-out duration-75 `}
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="fadeIn"
              delay={300}
              className={
                `m-3 md:m-0 group cursor-pointer   self-end backdrop-blur-md shadow-lg flex justify-center items-center hover:scale-110 transition-all duration-75 ease-in rounded-lg p-2 hover:shadow-2xl hover:drop-shadow-2xl hover:decoration-purple-50 flex-col group opacity-80 font-semibold backdrop-saturate-176 delay-75  ` +
                (props.clr === "dark"
                  ? `bg-gray-700 shadow-orange-600 hover:shadow-orange-600`
                  : `bg-gray-200 shadow-orange-400 hover:shadow-orange-400`)
              }
              duration={2}
            >
              <div
                className="flex flex-col justify-center items-center"
                onClick={() => {
                  setInfo({
                    percentage: 80,
                    used_for: "NewsAPP + ToDo on Cloud",
                    skill: "HTML",
                    image: html,
                    about:
                      "HTML is a markup language that has pre defined tags with a simillar structure to that of XML. It is used to define the structure of front end application.",
                  });
                  setSkills(true);
                }}
              >
                <img
                  src={html}
                  alt="HTML"
                  className={`group-hover:animate-none  h-12 w-12 inline-block    group-hover:scale-110 transition ease-in-out duration-75 `}
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="fadeIn"
              delay={400}
              className={
                `m-3 md:m-0 group cursor-pointer   self-center backdrop-blur-md shadow-lg flex justify-center items-center hover:scale-110 transition-all duration-75 ease-in rounded-lg p-2 hover:shadow-2xl hover:drop-shadow-2xl hover:decoration-purple-50 flex-col group opacity-80 font-semibold backdrop-saturate-176 delay-75  ` +
                (props.clr === "dark"
                  ? `bg-gray-700 shadow-blue-600 hover:shadow-blue-600`
                  : `bg-gray-200 shadow-blue-400 hover:shadow-blue-400`)
              }
              duration={2}
            >
              <div
                className="flex flex-col justify-center items-center"
                onClick={() => {
                  setInfo({
                    percentage: 80,
                    used_for: "NewsAPP + ToDo on Cloud",
                    skill: "CSS",
                    image: css,
                    about:
                      "Cascading style sheets is a comman way to color you applicaton to make it more attractive and user friendly.",
                  });
                  setSkills(true);
                }}
              >
                <img
                  src={css}
                  alt="CSS"
                  className={`group-hover:animate-none  h-12 w-12 inline-block    group-hover:scale-110 transition ease-in-out duration-75 `}
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="fadeIn"
              delay={500}
              className={
                `m-3 md:m-0 group cursor-pointer   self-end backdrop-blur-md shadow-lg flex justify-center items-center hover:scale-110 transition-all duration-75 ease-in rounded-lg p-2 hover:shadow-2xl hover:drop-shadow-2xl hover:decoration-purple-50 flex-col group opacity-80 font-semibold backdrop-saturate-176 delay-75  ` +
                (props.clr === "dark"
                  ? `bg-gray-700 shadow-sky-600 hover:shadow-sky-600`
                  : `bg-gray-200 shadow-sky-400 hover:shadow-sky-400`)
              }
              duration={2}
            >
              <div
                className="flex flex-col justify-center items-center"
                onClick={() => {
                  setInfo({
                    percentage: 80,
                    used_for: "NewsAPP + ToDo on Cloud + Portfolio",
                    skill: "Tailwind",
                    image: tailwind,
                    about:
                      "Tailwind is a extention to common CSS. It is a frame work that simplify's styling making development easyer.",
                  });
                  setSkills(true);
                }}
              >
                <img
                  src={tailwind}
                  alt="Tailwind"
                  className={`group-hover:animate-none  h-12 w-12 inline-block    group-hover:scale-110 transition ease-in-out duration-75 `}
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="fadeIn"
              delay={600}
              className={
                `m-3 md:m-0 group cursor-pointer   self-center backdrop-blur-md shadow-lg flex justify-center items-center hover:scale-110 transition-all duration-75 ease-in rounded-lg p-2 hover:shadow-2xl hover:drop-shadow-2xl hover:decoration-purple-50 flex-col group opacity-80 font-semibold backdrop-saturate-176 delay-75  ` +
                (props.clr === "dark"
                  ? `bg-gray-700 shadow-cyan-600 hover:shadow-cyan-600`
                  : `bg-gray-200 shadow-cyan-400 hover:shadow-cyan-400`)
              }
              duration={2}
            >
              <div
                className="flex flex-col justify-center items-center"
                onClick={() => {
                  setInfo({
                    percentage: 60,
                    used_for: "NewsAPP + ToDo on Cloud + Portfolio",
                    skill: "React",
                    image: re,
                    about:
                      "React is a JS library that involves state management, JSX, routing enabling less consumption of bandwidth and less reloads.",
                  });
                  setSkills(true);
                }}
              >
                <img
                  src={re}
                  alt="React"
                  className={`group-hover:animate-none  h-12 w-12 inline-block    group-hover:scale-110 transition ease-in-out duration-75 `}
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <div>
          <div className="flex flex-row gap-4 md:gap-2 flex-wrap md:m-0 h-auto md:h-48 md:w-screen justify-around">
            <ScrollAnimation
              animateIn="fadeIn"
              className={
                `m-3 md:m-0 group cursor-pointer   self-end backdrop-blur-md shadow-lg flex justify-center items-center hover:scale-110 transition-all duration-75 ease-in rounded-lg p-2 hover:shadow-2xl hover:drop-shadow-2xl hover:decoration-purple-50 flex-col group opacity-80 font-semibold backdrop-saturate-176 delay-75  ` +
                (props.clr === "dark"
                  ? `bg-gray-700 shadow-green-600 hover:shadow-green-600`
                  : `bg-gray-200 shadow-green-400 hover:shadow-green-400`)
              }
              duration={2}
              delay={50}
            >
              <div
                className="flex flex-col justify-center items-center group"
                onClick={() => {
                  setInfo({
                    percentage: 60,
                    used_for: "Design + Prototyping",
                    skill: "Figma",
                    image: figma,
                    about:
                      "Figma is a UI tool for Design and Prototyping giving a better view of what need to be developed.",
                  });
                  setSkills(true);
                }}
              >
                <img
                  src={figma}
                  alt="Figma"
                  className={`group-hover:animate-none  h-12 w-12 inline-block    group-hover:scale-110 transition ease-in-out duration-75 `}
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="fadeIn"
              className={
                `m-3 md:m-0 group cursor-pointer   self-center backdrop-blur-md shadow-lg flex justify-center items-center hover:scale-110 transition-all duration-75 ease-in rounded-lg p-2 hover:shadow-2xl hover:drop-shadow-2xl hover:decoration-purple-50 flex-col group opacity-80 font-semibold backdrop-saturate-176 delay-75  ` +
                (props.clr === "dark"
                  ? `bg-gray-700 shadow-green-600 hover:shadow-green-600`
                  : `bg-gray-200 shadow-green-400 hover:shadow-green-400`)
              }
              delay={100}
              duration={2}
            >
              <div
                className="flex flex-col justify-center items-center group"
                onClick={() => {
                  setInfo({
                    percentage: 60,
                    used_for: "ToDo on Cloud",
                    skill: "NodeJS",
                    image: node,
                    about:
                      "Node.JS is a backend framework on JS browser V8 engine. used to develop fullstack applications.",
                  });
                  setSkills(true);
                }}
              >
                <img
                  src={node}
                  alt="Node.js"
                  className={`group-hover:animate-none  h-12 w-12 inline-block    group-hover:scale-110 transition ease-in-out duration-75 `}
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="fadeIn"
              delay={200}
              className={
                `m-3 md:m-0 group cursor-pointer   self-center backdrop-blur-md shadow-lg flex justify-center items-center hover:scale-110 transition-all duration-75 ease-in rounded-lg p-2 hover:shadow-2xl hover:drop-shadow-2xl hover:decoration-purple-50 flex-col group opacity-80 font-semibold backdrop-saturate-176 delay-75  ` +
                (props.clr === "dark"
                  ? `bg-gray-700 shadow-green-600 hover:shadow-green-600`
                  : `bg-gray-200 shadow-green-400 hover:shadow-green-400`)
              }
              duration={2}
            >
              <div
                className="flex flex-col justify-center items-center"
                onClick={() => {
                  setInfo({
                    percentage: 75,
                    used_for: "ToDo on Cloud",
                    skill: "MongoDB",
                    image: mongodb,
                    about:
                      "MongoDB is a No-SQL database that is schema flexible and stores data in BSON format and represents it in a JSON format.",
                  });
                  setSkills(true);
                }}
              >
                <img
                  src={mongodb}
                  alt="MongoDB"
                  className={`group-hover:animate-none  h-12 w-12 inline-block    group-hover:scale-110 transition ease-in-out duration-75 `}
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="fadeIn"
              delay={300}
              className={
                `m-3 md:m-0 group cursor-pointer   self-end backdrop-blur-md shadow-lg flex justify-center items-center hover:scale-110 transition-all duration-75 ease-in rounded-lg p-2 hover:shadow-2xl hover:drop-shadow-2xl hover:decoration-purple-50 flex-col group opacity-80 font-semibold backdrop-saturate-176 delay-75  ` +
                (props.clr === "dark"
                  ? `bg-gray-700 shadow-neutral-200 hover:shadow-neutral-200`
                  : `bg-gray-200 shadow-neutral-600 hover:shadow-neutral-600`)
              }
              duration={2}
            >
              <div
                className="flex flex-col justify-center items-center"
                onClick={() => {
                  setInfo({
                    percentage: 60,
                    used_for: "ToDo on Cloud",
                    skill: "Express",
                    image: express,
                    about:
                      "Express is a framework on Node.JS used especially for web applications it makes easier to add middlewares, VERB methods, authentication.",
                  });
                  setSkills(true);
                }}
              >
                <img
                  src={express}
                  alt="Express"
                  className={`group-hover:animate-none  h-12 w-12 inline-block group-hover:scale-110 transition ease-in-out duration-75 `}
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
