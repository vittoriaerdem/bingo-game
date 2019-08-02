const $skills = $('#skills'); // this is the list
const addSkill = $('#add-button') // this is the button
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