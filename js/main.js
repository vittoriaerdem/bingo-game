var bingoNumber = [1,2,3,4,5,6,7,8,9,10,
    11,12,13,14,15,16,17,18,19,20,
    21,22,23,24,25,26,27,28,29,30,
    31,32,33,34,35,36,37,38,39,40,
    41,42,43,44,45,46,47,48,49,50,
    51,52,53,54,55,56,57,58,59,60,
    61,62,63,64,65,66,67,68,69,70,
    71,72,73,74,75];
  
var drawnNumber = bingoNumber[Math.floor(Math.random()*bingoNumber.length)];
console.log(drawnNumber);

const $drawnNumbers = $('#skills'); // this is the list
const nextNumber = $('#next-number') // this is the button
const newGame = $('#new-game') // this is the button
const skillInput = $('#skill-input')
console.log(addSkill)
console.log($skills)
console.log(skillInput)
addSkill.click(function(event) {
    console.log(event.target) // when connecting buttons do this first
    let $value = $('#skill-input').val()
    // let template = $(`
    // <div class="">
    //     <div class="btn btn-danger">X</div>
    //     <p>${$value}</p>
    // </div>
    // `);
    let newItem = $(`<li class="item"><div class="btn btn-danger">X</div><p> ${$value}</p></li>`)
    skillInput.val('')
    $skills.append(newItem)
});