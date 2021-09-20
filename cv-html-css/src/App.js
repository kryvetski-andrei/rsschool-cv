import React from "react";
import "./assets/styles/App.css"
import About from "./components/About";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import English from "./components/English";
import Projects from "./components/Projects";
import SelfIntro from "./components/SelfIntro";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";
import WorkAndExp from "./components/WorkAndExp";


function App() {
  return (
    <div className="App">
      <header className = "header">
        <div className = "container container__header">
          <About/>
          <SocialLinks/>
        </div>
      </header>

      <main>
        <div className = "container">
          <section className = "section--left">
            <Education/>
            <Projects/>
            <WorkAndExp/>
            <English/>
          </section>
          <section className = "section--right">
            <Skills/>
            <SelfIntro/>
            <Achievements/>
          </section>
        </div>
      </main>
    </div>
    
  );
}

export default App;
