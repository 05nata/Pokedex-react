import React from 'react';
import './PokemonImageContainer.css';

/**
 * Pokemon image container component
 * @returns {JSX.Element}
 */
const PokemonImageContainer = () => (
    <div className='a-pokemon-image-container'>
        <img className='a-pokemon-image-container__image' 
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/25.png"
        alt='Imagen del pokemon' />
    </div>
);

export default PokemonImageContainer;