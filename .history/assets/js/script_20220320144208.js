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
var initialsInputFieldEl =  document.getElementById('initials-input-field')
var answerResponse = document.getElementById('answer-response')
startButton.addEventListener('click', startQuiz)
submitButton.addEventListener('click', submitScore)
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
    timeRemaining = 90
    timer = setInterval(updateRemainingTime, 1000)
}

function updateRemainingTime() {
    timeRemaining--
    timerEl.textContent = timeRemaining
    if (timeRemaining <= 0){
        endQuiz()
    }
    
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question

    question.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')

      if   (answer.correct) {
          button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      button.addEventListener('mouseleave', clearPreviousAnswerResult)
      answerButtonsElement.appendChild(button)   
    })
}

function endQuiz() {
    submitButton.classList.remove('hide')
    questionContainerElement.classList.add('hide')
    endScreen.classList.remove('hide')
    clearInterval(timer)
    var finalScore = document.getElementById('final-score')
    finalScore.textContent = timeRemaining
}

function submitScore() {
    var initials = initialsInputFieldEl.value.trim();
    console.log(initials)
    var newScore = {
        initials: initials,
        score: timeRemaining,
    }

    // get saved scores from local storage, or if not any, set to empty array
    var highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];
    highScores.push(newScore)
    window.localStorage.setItem("highScores", JSON.stringify(highScores));
    
    submitButton.classList.add('hide')

    // redirect to next page
    window.location.href = "score.html";
}

// this function is used to reset each question
function resetState() 
{
    while (answerButtonsElement.firstChild) 
    {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(v) {
    const selectedButton = v.target
    const correct = selectedButton.dataset.correct
    currentQuestionIndex++

    // Provides feed back as to whether previous question was correct
    if (correct) {
        console.log("correct!")
        answerResponse.textContent = "Correct!";
        answerResponse.style.color = "green";
        answerResponse.classList.remove('hide');
    } else {
        answerResponse.textContent = "Wrong!";
        answerResponse.style.color = "red";
        answerResponse.classList.remove('hide');

         //decrease time
        timeRemaining = timeRemaining - 5
        timerEl.textContent = timeRemaining

        // If user has run out of time ends quiz
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

function clearPreviousAnswerResult(){
    answerResponse.textContent = "";
}
  
  
  


