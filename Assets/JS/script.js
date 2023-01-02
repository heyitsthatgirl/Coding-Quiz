var startButton = document.getElementById("start-button");
var timer = document.getElementById("timer");
timer.textContent = "Seconds Remaining: 120";
var timeRemaining = 120;
var highScores = document.getElementById("highScores");
var quiz = document.getElementById("quiz");
var choice = document.querySelectorAll(".choice");
var question = document.getElementById("question");
var wrongAnswer = document.getElementById("wrong");
var rightAnswer = document.getElementById("right");
var nextQuestion = document.getElementById("next");
nextQuestion.style.display = "none";


var questions = [
    {
        title: "Primitive data types include all except which of the following?",
        choices: ["strings", "functions", "numbers", "boolean values"],
        correctChoice: "functions"
    },
    {
        title: "Which method is used to print messages to the console?",
        choices: ["math.random", "style.display", "element.id", "console.log"],
        correctChoice: "console.log"
    },
    {
        title: "Which of the following is a boolean value?",
        choices: ["false", "3", "positive", "3.14"],
        correctChoice: "false"
    },
    {
        title: "______ are used to store data that can be used in functions.",
        choices: ["declarations", "queries", "variables", "brackets"],
        correctChoice: "variables"
    },
    {
        title: "Which of the following is a comparison operator?",
        choices: ["++", "!!", "&&", "<="],
        correctChoice: "<="
    },
    {
        title: "What does the method .concat do?",
        choices: ["executes a function", "joins two strings together", "changes the boolean value to true", "compares expressions"],
        correctChoice: "joins two strings together"
    }];



var currentQuestion = 0;

var random = Math.floor(Math.random() * questions.length);
var questSelect = questions[random];



startButton.addEventListener("click", startTimer);
function startTimer() {
    startButton.style.display = "none";

    var interval = setInterval(function () {

        timeRemaining--;
        timer.textContent = "Seconds Remaining: " + timeRemaining;

        if (timeRemaining <= 0) {
            clearInterval(interval);
            timer.textContent = "Time's Up!";
            // startButton.style.display = "";
            highScores.style.display = "block";
            quiz.style.display = "none";
        }
    }, 1000);

    timeRemaining = 120;
    displayQuestion();
}

function displayQuestion() {

        quiz.style.display = "block";
        quiz.textContent = questSelect.title;

        choice.forEach(function (element, index) {
            element.textContent = questSelect.choices[index];
            element.style.display = "block";
        });
    

    wrongAnswer.style.display = "none";
    rightAnswer.style.display = "none";
    
}



function choiceHandler(event) {
    var btnEl = event.target;
    if (btnEl.textContent !== questSelect.correctChoice) {
        timeRemaining -= 10;
        timer.textContent = "Seconds Remaining: " + timeRemaining;
        wrongAnswer.style.display = "block";
        nextQuestion.style.display = "block";
        quiz.style.display = "none";
        quiz.textContent = "";
    
        choice.forEach(function (element, index) {
            element.textContent = "";
            element.style.display = "none";
        });
        
    }
    else {
        rightAnswer.style.display = "block";
        nextQuestion.style.display = "block";
        quiz.style.display = "none";
        quiz.textContent = "";
    
        choice.forEach(function (element, index) {
            element.textContent = "";
            element.style.display = "none";
        });
        
    }
    currentQuestion++;   
}

nextQuestion.addEventListener("click", displayNextQuestion);

function displayNextQuestion(){

    quiz.style.display = "block";
    quiz.textContent = questSelect.title;

    choice.forEach(function (element, index) {
        element.textContent = questSelect.choices[index];
        element.style.display = "block";
    });

    wrongAnswer.style.display = "none";
    rightAnswer.style.display = "none";
    nextQuestion.style.display = "none";
}
