/*----- app's state (variables) -----*/ 
var count;

const bingoNumber = [
    1,2,3,4,5,6,7,8,9,10,
    11,12,13,14,15,16,17,18,19,20,
    21,22,23,24,25,26,27,28,29,30,
    31,32,33,34,35,36,37,38,39,40,
    41,42,43,44,45,46,47,48,49,50,
    51,52,53,54,55,56,57,58,59,60,
    61,62,63,64,65,66,67,68,69,70,
    71,72,73,74,75];

let boardNumbers = [];

/*----- cached element references -----*/ 
var numDrawn = document.querySelector('h1');
var numBoard = document.querySelector('h2');
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

numBoard.innerText = boardNumbers

init();