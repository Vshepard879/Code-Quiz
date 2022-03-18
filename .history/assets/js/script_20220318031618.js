const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById( 'question')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestion, currentQuestionIndex

startButton.addEventListener('click', startQuiz)

function startQuiz() {
console.log('Started')
startButton.classList.add('hide')
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0 
questionContainerElement.classList.remove('hide')
setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestion[currentQuestionIndex])
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
    nextButton.classList.add(hide)
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}
function selectAnswer() {

}


const questions = [
    {
        question: 'Which of these is not one of the 3 Initial coding languages?',
        answers: [
            { text:'Python', correct: true},
            { text:'HTML', correct: false},
        ]
    }
]