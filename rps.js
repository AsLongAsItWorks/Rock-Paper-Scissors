const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput !== 'rock' && userInput !== 'paper' && userInput !== 'scissors' && userInput !== 'bomb'){
    console.log("Error");
  }
  return userInput;
}

const getComputerChoice = () => {
  randNum = Math.floor(Math.random() *3);
  switch(randNum){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}

function determineWinner (getUserChoice, computerChoice) {
  if(getUserChoice === computerChoice){
    return "It's a tie!";
  }

  if(getUserChoice === 'rock'){
    if(computerChoice === 'paper'){
      return "Computer wins";
    }
    return "User wins";
  }

  if(getUserChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return "Computer wins";
    }
    return "User wins";
  }

  if(getUserChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return "Computer wins";
    }
    return "User wins";
  }

  if(getUserChoice === 'bomb'){
    return 'User has used bomb! They win.';
  }
}

function playGame(){
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();

  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
}

playGame();