import React from "react";
import PokemonStat from "../pokemon-stat/PokemonStat";
import './PokemonStats.css';

/**
 * Pokemon stats elements
 * @returns {JSX.Element}
 */
const PokemonStats = (props) => {
    const {stats} = props;
    return (
    <div className='a-pokemon-stats'>
        <PokemonStat name = 'No.' value = {stats.no}/>
        <PokemonStat name = 'LEVEL' value = {stats.level}/>
        <PokemonStat name = 'TYPE' value = {stats.type}/>
        <PokemonStat name = 'HABILITY' value = {stats.hability}/>
        <PokemonStat name = 'HEIGHT' value = {stats.height}/>
        <PokemonStat name = 'WEIGHT' value = {stats.weight}/>
    </div>
 );
};

export default PokemonStats