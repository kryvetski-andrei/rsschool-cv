import React from "react";
import "./assets/styles/App.css"
import About from "./components/About";
import SocialLinks from "./components/SocialLinks";

function App() {

  return (
    <main className="App">
      <header className = "main__header">
        <div className = "container">
          <About/>
          <SocialLinks/>
        </div>
      </header>
    </main>
  );
}

export default App;
