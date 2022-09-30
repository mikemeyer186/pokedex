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
        cardContent.innerHTML += cardPokemonTemplate(pokemonName, pokemonImage, pokemonType, i, pokemonId);
        renderPokemonType(pokemon, i);
    }
}


/**
 * rendering pokemon types in single cards
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
 * event when page is scrolled down
 */
window.onscroll = function (ev) {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        offsetPokemon = pokemons.length + 1;
        maxPokemon += 10;
        setTimeout(loadMorePokemon, 1000);
    }
};


/**
 * searching for names on keyup in searchbar
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
    let values = loadDetailsData(i);
    document.getElementById('page-body').classList.add('no-overflow');
    document.getElementById('detail-content').innerHTML = detailPokemonTemplate(values[3], values[0], values[1], values[2], i, values[4], values[5], values[6]);
    renderPokemonTypeDetail(pokemons[i], i);
    fillStatBar(pokemons[i]['stats']);
    loadAbilities(pokemons[i], i);
}


/**
 * loading pokemon detail data from api and returning an array
 */
function loadDetailsData(i) {
    let pokemonType = pokemons[i]['types'][0]['type']['name'];
    let pokemonImage = pokemons[i]['sprites']['other']['home']['front_default'];
    let pokemonId = pokemons[i]['id'];
    let pokemonName = pokemons[i]['name'];
    let pokemonXp = pokemons[i]['base_experience'];
    let pokemonWeight = pokemons[i]['weight'];
    let pokemonHeight = pokemons[i]['height'];
    return [pokemonImage, pokemonId, pokemonName, pokemonType, pokemonXp, pokemonWeight, pokemonHeight];
}

/**
 * loading abilities from api 
 */
function loadAbilities(pokemon, i) {
    let abilitiesContent = document.getElementById(`abilities-content-detail${i}`);
    let pokemonAbilities = pokemon['abilities'];

    for (let y = 0; y < pokemonAbilities.length; y++) {
        let ability = pokemonAbilities[y];
        let abilityName = ability['ability']['name'];
        abilitiesContent.innerHTML += detailAbilitiesTemplate(abilityName);
    }
}


/**
 * closing the detail view and remove overflow:hidden from body
 */
function closeDetailView() {
    document.getElementById('page-body').classList.remove('no-overflow');
    document.getElementById('detail-content').innerHTML = '';
}


/**
 * rendering pokemon types in detail popup
 */
function renderPokemonTypeDetail(pokemon, i) {
    let typeContent = document.getElementById(`type-content-detail${i}`);
    let pokemonTypes = pokemon['types'];

    for (let y = 0; y < pokemonTypes.length; y++) {
        let type = pokemonTypes[y];
        let typeName = type['type']['name'];
        typeContent.innerHTML += detailTypeTemplate(typeName);
    }
}


/**
 * filling stat bars with values from base stats
 */
function fillStatBar(stats) {
    for (let i = 0; i < stats.length; i++) {
        let stat = stats[i]['base_stat'];
        document.getElementById(`stat-bar${i}`).style.width = (stat / 3) + '%';
        document.getElementById(`stat-text${i}`).innerHTML = `<span>${stat}</span>`;
    }
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
 * underline selected nav link in detail popup
 */
function underlineLink(object) {
    document.getElementById('details-nav-info').classList.remove('underline');
    document.getElementById('details-nav-stats').classList.remove('underline');
    document.getElementById('details-nav-ability').classList.remove('underline');
    document.getElementById(`details-nav-${object}`).classList.add('underline');
}