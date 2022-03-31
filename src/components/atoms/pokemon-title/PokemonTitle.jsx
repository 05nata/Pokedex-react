import React from "react";

/**
 * Pokemon title element
 * @returns {JSX.Element}
 */
const PokemonTitle = () => (
    <div className='a-pokemon-title'>
        <img className='a-pokemon-title__image' 
        src='' 
        alt='Imagen del tipo del cual pertenece el pokemon' />
        <h1 className='a-pokemon-title__name'>Nombre del pokemon</h1>
    </div>
);

export default PokemonTitle;