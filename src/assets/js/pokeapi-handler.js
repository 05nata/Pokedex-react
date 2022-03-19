export const fetchPokemon = async(pokemonName) => {
     try {
        let apiResponse = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
        let pokemonData = await apiResponse.json()
       return {
           name: pokemonData.name,
           image: pokemonData.sprites.front_default
       }
    }   catch (error) {
            return null
    }
};