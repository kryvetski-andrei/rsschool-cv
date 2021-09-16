import React from "react";
import "./assets/styles/App.css"
import About from "./components/About";
import Education from "./components/Education";
import SocialLinks from "./components/SocialLinks";
import WorkAndExp from "./components/WorkAndExp";

function App() {

  return (
    <div className="App">
      <header className = "header">
        <div className = "container">
          <About/>
          <SocialLinks/>
        </div>
      </header>
      <main>
        <div className = "container">
          <section className = "section--left">
            <Education/>
            <WorkAndExp/>
          </section>
          <section className = "section--right">
            
          </section>
        </div>
        
      </main>
    </div>
  );
}

export default App;
