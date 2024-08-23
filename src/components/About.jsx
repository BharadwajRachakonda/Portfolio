import React from "react";
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

function About(props) {
  return (
    <div
      id="About"
      className={`md:h-screen flex justify-center items-center delay-75`}
    >
      <div className="flex flex-col gap-y-8 justify-center items-center z-10">
        <h1 className="text-3xl max-[768px]:text-xl">Skills</h1>
        <div>
          <div className="flex flex-row gap-4 md:gap-2 flex-wrap md:m-0 h-auto md:h-48 md:w-screen justify-around">
            <ScrollAnimation
              animateIn="fadeIn"
              className={
                `m-3 md:m-0 group cursor-pointer   self-start backdrop-blur-md shadow-lg flex justify-center items-center hover:scale-110 transition-all duration-75 ease-in rounded-lg p-2 hover:shadow-2xl hover:drop-shadow-2xl hover:decoration-purple-50 flex-col group opacity-80 font-semibold backdrop-saturate-176 delay-75  ` +
                (props.clr === "dark"
                  ? `bg-gray-700 shadow-orange-600 hover:shadow-orange-600`
                  : `bg-gray-200 shadow-orange-400 hover:shadow-orange-400`)
              }
              duration={2}
              delay={50}
            >
              <div className="flex flex-col justify-center items-center group">
                <img
                  src={python}
                  alt="Python"
                  className={`group-hover:animate-none  h-12 w-12 inline-block    group-hover:scale-110 transition ease-in-out duration-75 `}
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
              <div className="flex flex-col justify-center items-center">
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
              <div className="flex flex-col justify-center items-center">
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
              <div className="flex flex-col justify-center items-center">
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
              <div className="flex flex-col justify-center items-center">
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
              <div className="flex flex-col justify-center items-center">
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
              <div className="flex flex-col justify-center items-center">
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
              <div className="flex flex-col justify-center items-center group">
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
              <div className="flex flex-col justify-center items-center group">
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
              <div className="flex flex-col justify-center items-center">
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
              <div className="flex flex-col justify-center items-center">
                <img
                  src={express}
                  alt="Express"
                  className={`group-hover:animate-none  h-12 w-12 inline-block    group-hover:scale-110 transition ease-in-out duration-75 `}
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
