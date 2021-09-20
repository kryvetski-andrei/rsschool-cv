import React from "react";
import avatar from "../assets/images/andrei-kryvetski.jpg";
const About = () => {
  return (
    <section className="about">
      <header className="about__header">
        <h2 className="about__name">Andrei Kryvetski</h2>
      </header>

      <section className="about__body">
        <img
          className="about__avatar"
          alt="kryvetski-andrei-avatar"
          src={avatar}
        />
        <h3 className="about__career-objective">Front-end developer</h3>
        <p className="about__description">
          Hello everyone! You can find all the information about me below.
          <hr />
          This is my first React app. I tried to make it extensible and full of
          features, so some of the information is presented as an example. At
          the moment, the application is full of flaws and requires
          decomposition of some components. But I will expand and supplement it
          during the education. Thanks for reading to the end. May the Force be
          with you!
        </p>
      </section>
    </section>
  );
};

export default About;
