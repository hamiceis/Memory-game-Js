const emojis = [
  "🌞",
  "🌞",
  "🔥",
  "🔥",
  "💧",
  "💧",
  "⚡",
  "⚡",
  "🌀",
  "🌀",
  "🚩",
  "🚩",
  "🌍",
  "🌍",
  "🌜",
  "🌜"
]
let openCards = []

let shuffleEmojis = emojis.sort(() => {
  return (Math.random() > 0.5 ? 2 : -1)
})

for(let i = 0; i < emojis.length; i++) {
  let box = document.createElement("div")
  box.className = "item"
  box.innerHTML = shuffleEmojis[i]
  box.onclick = handleClick
  document.querySelector(".game").appendChild(box)
}

function handleClick() {
  if(openCards.length < 2) {
    this.classList.add("boxOpen")
    openCards.push(this)
  }

  if(openCards.length === 2) {
    setTimeout(checkMatch, 500)

  }
}

function resetGame() {
  document.querySelectorAll(".item")
  .forEach(item => item.className = "item")
}

function checkMatch() {
  const [ card1, card2 ] = openCards
  if(card1.innerHTML === card2.innerHTML){
    card1.classList.add("boxMatch")
    card2.classList.add("boxMatch")
  } else {
    card1.classList.remove("boxOpen")
    card2.classList.remove("boxOpen")
  }

  openCards = []

  if(document.querySelectorAll(".boxMatch").length === emojis.length){
    alert("You win")
    resetGame()
  }
}