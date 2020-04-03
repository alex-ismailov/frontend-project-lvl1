import readlineSync from 'readline-sync';

const NUM_OF_ROUNDS = 3;

const startGame = (taskText, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(taskText);

  for (let i = NUM_OF_ROUNDS; i > 0; i -= 1) {
    const [question, rightAnswer] = getGameData();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Answer: ');

    if (userAnswer !== rightAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
