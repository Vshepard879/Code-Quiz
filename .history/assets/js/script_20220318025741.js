const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById( 'question')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestion = undefined, currentQuestionIndex = undefined

startButton.addEventListener('click', startQuiz)

function startQuiz() {
console.log('Started')
startButton.classList.add('hide')
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0 
questionContainerElement.classList.remove('hide')
setNextQuestion()
}

function showQuestion(question) {
    questionElement.innerText =question.question
}
function setNextQuestion() {
showQuestion(shuffledQuestions[currentQuestionIndex])
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