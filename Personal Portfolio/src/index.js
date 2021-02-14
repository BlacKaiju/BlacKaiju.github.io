import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./margin.css";

import Banner from "./Banner";
import About from "./About";
import Projects from "./Projects";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Banner />
    <About />
    <Projects />
  </StrictMode>,
  rootElement
);
