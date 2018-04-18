import React from "react";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import pokeAPI from "./pokeAPI";
import PokeList from "./PokeList";

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemon: "",
      id: "",
      name: "",
      description: "",
      height: "",
      weight: "",
      category: "",
      abil: "",
      types: "",
      weakness: "",
      link: "",
      search: "Waiting For Your Selection",
      sort: ""
    };
  }

  handleSelect = e => {
    this.setState({
      pokemon: e.target.value,
      id: pokeAPI.getByName(e.target.value).id,
      name: pokeAPI.getByName(e.target.value).name,
      description: pokeAPI.getByName(e.target.value).description,
      height: pokeAPI.getByName(e.target.value).height,
      weight: pokeAPI.getByName(e.target.value).weight,
      category: pokeAPI.getByName(e.target.value).category,
      abil: pokeAPI.getByName(e.target.value).abilities,
      types: pokeAPI.getByName(e.target.value).types.join(", "),
      weakness: pokeAPI.getByName(e.target.value).weakness.join(", "),
      link: pokeAPI.getByName(e.target.value).outlink,
      search: ""
    });
  };

  handleSortSelect = e => {
    this.setState({
      sort: e.target.value
    });
  };

  handleSubmit = e => {
    var input = document.getElementById("userinput").value;
    const pokenames = pokeAPI.getAllPokeLNames();
    const ids = pokeAPI.getAllId();
    if (pokenames.includes(input.toLowerCase())) {
      this.setState({
        pokemon: input,
        id: pokeAPI.getByName(input).id,
        name: pokeAPI.getByName(input).name,
        description: pokeAPI.getByName(input).description,
        height: pokeAPI.getByName(input).height,
        weight: pokeAPI.getByName(input).weight,
        category: pokeAPI.getByName(input).category,
        abil: pokeAPI.getByName(input).abilities,
        types: pokeAPI.getByName(input).types.join(", "),
        weakness: pokeAPI.getByName(input).weakness.join(", "),
        link: pokeAPI.getByName(input).outlink,
        search: ""
      });
    } else if (ids.includes(parseInt(input))) {
      this.setState({
        pokemon: input,
        id: pokeAPI.getById(input).id,
        name: pokeAPI.getById(input).name,
        description: pokeAPI.getById(input).description,
        height: pokeAPI.getById(input).height,
        weight: pokeAPI.getById(input).weight,
        category: pokeAPI.getById(input).category,
        abil: pokeAPI.getById(input).abilities,
        types: pokeAPI.getById(input).types.join(", "),
        weakness: pokeAPI.getById(input).weakness.join(", "),
        link: pokeAPI.getById(input).outlink,
        search: ""
      });
    } else {
      this.setState({
        search: "No Such Pokemon. Try Again."
      });
    }
  };

  renderPokedex = props => {
    const pokenames = pokeAPI.getAllPokeNames();
    const sortlist = ["", "Name", "Id"];
    const Names = pokeAPI.sortByName(pokeAPI.getAll());
    const Ids = pokeAPI.sortById(pokeAPI.getAll());
    const {
      pokemon,
      id,
      name,
      description,
      height,
      weight,
      category,
      abil,
      types,
      weakness,
      link,
      search,
      sort
    } = this.state;

    return (
      <div>
        <nav id="navig">
          <Link to="/Home">Home</Link>
          {"  /  "}
          <Link to="/More">More</Link>
        </nav>
        <div id="pokedex">
          <div id="topbar" />
          <img
            id="deximg"
            src="http://img02.deviantart.net/27dd/i/2014/124/3/9/kalos_pokedex_wallpaper_by_kalosdex-d7h52e1.png"
            alt="poke"
            border="0"
          />
          <div id="pokesearch">
            <h2>Pokedex</h2>
            <p>
              Enter Name Or Id: {" "}
              <input type="text" placeholder="Search Here" id="userinput" /> {" "}
              <input type="submit" onClick={this.handleSubmit} />
            </p>
            <p>
              Select a Pokemon:{" "}
              <select onChange={this.handleSelect}>
                {pokenames.map(pokemon => (
                  <option value={pokemon}>{pokemon}</option>
                ))}
              </select>
            </p>
            <p>
              Sort By:{" "}
              <select onChange={this.handleSortSelect}>
                {sortlist.map(sort => <option value={sort}>{sort}</option>)}
              </select>
            </p>
            <div id="sortlist">
              {sort === "" ? (
                <div>
                  <img
                    src="https://78.media.tumblr.com/1a683eca2557d84648cd50964662e5d6/tumblr_o85m6yx2jQ1qk7puko1_500.gif"
                    alt="pokechar"
                    border="0"
                  />
                </div>
              ) : (
                ""
              )}
              {sort === "Name" ? (
                <PokeList array={Names} handleSubmit={this.handleSelect} />
              ) : (
                ""
              )}
              {sort === "Id" ? (
                <PokeList array={Ids} handleSubmit={this.handleSelect} />
              ) : (
                ""
              )}
            </div>
          </div>
          <div>
            {pokemon === "" || search === "No Such Pokemon. Try Again." ? (
              <div id="wait">
                <h1>{search}</h1>
                <img
                  src="https://media.giphy.com/media/PPFtslai8k1m8/giphy.gif"
                  alt="pokeball"
                  border="0"
                />
              </div>
            ) : (
              ""
            )}
          </div>
          <div id="pokeinfo">
            {pokemon === "" || search === "No Such Pokemon. Try Again." ? (
              ""
            ) : (
              <div>
                <div id="pokeimg">
                  <img src={link} alt={name} border="0" />
                </div>
                <h1>
                  <img
                    id="pokeball"
                    src="http://i31.tinypic.com/2j3sd36.jpg"
                    alt="pokeball"
                    border="0"
                  />{" "}
                  {name} #{id}{" "}
                </h1>
                <p id="des">{description}</p>
                <table align="center" text-align="left">
                  <tr>
                    <td>
                      <p id="height">Height: {height}</p>
                    </td>
                    <td>
                      <p id="weight"> Weight: {weight}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p id="category"> Category: {category}</p>
                    </td>
                    <td>
                      <p id="abil"> Abilities: {abil}</p>
                    </td>
                  </tr>
                </table>
                <p id="type"> Type: {types}</p>
                <p id="weak"> Weaknesses: {weakness}</p>
              </div>
            )}
          </div>
          <div id="bottombarpoke" />
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/pokedex" render={this.renderPokedex} />
        </Switch>
      </div>
    );
  }
}
export default Pokedex;
