import React, { useContext } from "react";
import skillContext from "../context/skills/skillContext";
import { motion } from "framer-motion";

function Skills(props) {
  const { percentage, used_for, skill, image, about } = props;
  const { setSkills } = useContext(skillContext);

  const close = () => {
    setSkills(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.2 },
      }}
      exit={{ opacity: 0 }}
      className={`fixed inset-0 bg-black h-lvh bg-opacity-50 flex justify-center items-center z-30 ${
        props.clr == "dark" ? "text-white" : "text-black"
      }`}
      title={about}
    >
      {/* Inset controles border and card position in card */}
      <motion.div
        initial={{ opacity: 0, overflow: "hidden", width: "0", height: "0" }}
        data-clr={props.clr}
        animate={{
          opacity: 1,
          width: "21rem",
          height: "25rem",
          overflow: "auto",
        }}
        transition={{ duration: 0.2 }}
        exit={{ opacity: 0 }}
        className="card"
      >
        <motion.div
          data-clr={props.clr}
          initial={{ opacity: 0, overflow: "hidden", width: "0", height: "0" }}
          animate={{
            opacity: 1,
            width: "20rem",
            height: "24rem",
            overflow: "auto",
          }}
          transition={{ duration: 0.2 }}
          exit={{ opacity: 0 }}
          className={
            `card-content z-30 h-96 w-80 ` +
            ` rounded-[46px] shadow-card-skills backdrop-blur-[157.30px] flex items-center justify-center relative flex-col gap-10`
          }
        >
          <div className="w-14 flex justify-center items-center gap-5">
            <img src={image} alt={skill} />
            <p className="text-2xl font-semibold">{skill}</p>
          </div>
          <div className="flex justify-center items-center flex-col gap-9 bg-sky-900 text-white p-3 rounded-xl">
            <div className="flex justify-center items-center gap-3">
              <p>Level:</p>
              <span className="h-4 w-40 bg-white flex items-center rounded-lg">
                <div
                  className={
                    `bg-green-600 h-3 rounded-lg ` +
                    (percentage == 60
                      ? "w-24"
                      : percentage == 70
                      ? "w-28"
                      : percentage == 75
                      ? "w-32"
                      : percentage == 80
                      ? "w-32"
                      : percentage >= 90
                      ? "w-36"
                      : "w-40")
                  }
                ></div>
              </span>
              {percentage}%
            </div>
            {used_for && (
              <div className="flex justify-center items-center gap-2 flex-col">
                <p>Used For: </p>
                <p className="text-center">{used_for}</p>
              </div>
            )}
          </div>
          <div onClick={close} className="cursor-pointer text-white">
            <div className="transition-all rounded-md duration-150 ease-in-out p-2 md:w-auto w-full flex justify-center items-center gap-2 bg-neutral-500 hover:scale-105 hover:tracking-widest group">
              Close
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Skills;
