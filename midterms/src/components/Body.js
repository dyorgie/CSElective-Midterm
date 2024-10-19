import "./Body.css";
import Navbar from "./NavBar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./About";
import Contact from "./Contact";
import Home from "./Home"


export default function Body() {
  return (
    <>
    <h1>Week 8 CS Elective Activity</h1>

    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </Router>
    </>
  );
}
