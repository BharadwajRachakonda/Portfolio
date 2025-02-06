import React, { useContext, useState } from "react";
import Skills from "./Skills";
import skillContext from "../context/skills/skillContext";
import { Route, Routes, Link } from "react-router-dom";
import Web from "./Web";
import Programming from "./Programming";
import { motion } from "framer-motion";

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
    <div id="About" className={`md:h-screen flex justify-center items-center `}>
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
        <h1 className="text-3xl max-[768px]:text-xl">
          Skills
          <motion.hr
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }} // Ensures the animation only triggers once when it comes into view
            className={
              `hidden md:block max-w-20 border-t-2 border-dashed ` +
              (props.clr == `light` ? `border-gray-600` : `border-gray-400`)
            }
          />
        </h1>
        <div>
          <div className="flex justify-center gap-5 md:m-0 m-5">
            <Link
              to="/Portfolio/"
              className="border-2 border-x-gray-300 p-2 text-sm md:text-base rounded-full md:hover:bg-slate-600 md:hover:border-transparent md:hover:shadow-2xl md:hover:shadow-slate-600 md:hover:text-white cursor-pointer z-10 transition-all duration-200 ease-in-out"
            >
              {window.innerWidth > 760 ? "WEB DEVELOPMENT" : "WEB"}
            </Link>
            <Link
              to="/Portfolio/Programming"
              className="border-2 border-x-gray-300 p-2 text-sm md:text-base rounded-full md:hover:bg-slate-600 md:hover:border-transparent md:hover:shadow-2xl md:hover:shadow-slate-600 md:hover:text-white cursor-pointer z-10 transition-all duration-200 ease-in-out"
            >
              {window.innerWidth > 760 ? "PROGRAMMING LANGUAGES" : "Prog"}
            </Link>
          </div>
          <Routes>
            {/* <Route
              path="/"
              element={
                <Web setInfo={setInfo} setSkills={setSkills} clr={props.clr} />
              }
            /> */}
            <Route
              path="/Portfolio/"
              element={
                <Web setInfo={setInfo} setSkills={setSkills} clr={props.clr} />
              }
            />
            <Route
              path="/Portfolio/Programming"
              element={
                <Programming
                  setInfo={setInfo}
                  setSkills={setSkills}
                  clr={props.clr}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default About;
