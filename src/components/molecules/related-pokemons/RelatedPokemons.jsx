import PokemonsCards from "components/atoms/pokemons-cards/PokemonsCards";
import React from "react";
import './RelatedPokemons.css';

/**
 * Related pokemons component
 * @returns {JSX.Element}
 */
const RelatedPokemons = (props) => {
    const { base, chain } = props;
    const getChainArray = (chainNode) => {
        if (chainNode.evolves_to.length === 0) return [chainNode.species.name];
        else
            return [
                ...getChainArray(chainNode.evolves_to[0]),
                chainNode.species.name,
            ];
    };
    const chainArray = getChainArray(chain).reverse().filter((value) => value !== base);
    return chainArray.length > 0 ? (
        <section className='m-related-pokemons'>
            <h2 className='m-related-pokemons__title'>Evolution Chain</h2>
            <PokemonsCards cardsNames={chainArray} />
        </section>
    ) : (
        <></>
    )
};

export default RelatedPokemons;