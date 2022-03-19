import React from 'react';

const PokemonView = (props) => (
    <article>
        <h2>{props.name}</h2>
        <img src={props.image} alt={`Imagen de ${props.name}`} />
    </article>
);

export default PokemonView;