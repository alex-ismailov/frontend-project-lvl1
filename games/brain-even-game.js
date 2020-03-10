import {
  isEven, getUserAnswer, getRandomNumber, isRightAnswer, checkUserAnswer
} from '../src/num-lib.js';

const getRightAnswer = (questNumber) => (
  isEven(questNumber)
    ? 'yes'
    : 'no'
);

/* ************************************** */
const brainEvenGame = (userName, amountOfRounds) => {
  let round = amountOfRounds;
  console.log('Answer \'yes\' if the number is even, otherwise answer \'no\'');
 
  while (round !== 0) {
    const currQuestNumber = getRandomNumber(1);
    const rightAnswer = getRightAnswer(currQuestNumber);

    console.log(`Question: ${currQuestNumber}`);
    const answer = getUserAnswer();
    
    if (checkUserAnswer(userName, answer, rightAnswer)) {
      round -= 1;
    } else {
      return false;
    }
  }

  console.log(`Congratulations, ${userName}!`);
  return true;
};

export default brainEvenGame;
