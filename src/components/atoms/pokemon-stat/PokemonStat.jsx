import React from "react";
import './PokemonStat.css';

/**
 * Pokemon stat content
 * @returns {JSX.Element}
 */
const PokemonStat = (props) => {
    const {name, value} = props;
    return (
    <div className='a-pokemon-stat'>
        <span className='a-pokemon-stat__name'>{name}</span>
        <span className='a-pokemon-stat__value'>{value}</span>
    </div>
 );
};

export default PokemonStat;