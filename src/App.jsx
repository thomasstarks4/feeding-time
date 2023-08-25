import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import Help from "./components/Help";
import Profile from "./components/Profile";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Tracker from "./components/Tracker";
import SignUp from "./components/SignUp";
import LoginError from "./components/LoginError";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/help" element={<Help />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/tracker" element={<Tracker />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/loginerror" element={<LoginError />}></Route>
      </Routes>

      <div class="d-none">
        <Footer className="footer" />
      </div>
    </React.Fragment>
  );
}

export default App;
