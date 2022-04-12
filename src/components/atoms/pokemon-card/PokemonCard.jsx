import React, { useState, useEffect } from "react";
import "./PokemonCard.css";

/**
 * Pokemon card component
 * @returns {JSX.Element}
 */
const PokemonCard = (props) => {
  const { pokemonName } = props;
  const [pokemonData, setPokemonData] = useState(null);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        const pokemon = {
          name: jsonResponse.name,
          image: jsonResponse.sprites.other.dream_world.front_default,
        };
        setPokemonData(pokemon);
      });
  }, [pokemonName]);
  return pokemonData ? (
    <a className="a-pokemon-card" href={`/pokemon/${pokemonData.name}`}>
      <img
        className="a-pokemon-card__image"
        src={pokemonData.image}
        alt={`Tarjeta del ${pokemonData.name}`}
      />
    </a>
  ) : (
    <></>
  );
};

export default PokemonCard;
