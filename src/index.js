import readlineSync from 'readline-sync';

const ERROR = 1;
const SUCCES = 0;
const { random, round } = Math;

export const greeting = () => {
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!\n`);
    return name;
};

const wrongAnswer = (answer, userName, correctAnswer) => {
    console.log(`'${answer}' is wrong asnwer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!\n`);
    return ERROR;
};

export const isEven = (number) => number % 2 === 0;

export const generateRandNumber = (maxVal, minVal) => round(random() * (maxVal - minVal) + minVal);

const checkValue = (userAnswer, correctAnswer) => userAnswer === correctAnswer;

export const game = (gamerule, generateGameData) => {
    console.log(`\nWelcome to the Brain Games!\n${gamerule}`);
    const name = greeting();

    for (let i = 0; i < 3; i += 1) {
        const { gameCondition, correctAnswer } = generateGameData();
        console.log(`Question: ${gameCondition}`);
        const userAsnwer = readlineSync.question('Your answer: ');

        if (!checkValue(userAsnwer, correctAnswer)) {
            return wrongAnswer(userAsnwer, name, correctAnswer);
        }

        console.log('Correct!');
    }
    console.log(`Congratulations, ${name}!\n`);
    return SUCCES;
};
