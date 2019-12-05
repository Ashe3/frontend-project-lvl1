import readlineSync from 'readline-sync';

const repeatsCount = 3;

const getGame = (gameRule, generateGameData) => {
  console.log(`\nWelcome to the Brain Games!\n${gameRule}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  for (let i = 0; i < repeatsCount; i += 1) {
    const { gameCondition, correctAnswer } = generateGameData();
    console.log(`Question: ${gameCondition}`);
    const userAsnwer = readlineSync.question('Your answer: ');

    if (!(userAsnwer === correctAnswer)) {
      console.log(`'${userAsnwer}' is wrong asnwer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!\n`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!\n`);
};

export default getGame;
