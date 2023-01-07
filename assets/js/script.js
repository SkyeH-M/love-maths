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
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    runGame("addition");
})

/** doc string:
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */

// pass gameType into func as argument
function runGame(gameType) {
    // create 2 random numbers between 1-25
let num1 = Math.floor(Math.random() * 25) + 1;
let num2 = Math.floor(Math.random() * 25) + 1;

// check gameType parameter, if = to addition, display addition Q
if (gameType === "addition") {
    displayAdditionQuestion(num1, num2);

// multiply game:
} else if (gameType === "multiply") {
    displayMultiplyQuestion(num1, num2);
// subtract game:
} else if (gameType === "subtract") {
    displaySubtractQuestion(num1, num2);
// divide game:
} else if (gameType === "division") {
    displayDivideQuestion(num1, num2);
} else {
    // otherwise throw error
    alert(`Unknown game type: ${gameType}`);
    throw `Unknown game type: ${gameType}. Aborting!`
}

}

/**
 * Checks the answer against the first element in the returned CalculateCorrectAnswer []
 */
function checkAnswer() {
    // need to get users guess from DOM, compare users answer to correct answer
    // must have .value at end bc it's an input variable
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculateCorrectAnswer()[0];

    if (isCorrect) {
        /* My solution for score incrementation:
        document.getElementById("score").textContent++;
        */
        alert("Hey! You got it right! 😃");
        incrementScore();
    } else {
        alert(`Aww... you answered ${userAnswer}. The correct answer was ${calculateCorrectAnswer()[0]}!`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);
}

/**
 * Gets the operands and the operator
 * directly from the DOM, and return the correct answer.
 */
function calculateCorrectAnswer() {
    // get values back from DOM, parseInt makes sure we treat value as whole number
    // by default DOM values are returned as strings
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;
// if operator is + calculate correct answer
    if (operator === '+') {
        // return arr with [correct answer, gameType]
        return [operand1 + operand2, "addition"];
        // otherwise throw error
    } else if (operator === 'x') {
        return [operand1 * operand2, "multiply"];
    } else if (operator === '-') {
        return [operand1 - operand2, "subtract"];
    } else if(operator === '/') {
        return [operand1 / operand2, "division"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }

}
/**
 * gets the current score from the DOM and increments it by 1
 */
function incrementScore() {
    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;
}
/**
 * gets the current tally of incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++oldScore;
}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

function displaySubtractQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "-";
}

function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";
}

function displayDivideQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "/";
}