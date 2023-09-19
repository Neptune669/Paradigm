import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";

import NotFound from "./pages/NotFound";
import Home from "./pages/home";
import AboutUs from "./pages/about";
import Event from "./pages/events";
import Suc from "./pages/sustainability";
import Blog from "./pages/blog";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/events" element={<Event />} />
        <Route path="/sustainability" element={<Suc />} />
        <Route path="/blogs" element={<Blog />} />

        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Route path="*" element={<NotFound />} /> */}
    </Router>
  );
}

export default App;
