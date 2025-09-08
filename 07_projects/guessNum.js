const randomNumber = Math.floor(Math.random()*100)+1;
console.log(randomNumber)

let guesses = document.querySelector(".guesses")
let attemptsRemaining = document.querySelector(".lastResult")
let attemptsDone = 0
const form = document.querySelector("form")

let previousGuess = []
form.addEventListener("submit", (e)=>{
  e.preventDefault();
  const guessedNum = parseInt(document.querySelector("#guessField").value)
  attemptsDone++
  if(randomNumber == guessedNum){
    const result = document.querySelector(".lowOrHi")
    result.appendChild(document.createTextNode("Correct guess"))
  }
  else{
    if(attemptsRemaining.textContent<=0){
      guesses.textContent = ""
      const result = document.querySelector(".lowOrHi")
      result.textContent = "No attempst left 😔"
    }
    else{
      attemptsRemaining.textContent--
      previousGuess.push(guessedNum)
      guesses.textContent = previousGuess
      const result = document.querySelector(".lowOrHi")
      result.textContent = ""
    }
      
  }
})