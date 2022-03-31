import PokemonsCards from "components/atoms/pokemons-cards/PokemonsCards";
import React from "react";

/**
 * Related pokemons component
 * @returns {JSX.Element}
 */
const RelatedPokemons = () => (
    <section className='m-related-pokemons'>
        <h2 className='m-related-pokemons__title'>Evolution Chain</h2>
        <PokemonsCards />
    </section>
);

export default RelatedPokemons;