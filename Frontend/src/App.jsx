import React from "react";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Singup from "./Components/Singup";
import Login from "./Components/Login";
import Contact from "./Components/contact.jsx/Contact";
import About from "./Components/about/About";

const App = () => {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coursr" element={<Courses />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />



      </Routes>
    </div>
  );
};

export default App;
