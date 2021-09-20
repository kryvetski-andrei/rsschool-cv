import React, { useState } from "react";
import Frame from "./Frame";
import Slider from 'infinite-react-carousel';
import Modal from "./Modal";
import { achievementsList } from "../assets/someDataBase/someDataBase";


const Achievements = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <Frame title="achievements">
      <div className = "project-preview"onClick = {() => {setModalActive(true)}}>
        <div 
          className = "project-preview__item--first project-preview__item" 
          style = {{backgroundImage: `url(${process.env.PUBLIC_URL + 'images/rsschool-stage0.png'})` }}
        >

        </div>
        <div 
          className = "project-preview__item--second project-preview__item" 
          style = {{backgroundImage: `url(${process.env.PUBLIC_URL + 'images/rsschool-stage0.png'})` }}
        >

        </div>
        <div 
          className = "project-preview__item--third project-preview__item" 
          style = {{backgroundImage: `url(${process.env.PUBLIC_URL + 'images/rsschool-stage0.png'})` }}
        >

        </div>
      </div>
      <Modal active = {modalActive} setActive = {setModalActive}>
        <Slider dots centerMode="true">
          {achievementsList.map(achiev =>
            <div className = "slide" >
              <div className = "slide__inner">
                <div 
                  className = "slide__item" 
                  style = {{backgroundImage: `url(${process.env.PUBLIC_URL + `images/${achiev}.png`})` }}
                >
                </div>
              </div> 
            </div>
          )}
        </Slider>
      </Modal>
    </Frame>

    
  )
}

export default Achievements;