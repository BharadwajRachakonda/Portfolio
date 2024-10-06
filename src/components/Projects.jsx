import React from "react";
import ProjectCard from "./ProjectCard";
import News from "./NewsAPIProj1.mp4";
import ToDo from "./ToDoProj2.mp4";

function Projects(props) {
  const { clr } = props; // Destructure clr from props
  return (
    <div
      id="Projects"
      className={`z-0 md:h-screen flex justify-center items-center`}
    >
      <div className="flex flex-col gap-y-14 justify-center items-center z-0 w-full px-4">
        <br />
        <br />
        <h1 className="text-3xl max-[768px]:text-xl">Projects</h1>
        <div className="flex flex-row gap-4 md:gap-2 flex-wrap md:m-0 h-auto md:w-screen justify-around">
          <ProjectCard
            video={News}
            clr={clr}
            title="NewsAPP"
            description="A ReactAPP built using BootStrap and NewsAPI to fetch News"
            skill1="React"
            skill2="BootStrap"
            skill3="API"
            github="https://github.com/BharadwajRachakonda/NewsAPI"
          />
          <ProjectCard
            video={ToDo}
            clr={clr}
            title="ToDo on Cloud"
            description="A MERN Project that stores a Create, manage, and share to-do lists"
            skill1="MERN"
            skill2="Tailwind"
            skill3="API"
            github="https://github.com/BharadwajRachakonda/ToDo-on-Cloud"
            deployed="https://bharadwajrachakonda.github.io/todo-frontend/"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;