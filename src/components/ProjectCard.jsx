import React from "react";
import VideoPlayer from "./VideoPlayer";
import { motion } from "framer-motion";

/*
    
    The Project canrd takes the props 
    
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
  return (
    <div className="hover:shadow-lg">
      <motion.div
        initial={{ opacity: 0, rotateY: 30 }}
        whileInView={{ opacity: 1, rotateY: 0 }}
        transition={{ duration: 1 }}
      >
        <div
          id="scrolly-div"
          className={`max-w-sm rounded overflow-hidden shadow-lg ${
            clr === "dark" ? "bg-gray-700" : "bg-gray-200"
          }`}
        >
          <VideoPlayer video={video} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-base">{description}</p>
            <br />
            <div className="text-white font-bold flex flex-row justify-between gap-10">
              <a target="_blank" href={github}>
                <div className="transition-all rounded-md  duration-150 ease-in-out p-2 bg-neutral-500 hover:scale-105 hover:tracking-widest group hover:-translate-y-1">
                  <i className="fa-brands fa-github group-hover:animate-bounce"></i>
                  GitHub
                </div>
              </a>
              {deployed && (
                <a href={deployed} target="_blank">
                  <div className="transition-all rounded-md  duration-150 ease-in-out p-2 bg-neutral-500 hover:scale-105 hover:tracking-widest group hover:-translate-y-1">
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
      </motion.div>
    </div>
  );
}

export default ProjectCard;
