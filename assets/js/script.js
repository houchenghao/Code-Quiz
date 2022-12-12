var startQuizContainer = document.querySelector(".start-quiz");
var quizContainer = document.querySelector(".quiz");
var timerElement = document.querySelector("#timer");
var timerCount=100;
var startQuizButton = document.querySelector(".start-quiz-button");

var question = document.querySelector(".question");
var choiceBox = document.querySelector(".choice-box");
var currentQuestion=0;
var choices = document.querySelectorAll(".choice");
var noOfCorrect=0;
var noOfIncorrect=0;
var previousKey= document.querySelector(".previous-question-key");

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
      if (timerCount >= 0) {
        // Tests if win condition is met
        /*if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }*/
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        /*loseGame();*/
      }
    }, 1000);
  }

function renderQuestion(x,y){
    /*console.log(x);
    console.log(questionsArray.length);*/
    console.log("previous answer is: " + y);

    if(y===0){
        previousKey.textContent = "answer was wrong";
        timerCount=timerCount-10;
        
    }else if (y===1){
        previousKey.textContent = "answer was correct";
    }
    


    if (x>=questionsArray.length){
        quizContainer.setAttribute("style","display:none")
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

function starQuiz(){
    startQuizContainer.setAttribute("style", "display:none");
    quizContainer.setAttribute("style","display:block")
    startTimer();
}



startQuizButton.addEventListener("click",starQuiz);


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













  