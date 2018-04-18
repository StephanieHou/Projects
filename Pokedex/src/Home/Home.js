import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div id="home">
    <div id="topbar" />
    <img
      src="https://fontmeme.com/permalink/180107/6bff53f03c64bfa95f4499d3fb34e232.png"
      alt="pokemon-font"
      border="0"
    />
    <p>
      For more than 15 years, kids all over the world have been discovering the
      enchanting world of Pokémon. There are currently more than 700 creatures
      that inhabit the Pokémon universe. Pokémon are creatures of all shapes and
      sizes who live in the wild or alongside humans. Find out more about
      Pokemon here on Pokemon Lyfe!
    </p>
    <Link to="/pokedex"><button id="left"> Pokedex </button></Link>
    <Link to="/more"><button id="right"> More Content </button></Link>
    <div id="bottombar" />
  </div>
);

export default Home;
