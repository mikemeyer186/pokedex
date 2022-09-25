/**
 * declaration global variables
 */
let pokemons = [];

/**
 * loading pokemon data from api
 */
async function loadPokemon() {
    for (let i = 0; i < initPokemonList.length; i++) {
        let pokemon = initPokemonList[i];
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        let response = await fetch(url);
        let responseAsJson = await response.json();

        pushPokemons(responseAsJson);
    }

    renderPokemonCard();
}


/**
 * pushing pokemons in array "pokemons"
 * @param {array} pokemon
 */
function pushPokemons(pokemon) {
    pokemons.push(pokemon);
}


/**
 * rendering pokemon cards in main content
 */
function renderPokemonCard() {
    let cardContent = document.getElementById('card-content');

    for (let i = 0; i < pokemons.length; i++) {
        let pokemon = pokemons[i];
        let pokemonName = pokemon['name'];
        let pokemonImage = pokemon['sprites']['other']['dream_world']['front_default'];
        let pokemonType = pokemon['types'][0]['type']['name'];
        let pokemonBg = matchTypeBackground(pokemonType);
        cardContent.innerHTML += cardPokemonTemplate(pokemonName, pokemonImage, pokemonBg, i);
        renderPokemonType(pokemon, i);
    }
}


/**
 * rendering pokemon types in single cards
 * @param {array} pokemon 
 * @param {index} i 
 */
function renderPokemonType(pokemon, i) {
    let typeContent = document.getElementById(`type-content${i}`);
    let pokemonTypes = pokemon['types'];

    for (let y = 0; y < pokemonTypes.length; y++) {
        let type = pokemonTypes[y];
        let typeName = type['type']['name'];
        typeContent.innerHTML += cardTypeTemplate(typeName);
    }
}


/**
 * matching pokemon type with background-image
 */
function matchTypeBackground(type) {
    if (type == 'fire') {
        return 'rgb(250, 109, 112)';
    }

    if (type == 'grass') {
        return 'rgb(80, 207, 176)';
    }

    if (type == 'water') {
        return 'rgb(121, 191, 251)';
    }

    if (type == 'electric') {
        return 'rgb(254, 214, 118)';
    }

    if (type == 'bug') {
        return 'rgb(126, 180, 56)';
    }

    // green/blue = rgb(83, 184, 162)
    // violet = rgb(115, 80, 134)
    // brown = rgb(174, 116, 109)
}