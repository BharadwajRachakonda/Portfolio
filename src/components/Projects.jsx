import React from "react";
import ProjectCard from "./ProjectCard";
import News from "./NewsAPIProj1.mp4";
import ToDo from "./ToDoProj2.mp4";
import Type from "./Type & Compete.mp4";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Projects(props) {
  const { clr } = props; // Destructure clr from props
  return (
    <div id="Projects" className={`z-0 flex justify-center items-center`}>
      <div className="flex flex-col gap-y-14 justify-center items-center z-0 w-full px-4">
        <br />
        <br />
        <h1 className="text-3xl max-[768px]:text-xl">
          Projects
          <motion.hr
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className={
              `hidden md:block w-full border-t-2 border-dashed ` +
              (props.clr == `light` ? `border-gray-600` : `border-gray-400`)
            }
          />
        </h1>
        <div className="flex flex-col gap-8 xl:gap-2 m-8 flex-wrap md:m-0 md:w-screen justify-center items-center">
          <Link to="https://type-together-five.vercel.app/" target="_blank">
            <ProjectCard
              video={Type}
              clr={clr}
              title="Type Together"
              description="Type Together is a real-time multiplayer typing race app using Next.js, Socket.io, and Tailwind CSS. It syncs players, tracks speed and accuracy, and shows animations. Makes typing fun."
              skill1="Next.js"
              skill2="Tailwind"
              skill3="Socket.io"
              github="https://github.com/BharadwajRachakonda/type-together-backend"
              deployed="https://type-together-five.vercel.app/"
            />
          </Link>
          <Link
            to="https://bharadwajrachakonda.github.io/todo-frontend/"
            target="_blank"
          >
            <ProjectCard
              video={ToDo}
              clr={clr}
              title="ToDo on Cloud"
              description="A MERN to-do app with cloud storage via MongoDB Atlas & Mongoose. Features JWT authentication, bcrypt-based encryption, and secure API endpoints tested using Postman."
              skill1="MERN"
              skill2="Tailwind"
              skill3="API"
              github="https://github.com/BharadwajRachakonda/ToDo-on-Cloud"
              deployed="https://bharadwajrachakonda.github.io/todo-frontend/"
            />
          </Link>
          <Link
            to="https://github.com/BharadwajRachakonda/NewsAPI"
            target="_blank"
          >
            <ProjectCard
              video={News}
              clr={clr}
              title="NewsAPP"
              description="A ReactAPP built using BootStrap and NewsAPI to fetch News, Enhanced UX through responsive design (Bootstrap), error boundaries, and loading states during API fetches."
              skill1="React"
              skill2="BootStrap"
              skill3="API"
              github="https://github.com/BharadwajRachakonda/NewsAPI"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projects;
