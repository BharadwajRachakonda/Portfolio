import React, { useState } from "react";
import skillContext from "./skillContext"; // Fix the import path

function SkillState(props) {
  const [skills, setSkills] = useState(false);

  return (
    <skillContext.Provider value={{ skills, setSkills }}>
      {props.children}
    </skillContext.Provider>
  );
}

export default SkillState;
