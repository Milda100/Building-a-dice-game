const listOfAllDice = document.querySelectorAll(".die");
const scoreInputs = document.querySelectorAll("#score-options input");
const scoreSpans = document.querySelectorAll("#score-options span");
const roundElement = document.getElementById("current-round");
const rollsElement = document.getElementById("current-round-rolls");
const totalScoreElement = document.getElementById("total-score");
const scoreHistory = document.getElementById("score-history");
const rollDiceBtn = document.getElementById("roll-dice-btn");
const keepScoreBtn = document.getElementById("keep-score-btn");
const rulesContainer = document.querySelector(".rules-container");
const rulesBtn = document.getElementById("rules-btn");

let diceValuesArr = [];
let isModalShowing = false;
let score = 0;
let round = 1; 
let rolls = 0; 

const rollDice = () => {
    diceValuesArr = [];
      
    for (let i = 0; i < 5; i++) { 
      const randomDie = Math.floor(Math.random() * 6) +1; 
      diceValuesArr.push(randomDie); 
      }

    for (let i = 0; i < diceValuesArr.length; i++) { 
      listOfAllDice[i].textContent = diceValuesArr[i]; 
      }
}

const updateStats = () => {
    rollsElement.textContent = rolls;
    roundElement.textContent = round;
}

const updateRadioOption = (index, score) => {
  scoreInputs[index].disabled = false;  //input field becomes enabled and interactive
  scoreInputs[index].value = score;
  scoreSpans[index].textContent = `, score = ${score}`;
};

const getHighestDuplicates = (diceValuesArr) => {
  const counts = {};

  diceValuesArr.forEach(element => {
    counts[element] = (counts[element] || 0) + 1;
  });

  const sumOfDice = diceValuesArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  if (Object.values(counts).some(count => count >= 4)) {
    updateRadioOption(1, sumOfDice);
  }
  
  if (Object.values(counts).some(count => count >= 3)) {
    updateRadioOption(0, sumOfDice);
  }

  updateRadioOption(5, 0);
}


rollDiceBtn.addEventListener("click", () => {
    if (rolls === 3) {                          //rollDiceBtn pressed 3 times
        alert("You must select a score.");
      } else {
        rolls++;
        rollDice();
        updateStats();
        getHighestDuplicates(diceValuesArr);
      }
});

rulesBtn.addEventListener("click", () => {
  isModalShowing = !isModalShowing;
  rulesBtn.textContent = isModalShowing ? "Hide rules" : "Show rules";
  rulesContainer.style.display = isModalShowing ? "block" : "none";
  
} );
