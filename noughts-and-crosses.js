// gameboard module
const gameboard = (() => {

    let tiles = ["", "", "", "", "", "", "", "", ""];

    const setTile = (tile, value) => {
        tiles[tile] = value;
    }

    return { tiles, setTile };
})();

// DOM module
const dom = (() => {

    const renderGameboard = (tiles) => {
        document.body.innerHTML = "";
        const gameboardDiv = document.createElement('div');
        gameboardDiv.setAttribute('class', 'gameboard');
        document.body.appendChild(gameboardDiv);
        for (i = 0; i < tiles.length; i++) {
            let newTile = document.createElement('div');
            newTile.setAttribute('class', 'tile');
            newTile.setAttribute('data-tile-number', i);
            newTile.innerHTML = tiles[i];
            gameboardDiv.appendChild(newTile);
        }
        applyTileClicks();
    }

    const applyTileClicks = () => {
        let tiles = document.querySelectorAll('.tile');
        tiles.forEach(function (tile) {
            let tileNumber = tile.getAttribute('data-tile-number');
            tile.addEventListener('click', function (event) { console.log(event); gameboard.setTile(tileNumber, "O"); renderGameboard(gameboard.tiles); });
        });
    }

    return { renderGameboard };
})();

// test stuff
gameboard.setTile(0, "O");
gameboard.setTile(2, "X");

// render the gameboard
dom.renderGameboard(gameboard.tiles);