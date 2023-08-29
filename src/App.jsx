import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Nav from "./nav";
import About from "./about";
import Event from "./event";
import Service from "./service";
import Blog from "./blog";
import Footer from "./footer";
import Trust from "./trust";

function App() {
  return (
    <Router>
      <div className="">
        <Nav></Nav>
      </div>
      <div className="content">
        <Trust />
        <About />
        <Event />
        <Service />
        <Blog />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
