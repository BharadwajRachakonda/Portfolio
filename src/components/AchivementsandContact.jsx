import React from "react";
/*
  AcheivementsandContact takes props

  color(clr)
  
*/

function AchievementsAndContact(props) {
  return (
    <div className="w-full md:flex flex-row items-center bg-slate-800 text-white rounded-t-3xl md:p-0 p-10 mt-5">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <div className="flex flex-col items-center z-10">
        <ul className="md:font-bold justify-around md:m-4 md:border-r-2 border-gray-600 md:pr-3">
          <h2 className="text-lg">
            Achievements
            <hr
              className={
                `hidden md:block w-36 border-t-2 border-dashed ` +
                (props.clr == `light` ? `border-gray-600` : `border-gray-400`)
              }
            />
          </h2>
          <br />
          <li>
            <i className="fa-regular fa-circle-check scale-110 p-3"></i> 5 star
            coder in HackerRank (Python, CPP, Java)
          </li>
          <li>
            <i className="fa-regular fa-circle-check scale-110 p-3"></i> Solved
            over 200+ problems on Leetcode
          </li>
          <li>
            <i className="fa-regular fa-circle-check scale-110 p-3"></i>{" "}
            Certified for Foundations of R Software (Top 2%) through NPTEL
          </li>
          <li>
            <i className="fa-regular fa-circle-check scale-110 p-3"></i>{" "}
            Certified for Modern C++ (Missed Top 5% by just 1% overall score)
            through NPTEL
          </li>
          <li>
            <i className="fa-regular fa-circle-check scale-110 p-3"></i> 48.3
            wpm typing speed (RataType)
          </li>
        </ul>
      </div>
      <br />
      <div className="flex flex-col z-10">
        <h2 className="text-lg font-bold md:m-4">
          Contact
          <hr
            className={
              `hidden md:block w-20 border-t-2 border-dashed ` +
              (props.clr == `light` ? `border-gray-600` : `border-gray-400`)
            }
          />
        </h2>
        <br />
        <ul className="md:font-bold flex flex-row md:m-4 md:justify-between md:gap-10 flex-wrap gap-5 justify-around">
          <li className="transition-all rounded-md  duration-150 ease-in-out p-2 md:w-auto w-full flex justify-center items-center gap-2 bg-neutral-500 hover:scale-105 hover:tracking-widest group">
            <i className="fa-brands fa-linkedin group-hover:animate-bounce"></i>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/bharadwaj-rachakonda-b36658258/"
            >
              {" "}
              Linkedin
            </a>
          </li>
          <li className="transition-all rounded-md  duration-150 ease-in-out p-2 md:w-auto w-full flex justify-center items-center gap-2 bg-neutral-500 hover:scale-105 hover:tracking-widest group">
            <i className="fa-solid fa-laptop-code group-hover:animate-bounce"></i>
            <a target="_blank" href="https://leetcode.com/BharadwajRachakonda/">
              {" "}
              LeetCode
            </a>
          </li>
          <li className="transition-all rounded-md  duration-150 ease-in-out p-2 md:w-auto w-full flex justify-center items-center gap-2 bg-neutral-500 hover:scale-105 hover:tracking-widest group">
            <i className="fa-brands fa-hackerrank group-hover:animate-bounce"></i>
            <a
              target="_blank"
              href="https://www.hackerrank.com/profile/rbharadwaj022"
            >
              {" "}
              HackerRank
            </a>
          </li>
          <li className="transition-all rounded-md  duration-150 ease-in-out p-2 md:w-auto w-full flex justify-center items-center gap-2 bg-neutral-500 hover:scale-105 hover:tracking-widest group">
            <i className="fa-brands fa-github group-hover:animate-bounce"></i>
            <a target="_blank" href="https://github.com/BharadwajRachakonda">
              {" "}
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AchievementsAndContact;
