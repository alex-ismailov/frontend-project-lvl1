import { getRandomNumber } from '../utils.js';
import startGame from '../index.js';

const getProgression = (diff, length) => {
  const iter = (curr, acc, count) => {
    if (count === length) {
      return acc;
    }
    acc.push(curr);
    return iter(curr + diff, acc, count + 1);
  };

  return iter(getRandomNumber(), [], 0);
};

const taskText = 'What number is missing in the progression?';

const getQuestion = (progression, hiddenMemberIndex) => {
  const newArr = [...progression];
  newArr[hiddenMemberIndex] = '..';
  return newArr.join(' ');
};

const getGameData = () => {
  const diff = getRandomNumber(1, 50);
  const progLength = 10;
  const progression = getProgression(diff, progLength);
  const hiddenMemberIndex = getRandomNumber(0, progression.length - 1);

  const question = getQuestion(progression, hiddenMemberIndex);
  const rightAnswer = progression[hiddenMemberIndex];

  return [String(question), String(rightAnswer)];
};

const startBrainProgressionGame = () => startGame(taskText, getGameData);

export default startBrainProgressionGame;
