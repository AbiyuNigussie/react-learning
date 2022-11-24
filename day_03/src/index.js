import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import profile from "./images/profile.jpg";
import level_2 from "./components/Level_2/level_2";
import subscribe from "./components/Subscribe/subscribe";
import userCard from "./components/UserCard/userCard";
const welcome = "Welcome to 30 Days of React";
const title = "Getting Started React";
const subtitle = "JavaScript Library";
const author = {
  firstName: "Abiyu",
  lastName: "Nigussie",
};
const date = "Nov 23. 2022";

const header = (
  <header className="home-header">
    <div className="header-wrapper">
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Author: {author.firstName} {author.lastName}
      </p>
      <small>{date}</small>
    </div>
  </header>
);

const numOne = 3;
const numTwo = 2;

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
);
const yearBorn = 2003;
const currentYear = new Date().getFullYear();
const age = currentYear - yearBorn;
const personAge = (
  <p>
    {" "}
    {author.firstName} {author.lastName} is {age} years old
  </p>
);

const user = <img src={profile}></img>;

const main = (
  <main className="home-main">
    <div className="main-wrapper">
      <p>
        Prerequisite to get started <b>react.js</b>:
      </p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
      {result}
      {personAge}
      {user}
    </div>
  </main>
);

const footer = (
  <footer className="home-footer">
    <div className="footer-wrappers">
      <p>Copyright 2022</p>
    </div>
  </footer>
);

const home = (
  <div>
    {header}
    {main}
    {footer}
  </div>
);

const app = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={home} />
      <Route path="/level-2" element={level_2} />
      <Route path="/subscribe" element={subscribe} />
      <Route path="/userCard" element={userCard} />
      <Route />
    </Routes>
  </BrowserRouter>
);
const rootElement = document.getElementById("root");

ReactDOM.render(app, rootElement);
