import React from "react";
import { motion } from "framer-motion";

function AchievementsAndContact(props) {
  const isLightMode = props.clr === "light";

  return (
    <div
      className={`w-full md:flex flex-row items-center rounded-t-3xl md:p-0 p-10 mt-5 text-xs md:text-base transition-all duration-300 ${
        isLightMode
          ? "bg-white text-black border-t-2 border-zinc-300"
          : "bg-slate-800 text-white border-t-2 border-gray-600"
      }`}
      id="Achievements"
    >
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <div className="flex flex-col items-center z-10 md:min-w-fit">
        <ul
          className={`md:font-bold justify-around md:m-4 md:border-r-2 md:pr-3 ${
            isLightMode ? "border-gray-400" : "border-gray-600"
          }`}
        >
          <h2 className="text-lg">
            Achievements
            <motion.hr
              initial={{ width: 0 }}
              whileInView={{ width: 144 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className={`hidden md:block w-36 border-t-2 border-dashed ${
                isLightMode ? "border-gray-400" : "border-gray-600"
              }`}
            />
          </h2>
          <br />
          <li>
            <i className="fa-regular fa-circle-check scale-110 p-3"></i> Solved
            Highest Leetcode Contest Rating 1794
          </li>
          <li>
            <i className="fa-regular fa-circle-check scale-110 p-3"></i> Solved
            contest rank 659 / 30797 in Leetcode biweekly 152
          </li>
          <li>
            <i className="fa-regular fa-circle-check scale-110 p-3"></i> 5 star
            coder in HackerRank
          </li>
          <li>
            <i className="fa-regular fa-circle-check scale-110 p-3"></i> Solved
            over 600+ problems on Leetcode
          </li>
          <li>
            <i className="fa-regular fa-circle-check scale-110 p-3"></i> Top 2%
            in Foundations of R Software.
          </li>
          <li>
            <i className="fa-regular fa-circle-check scale-110 p-3"></i> Top 6%
            in Modern C++ Certification.
          </li>
          <li>
            <i className="fa-regular fa-circle-check scale-110 p-3"></i> 48.3
            wpm typing speed
          </li>
        </ul>
      </div>
      <br />
      <div className="flex flex-col z-10">
        <h2 className="text-lg font-bold md:m-4">
          Contact
          <motion.hr
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className={`hidden md:block w-20 border-t-2 border-dashed ${
              isLightMode ? "border-gray-400" : "border-gray-600"
            }`}
          />
        </h2>
        <br />
        <ul className="md:font-bold m-0 py-5 flex items-center md:m-4 md:justify-between md:gap-10 flex-wrap gap-5 justify-around max-w-2xl">
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/bharadwaj-rachakonda-b36658258/"
            >
              <div
                className={`max-w-40 transition-all rounded-xl flex justify-center items-center gap-1 md:gap-2 duration-150 ease-in-out p-2 md:w-auto w-full border-2 hover:scale-105 hover:tracking-widest group ${
                  props.clr === "light" ? "border-black" : "border-white"
                }`}
              >
                <i className="fa-brands fa-linkedin group-hover:animate-bounce"></i>
                Linkedin
              </div>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://leetcode.com/BharadwajRachakonda/">
              <div
                className={`max-w-40 transition-all rounded-xl flex justify-center items-center gap-1 md:gap-2 duration-150 ease-in-out p-2 md:w-auto w-full border-2 hover:scale-105 hover:tracking-widest group ${
                  props.clr === "light" ? "border-black" : "border-white"
                }`}
              >
                <i className="fa-solid fa-laptop-code group-hover:animate-bounce"></i>
                LeetCode
              </div>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.hackerrank.com/profile/rbharadwaj022"
            >
              <div
                className={`max-w-40 transition-all rounded-xl flex justify-center items-center gap-1 md:gap-2 duration-150 ease-in-out p-2 md:w-auto w-full border-2 hover:scale-105 hover:tracking-widest group ${
                  props.clr === "light" ? "border-black" : "border-white"
                }`}
              >
                <i className="fa-brands fa-hackerrank group-hover:animate-bounce"></i>
                HackerRank
              </div>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/BharadwajRachakonda">
              <div
                className={`max-w-40 transition-all rounded-xl flex justify-center items-center gap-1 md:gap-2 duration-150 ease-in-out p-2 md:w-auto w-full border-2 hover:scale-105 hover:tracking-widest group ${
                  props.clr === "light" ? "border-black" : "border-white"
                }`}
              >
                <i className="fa-brands fa-github group-hover:animate-bounce"></i>
                GitHub
              </div>
            </a>
          </li>
        </ul>
        <p
          className={`transition-all duration-300 ${
            isLightMode ? "text-white contrast-50" : "text-gray-400"
          }`}
        >
          This WebPage is{" "}
          <b>
            <strong>Designed and Developed</strong>
          </b>{" "}
          with 💝 by
          <b>
            <strong> Bharadwaj Rachakonda </strong>
          </b>{" "}
          and You are permitted to take reference but
          <b>
            <strong> please don't Copy Paste.</strong>
          </b>
        </p>
      </div>
    </div>
  );
}

export default AchievementsAndContact;
