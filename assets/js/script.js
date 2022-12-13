var startQuizContainer = document.querySelector(".start-quiz");
var quizContainer = document.querySelector(".quiz");
var finishEl = document.querySelector(".finish");
var timerElement = document.querySelector("#timer");
var startQuizButton = document.querySelector(".start-quiz-button");
var sumitbtn = document.querySelector(".submit");
var choices = document.querySelectorAll(".choice");
var viewHighScores = document.querySelector("view-high-scores");
var Student = document.querySelector("#student");
var yourScores = document.querySelector(".yourScores")
var question = document.querySelector(".question");
var choiceBox = document.querySelector(".choice-box");
var previousKey = document.querySelector(".previous-question-key");
var highScorename = document.querySelector(".high-scores-name");
var highScoreList = document.querySelector(".list");


var timerCount=40;
var timereduce=10;
var Scores=100;
var reducescores=25;

var currentQuestion=0;

var noOfCorrect=0;
var noOfIncorrect=0;


/*var selectchoices = document.querySelector (".choice")*/

var questionsArray = [
    {
        question:"adfsfsafsdddd dddddddddddddddddddddddddddd afdsafasfdsaffsd",
        choice:["aaaaaaaaaaaa","bbbbbbbbb","fffffffff","gggggggghh"],
        answer:"bbbbbbbbb",
    },
    {
        question:"dddddddd",
        choice:["eeeeeeee","ffffff","bbbbbbb","ggggggggg"],
        answer:"ffffff",
    },
    {
        question:"dddddddd",
        choice:["fdgsdfg","fffdfsgdgfdfff","bbbsvsfvbbbb","gggggsdfvfdgggg"],
        answer:"fffdfsgdgfdfff",
    },
    {
        question:"dddddddddsssddd",
        choice:["eeeedfeeee","fffdsffff","bbbaasbbbb","gggdfgggggg"],
        answer:"fffdsffff",
    }
]

function startTimer() {
    // Sets timer
    renderQuestion(currentQuestion);
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = "Timer: " + timerCount;

      if (timerCount <= 0) {
        timerElement.textContent = "Timer: " + 0;
        finishEl.setAttribute("style","display:block");
        quizContainer.setAttribute("style","display:none")
        yourScores.textContent = "Your score is: " + Scores;
        clearInterval(timer);
      }
    }, 1000);
  }

function renderQuestion(x,y){

    if(y===0){
        previousKey.textContent = "Wrong";
        Scores=Scores-reducescores;
        timerCount=timerCount-timereduce;
        
    }else if (y===1){
        previousKey.textContent = "Correct";
    }
    
    if (previousKey.textContent==="Correct" || previousKey.textContent==="Wrong")
    {
        previousKey.setAttribute("style","display:block");
    }


    if (x>=questionsArray.length){
        quizContainer.setAttribute("style","display:none");
        finishEl.setAttribute("style","display:block");
        yourScores.textContent = "Your score is: " + Scores;

        return;
    }

    for (var i = 0; i<4; i++){
        question.textContent=questionsArray[x].question;
        choices[i].textContent=questionsArray[x].choice[i];
        choices[i].textContent=questionsArray[x].choice[i];
        choices[i].textContent=questionsArray[x].choice[i];
        choices[i].textContent=questionsArray[x].choice[i];
    }
}


function saveLastScores() {
    var studentScores = {
      student: Student.value.trim(),
      scores: Scores, 
    };
    // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
    localStorage.setItem("studentScores", JSON.stringify(studentScores));
  }



startQuizButton.addEventListener("click", function(event){
    startQuizContainer.setAttribute("style", "display:none");
    quizContainer.setAttribute("style","display:block")
    startTimer();
});


choiceBox.addEventListener("click",function(event){
    var element = event.target;
    var correctOrNot;

    if (element.textContent===questionsArray[currentQuestion].answer){
        noOfCorrect++;
        correctOrNot = 1;
        console.log("correct" + noOfCorrect);
    }else{
        noOfIncorrect++;
        correctOrNot = 0;
        console.log("wrong" + noOfIncorrect);
    }

   currentQuestion++;
   renderQuestion(currentQuestion,correctOrNot);
});



sumitbtn.addEventListener("click", function(event){
    event.preventDefault();
    saveLastScores();

    finishEl.setAttribute("style","display:none");
    previousKey.setAttribute("style","display:none");

    highScorename.setAttribute("style","display:block");
    var lasterStudentScores = JSON.parse(localStorage.getItem("studentScores"));
    
    highScoreList.textContent=lasterStudentScores.student + "-" + lasterStudentScores.scores;

})
    

function saveLastScores() {
    
    var studentScores = {
      student: Student.value.trim(),
      scores: Scores, 
    };
    // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
    localStorage.setItem("studentScores", JSON.stringify(studentScores));
  }


  viewHighScores.addEventListener("click",function(){
    highScorename.setAttribute("style","display:bolck")
  })







  