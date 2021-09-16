import React from "react";
import "./assets/styles/App.css"
import About from "./components/About";
import Education from "./components/Education";
import SocialLinks from "./components/SocialLinks";

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
          </section>
          <section className = "section--right">

          </section>
        </div>
        
      </main>
    </div>
  );
}

export default App;
