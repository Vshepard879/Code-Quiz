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