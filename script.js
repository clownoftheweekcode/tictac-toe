let board = document.getElementById("board");
let trs = document.querySelectorAll("tr");
let tds = document.querySelectorAll("td");
let winner = document.getElementById("winnerP");
let gameOver = false;
let turnP = document.getElementById("turn");
let resetBtn = document.getElementById("resetBoard");
let boardVals = [
    [0,0,0,0,0,0,0,0,0]
];

let possWins = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];
let Xboxes = [];
let turn = "X";
tds.forEach((td, idx) => {
    td.addEventListener("click", function(event){
        if (gameOver === false) {
            if (td.textContent === "") {
                if (turn === "X") {
                    td.textContent = "X";
                    Xboxes.push(idx + 1);
                    turn = "O";
                    turnP.textContent = "turn: " + turn;
                } else {
                    td.textContent = "O";
                    turn = "X";
                    turnP.textContent = "turn: " + turn;
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
            winner.textContent = "winner: " + tds[pattern[0]].textContent;
            for (w=0; w<pattern.length; w++) {
                tds[pattern[w]].classList.add("winnerBlock");
            }
        } 
    }
}
resetBtn.addEventListener("click", function() {
    if (gameOver === true) {
        for (z=0;z<tds.length;z++) {
            tds[z].textContent = "";
            tds[z].classList.remove("winnerBlock");
        }
    gameOver = false;
    winner.textContent = "winner: ";
    turnP.textContent = "turn: " + turn;
    }
    
});