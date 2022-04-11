import React from 'react';
import './PokemonImageContainer.css';

/**
 * Pokemon image container component
 * @returns {JSX.Element}
 */
const PokemonImageContainer = (props) => {
    const {image} = props;
    return (
    <div className='a-pokemon-image-container'>
        <img className='a-pokemon-image-container__image' 
        src={image}
        alt='Imagen del pokemon' />
    </div>
  );
};

export default PokemonImageContainer;