/**
 * pokemon card template for main content
 * @param {string} pokemonName 
 * @param {path} pokemonImage 
 * @param {color} pokemonBg
 * @param {index} i
 * @param {number} pokemonId
 * @returns html-template
 */
function cardPokemonTemplate(pokemonName, pokemonImage, pokemonBg, i, pokemonId) {
    return /*html*/`
        <div class="card" style="background-color:${pokemonBg}">
            <div class="card-left">
                <p class="card-name">${pokemonName}</p>
                <div id="type-content${i}">
                </div>
            </div>
            <div class="card-right">
                <span class="card-id">#${pokemonId}</span>
                <img class="card-image" src="${pokemonImage}">
            </div>
            <img class="ball_background" src="./img/app/card_ball.png">
        </div>
    `;
}


/**
 * pokemon type template for pokemon cards
 * @param {string} typeName 
 * @returns html-template
 */
function cardTypeTemplate(typeName) {
    return /*html*/`
        <div class="card-type">
            <span>${typeName}</span>
        </div>
    `;
}