import React from "react";
import { skillsList } from "../assets/someDataBase/someDataBase";
import Frame from "./Frame";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Skills = () => {
  return (
    <Frame title = "Skills">
      <ul className = "skills">
      {
        skillsList.map(skill => 
          <li className = "skill">
            <span className = "skill__name" style = {{color: skill.barColor}}>{skill.name}</span>
            <div className = "skill__inner">
              <div className = "skill__logo">
                <FontAwesomeIcon icon={skill.logo} color = {skill.barColor} />  
              </div> 
              <div className = "skill__bar--wrapper"> 
                <div className = "skill__bar" style = {{width: skill.progress + '%'}}></div>
              </div>
              <span className = "skill__persent">{skill.progress}%</span>
            </div>
          </li>
        )
      }
      </ul>
      
    </Frame>
  )
}

export default Skills;