//grab html ids to make targetable variables in js
var startButtonEl = document.getElementById("start-btn");
var quizContainerEl = document.getElementById("quizContainer");
var submitButtonEl = document.getElementById("submit-btn");

var questions = [
    {
    question: "this is question 1",
    choiceA: "this is choice A",
    choiceB: "this is choice B",
    choiceC: "this is choice C",
    choiceD: "this is choice D",
    correct: "choiceA"
    },

    {
    question: "this is question 2",
    choiceA: "this is choice A",
    choiceB: "this is choice B",
    choiceC: "this is choice C",
    choiceD: "this is choice D",
    correct: "choiceB"
    },

    {
    question: "this is question 3",
    choiceA: "this is choice A",
    choiceB: "this is choice B",
    choiceC: "this is choice C",
    choiceD: "this is choice D",
    correct: "choiceC"
    },
]


//add event listeners for start button and submit button
startButtonEl.addEventListener('click', startGame);
submitButtonEl.addEventListener('click', submitAns);



//functions

//on start button click, hide start button and show quiz container
function startGame() {
    startButtonEl.classList.add('hide');
    quizContainerEl.classList.remove('hide');

}

function submitAns() {
    console.log("submit btn pressed!");
    //gets which button is selected and stores as variable, determines correctness, returns error alert if nothing selected. if incorrect, time deduction from timer. displays next question
}

function displayNextQuestion() {
    //displays next question using var questions to populate ans-btn labels
}


//timer needs a game end function to kick off when timer is === 0) maybe a function endGame hides quizContainer, shows scores and enter name to save name and score to localStorage

//find a programmatic way to show question, answers, determine correct/incorrect, affect timer, and show next question