
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput ==='scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('The input should be rock, paper or scissors. Please try again!');
  }
}
// Task: Determine the userInput and validate is with other validate answers


const getComputerChoice = () => {
  const randNum = Math.floor(Math.random()*3);
  switch (randNum) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}
// Get Random number for choosing the computer choice 
function determineWinner(userChoice, computerChoice) {
  if (userChoice === 'bomb') {
    return 'Cheat Activated!, You Won!';
  }
  // Apply cheat code 
  if (userChoice === computerChoice) {
    return ('The game is Tie!');
  }
  // Check if game is tie
  if (userChoice === 'rock'){
    if (computerChoice === 'paper') {
    return 'Sorry computer Won!';
    } else {
      return 'Congradulation, You Won!'
    }
  };

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors'){
      return 'Sorry computer Won!';
    } else {
      return 'Congradulation, You won!';
    }
  };

  if (userChoice === 'scissors') {
    if(computerChoice === 'rock') {
      return 'Soryy, computer Won!'
    } else {
      return 'Congradulationn, You Won!'
    }
  };
  // Assessing the condition of winner and loser
}

const playgame = () => {
  let userChoice = getUserChoice('bomb')
  let computerChoice = getComputerChoice();
  console.log(`User choice: ${userChoice}`);
  console.log(`Computer Choice: ${computerChoice}`);
  console.log((determineWinner(userChoice, computerChoice)));
}


playgame();
