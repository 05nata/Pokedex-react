import React from 'react';
import PokemonTitle from 'components/atoms/pokemon-title/PokemonTitle';
import PokemonImegeContainer from 'components/atoms/pokemon-image-container/PokemonImageContainer';
import PokemonStats from 'components/atoms/pokemon-stats/PokemonStats';

const PokemonView = (props) => (
    <section className='m-pokemon-view'>
        <PokemonTitle />
        <PokemonImegeContainer />
        <PokemonStats />
    </section>
);

export default PokemonView;