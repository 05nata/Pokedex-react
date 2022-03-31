import React from "react";
import PokemonStat from "../pokemon-stat/PokemonStat";

/**
 * Pokemon stats elements
 * @returns {JSX.Element}
 */
const PokemonStats = () => (
    <div className='a-pokemon-stats'>
        <PokemonStat />
        <PokemonStat />
        <PokemonStat />
        <PokemonStat />
        <PokemonStat />
        <PokemonStat />
    </div>
);

export default PokemonStats