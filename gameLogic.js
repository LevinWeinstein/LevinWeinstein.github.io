tile = 0;

boxes = {};

for (var i = 0; i < 9; i++)
    boxes["box" + i] = document.getElementById("box" + i);


const PLAIN_TILE_COLOR = "#DC0073";
const TAKEN_TILE_COLOR = "#F5B700";
// 37: left
// 38: top
// 39: right
// 40: bottom
function processMove(event){

    //right
    if (event.keyCode === 39 && tile % 3 !== 2){
        boxes["box" + tile++].style.backgroundColor = PLAIN_TILE_COLOR;
        boxes["box" + tile].style.backgroundColor = TAKEN_TILE_COLOR;
    }

    //left
    else if (event.keyCode === 37 && tile % 3 !== 0){
        boxes["box" + tile--].style.backgroundColor = PLAIN_TILE_COLOR;
        boxes["box" + tile].style.backgroundColor = TAKEN_TILE_COLOR;
    }

    //up
    else if (event.keyCode === 38 && tile > 2){
        boxes["box" + tile].style.backgroundColor = PLAIN_TILE_COLOR;
        tile -= 3;
        boxes["box" + tile].style.backgroundColor = TAKEN_TILE_COLOR;
    }

    //down
    else if (event.keyCode === 40 && tile < 6) {
        boxes["box" + tile].style.backgroundColor = PLAIN_TILE_COLOR;
        tile += 3;
        boxes["box" + tile].style.backgroundColor = TAKEN_TILE_COLOR;
    }
}