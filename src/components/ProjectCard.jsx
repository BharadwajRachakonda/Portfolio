import React from "react";
import VideoPlayer from "./VideoPlayer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/*

    The Project card takes the props

    video
    clr
    title
    description
    skill1
    skill2
    skill3
    github

    */

function ProjectCard(props) {
  let {
    video,
    clr,
    title,
    description,
    skill1,
    skill2,
    skill3,
    github,
    deployed,
  } = props;
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, amount: 1.0 });
  return (
    <div
      className={`md:m-6 rounded-3xl border-2 backdrop-blur-md transition-all duration-300 overflow-hidden max-w-7xl  ${
        clr === "dark"
          ? "hover:shadow-[0_0_40px_3px_rgba(203,213,225,0.8)] border-gray-200 backdrop-brightness-200"
          : "hover:shadow-[0_0_40px_3px_rgba(103,232,249,0.8)] border-gray-800 backdrop-contrast-200"
      }`}
      style={{
        transformStyle: "preserve-3d",
        perspectiveOrigin: "top",
        perspective: 1000,
      }}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, rotateX: 30 }}
        whileInView={{ opacity: 1, rotateX: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div
          id="scrolly-div"
          className={`md:flex-row md:flex max-w-7xl rounded-3xl overflow-hidden`}
        >
          <div className="p-4 md:p-6">
            <div className={`rounded-2xl overflow-hidden`}>
              <VideoPlayer video={video} />
            </div>
          </div>
          <div className="min-w-80 flex flex-col justify-center rounded-3xl shadow-lg">
            <div className="px-6 py-4">
              <div className="font-bold text-base md:text-xl mb-2">{title}</div>
              <p className="text-sm md:text-base">{description}</p>
              <br />
              <div className="text-white font-bold flex flex-row justify-between gap-10">
                <a target="_blank" href={github}>
                  <div
                    className={`transition-all rounded-xl text-sm md:text-base duration-150 ease-in-out p-2 hover:scale-105 hover:tracking-widest group hover:-translate-y-1 border-2 ${
                      clr === "dark"
                        ? "border-gray-200"
                        : "border-gray-700 text-black"
                    }`}
                  >
                    <i className="fa-brands fa-github group-hover:animate-bounce mr-2"></i>
                    GitHub
                  </div>
                </a>
                {deployed && (
                  <a href={deployed} target="_blank">
                    <div
                      className={`transition-all rounded-xl text-sm md:text-base duration-150 ease-in-out p-2 hover:scale-105 hover:tracking-widest group hover:-translate-y-1 border-2 ${
                        clr === "dark"
                          ? "border-gray-200"
                          : "border-gray-700 text-black"
                      }`}
                    >
                      Visit Here
                    </div>
                  </a>
                )}
              </div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span
                className={`inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 ${
                  clr === "dark"
                    ? "bg-gray-200 text-gray-700"
                    : "bg-gray-700 text-gray-200"
                }`}
              >
                #{skill1}
              </span>
              <span
                className={`inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 ${
                  clr === "dark"
                    ? "bg-gray-200 text-gray-700"
                    : "bg-gray-700 text-gray-200"
                }`}
              >
                #{skill2}
              </span>
              <span
                className={`inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 ${
                  clr === "dark"
                    ? "bg-gray-200 text-gray-700"
                    : "bg-gray-700 text-gray-200"
                }`}
              >
                #{skill3}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ProjectCard;
