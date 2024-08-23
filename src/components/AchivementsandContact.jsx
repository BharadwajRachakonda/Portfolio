import React from "react";
/*
  AcheivementsandContact takes props

  color(clr)
  
*/

function AchievementsAndContact(props) {
  return (
    <div className="w-full md:flex flex-row items-center bg-slate-800 text-white rounded-t-3xl md:p-0 p-10">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <div className="flex flex-col items-center z-10">
        <ul className="md:font-bold justify-around md:m-4">
          <h2 className="text-lg">Achievements</h2>
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
        <h2 className="text-lg font-bold md:m-4">Contact</h2>
        <br />
        <ul className="md:font-bold flex flex-row md:m-4 md:justify-between md:gap-10 flex-wrap gap-5 justify-around">
          <li className="transition-all rounded-md delay-150 duration-300 ease-in-out p-2 md:w-auto w-full flex justify-center items-center gap-2 bg-neutral-500 hover:scale-125 hover:tracking-widest group">
            <i className="fa-brands fa-linkedin group-hover:animate-bounce"></i>
            <a href="https://www.linkedin.com/in/bharadwaj-rachakonda-b36658258/">
              {" "}
              Linkedin
            </a>
          </li>
          <li className="transition-all rounded-md delay-150 duration-300 ease-in-out p-2 md:w-auto w-full flex justify-center items-center gap-2 bg-neutral-500 hover:scale-125 hover:tracking-widest group">
            <i className="fa-solid fa-laptop-code group-hover:animate-bounce"></i>
            <a href="https://leetcode.com/rbharadwaj022/"> LeetCode</a>
          </li>
          <li className="transition-all rounded-md delay-150 duration-300 ease-in-out p-2 md:w-auto w-full flex justify-center items-center gap-2 bg-neutral-500 hover:scale-125 hover:tracking-widest group">
            <i className="fa-brands fa-hackerrank group-hover:animate-bounce"></i>
            <a href="https://www.hackerrank.com/profile/rbharadwaj022">
              {" "}
              HackerRank
            </a>
          </li>
          <li className="transition-all rounded-md delay-150 duration-300 ease-in-out p-2 md:w-auto w-full flex justify-center items-center gap-2 bg-neutral-500 hover:scale-125 hover:tracking-widest group">
            <i className="fa-brands fa-github group-hover:animate-bounce"></i>
            <a href="https://github.com/BharadwajRachakonda"> GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AchievementsAndContact;
