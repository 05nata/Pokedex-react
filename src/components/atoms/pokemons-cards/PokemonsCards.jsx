import React from "react";
import PokemonCard from "../pokemon-card/PokemonCard";

/**
 * Pokemons cards element
 * @returns {JSX.Element}
 */
const PokemonsCards = () => (
    <ul className='a-pokemons-cards'>
        <li> <PokemonCard /> </li>
        <li> <PokemonCard /> </li>
    </ul>
);

export default PokemonsCards;