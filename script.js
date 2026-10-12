let board = document.getElementById("board");
let trs = document.querySelectorAll("tr");
let tds = document.querySelectorAll("td");
let winner = document.getElementById("winnerP");
let gameOver = false;
let boardVals = [
    [0,0,0,0,0,0,0,0,0]
];

let possWins = [
    [1,2,3],
    [1,4,7],
    [1,5,9],
    [2,5,8],
    [3,6,9],
    [4,5,6],
    [7,8,9]
];

let turn = "X";
tds.forEach((td, idx) => {
    td.addEventListener("click", function(event){
        if (gameOver === false) {
            if (td.textContent === "") {
                if (turn === "X") {
                    td.textContent = "X";
                    Xboxes.push(idx + 1);
                    turn = "O";
                } else {
                    td.textContent = "O";
                    turn = "X";
                }
            } else {

            }  
        } else if (gameOver === true) {
            console.log("game over");
        }
        checkForWin();
    });
});
let winnerRow;
function checkForWin(theBoard) {
    let board = [];
    for (b=0;b<tds.length; b++) {
        board.push(tds[b].textContent);
    }
    for (const pattern of possWins) {
        const [a,b,c] = pattern;
        
        if (board[a] !== "" && board[a] === board[b] && board[b] === board[c]){
            gameOver = true; 
        }
    }
}