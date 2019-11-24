import readlineSync from 'readline-sync';

const ERROR = 1;
const SUCCES = 0;
const repeatCount = 3;

const wrongAnswer = (answer, userName, correctAnswer) => {
    console.log(`'${answer}' is wrong asnwer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!\n`);
};

const game = (gameRule, generateGameData) => {
    console.log(`\nWelcome to the Brain Games!\n${gameRule}\n`);
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!\n`);

    for (let i = 0; i < repeatCount; i += 1) {
        const { gameCondition, correctAnswer } = generateGameData();
        console.log(`Question: ${gameCondition}`);
        const userAsnwer = readlineSync.question('Your answer: ');

        if (!(userAsnwer === correctAnswer)) {
            wrongAnswer(userAsnwer, name, correctAnswer);
            return ERROR;
        }
        console.log('Correct!');
    }
    console.log(`Congratulations, ${name}!\n`);

    return SUCCES;
};

export default game;
