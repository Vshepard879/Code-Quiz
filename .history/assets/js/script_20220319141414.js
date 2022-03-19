const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById( 'question');
const answerButtonsElement = document.getElementById('answer-buttons');
var timerEl = document.querySelector("#time");
const submitButton = document.getElementById('submit-btn')
let shuffledQuestions, currentQuestionIndex, currentScore



startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

// function that starts the Quiz

function startQuiz() {
    startButton.classList.add("hide")
    // randomizes question order
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    currentScore = 0 
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
    countdown()
}
// Timer Function
// start timer
//timerId = setInterval(clockTick, 1000);

// show starting time
//timerEl.textContent = time;
 

function setNextQuestion() {
    // resetState()
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

    if (correct) {
        currentScore++
        console.log("correct!")
    }

    if (shuffledQuestions.length < currentQuestionIndex +1) { 
        endQuiz();
    }
}

// the arrays of questions and answers
const questions = [
    {
        question: 'Which of these is not one of the 3 Initial coding languages?',
        answers: [
            { text:'Python', correct: true},
            { text:'HTML', correct: false},
            { text:'CSS', correct: false},
            { text:'JavaScript', correct: false},
        ]
    },
    { 
        question: 'What does the C in CSS stand for?',
        answers: [
            { text:'Chocolate', correct: false},
            { text:'Corporate', correct: false},
            { text:'Cascading', correct: true},
            { text:'Computer', correct: false},
        ]
    },
    { 
        question: 'Arrays in Javascript can be used to store?',
        answers: [
            { text:'Numbers and Strings', correct: false},
            { text:'Booleans', correct: false},
            { text:'Other Arrays', correct: false},
            { text:'All of the above', correct: true},
        ]
    },
    { 
        question: 'The condition in an if/else statement are store in?',
        answers: [
            { text:'Parenthesis', correct: true},
            { text:'curly brackets', correct: false},
            { text:'brackets', correct: false},
            { text:'commas', correct: false},
        ]},
        { 
            question: 'A very useful tool during the development and debugging stage used to print to the debugger is?',
            answers: [
                { text:'Array', correct: false},
                { text:'.dataset', correct: false},
                { text:'console.log', correct: true},
                { text:'=>', correct: false},
            ]},
            { 
                question: 'Commonly used data types do not include?',
                answers: [
                    { text:'Booleans', correct: false},
                    { text:'Strings', correct: false},
                    { text:'Numbers', correct: false},
                    { text:'Alerts', correct: true},
                ]},
            ]


            