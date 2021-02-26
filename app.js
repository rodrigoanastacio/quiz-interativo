const form = document.querySelector('.quiz-form')
const finalResult = document.querySelector('.result')

const correctAnswer = ['B', 'A', 'D', 'C']

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

  scrollTo(0, 0)

  finalResult.classList.remove('d-none')

  let counter = 0

  const timer = setInterval(() => {
    if (counter === score) {
      clearInterval(timer)
    }

    finalResult.querySelector('span').textContent = `${counter}%`
    counter++
  }, 10)
})
