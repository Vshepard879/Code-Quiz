const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById( 'question');
const answerButtonsElement = document.getElementById('answer-buttons');
var timerEl = document.getElementById('time');
const submitButton = document.getElementById('submit-btn')
const endScreen = document.getElementById('end-screen')
var shuffledQuestions, currentQuestionIndex, currentScore
var timer
var timeRemaining = 90


startButton.addEventListener('click', startQuiz)
// function that starts the Quiz

function startQuiz() {
    if (!endScreen.classList.contains('hide')) {
        endScreen.classList.add('hide')
    }

    
    startButton.classList.add("hide")
    // randomizes question order
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    currentScore = 0 
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
    startTimer()
}

function startTimer() {
    timer = setInterval(updateRemainingTime, 1000)
}

function updateRemainingTime() {
    timeRemaining--
    
    if (timeRemaining <= 0){
        endQuiz()
    }
    
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
    }
function showQuestion(question) {
    questionElement.innerText =question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
      if   (answer.correct) {
          button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)   
    })
}

function endQuiz() {
    submitButton.classList.remove('hide')
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
    questionContainerElement.classList.add('hide')
    endScreen.classList.remove('hide')

    var finalScore = document.getElementById('final-score')
    finalScore.textContent = currentScore
}

// this function is used to reset each question
function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(v) {
    const selectedButton = v.target
    const correct = selectedButton.dataset.correct
    currentQuestionIndex++

    if (correct) {
        console.log("correct!")
    } else {
        // decrease time
        timeRemaining - 5
        if(timeRemaining <= 0){
            endQuiz();
        }
    }

    if (shuffledQuestions.length - 1 < currentQuestionIndex ) { 
        endQuiz();
    } else {
         
        setNextQuestion()
    }
}


            