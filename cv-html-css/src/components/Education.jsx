import React from "react";
import { educationList } from "../assets/someDataBase/someDataBase";
import Frame from "./Frame";

const Education = () => {
  return (
    <Frame title = "Education">
      <div className = "education">
        <ul className = "education__list">
          {
            educationList.map(item => 
              item.isComplited ? 
              (
                <li className = "education__item">
                <span className = "education__date">{item.date}, </span> <span className = "education__location">{item.location}</span>
                <a className = "education__link" href={item.link}>
                  {item.place}
                </a>
                <span>{item.description}</span>
                <div className = "line line--complited"></div>
                <div className = "dot dot--complited"></div>
              </li>
              )
              :
              (
                <li className = "education__item">
                <span className = "education__date">{item.date}, </span> <span className = "education__location">{item.location}</span>
                <a className = "education__link" href={item.link}>
                  {item.place}
                </a>
                <span>{item.description}</span>
                <div className = "line line--not-complited"></div>
                <div className = "dot dot--not-complited"></div>
              </li>
              ) 
            )
          }
        </ul>
      </div>
    </Frame>      
  )
}

export default Education;