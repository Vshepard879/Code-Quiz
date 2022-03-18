const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById( 'question')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})
function startQuiz() {
startButton.classList.add('hide')
 shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0 
questionContainerElement.classList.remove('hide')
setNextQuestion()
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

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}
function selectAnswer(v) {
const selectedButton = v.target
const correct =selectedButton.dataset.correct
setStatusClass(document.body, correct)
Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
})
if (shuffledQuestions.length > currentQuestionIndex +1) {
    nextButton.classList.remove('hide')
} else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
}
nextButton.classList.remove('hide')
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }

    function clearStatusClass(element) {
        element.classList.remove('correct')
        element.classList.remove('wrong')
    }
}

const questions = [
    {
        question: 'Which of these is not one of the 3 Initial coding languages?',
        answers: [
            { text:'Python', correct: true},
            { text:'HTML', correct: false},
            { text:'CSS', correct: false},
            { text:'JavaScript', correct: false},
        ]
    }
]