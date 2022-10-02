/**
 * pokemon card template for main content
 */
function cardPokemonTemplate(pokemonName, pokemonImage, pokemonType, i, pokemonId) {
    return /*html*/ `
        <div class="card ${pokemonType}" onclick="openDetailView(${i})">
            <div class="card-left">
                <p class="card-name">${pokemonName}</p>
                <div id="type-content${i}"></div>
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
    return /*html*/ `
        <div class="card-type">
            <span>${typeName}</span>
        </div>
    `;
}

/**
 * pokemon type template for pokemon detail view
 */
function detailTypeTemplate(typeName) {
    return /*html*/ `
        <div class="card-type-detail ${typeName}">
            <span>${typeName}</span>
        </div>
    `;
}

function detailAbilitiesTemplate(abilityName) {
    return /*html*/ `
        <div class="card-ability-detail">
            <span>${abilityName}</span>
        </div>
    `;
}

/**
 * pokemon detail view template
 */
function detailPokemonTemplate(pokemonType, pokemonImage, pokemonId, pokemonName, i, pokemonXp, pokemonWeight, pokemonHeight) {
    return /*html*/ `
        <div class="detail-bg" onclick="closeDetailView()">
            <div class="detailPopup ${pokemonType}" onclick="stopPropagate(event)">
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
                    <div class="detailsBox" id="detailsBox-info">
                        <table class="table-details">
                            <tr>
                                <td class="table-details-name">type:</td>
                                <td class="table-details-amount"><div class="detail-type-box" id="type-content-detail${i}"></div></td>
                            </tr>
                            <tr>
                                <td class="table-details-name">xp:</td>
                                <td class="table-details-amount">${pokemonXp}</td>
                            </tr>
                            <tr>
                                <td class="table-details-name">weight:</td>
                                <td class="table-details-amount">${pokemonWeight}</td>
                            </tr>
                            <tr>
                                <td class="table-details-name">heigth:</td>
                                <td class="table-details-amount">${pokemonHeight}</td>
                            </tr>
                            <tr>
                                <td class="table-details-name">abilities:</td>
                                <td class="table-details-amount"><div class="detail-abilities-box" id="abilities-content-detail${i}"></div></td>
                            </tr>
                        </table>
                        
                    </div>
                    <div class="detailsBox d-none" id="detailsBox-stats">
                        <table>
                            <tr>
                                <td class="table-details-name smaller-row">hp:</td>
                                <td class="table-details-amount bar-left"><div class="stat-bar-outer"><div id="stat-bar0" class="stat-bar-inner"></div></div><div id="stat-text0" class="stat-text"></div></td>
                            </tr>
                            <tr>
                                <td class="table-details-name smaller-row">attack:</td>
                                <td class="table-details-amount bar-left"><div class="stat-bar-outer"><div id="stat-bar1" class="stat-bar-inner"></div></div><div id="stat-text1" class="stat-text"></div></td>
                            </tr>
                            <tr>
                                <td class="table-details-name smaller-row">defense:</td>
                                <td class="table-details-amount bar-left"><div class="stat-bar-outer"><div id="stat-bar2" class="stat-bar-inner"></div></div><div id="stat-text2" class="stat-text"></div></td>
                            </tr>
                            <tr>
                                <td class="table-details-name smaller-row">special-att.:</td>
                                <td class="table-details-amount bar-left"><div class="stat-bar-outer"><div id="stat-bar3" class="stat-bar-inner"></div></div><div id="stat-text3" class="stat-text"></div></td>
                            </tr>
                            <tr>
                                <td class="table-details-name smaller-row">special-def.:</td>
                                <td class="table-details-amount bar-left"><div class="stat-bar-outer"><div id="stat-bar4" class="stat-bar-inner"></div></div><div id="stat-text4" class="stat-text"></div></td>
                            </tr>
                            <tr>
                                <td class="table-details-name smaller-row">speed:</td>
                                <td class="table-details-amount bar-left"><div class="stat-bar-outer"><div id="stat-bar5" class="stat-bar-inner"></div></div><div id="stat-text5" class="stat-text"></div></td>
                            </tr>

                        </table>
                    </div>
                    <div class="detailsBox d-none" id="detailsBox-ability">
                    </div>
                </div>
            </div>
        </div>
    `;
}
