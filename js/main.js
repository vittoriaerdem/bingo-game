/*----- app's state (variables) -----*/ 

const mark = {
  '1': '✗'
}

let board, turn, winner;

const bingoNumber = [                                                          // bingo ball values available to be randomly drawn from 
  1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,
  16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,
  31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,
  46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,
  61,62,63,64,65,66,67,68,69,70,71,72,73,74,75
];

const ballB = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];                          // bingo values available to be assigned to each square, organized by columns
const ballI = [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
const ballN = [31,32,33,34,35,36,37,38,39,40,41,42,43,44,45];
const ballG = [46,47,48,49,50,51,52,53,54,55,56,57,58,59,60];
const ballO = [61,62,63,64,65,66,67,68,69,70,71,72,73,74,75];


let columnBNumbers = [];                                                       // array for the 5 random numbers from each ballB, ballI, ballN, ballG, & ballO arrays
let columnINumbers = [];
let columnNNumbers = [];
let columnGNumbers = [];
let columnONumbers = [];

/*----- cached element references -----*/ 

var numDrawn = document.querySelector('h1');                                      // shows a randomly drawn number 1-75 inside the "Bingo Ball" 
var callSheetNum = document.querySelector('h3');                                  // shows a randomly drawn number 1-75 inside the call sheet
var callSheetHistory = document.querySelector('h5');
let msg = document.getElementById('msg');                                         // shows whether the user should draw again or won

 var numBoard1 = document.querySelector('#c0r0');                                 // displays the randomly assigned number in each square
 var numBoard2 = document.querySelector('#c1r0');
 var numBoard3 = document.querySelector('#c2r0');
 var numBoard4 = document.querySelector('#c3r0');
 var numBoard5 = document.querySelector('#c4r0');
 var numBoard6 = document.querySelector('#c0r1');
 var numBoard7 = document.querySelector('#c1r1');
 var numBoard8 = document.querySelector('#c2r1');
 var numBoard9 = document.querySelector('#c3r1');
var numBoard10 = document.querySelector('#c4r1');
var numBoard11 = document.querySelector('#c0r2');
var numBoard12 = document.querySelector('#c1r2');
var numBoard13 = document.querySelector('#c2r2');
var numBoard14 = document.querySelector('#c3r2');
var numBoard15 = document.querySelector('#c4r2');
var numBoard16 = document.querySelector('#c0r3');
var numBoard17 = document.querySelector('#c1r3');
var numBoard18 = document.querySelector('#c2r3');
var numBoard19 = document.querySelector('#c3r3');
var numBoard20 = document.querySelector('#c4r3');
var numBoard21 = document.querySelector('#c0r4');
var numBoard22 = document.querySelector('#c1r4');
var numBoard23 = document.querySelector('#c2r4');
var numBoard24 = document.querySelector('#c3r4');
var numBoard25 = document.querySelector('#c4r4');
/*----- event listeners -----*/ 

document.querySelector('#draw-a-number').addEventListener('click', function(){      //clicking will return a random number from the bingoNumber array
    ballValue = bingoNumber[Math.floor(Math.random()*bingoNumber.length)];
    numDrawn.innerText=ballValue;
    callSheetNum.innerText=ballValue;
});


document.querySelector('#new-game').addEventListener('click', function(){      //clicking will refresh the bag and create a new bingo board
  window.location.reload()
});

/*----- functions -----*/

function init() {
  columnB();
  columnI();
  columnN();
  columnG();
  columnO();
  board = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]]
  turn = 1;
  winner = null;
  render();
}

for (var i = 0; i < 5; i++){                                                          // returns 5 random numbers from the Column B array
  columnB();
}

function columnB(){
  var randomNums = ballB[Math.floor(Math.random() * ballB.length)];  
  if (columnBNumbers.indexOf(randomNums) == -1)
      columnBNumbers.push(randomNums);
  else
  columnB();
} 

for (var i = 0; i < 5; i++){                                                          // returns 5 random numbers from the Column I array
  columnI();
}

function columnI(){
  var randomNums = ballI[Math.floor(Math.random() * ballI.length)];  
  if (columnINumbers.indexOf(randomNums) == -1)
      columnINumbers.push(randomNums);
  else
  columnI();
}

for (var i = 0; i < 5; i++){                                                          // returns 5 random numbers from the Column N array
  columnN();
}

