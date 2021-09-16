import React from "react";
import avatar from "../assets/images/andrei-kryvetski.jpg"
const About = () => {
  return (
    <section className = "about">
      <header className = "about__header">
        <h2 className = "about__name">Andrei Kryvetski</h2>
      </header>

      <section className = "about__body">
        <img className = "about__avatar" alt = "kryvetski-andrei-avatar" src = {avatar}/>
        <h3 className = "about__career-objective">Front-end developer</h3>
        <p className = "about__description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type 
          specimen book. It has survived not only five centuries, but also the leap into 
          electronic typesetting, remaining essentially unchanged, remaining essentially unchanged.
        </p>
      </section>
    </section>
  )
}

export default About;