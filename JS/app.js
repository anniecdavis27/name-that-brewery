// Things that still need to be accomplished
// - get selectAnswer function working properly
// - make correct/incorrect message appear when appropriate
// - get nextQuestion button working
// - add scoreUpdate functionality


var gameContentElement = document.getElementById('game-content')
var graphicElement = document.getElementById('beer-graphic')
// console.log(graphicElement)
var answerButtons = document.getElementById('answer-box')
var nextButton = document.getElementById('next-btn')
var answerChecker = document.getElementById('answer-check')

var shuffledQuestions, currentQuestionIndex

nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setQuestion()
})

function startGame() {
  // console.log('started')
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
    if (answer.isCorrect) {
      button.dataset.isCorrect = answer.isCorrect
    }
    button.addEventListener('click', selectAnswer)
    answerButtons.appendChild(button)
  })
}

function resetState() {
  // resets state every time a new question is called
  // clearStatusClass(document.body)
  nextButton.classList.add('hide')
  answerChecker.innerText = ''
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild)
  }
}

function selectAnswer(e) {
  // this function takes the users selected answer, submits it, and determines whether or not the answer is correct or incorrect
  // this function will need to submit choice on click, loop through answers from the objects to see if its correct
  // this function will need to call update score if the the answer chosen is correct (conditional)

  let selectedChoice = e.target
  let isCorrect = selectedChoice.dataset.isCorrect
  // console.log(isCorrect)
  setStatusClass(document.body, isCorrect)
  Array.from(answerButtons.children).forEach(button => {
    setStatusClass(button, button.dataset.isCorrect)
  })
  nextButton.classList.remove('hide')
}

function setStatusClass(element, isCorrect) {
  clearStatusClass(element)
  console.log(isCorrect)
    if (isCorrect) {
      console.log(isCorrect)
      element.classList.add('correct')
      answerChecker.innerText = 'Correct!'
      answerChecker.style.color = 'green'
    } else {
      element.classList.add('wrong')
      answerChecker.innerText = 'Try Again!'
      answerChecker.style.color = 'red'
    }
  }

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

function updateScore() {
  // this function is a conditional that updates the score board if the users choice is correct, called when the answer is selected
  // this function also changes the correct/incorrect note

}


var brews = [
  {
  question: '<img src="images/HeadyTopper.png">',
  answers: [
    {text: 'The Alchemist', isCorrect: true},
    {text: 'Grimm', isCorrect: false},
    {text: 'Hill Farmstead', isCorrect: false},
    {text: 'Tree House', isCorrect: false},
    ],
  },

  {
  question: '<img src="images/Pliny.png">',
  answers: [
    {text: 'The Alchemist', isCorrect: false},
    {text: 'Grimm', isCorrect: false},
    {text: 'Russian River', isCorrect: true},
    {text: 'Tree House', isCorrect: false},
  ],
  },

  {
  question: '<img src="images/Julius.png">',
  answers: [
    {text: 'The Alchemist', isCorrect: false},
    {text: 'Grimm', isCorrect: false},
    {text: 'Russian River', isCorrect: false},
    {text: 'Tree House', isCorrect: true},
  ],
  },

  {
  question: '<img src="images/Dinner.png">',
  answers: [
    {text: 'The Alchemist', isCorrect: false},
    {text: 'Grimm', isCorrect: false},
    {text: 'Maine Beer Co.', isCorrect: true},
    {text: 'Tree House', isCorrect: false},
  ],
  },

  {
  question: '<img src="images/SipofSunshine.png">',
  answers: [
    {text: 'Lawson\'s', isCorrect: true},
    {text: 'Grimm', isCorrect: false},
    {text: 'Wicked Weed', isCorrect: false},
    {text: 'Tree House', isCorrect: false},
  ],
  },

  {
  question: '<img src="images/SocietyAndSolitude.png">',
  answers: [
    {text: 'The Alchemist', isCorrect: false},
    {text: 'Grimm', isCorrect: false},
    {text: 'Maine Beer Co.', isCorrect: false},
    {text: 'Hill Farmstead', isCorrect: true},
  ],
  },

  {
  question: '<img src="images/ScaledWayUp.png">',
  answers: [
    {text: 'The Alchemist', isCorrect: false},
    {text: 'Trillium', isCorrect: true},
    {text: 'Russian River', isCorrect: false},
    {text: 'Tree House', isCorrect: false},
  ],
  },

  {
  question: '<img src="images/LieutenantDank.png">',
  answers: [
    {text: 'Wicked Weed', isCorrect: true},
    {text: 'Hill Farmstead', isCorrect: false},
    {text: 'Goose Island', isCorrect: false},
    {text: 'Tree House', isCorrect: false},
  ],
  },

  {
  question: '<img src="images/FundamentalForces.png">',
  answers: [
    {text: 'The Alchemist', isCorrect: false},
    {text: 'Grimm', isCorrect: false},
    {text: 'Bottle Logic', isCorrect: true},
    {text: 'Tree House', isCorrect: false},
  ],
  },

  {
  question: '<img src="images/BourbonCounty.png">',
  answers: [
    {text: 'Goose Island', isCorrect: true},
    {text: 'Grimm', isCorrect: false},
    {text: 'Russian River', isCorrect: false},
    {text: 'Tree House', isCorrect: false},
  ],
  },

  {
  question: '<img src="images/PearlyWit.png">',
  answers: [
    {text: 'The Alchemist', isCorrect: false},
    {text: 'Grimm', isCorrect: false},
    {text: 'Springdale Beer', isCorrect: true},
    {text: 'Tree House', isCorrect: false},
  ],
  },

  {
  question: '<img src="images/wavelength.png">',
  answers: [
    {text: 'The Alchemist', isCorrect: false},
    {text: 'Equilibrium', isCorrect: true},
    {text: 'Russian River', isCorrect: false},
    {text: 'Tree House', isCorrect: false},
  ],
  },

  {
  question: '<img src="images/MajorTom.png">',
  answers: [
    {text: 'The Alchemist', isCorrect: false},
    {text: 'Grimm', isCorrect: false},
    {text: 'Russian River', isCorrect: false},
    {text: 'Lamplighter', isCorrect: true},
  ],
  },

  {
  question: '<img src="images/SetWest.png">',
  answers: [
    {text: 'The Alchemist', isCorrect: false},
    {text: 'Coronado Brewing', isCorrect: true},
    {text: 'Russian River', isCorrect: false},
    {text: 'Tree House', isCorrect: false},
  ],
  },

  {
  question: '<img src="images/RollingInClouds.png">',
  answers: [
    {text: 'Finback', isCorrect: true},
    {text: 'Grimm', isCorrect: false},
    {text: 'Russian River', isCorrect: false},
    {text: 'Tree House', isCorrect: false},
  ],
  },
]

startGame()
