var startQuizForewordEl = document.querySelector(".start-quiz-foreword");
var startQuizButtonEl = document.querySelector(".start-quiz-button");
var quizEL = document.querySelector(".quiz");

var choiceBox = document.querySelector(".choice-box");

var finishEl = document.querySelector(".finish");
var timerElement = document.querySelector("#timer");

var sumitbtn = document.querySelector(".submit");
var choices = document.querySelectorAll(".choice");
var viewHighScores = document.querySelector(".view-high-scores");
var Student = document.querySelector("#student");
var yourScores = document.querySelector(".yourScores")
var question = document.querySelector(".question");
var choiceBox = document.querySelector(".choice-box");
var previousKey = document.querySelector(".previous-question-key");
var highScorename = document.querySelector(".high-scores-name");
var highScoreList = document.querySelector(".list");

var goBackbtnEl= document.querySelector(".go-back");
var clearBtnEl = document.querySelector(".clear");


var timerCount=100;
var timereduce=10;
var Scores=0;
var currentQuestion=0;
/* create indicator for different page to track the GOBACK button 
"startPage","inQuiz","Finishpage", --0 1 2*/
var page = 0;
var increseScores=25;
/* create indicator for different page to track the GOBACK button 
"startPage","inQuiz","Finishpage", --0 1 2*/
var questionsArray = [
    {
        question:"Commonely used data types do not includes",
        choice:["1. strings","2. numbers","3. strings","4. alters"],
        answer:"4. alters",
    },
    {
        question:"Arrays in JavaScript can be used to stroe",
        choice:["1. numbers and string","2. other arrays","3. booleans","4. All of the above"],
        answer:"4. All of the above",
    },
    {
        question:"A very usefull tool used during development and debugging for printing content to the debugger is:",
        choice:["1. JavaScript","2. terminal/bash","3. for loop","4. console.log"],
        answer:"4. console.log",
    },
    {
        question:"The condition in an if / else statement is enclosed with _____.",
        choice:["1. quotes","2. curly brackets","3. parenthesis","4. square brackets"],
        answer:"2. curly brackets",
    }
];

function init (){
    timerCount=100;
    Scores=0;
    currentQuestion=0;
    page = 0;
}

function startTimer() {
    // Sets timer
    renderQuestion(currentQuestion);

    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = "Timer: " + timerCount;

      if (timerCount <= 0) {
        timerElement.textContent = "Timer: " + 0;
        finishEl.setAttribute("style","display:block");
        quizEL.setAttribute("style","display:none")
        yourScores.textContent = "Your score is: " + Scores;
        clearInterval(timer);
        page=2;
      }
    }, 1000);
  }

function renderQuestion(x,y){
    if(y===0){
        previousKey.textContent = "Wrong";
        timerCount=timerCount-timereduce;
    }else if (y===1){
        previousKey.textContent = "Correct";
        Scores=Scores+increseScores;
    }
    
    if (previousKey.textContent==="Correct" || previousKey.textContent==="Wrong")
    {
        previousKey.setAttribute("style","display:block");
        correctOrwrongShown=1;
    }

    if (x>=questionsArray.length){
        quizEL.setAttribute("style","display:none");
        finishEl.setAttribute("style","display:block");
        highScorename.setAttribute("style","display:none");

        yourScores.textContent = "Your score is: " + Scores;
        timerCount=0;
        page=2;
        return;
    }

    for (var i = 0; i<questionsArray[x].choice.length; i++){        
        question.textContent=questionsArray[x].question;
        choiceBox.children[i].textContent=questionsArray[x].choice[i];
    }
}

function saveLastScores() {
    var studentScores = {
      student: Student.value.trim(),
      scores: Scores, 
    };
    localStorage.setItem("studentScores", JSON.stringify(studentScores));
}

startQuizButtonEl.addEventListener("click", function(event){
    init();
    startQuizForewordEl.setAttribute("style", "display:none");
    quizEL.setAttribute("style","display:block")
    startTimer();
    page=1;
});

choiceBox.addEventListener("click",function(event){
    var element = event.target;
    var correctOrNot;

    if (element.textContent===questionsArray[currentQuestion].answer){
        correctOrNot = 1; /* if is correct the function return 1*/
    }else{
        correctOrNot = 0; /**if is woring the function reture 0/ */
    }

   currentQuestion++;
   
   renderQuestion(currentQuestion,correctOrNot);
});

sumitbtn.addEventListener("click", function(event){
    event.preventDefault();
    saveLastScores();

    Student.value=""

    finishEl.setAttribute("style","display:none");
    previousKey.setAttribute("style","display:none");
    highScorename.setAttribute("style","display:block");

    var lasteStudentScores = JSON.parse(localStorage.getItem("studentScores"));
    highScoreList.textContent=lasteStudentScores.student + " - " + lasteStudentScores.scores;
});

viewHighScores.addEventListener("click",function(event){
    event.preventDefault();
    
    var lasteStudentScores = JSON.parse(localStorage.getItem("studentScores"));
    highScoreList.textContent=lasteStudentScores.student + "-" + lasteStudentScores.scores;

    if(page===0){
        startQuizForewordEl.setAttribute("style","display:none");
        highScorename.setAttribute("style","display:block");
    }
});


goBackbtnEl.addEventListener("click",function(){
    startQuizForewordEl.setAttribute("style","display:flex");
    highScorename.setAttribute("style","display:none");
    page=0;
})

clearBtnEl.addEventListener("click",function(){
    var studentScores = {
        student: "",
        scores: "", 
    };

    localStorage.setItem("studentScores", JSON.stringify(studentScores));
    highScoreList.textContent="";
})







  