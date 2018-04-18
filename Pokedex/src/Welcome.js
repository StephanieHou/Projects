import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Welcome = () => (
  <div id="mainbg">
    <div id="main">
      <h1 class="effect-shine"> Pokemon Lyfe</h1>
      <h3> All You Need To Know About Pokemon </h3>
    </div>
    <nav>
      <Link to="/Home">Enter The World Of Pokemon</Link>
    </nav>
  </div>
);

export default Welcome;
