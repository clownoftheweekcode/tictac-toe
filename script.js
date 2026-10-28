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
let XnumsOfWins = document.getElementById("xAmountOfWins");
let OnumsOfWins = document.getElementById("oAmountOfWins");
xWins = 0;
oWins = 0;
XnumsOfWins.textContent = "X wins: " + xWins;
OnumsOfWins.textContent = "O wins: " + oWins;
xWins = 0;
OWins = 0;
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

let modePlayBtn = document.getElementById("selectModePlay");
let modeSel = document.getElementById("modeSel");
let modeSelectScreen = document.getElementById("modeSelect");
modePlayBtn.addEventListener("click", function() {
    if (modeSel.value === "tictactoe") {
        tictactoe();
    } else {
        notakto();
    }
    modeSelectScreen.style.display = "none";
});

function tictactoe() {
        let turnsUsed = 0;
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
                            td.style.color = "red";
                        } else {
                            td.textContent = "O";
                            turn = "X";
                            turnP.textContent = "turn: " + turn;
                            td.style.color = "blue";
                        }
                        turnsUsed += 1;
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
            if (turnsUsed === 9 && gameOver === false) {
                gameOver = true;
                winner.textContent = "winner: tie";
            }
            let board = [];
            for (b=0;b<tds.length; b++) {
                board.push(tds[b].textContent);
            }
            for (const pattern of possWins) {
                const [a,b,c] = pattern;
                if (board[a] !== "" && board[a] === board[b] && board[b] === board[c]){
                    gameOver = true; 
                    winner.textContent = "winner: " + tds[pattern[0]].textContent;
                    if (tds[pattern[0]].textContent === "O") {
                        oWins += 1;
                    } else {
                        xWins += 1;
                    }
                    for (w=0; w<pattern.length; w++) {
                        tds[pattern[w]].classList.add("winnerBlock");
                    }
                } 
            }
            XnumsOfWins.textContent = "X wins: " + xWins;
        OnumsOfWins.textContent = "O wins: " + oWins;
        }
        resetBtn.addEventListener("click", function() {
            if (gameOver === true) {
                for (z=0;z<tds.length;z++) {
                    tds[z].textContent = "";
                    tds[z].classList.remove("winnerBlock");
                    tds[z].color = "black";
                }
            gameOver = false;
            winner.textContent = "winner: NA";
            turnP.textContent = "turn: " + turn;
            turnsUsed = 0;

            }
            
        });
}
 let turn = "1";
function notakto() {
    XnumsOfWins.textContent = "player 1 wins: " + xWins;
        OnumsOfWins.textContent = "player 2 wins: " + oWins;
    tds.forEach((td,idx) =>{
        td.addEventListener("click", function() {
            if (gameOver === false) {
                if (td.textContent === "") {
                    if (turn === "1") {
                        td.textContent = "X";
                        turn = "2";
                    } else {
                        td.textContent = "X";
                        turn = "1";
                    }
                    turnP.textContent = "turn: " + turn;
                } else {

                }
                checkForWinNotakto();
            }
        });
    });
}
function checkForWinNotakto() {
    let board = [];
    for (b = 0; b<tds.length; b++) {
        board.push(tds[b].textContent);
    }
    for (const pattern of possWins) {
        const [a,b,c] = pattern;
        if (board[a] !== "" && board[a] === board[b] && board[b] === board[c]){
            gameOver = true;
            winner.textContent = "winner: " + turn;
            if (turn === "1") {
                xWins +=1;
                XnumsOfWins.textContent = "player 1 wins: " + xWins;
            } else {
                oWins += 1;
                OnumsOfWins.textContent = "player 2 wins: " + oWins;
            }
            for (w=0;w<pattern.length; w++) {
                tds[pattern[w]].classList.add("winnerBlock");
            }   
        }
        }
    resetBtn.addEventListener("click", function() {
            if (gameOver === true) {
                for (z=0;z<tds.length;z++) {
                    tds[z].textContent = "";
                    tds[z].classList.remove("winnerBlock");
                    tds[z].color = "black";
                }
            gameOver = false;
            winner.textContent = "winner: NA";
            turnP.textContent = "turn: " + turn;
            turnsUsed = 0;

            }
            
        });
}