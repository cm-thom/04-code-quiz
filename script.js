//grab html ids to make targetable variables in js
var startButtonEl = document.getElementById("start-btn");
var quizContainerEl = document.getElementById("quizContainer");

var questions = [
    {
    question: "this is question 1",
    choiceA: "this is choice A",
    choiceB: "this is choice B",
    choiceC: "this is choice C",
    choiceD: "this is choice D",
    correct: "A"
    },

    {
    question: "this is question 2",
    choiceA: "this is choice A",
    choiceB: "this is choice B",
    choiceC: "this is choice C",
    choiceD: "this is choice D",
    correct: "B"
    },

    {
    question: "this is question 3",
    choiceA: "this is choice A",
    choiceB: "this is choice B",
    choiceC: "this is choice C",
    choiceD: "this is choice D",
    correct: "C"
    },
]


//add event listener for start button
startButtonEl.addEventListener('click', startGame);



//functions

//on start button click, hide start button and show quiz container
function startGame() {
    console.log('start button clicked');
    startButtonEl.classList.add('hide');
    quizContainerEl.classList.remove('hide');

}

function submitAns() {
    //gets which button is selected and stores as variable, determines correctness, returns error alert if nothing selected. if incorrect, time deduction from timer. displays next question
}



//timer needs a game end function to kick off when timer is === 0) maybe a function endGame hides quizContainer, shows scores and enter name to save name and score to localStorage

//need to find a programmatic way to show question, answers, determine correct/incorrect, affect timer, and show next question

//start-btn clicked
//timer starts
//quizcontainer is shown, contains question 1, options, submit-btn