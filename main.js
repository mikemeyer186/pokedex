/**
 * declaration global variables
 */
let pokemons = [];
let offsetPokemon = 0;
let maxPokemon = 20;


/**
 * loading pokemon data from api
 */
async function loadPokemon() {
    for (let i = 1; i <= maxPokemon; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        let responseAsJson = await response.json();
        pushPokemons(responseAsJson);
    }
    renderPokemonCard(pokemons);
}


/**
 * loading more pokemons when page is scrolled to bottom
 */
async function loadMorePokemon() {
    for (let i = offsetPokemon; i <= maxPokemon; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        let responseAsJson = await response.json();
        pushPokemons(responseAsJson);
    }
    renderPokemonCard(pokemons);
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
function renderPokemonCard(pokemons) {
    let cardContent = document.getElementById('card-content');
    cardContent.innerHTML = '';

    for (let i = 0; i < pokemons.length; i++) {
        let pokemon = pokemons[i];
        let pokemonName = pokemon['name'];
        let pokemonId = pokemon['id'];
        let pokemonImage = pokemon['sprites']['other']['home']['front_default'];
        let pokemonType = pokemon['types'][0]['type']['name'];
        let pokemonBg = matchTypeBackground(pokemonType);
        cardContent.innerHTML += cardPokemonTemplate(pokemonName, pokemonImage, pokemonBg, i, pokemonId);
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

    if (type == 'poison') {
        return 'rgb(115, 80, 134)';
    }

    if (type == 'ground') {
        return 'rgb(174, 116, 109)';
    }

    if (type == 'fairy') {
        return 'rgb(180, 191, 249)';
    }

    if (type == 'normal') {
        return 'rgb(121, 121, 121)';
    }

    //psychic, fighting, rock
}


/**
 * event when page is scrolled down
 * @param {event} ev 
 */
window.onscroll = function (ev) {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        offsetPokemon = pokemons.length + 1;
        maxPokemon += 10;
        setTimeout(loadMorePokemon, 1000);
    }
};


/**
 * search for names on keyup in searchbar
 */
function searchPostings() {
    let search = document.getElementById('searchInput');
    search = search.value.toLowerCase().trim();
    document.getElementById('loading-more').classList.add('d-none');

    if (search == '') {
        document.getElementById('loading-more').classList.remove('d-none');
        pokemons = [];
        loadPokemon();
    } else {
        result = pokemons.filter(e => e.name.includes(search));
        renderPokemonCard(result);
    }
}


/**
 * opening the detail view of pokemon and add overflow:hidden to body
 */
function openDetailView(i) {
    let pokemonType = pokemons[i]['types'][0]['type']['name'];
    let pokemonImage = pokemons[i]['sprites']['other']['home']['front_default'];
    let pokemonId = pokemons[i]['id'];
    let pokemonName = pokemons[i]['name'];

    let pokemonBg = matchTypeBackground(pokemonType);

    document.getElementById('page-body').classList.add('no-overflow');
    document.getElementById('detail-content').innerHTML = detailPokemonTemplate(pokemonBg, pokemonImage, pokemonId, pokemonName);
}


/**
 * closing the detail view and remove overflow:hidden from body
 */
function closeDetailView() {
    document.getElementById('page-body').classList.remove('no-overflow');
    document.getElementById('detail-content').innerHTML = '';
}


/**
 * stopping propagation of child elements
 */
function stopPropagate(event) {
    event.stopPropagation();
}


/**
 * showing selected nav link in details popup
 */
function showDetailsBox(object) {
    document.getElementById('detailsBox-info').classList.add('d-none');
    document.getElementById('detailsBox-stats').classList.add('d-none');
    document.getElementById('detailsBox-ability').classList.add('d-none');
    document.getElementById(`detailsBox-${object}`).classList.remove('d-none');
    underlineLink(object);
}


/**
 * underline selected nav link in detaisl popup
 */
function underlineLink(object) {
    document.getElementById('details-nav-info').classList.remove('underline');
    document.getElementById('details-nav-stats').classList.remove('underline');
    document.getElementById('details-nav-ability').classList.remove('underline');
    document.getElementById(`details-nav-${object}`).classList.add('underline');
}
