// gameboard module
const gameboard = (() => {

    let tiles = ["", "", "", "", "", "", "", "", ""];

    let currentTurn = "X";

    const setTile = (tile) => {
        if (currentTurn === "X") {
            tiles[tile] = "X";
            currentTurn = "O";
        } else {
            tiles[tile] = "O";
            currentTurn = "X";
        }
        checkWin();
    }

    const checkWin = () => {
        function checkEquality(...values) {
            values.sort();
            if (values[0] === values[values.length - 1] && values[0] != "") {
                alert('game over');
            }
        }
        checkEquality(tiles[0], tiles[1], tiles[2]);
        checkEquality(tiles[3], tiles[4], tiles[5]);
        checkEquality(tiles[6], tiles[7], tiles[8]);
        checkEquality(tiles[0], tiles[3], tiles[6]);
        checkEquality(tiles[1], tiles[4], tiles[7]);
        checkEquality(tiles[2], tiles[5], tiles[8]);
        checkEquality(tiles[0], tiles[4], tiles[8]);
        checkEquality(tiles[2], tiles[4], tiles[6]);
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
            // only apply eventListener if tile hasn't already been clicked
            if (gameboard.tiles[tileNumber] === "") {
                tile.addEventListener('click', (event) => { gameboard.setTile(tileNumber); renderGameboard(gameboard.tiles); });
            }
        });
    }

    return { renderGameboard };
})();

// render the gameboard
dom.renderGameboard(gameboard.tiles);