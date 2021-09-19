import React from "react";
import { workAndExpList } from "../assets/someDataBase/someDataBase";
import Frame from "./Frame";

const WorkAndExp = () => {
  return (
    <Frame title = "Work &amp; Exp">
      <div className = "work">
        <ul className = "work__list">
          {
            workAndExpList.map(item => 
              item.isComplited ? 
              (
                <li className = "work__item">
                <span className = "work__date">{item.date}, </span> <span className = "work__location">{item.location}</span>
                <a className = "work__link" href={item.link}>
                  {item.place}
                </a>
                <span>{item.description}</span>
                <div className = "line line--complited"></div>
                <div className = "dot dot--complited"></div>
              </li>
              )
              :
              (
                <li className = "work__item">
                <span className = "work__date">{item.date}, </span> <span className = "work__location">{item.location}</span>
                <a className = "work__link" href={item.link}>
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

export default WorkAndExp;