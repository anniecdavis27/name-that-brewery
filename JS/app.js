var gameContentElement = document.getElementById('game-content')
var graphicElement = document.getElementById('beer-graphic')
console.log(graphicElement)
var answerButtons = document.getElementById('answer-box')
var nextButton = document.getElementById('next-btn')

var shuffledQuestions, currentQuestionIndex

function startGame() {
  console.log('started')
  shuffledQuestions = brews.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  setQuestion()
}



function setQuestion() {
  // this function changes the state of the page and calls the next question
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(brew) {
  graphicElement.innerHTML = brew.question
  brew.answers.forEach(answer => {
    let button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('trigger')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtons.appendChild(button)
  })
}

function resetState() {
  // resets state every time a new question is called
  nextButton.classList.add('hide')
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild)
  }
}

function selectAnswer(e) {
  // this function takes the users selected answer, submits it, and determines whether or not the answer is correct or incorrect
  // this function will need to submit choice on click, loop through answers from the objects to see if its correct
  // this function will need to call update score if the the answer chosen is correct (conditional)

  let selectedChoice = e.target
  let isCorrect = selectedChoice.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtons.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
    }
  }

function updateScore() {
  // this function is a conditional that updates the score board if the users choice is correct, called when the answer is selected
  // this function also changes the correct/incorrect note

}


var brews = [
  {
  question: '<img src="images/HeadyTopper.png" width="150">',
  answers: [
    {text: 'The Alchemist', correct: true},
    {text: 'Grimm', correct: false},
    {text: 'Hill Farmstead', correct: false},
    {text: 'Tree House', correct: false},
    ],
  },

  {
  question: '<img src="images/Pliny.png" width="150">',
  answers: [
    {text: 'The Alchemist', correct: false},
    {text: 'Grimm', correct: false},
    {text: 'Russian River Brewing ', correct: true},
    {text: 'Tree House', correct: false},
  ],
  },
]

startGame()
