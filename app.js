const form = document.querySelector('.quiz-form')
const scoreEl = document.querySelector('.score')

const correctAnswer = ['B', 'A', 'A', 'A']

form.addEventListener('submit', event => {
  event.preventDefault()

  let score = 0

  const userAnswers = [
    form.inputQuestion1,
    form.inputQuestion2,
    form.inputQuestion3,
    form.inputQuestion4
  ]

  userAnswers.forEach((userAnswer, index) => {
    if (userAnswer.value === correctAnswer[index]) {
      score += 25
    }
  })
  console.log(score)

  scoreEl.textContent = `Pontuação: ${score}`
  // totalScore = score.textContent = score
})
