// wait for the DOM to finish loading before running the game
// get the button elements and add event listeners to them

document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button');
    // if we console.log this we get HTMLCollection(5) [button.btn.btn--big.btn--green, etc for each button]
    // below goes through buttons array and returns each element in the arr that will be stored in the var button
    for (let button of buttons) {
        button.addEventListener('click', function() {
            // this refers to button that was just clicked
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }
})

/** doc string:
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame() {
    // create 2 random numbers between 1-25
let num1 = Math.floor(Math.random() * 25) + 1;
let num2 = Math.floor(Math.random() * 25) + 1;
}

runGame();

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}