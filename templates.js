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
function detailPokemonTemplate(pokemonBg, pokemonImage, pokemonId, pokemonName) {
    return /*html*/`
        <div class="detail-bg" onclick="closeDetailView()">
            <div class="detailPopup" style="background-color:${pokemonBg}" onclick="stopPropagate(event)">
                <div class="detail-top">
                    <img class="close-icon" src="./img/app/close_icon.png" alt="Close" onclick="closeDetailView()">
                    <!--<img class="ball-background-detail" src="./img/app/card_ball.png">-->
                    <p class="card-name-detail">${pokemonName}</p>
                    <span class="card-id-detail">#${pokemonId}</span>
                    <img class="detail-image" src="${pokemonImage}" alt="Pokemon-Image">
                </div>
                <div class="detail-bottom">
                    <div class="detail-nav">
                        <span id="details-nav-info" class="detail-info nav-link underline" onclick="showDetailsBox('info')">infos</span>
                        <span id="details-nav-stats" class="detail-abilities nav-link" onclick="showDetailsBox('stats')">stats</span>
                        <span id="details-nav-ability" class="detail-abilities nav-link" onclick="showDetailsBox('ability')">abilities</span>
                    </div>
                    <div class="detailsBox" id="detailsBox-info">Informationen</div>
                    <div class="detailsBox d-none" id="detailsBox-stats">Statistiken</div>
                    <div class="detailsBox d-none" id="detailsBox-ability">Fähigkeiten</div>
                </div>
            </div>
        </div>
    `;
}