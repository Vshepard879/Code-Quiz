const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById( 'question');
const answerButtonsElement = document.getElementById('answer-buttons');
var timerEl = document.querySelector("#time");
const submitButton = document.getElementById('submit-btn')
const endScreen = document.getElementById('end-screen')
let shuffledQuestions, currentQuestionIndex, currentScore

startButton.addEventListener('click', startQuiz)
// nextButton.addEventListener('click', () => {
    //currentQuestionIndex++
    //setNextQuestion()
//})

// function that starts the Quiz

function startQuiz() {
    startButton.classList.add("hide")
    // randomizes question order
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    currentScore = 0 
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
    //countdown()
}
// Timer Function
// start timer
//timerId = setInterval(clockTick, 1000);

// show starting time
//timerEl.textContent = time;
 

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
    finalScore = currentScore
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
        currentScore++
        console.log("correct!")
    } else {
        // decrease time

    }

    if (shuffledQuestions.length - 1 < currentQuestionIndex ) { 
        endQuiz();
    } else {
         
        setNextQuestion()
    }
}


            