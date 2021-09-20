import React, { useState } from "react";
import { skillsList } from "../assets/someDataBase/someDataBase";
import Frame from "./Frame";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "./Modal";
import CodeExample from "./CodeExample";

const Skills = () => {
  const [modalActive, setModalActive] = useState(false);
  const [codeExample, setCodeExample] = useState("");
  const [codeLeng, setCodeLeng] = useState("");

  return (
    <Frame title="Skills">
      <ul className="skills">
        {skillsList.map((skill) => (
          <li
            className="skill"
            onClick={() => {
              console.log(typeof skill.example);
              setCodeLeng(skill.lang);
              setCodeExample(skill.example);
              setModalActive(true);
            }}
            key={skill.id}
          >
            <span className="skill__name">{skill.name}</span>
            <div className="skill__inner">
              <div className="skill__logo">
                <FontAwesomeIcon icon={skill.logo} color={skill.barColor} />
              </div>
              <div className="skill__bar--wrapper">
                <div
                  className="skill__bar"
                  style={{ width: skill.progress + "%" }}
                ></div>
              </div>
              <span className="skill__persent">{skill.progress}%</span>
            </div>
          </li>
        ))}
      </ul>

      <Modal active={modalActive} setActive={setModalActive}>
        <CodeExample code={codeExample} lang={codeLeng} />
      </Modal>
    </Frame>
  );
};

export default Skills;