function columnN(){
  var randomNums = ballN[Math.floor(Math.random() * ballN.length)];  
  if (columnNNumbers.indexOf(randomNums) == -1)
      columnNNumbers.push(randomNums);
  else
  columnN();
}

for (var i = 0; i < 5; i++){                                                          // returns 5 random numbers from the Column G array
  columnG();
}

function columnG(){
  var randomNums = ballG[Math.floor(Math.random() * ballG.length)];  
  if (columnGNumbers.indexOf(randomNums) == -1)
      columnGNumbers.push(randomNums);
  else
  columnG();
}

for (var i = 0; i < 5; i++){                                                          // returns 5 random numbers from the Column O array
  columnO();
}

function columnO(){
  var randomNums = ballO[Math.floor(Math.random() * ballO.length)];  
  if (columnONumbers.indexOf(randomNums) == -1)
      columnONumbers.push(randomNums);
  else
  columnO();
}


numBoard1.innerText = columnBNumbers[0]                                 // returns a random number from the columnBNumbers array
numBoard6.innerText = columnBNumbers[1]
numBoard11.innerText = columnBNumbers[2]
numBoard16.innerText = columnBNumbers[3]
numBoard21.innerText = columnBNumbers[4]

numBoard2.innerText = columnINumbers[0]                                 // returns a random number from the columnINumbers array
numBoard7.innerText = columnINumbers[1]
numBoard12.innerText = columnINumbers[2]
numBoard17.innerText = columnINumbers[3]
numBoard22.innerText = columnINumbers[4]

numBoard3.innerText = columnNNumbers[0]                                 // returns a random number from the columnNNumbers array
numBoard8.innerText = columnNNumbers[1]
numBoard18.innerText = columnNNumbers[3]
numBoard23.innerText = columnNNumbers[4]

numBoard4.innerText = columnGNumbers[0]                                 // returns a random number from the columnGNumbers array
numBoard9.innerText = columnGNumbers[1]
numBoard14.innerText = columnGNumbers[2]
numBoard19.innerText = columnGNumbers[3]
numBoard24.innerText = columnGNumbers[4]

numBoard5.innerText = columnONumbers[0]                                 // returns a random number from the columnONumbers array
numBoard10.innerText = columnONumbers[1]
numBoard15.innerText = columnONumbers[2]
numBoard20.innerText = columnONumbers[3]
numBoard25.innerText = columnONumbers[4]

init();



function changeColor1() {                                             // Clicking on the squares changes the color from white to black
  document.getElementById("c0r0").style.backgroundColor= "black";
  document.getElementById("c0r0").style.color= "white";
}

function changeColor2() {
  document.getElementById("c1r0").style.backgroundColor= "black";
  document.getElementById("c1r0").style.color= "white";
}

function changeColor3() {
  document.getElementById("c2r0").style.backgroundColor= "black";
  document.getElementById("c2r0").style.color= "white";
}

function changeColor4() {
  document.getElementById("c3r0").style.backgroundColor= "black";
  document.getElementById("c3r0").style.color= "white";
}

function changeColor5() {
  document.getElementById("c4r0").style.backgroundColor= "black";
  document.getElementById("c4r0").style.color= "white";
}

function changeColor6() {
  document.getElementById("c0r1").style.backgroundColor= "black";
  document.getElementById("c0r1").style.color= "white";
}
function changeColor7() {
  document.getElementById("c1r1").style.backgroundColor= "black";
  document.getElementById("c1r1").style.color= "white";
}

function changeColor8() {
  document.getElementById("c2r1").style.backgroundColor= "black";
  document.getElementById("c2r1").style.color= "white";
}

function changeColor9() {
  document.getElementById("c3r1").style.backgroundColor= "black";
  document.getElementById("c3r1").style.color= "white";
}

function changeColor10() {
  document.getElementById("c4r1").style.backgroundColor= "black";
  document.getElementById("c4r1").style.color= "white";
}

function changeColor11() {
  document.getElementById("c0r2").style.backgroundColor= "black";
  document.getElementById("c0r2").style.color= "white";
}

function changeColor12() {
  document.getElementById("c1r2").style.backgroundColor= "black";
  document.getElementById("c1r2").style.color= "white";
}
function changeColor13() {
  document.getElementById("c2r2").style.backgroundColor= "black";
  document.getElementById("c2r2").style.color= "white";
}

