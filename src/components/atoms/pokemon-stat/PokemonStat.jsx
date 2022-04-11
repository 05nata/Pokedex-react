import React from "react";
import './PokemonStat.css';

/**
 * Pokemon stat content
 * @returns {JSX.Element}
 */
const PokemonStat = () => (
    <div className='a-pokemon-stat'>
        <span className='a-pokemon-stat__name'>Nombre</span>
        <span className='a-pokemon-stat__value'>Valor</span>
    </div>
);

export default PokemonStat;