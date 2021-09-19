import React from "react";
import "./assets/styles/App.css"
import About from "./components/About";
import Education from "./components/Education";
import Frame from "./components/Frame";
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
            <WorkAndExp/>
            <Projects/>
          </section>
          <section className = "section--right">
            <Skills/>
            <SelfIntro/>
          </section>
        </div>
      </main>
    </div>
    
  );
}

export default App;
