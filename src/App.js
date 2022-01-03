import "./App.css";
import * as React from "react";
import { Profile } from "./Profile";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { About } from "./About";
import { Navbar } from "./Navbar";
export default function App() {
  return (
    <div>
      <Navbar />
      <Profile />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
