let board = document.getElementById("board");
let trs = document.querySelectorAll("tr");
let tds = document.querySelectorAll("td");
let boardVals = [
    [0,0,0,0,0,0,0,0,0]
];
/* let boardVals = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

for (i=0; i<boardVals.length; i++) {
    for (a=0; a<boardVals[i].length; a++) {
        //console.log(boardVals[i][a]);
        console.log(a);
    }
}*/
let possWins = [
    [1,2,3],
    [1,4,7],
    [1,5,9],
    [2,5,8],
    [3,6,9],
    [4,5,6],
    [7,8,9]
];
let Xboxes = [];
let Yboxes = [];
let turn = "X";
tds.forEach((td, idx) => {
    td.addEventListener("click", function(event){
        if (td.textContent === "") {
            console.log(idx);
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
        checkForWin(td,idx);
    });
});
function checkForWin(td,idx) {
    //console.log(Xboxes);
    for (o=0; o<possWins.length; o++) {
        for (p=0; p<possWins[o].length; p++) {
            possWins.forEach((index) => {
                
            });
        }
    }

}