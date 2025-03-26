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
    diceValuesArr = []; //everytime clears array when the btn is pressed, making sure its empty before submiting new results.
      for (let i = 0; i < 5; i++) { //loops 5 times trought the function
      const randomDie = Math.floor(Math.random() * 6) +1; //the function
      diceValuesArr.push(randomDie);    // Add each roll to the array
      }
      for (let i = 0; i < diceValuesArr.length; i++) {  //loops again through all results
      listOfAllDice[i].textContent = diceValuesArr[i]; //placing results in matching containers
      }
      //or
      //listOfAllDice.forEach((dice, index) => {
    //dice.textContent = diceValuesArr[index];
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

const getHighestDuplicates = () => {
  const counts = {};
  diceValuesArr.forEach(element => {
    counts[element] = (counts[element] || 0) + 1;
  });
  console.log("Counts:", counts);

  if (counts[n] >= 4) {
    score = diceValuesArr.forEach(() => {
    sum += n;
  });
    updateRadioOption(1, score);

  } 

  if (countedTimes >= 3) {
    score = diceValuesArr.forEach((num) => {
    sum += num;
  });
    updateRadioOption(0, score);
  }

  if (countedTimes < 3) {
    updateRadioOption(5, 0);
  }
}

rollDiceBtn.addEventListener("click", () => {
    if (rolls === 3) {                          //rollDiceBtn pressed 3 times
        alert("You must select a score!");
      } else {
        rollDice();
        rolls++;
      }
});

rulesBtn.addEventListener("click", () => {
  isModalShowing = !isModalShowing;
  rulesBtn.textContent = isModalShowing ? "Hide rules" : "Show rules";
  rulesContainer.style.display = isModalShowing ? "block" : "none";
  
} );
