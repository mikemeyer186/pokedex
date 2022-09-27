/**
 * pokemon card template for main content
 */
function cardPokemonTemplate(pokemonName, pokemonImage, pokemonBg, i, pokemonId) {
    return /*html*/`
        <div class="card" style="background-color:${pokemonBg}" onclick="openDetailView(${i})">
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
 */
function cardTypeTemplate(typeName) {
    return /*html*/`
        <div class="card-type">
            <span>${typeName}</span>
        </div>
    `;
}


/**
 * pokemon detail view template
 */
function detailPokemonTemplate(pokemonBg, pokemonImage) {
    return /*html*/`
        <div class="detail-bg" onclick="closeDetailView()">
            <div class="detailPopup" style="background-color:${pokemonBg}">
                <div class="detail-top">
                    <img class="detail-image" src="${pokemonImage}" alt="Pokemon-Image">
                </div>
                <div class="detail-bottom"></div>
            </div>
        </div>
    `;
}