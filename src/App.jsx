import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

function App() {
  return (
    <>
      <Header />
      <Hero />
      {/* <About /> */}
      <Projects />
      <Contact />
    </>
  );
}

export default App;
