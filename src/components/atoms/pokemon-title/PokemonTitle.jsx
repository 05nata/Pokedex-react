import React from "react";
import './PokemonTitle.css';
import flama from 'assets/img/types/flama.png';

/**
 * Pokemon title component
 * @returns {JSX.Element}
 */
const PokemonTitle = (props) => {
    const { name, type} = props;
    return (
    <div className='a-pokemon-title'>
        <div className='a-pokemon-title__image-mask'>
            <img className='a-pokemon-title__image' 
            src={flama}
            alt='Imagen del tipo del cual pertenece el pokemon' />
        </div>
        <h1 className='a-pokemon-title__name'>{name}</h1>
    </div>
  );
};

export default PokemonTitle;