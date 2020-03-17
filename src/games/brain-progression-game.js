import { getRandomNumber } from '../internal-lib.js';
import startGame from '../index.js';

const DIFF = 2;
const END = 10;

const getProgression = () => {
  const iter = (curr, acc, count) => {
    if (count === END) {
      return acc;
    }
    acc.push(curr);
    return iter(curr + DIFF, acc, count + 1);
  };

  return iter(getRandomNumber(), [], 0);
};

const getQuestion = () => {
  const progression = getProgression();
  const randomIndex = getRandomNumber(0, progression.length - 1);
  progression.splice(randomIndex, 1, '..');

  return progression.join(' ');
};

const getRightAnswer = (question) => {
  const progItems = question.split(' ');
  const index = progItems.indexOf('..');

  if (index === progItems.length - 1) {
    return String(Number(progItems[index - 1]) + DIFF);
  }

  return String(Number(progItems[index + 1]) - DIFF);
};

/* ******************************* */
const getGameData = () => {
  const taskText = 'What number is missing in the progression?';
  const question = getQuestion();
  const rightAnswer = getRightAnswer(question);

  return [taskText, question, rightAnswer];
};

const startBrainProgressionGame = () => startGame(getGameData);

export default startBrainProgressionGame;