function changeColor14() {
  document.getElementById("c3r2").style.backgroundColor= "black";
  document.getElementById("c3r2").style.color= "white";
}

function changeColor15() {
  document.getElementById("c4r2").style.backgroundColor= "black";
  document.getElementById("c4r2").style.color= "white";
}

function changeColor16() {
  document.getElementById("c0r3").style.backgroundColor= "black";
  document.getElementById("c0r3").style.color= "white";
}

function changeColor17() {
  document.getElementById("c1r3").style.backgroundColor= "black";
  document.getElementById("c1r3").style.color= "white";
}

function changeColor18() {
  document.getElementById("c2r3").style.backgroundColor= "black";
  document.getElementById("c2r3").style.color= "white";
}

function changeColor19() {
  document.getElementById("c3r3").style.backgroundColor= "black";
  document.getElementById("c3r3").style.color= "white";
}

function changeColor20() {
  document.getElementById("c4r3").style.backgroundColor= "black";
  document.getElementById("c4r3").style.color= "white";
}

function changeColor21() {
  document.getElementById("c0r4").style.backgroundColor= "black";
  document.getElementById("c0r4").style.color= "white";
}

function changeColor22() {
  document.getElementById("c1r4").style.backgroundColor= "black";
  document.getElementById("c1r4").style.color= "white";
}

function changeColor23() {
  document.getElementById("c2r4").style.backgroundColor= "black";
  document.getElementById("c2r4").style.color= "white";
}

function changeColor24() {
  document.getElementById("c3r4").style.backgroundColor= "black";
  document.getElementById("c3r4").style.color= "white";
}

function changeColor25() {
  document.getElementById("c4r4").style.backgroundColor= "black";
  document.getElementById("c4r4").style.color= "white";
}

/*----- event listeners -----*/ 
document.querySelector('.board').addEventListener('click', handleClick);

/*----- functions -----*/
function handleClick(evt) {
  col = parseInt(evt.target.id.charAt(1));
  row = parseInt(evt.target.id.charAt(3));
  if(board[col][row] === 0 && !winner) {
      board[col][row] = turn;
      winner = getWinner();
  }
  render();
}

function render() {
  board.forEach(function(colArr, colIdx) {
      colArr.forEach(function(cell, rowIdx) {
          let div = document.getElementById(`c${colIdx}r${rowIdx}`);
          div.style.backgroundColor = mark[cell];
      });
  });                                                                          // checks to see if there is a winner
  if (winner === 'T') {
      msg.textContent = "No winner yet"        
  } else {
      msg.textContent = winner ? "You won!" : "Draw Again";
  }
}

function getWinner() {                                                          // checks to see if the game has been won, if not, go again
  if (checkCols() || checkRows() || checkDiags()) {
      return turn *= -1;
  }}

function checkCols() {                                                          // checks to see if there is a winning column
  let total = [];
  board.forEach(function(colArr, colIdx) {
      total[colIdx] = 0;
      colArr.forEach(function(cell) {
          total[colIdx] += cell;
      });
  });
  return isWinner(total);
}

function checkRows() {                                                          // checks to see if there is a winning row
  let total = [];
  for (rowIdx = 0; rowIdx < board.length; rowIdx++) {
      total[rowIdx] = 0;
      board.forEach(function(colArr) {
          total[rowIdx] += colArr[rowIdx] 
      });
  }
  return isWinner(total);
}

function checkDiags() {                                                          // checks to see if there is a winning diagonal
  let total = [];
  total[0] = board[0][0] + board[1][1] + board[2][2] + board[3][3] + board[4][4];

total[1] = board[4][0] + board[3][1] + board[2][2] + board[1][3] + board[0][4];
  return isWinner(total);
}

function isWinner(array) {                                                          // checks to see if there is a 5 squares selected in the row/column/diagonal direction
  for (i = 0; i < array.length; i++) {
      if (Math.abs(array[i]) === 5) {
          return true;
      } 
  } 
  return false;
}

function changeBorder(){
  if (numDrawn >= 1 && numDrawn <=15) {
  return document.getElementById("h1").style.border= 'yellow';
} else if {
  (numDrawn >= 16 && numDrawn <=30)
  return document.getElementById("h1").style.border= 'red';
} else {
  (numDrawn >= 0 && numDrawn <=75)
  return document.getElementById("h1").style.border= 'black';
}
}
