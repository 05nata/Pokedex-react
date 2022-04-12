import React, { useState, useEffect } from 'react';
import DefaulLayout from 'components/templates/default-layout/DefaultLayout';
import { useParams } from 'react-router-dom';
import PokemonView from 'components/molecules/pokemon-view/PokemonView';
import loadingImage from 'assets/img/loading.gif';
import RelatedPokemons from 'components/molecules/related-pokemons/RelatedPokemons';
import './PokemonDetails.css';

/**
 * Pokemon details page
 * @returns {JSX.Element}
 */
const PokemonDetails = () => {
    const { name: pokemonName } = useParams();
    const [pokemonData, setPokemonData] = useState(null);
    const [pokemonChain, setPokemonChain] = useState(null);
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then((response) => response.json())
            .then((jsonResponse) => {
                const pokemon = {
                    type: jsonResponse.types[0].type.name || 'undefined',
                    name: jsonResponse.name,
                    image: jsonResponse.sprites.other.dream_world.front_default,
                    stats: {
                        no: jsonResponse.id,
                        level: jsonResponse.base_experience,
                        type: jsonResponse.types[0].type.name || 'undefined',
                        hability: jsonResponse.abilities[0].ability.name.toUpperCase(),
                        height: jsonResponse.height,
                        weight: `${jsonResponse.weight} KG`,
                    },
                }

                setPokemonData(pokemon);
                return fetch(jsonResponse.species.url);
            })
            .then((response) => response.json())
            .then((jsonResponse) => fetch(jsonResponse.evolution_chain.url))
            .then(response => response.json())
            .then((jsonResponse) => setPokemonChain(jsonResponse.chain));
    }, [pokemonName]);

    return (
        <DefaulLayout title='Detalle'>
            {pokemonData ? (
                <>
                    <PokemonView pokemon={pokemonData} />
                    {pokemonChain ? <RelatedPokemons base={pokemonName} chain={pokemonChain} /> : <></>}
                </>
            ) : (
                <img className='p-loading' src={loadingImage} alt='Cargando pokemon...' />
            )}
        </DefaulLayout>
    );
};

export default PokemonDetails;