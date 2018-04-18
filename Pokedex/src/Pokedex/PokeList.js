import React from "react";
import { Link } from "react-router-dom";

const PokeList = ({ array, handleSubmit }) => (
  <div>
    {array.map(pokemon => (
      <p>
        <button type="submit" value={pokemon.name} onClick={handleSubmit}>
          {pokemon.id}: {pokemon.name}
        </button>
      </p>
    ))}
  </div>
);

export default PokeList;
