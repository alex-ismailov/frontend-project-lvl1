import { getRandomNumber } from '../utils.js';
import startGame from '../index.js';

const PROGRESSION_LENGTH = 10;

const getProgression = (firstElement, difference, length) => {
  const iter = (currentElement, progression, index) => {
    if (index === length) {
      return progression;
    }
    progression.push(currentElement);
    return iter(currentElement + difference, progression, index + 1);
  };

  return iter(firstElement, [], 0);
};

const taskText = 'What number is missing in the progression?';

const getQuestion = (progression, hiddenMemberIndex) => {
  const newArr = [...progression];
  newArr[hiddenMemberIndex] = '..';
  return newArr.join(' ');
};

const getGameData = () => {
  const firstElement = getRandomNumber();
  const difference = getRandomNumber(1, 50);
  const progression = getProgression(firstElement, difference, PROGRESSION_LENGTH);
  const hiddenMemberIndex = getRandomNumber(0, progression.length - 1);

  const question = getQuestion(progression, hiddenMemberIndex);
  const rightAnswer = progression[hiddenMemberIndex];

  return [question, String(rightAnswer)];
};

const startBrainProgressionGame = () => startGame(taskText, getGameData);

export default startBrainProgressionGame;
