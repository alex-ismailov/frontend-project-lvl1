import { getUserAnswer, askUserName, checkUserAnswer } from './internal-lib.js';

// const startGame = (game, amountOfRounds) => {
//   console.log('Welcome to the Brain Games!');
//   const userName = askUserName();

//   if (round) {
    
//   }
//   console.log(game('getTaskText'));

//   let round = 3;
//   while (round !== 0) {
//     const question = game('getQuestion');
//     console.log(question);
    
//     const userAnswer = getUserAnswer();
//     const rightAnswer = game('getRightAnswer', question);

//     if (!isRightAnswer(userAnswer, questAnswer)) {
//       return false;
//     }

//     round -= 1;
//   }

//   console.log(`Congratulations, ${userName}!`);
//   return true;
// };

const startGame = (game) => {
  console.log('Welcome to the Brain Games!');
  const userName = askUserName();


  console.log(game('getTaskText'));

  let round = 3;
  while (round !== 0) {
    const question = game('getQuestion');
    console.log(question);
    
    const userAnswer = getUserAnswer();
    const rightAnswer = game('getRightAnswer', question);

    if (!checkUserAnswer(userName, userAnswer, rightAnswer)) {
      return false;
    }

    round -= 1;
  }

  console.log(`Congratulations, ${userName}!`);
  return true;
};

export default startGame;
