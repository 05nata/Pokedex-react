import React from "react";
import PokemonCard from "../pokemon-card/PokemonCard";
import "./PokemonsCards.css";

/**
 * Pokemons cards component
 * @returns {JSX.Element}
 * @param {{cardsNames: string[]}} props;
 */
const PokemonsCards = (props) => {
  const { cardsNames } = props;
  return (
    <ul className="a-pokemons-cards">
      {cardsNames.map((value, index) => (
        <li className="a-pokemons-cards__mask" key={index}>
          <PokemonCard pokemonName={value} />
        </li>
      ))}
    </ul>
  );
};

export default PokemonsCards;
