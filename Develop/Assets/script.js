//select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

//create questions
let questions = [
    {
        question : "What does HTML stand for?",
        choiceA : "Correct",
        choiceB : "Wrong",
        choiceC : "Wrong",
        correct : "A"
    },
    {
        question : "What does CSS stand for?",
        choiceA : "Wrong",
        choiceB : "Correct",
        choiceC : "Wrong",
        correct : "B"
    },
    {
        question : "What does JS stand for?",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
        correct : "C"
    }
];

//create variables
const lastQuestion = questions.length - 1;
let runningQuestion = 0;

//render questions
function renderQuestion(){
    let q = questions[runningQuestion];
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.style.display ="none";
renderQuestion();
quiz.style.display ="block";

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

function answerISCorrect(){
    document.getElementById(runningQuestionIndex).style.backgroundColor = "green"
}

function answerISWrong(){
    document.getElementById(runningQuestionIndex).style.backgroundColor ="red"
}

//counter render
const questionTime = 10; // 10 sec
const gaugeWidth = 150;
let count = 0;
const gaugeProgressUnit =gaugeWidth/questionTime;

function counterRender() {
    if(count <= questionTime){
        counter.innerHTML = count:
        timeGauge.style.width = count * gaugeProgressUnit;
        count++;
    } else{
        count =0;
        answerISWrong();
        if (runingQuestionIndex <lastQuestionIndex){
            runingQuestionIndex++;
            questionRender();
        }else{
            clearInterval(Timer);
            scoreRender();
        }
    }
}

function checkAnswer(answer){
    if(question[runningQuestionIndex].correct == answer){
      score++;
      answerISCorrect();  
    }else{
        answerISWrong();
    }
    if(runningQuestionIndex < lastQuestionIndex){
        count =0;
        runningQuestionIndex++;
        questionRender();
    }else{
        clearInterval(Timer);
        scorerender();
    }
}

start.addEventListener("click",startQuiz);

Let TIMER;

function startQuiz(){
    start.style.display ="none";
    counterRender();
    TIMER = setInterval(counterRender,1000);
    progressRender();
    questionRender();
    quiz.style.display ="block";
}

fucntion scoreRender(){
    ServiceWorkerContainer.style.display ="block";
    let scorePerCent =Math.round(100 * score/qesutions.length);
}