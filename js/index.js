let firstRandomNum = Math.floor(Math.random() * 6 + 1);
let secondRandomNum = Math.floor(Math.random() * 6 + 1);
let dices = document.querySelectorAll("img");
let dice1 = dices[0];
let dice2 = dices[1];

// Make sure the DOM is Loaded first
document.addEventListener("DOMContentLoaded", () => {
  // Fetch a random dice image for the first player
  dice1.setAttribute("src", `images/dice${firstRandomNum}.png`);

  // Fetch a random dice image for the second player
  dice2.setAttribute("src", `images/dice${secondRandomNum}.png`);

  // Change header if player 1's generated number is higher so he wins
  if (firstRandomNum > secondRandomNum) {
    document.querySelector("h1").innerHTML = 'Player 1 Wins! <i class="fas fa-flag"></i>';

    // Change header if player 2's generated number is higher so he wins
  } else if (secondRandomNum > firstRandomNum) {
    document.querySelector("h1").innerHTML = 'Player 2 Wins! <i class="fas fa-flag"></i>';

    // Change header to DRAW if both generated numbers are the same
  } else {
    document.querySelector("h1").innerHTML = 'Draw! <i class="fas fa-grin-beam-sweat"></i>';
  }
});
