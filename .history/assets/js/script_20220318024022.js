const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')

startButton.addEventListener('click', startQuiz)

function startQuiz() {
console.log('Started')
startButton.classList.add('hide')
questionContainerElement.classList.remove('hide')
setNextQuestion()
}

function setNextQuestion() {

}

function selectAnswer() {

}

const questions = [
    {
        question: 'Which of these is not one of the 3 Initial coding languages',
        answers: [
            { text:'Python', correct: true},
            { text:'HTML', correct: false},
        ]
    }
]