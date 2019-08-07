/*----- app's state (variables) -----*/ 
var count;

// bingo ball values available to be randomly drawn from 
const bingoNumber = [
  1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,
  16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,
  31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,
  46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,
  61,62,63,64,65,66,67,68,69,70,71,72,73,74,75
];

// bingo values available to be assigned to each square, organized by columns
const ballB = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
const ballI = [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
const ballN = [31,32,33,34,35,36,37,38,39,40,41,42,43,44,45];
const ballG = [46,47,48,49,50,51,52,53,54,55,56,57,58,59,60];
const ballO = [61,62,63,64,65,66,67,68,69,70,71,72,73,74,75];

// array for the 5 random numbers from each ballB, ballI, ballN, ballG, & ballO arrays
let columnBNumbers = [];
let columnINumbers = [];
let columnNNumbers = [];
let columnGNumbers = [];
let columnONumbers = [];

// const winArrayBCol = [#square1, #square6, #square11, #square16, #square21];
// const winArrayICol = [#square2, #square7, #square12, #square17, #square22];
// const winArrayNCol = [#square3, #square8, #square13, #square18, #square23];
// const winArrayGCol = [#square4, #square9, #square14, #square19, #square24];
// const winArrayOCol = [#square5, #square10, #square15, #square20, #square25];

// const winArrayRow1 = [#square1, #square2, #square3, #square4, #square5];
// const winArrayRow2 = [#square6, #square7, #square8, #square9, #square10];
// const winArrayRow3 = [#square11, #square12, #square13, #square14, #square15];
// const winArrayRow4 = [#square16, #square17, #square18, #square19, #square20];
// const winArrayRow5 = [#square21, #square22, #square23, #square24, #square25];

// const winArrayDiagB = [#square1, #square7, #square13, #square19, #square25];
// const winArrayDiagG = [#square5, #square9, #square13, #square17, #square21];

/*----- cached element references -----*/ 
// variable is a randomly selected number from the bingoNumber array
var numDrawn = document.querySelector('h1');
var callSheetNum = document.querySelector('h3');

// displays the randomly assigned number in each square
var numBoard1 = document.querySelector('#square1');
var numBoard2 = document.querySelector('#square2');
var numBoard3 = document.querySelector('#square3');
var numBoard4 = document.querySelector('#square4');
var numBoard5 = document.querySelector('#square5');
var numBoard6 = document.querySelector('#square6');
var numBoard7 = document.querySelector('#square7');
var numBoard8 = document.querySelector('#square8');
var numBoard9 = document.querySelector('#square9');
var numBoard10 = document.querySelector('#square10');
var numBoard11 = document.querySelector('#square11');
var numBoard12 = document.querySelector('#square12');
var numBoard13 = document.querySelector('#square13');
var numBoard14 = document.querySelector('#square14');
var numBoard15 = document.querySelector('#square15');
var numBoard16 = document.querySelector('#square16');
var numBoard17 = document.querySelector('#square17');
var numBoard18 = document.querySelector('#square18');
var numBoard19 = document.querySelector('#square19');
var numBoard20 = document.querySelector('#square20');
var numBoard21 = document.querySelector('#square21');
var numBoard22 = document.querySelector('#square22');
var numBoard23 = document.querySelector('#square23');
var numBoard24 = document.querySelector('#square24');
var numBoard25 = document.querySelector('#square25');

// variable is a randomly selected number from the bingoNumber array
// var ballValue = bingoNumber[Math.floor(Math.random()*bingoNumber.length)];

/*----- event listeners -----*/ 


// clicking will return a random number from the bingoNumber array
document.querySelector('#draw-a-number').addEventListener('click', function(){
    ballValue = bingoNumber[Math.floor(Math.random()*bingoNumber.length)];
    numDrawn.innerText = ballValue;
    callSheetNum.innerText = ballValue;

});

// var emptyArray = ballValue.push();
// console.log(emptyArray)

// <button id="draw-a-number">Draw a Number </button>
// <button onclick="addToCallSheet()">Try it</button> 

// document.getElementById("callSheetNums").appendChild(callSheetNum);








// clicking will refresh the bag and create a new bingo board
document.querySelector('#new-game').addEventListener('click', function(){
  window.location.reload()
});

/*----- functions -----*/

function init() {
  count = ballValue;
  columnB();
  columnI();
  columnN();
  columnG();
  columnO();
}

for (var i = 0; i < 5; i++){     // returns 5 random numbers from the Column B array
  columnB();
}

function columnB(){
  var randomNums = ballB[Math.floor(Math.random() * ballB.length)];  
  if (columnBNumbers.indexOf(randomNums) == -1)
      columnBNumbers.push(randomNums);
  else
  columnB();
} 

for (var i = 0; i < 5; i++){     // returns 5 random numbers from the Column I array
  columnI();
}

function columnI(){
  var randomNums = ballI[Math.floor(Math.random() * ballI.length)];  
  if (columnINumbers.indexOf(randomNums) == -1)
      columnINumbers.push(randomNums);
  else
  columnI();
}

for (var i = 0; i < 5; i++){     // returns 5 random numbers from the Column N array
  columnN();
}

function columnN(){
  var randomNums = ballN[Math.floor(Math.random() * ballN.length)];  
  if (columnNNumbers.indexOf(randomNums) == -1)
      columnNNumbers.push(randomNums);
  else
  columnN();
}

for (var i = 0; i < 5; i++){     // returns 5 random numbers from the Column G array
  columnG();
}

function columnG(){
  var randomNums = ballG[Math.floor(Math.random() * ballG.length)];  
  if (columnGNumbers.indexOf(randomNums) == -1)
      columnGNumbers.push(randomNums);
  else
  columnG();
}

for (var i = 0; i < 5; i++){     // returns 5 random numbers from the Column O array
  columnO();
}

function columnO(){
  var randomNums = ballO[Math.floor(Math.random() * ballO.length)];  
  if (columnONumbers.indexOf(randomNums) == -1)
      columnONumbers.push(randomNums);
  else
  columnO();
}

// use this to refactor
`<div id="square1">Square 1</div>`
/*
for map callback ->
@ param number is the current item in the array
@ param index is the index of that array
*/
// const bingoNumbers = boardNumbers.map((number, index) => { 
//   let currentdiv = document.createElement('div')
//   currentdiv.id = index + 1
//   currentdiv.innerText = number
//   return currentdiv
// })

numBoard1.innerText = columnBNumbers[0]// returns a random number from the columnBNumbers array
numBoard6.innerText = columnBNumbers[1]
numBoard11.innerText = columnBNumbers[2]
numBoard16.innerText = columnBNumbers[3]
numBoard21.innerText = columnBNumbers[4]

numBoard2.innerText = columnINumbers[0]// returns a random number from the columnINumbers array
numBoard7.innerText = columnINumbers[1]
numBoard12.innerText = columnINumbers[2]
numBoard17.innerText = columnINumbers[3]
numBoard22.innerText = columnINumbers[4]

numBoard3.innerText = columnNNumbers[0]// returns a random number from the columnNNumbers array
numBoard8.innerText = columnNNumbers[1]
// numBoard13.innerText = columnNNumbers[2] // free space, does not currently assign a number
numBoard18.innerText = columnNNumbers[3]
numBoard23.innerText = columnNNumbers[4]

numBoard4.innerText = columnGNumbers[0]// returns a random number from the columnGNumbers array
numBoard9.innerText = columnGNumbers[1]
numBoard14.innerText = columnGNumbers[2]
numBoard19.innerText = columnGNumbers[3]
numBoard24.innerText = columnGNumbers[4]

numBoard5.innerText = columnONumbers[0]// returns a random number from the columnONumbers array
numBoard10.innerText = columnONumbers[1]
numBoard15.innerText = columnONumbers[2]
numBoard20.innerText = columnONumbers[3]
numBoard25.innerText = columnONumbers[4]

init();

////////Clicks in Sq 1 - 25 change the color from white to black /////


// evt.target


function changeColor1(evt) {
  console.log(evt)
  document.getElementById("square1").style.backgroundColor= "black";
  document.getElementById("square1").style.color= "white";
}

function changeColor2() {
  document.getElementById("square2").style.backgroundColor= "black";
  document.getElementById("square2").style.color= "white";
}

function changeColor3() {
  document.getElementById("square3").style.backgroundColor= "black";
  document.getElementById("square3").style.color= "white";
}

function changeColor4() {
  document.getElementById("square4").style.backgroundColor= "black";
  document.getElementById("square4").style.color= "white";
}

function changeColor5() {
  document.getElementById("square5").style.backgroundColor= "black";
  document.getElementById("square5").style.color= "white";
}

function changeColor6() {
  document.getElementById("square6").style.backgroundColor= "black";
  document.getElementById("square6").style.color= "white";
}
function changeColor7() {
  document.getElementById("square7").style.backgroundColor= "black";
  document.getElementById("square7").style.color= "white";
}

function changeColor8() {
  document.getElementById("square8").style.backgroundColor= "black";
  document.getElementById("square8").style.color= "white";
}

function changeColor9() {
  document.getElementById("square9").style.backgroundColor= "black";
  document.getElementById("square9").style.color= "white";
}

function changeColor10() {
  document.getElementById("square10").style.backgroundColor= "black";
  document.getElementById("square10").style.color= "white";
}

function changeColor11() {
  document.getElementById("square11").style.backgroundColor= "black";
  document.getElementById("square11").style.color= "white";
}

function changeColor12() {
  document.getElementById("square12").style.backgroundColor= "black";
  document.getElementById("square12").style.color= "white";
}
function changeColor13() {
  document.getElementById("square13").style.backgroundColor= "black";
  document.getElementById("square13").style.color= "white";
}

function changeColor14() {
  document.getElementById("square14").style.backgroundColor= "black";
  document.getElementById("square14").style.color= "white";
}

function changeColor15() {
  document.getElementById("square15").style.backgroundColor= "black";
  document.getElementById("square15").style.color= "white";
}

function changeColor16() {
  document.getElementById("square16").style.backgroundColor= "black";
  document.getElementById("square16").style.color= "white";
}

function changeColor17() {
  document.getElementById("square17").style.backgroundColor= "black";
  document.getElementById("square17").style.color= "white";
}

function changeColor18() {
  document.getElementById("square18").style.backgroundColor= "black";
  document.getElementById("square18").style.color= "white";
}

function changeColor19() {
  document.getElementById("square19").style.backgroundColor= "black";
  document.getElementById("square19").style.color= "white";
}

function changeColor20() {
  document.getElementById("square20").style.backgroundColor= "black";
  document.getElementById("square20").style.color= "white";
}

function changeColor21() {
  document.getElementById("square21").style.backgroundColor= "black";
  document.getElementById("square21").style.color= "white";
}

function changeColor22() {
  document.getElementById("square22").style.backgroundColor= "black";
  document.getElementById("square22").style.color= "white";
}

function changeColor23() {
  document.getElementById("square23").style.backgroundColor= "black";
  document.getElementById("square23").style.color= "white";
}

function changeColor24() {
  document.getElementById("square24").style.backgroundColor= "black";
  document.getElementById("square24").style.color= "white";
}

function changeColor25() {
  document.getElementById("square25").style.backgroundColor= "black";
  document.getElementById("square25").style.color= "white";
}

////// determining matches
// var i;

// for (i=0;i<call1.length;i++){
//     if (ballValue === call1[i]){
//       document.querySelector("#callSheetNums").style.backgroundColor= "black";
//       console.log("match")
//     } 