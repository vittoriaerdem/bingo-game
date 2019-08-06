/*----- app's state (variables) -----*/ 
var count;

const bingoNumber = [
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,
    16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,
    31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,
    46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,
    61,62,63,64,65,66,67,68,69,70,71,72,73,74,75];

let boardNumbers = [];


/*----- cached element references -----*/ 
var numDrawn = document.querySelector('h1');
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

var input = bingoNumber[Math.floor(Math.random()*bingoNumber.length)];

/*----- event listeners -----*/ 

document.querySelector('#draw-a-number').addEventListener('click', function(){
    input = bingoNumber[Math.floor(Math.random()*bingoNumber.length)];
    numDrawn.innerText = input
});

/*----- functions -----*/
function render() {
  numDrawn.textContent = (count >= 0 ? '' : '') + count;
}

function init() {
  count = input;
  render();
  randomBoard();
}

for (var i = 0; i < 25; i++){
  randomBoard();
}
console.log(boardNumbers);

function randomBoard(){
  var randomNums = bingoNumber[Math.floor(Math.random() * bingoNumber.length)];  
  if (boardNumbers.indexOf(randomNums) == -1)
      boardNumbers.push(randomNums);
  else
       randomBoard();

}












// use this to refactor
// `<div id="square1">Square 1</div>`
/*
for map callback ->
@ param number is the current item in the array
@ param index is the dinex of that array
*/
// const bingoNumbers = boardNumbers.map((number, index) => { 
//   let currentdiv = document.createElement('div')
//   currentdiv.id = index + 1
//   currentdiv.innerText = number
//   return currentdiv
// })

numBoard1.innerText = boardNumbers[0]// return a new array of boardNumbers[1]
numBoard2.innerText = boardNumbers[1]
numBoard3.innerText = boardNumbers[2]
numBoard4.innerText = boardNumbers[3]
numBoard5.innerText = boardNumbers[4]
numBoard6.innerText = boardNumbers[5]
numBoard7.innerText = boardNumbers[6]
numBoard8.innerText = boardNumbers[7]
numBoard9.innerText = boardNumbers[8]
numBoard10.innerText = boardNumbers[9]
numBoard11.innerText = boardNumbers[10]
numBoard12.innerText = boardNumbers[11]
// numBoard13.innerText = boardNumbers[12]
numBoard14.innerText = boardNumbers[13]
numBoard15.innerText = boardNumbers[14]
numBoard16.innerText = boardNumbers[15]
numBoard17.innerText = boardNumbers[16]
numBoard18.innerText = boardNumbers[17]
numBoard19.innerText = boardNumbers[18]
numBoard20.innerText = boardNumbers[19]
numBoard21.innerText = boardNumbers[20]
numBoard22.innerText = boardNumbers[21]
numBoard23.innerText = boardNumbers[22]
numBoard24.innerText = boardNumbers[23]
numBoard25.innerText = boardNumbers[24]

init();

function changeColor1() {
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