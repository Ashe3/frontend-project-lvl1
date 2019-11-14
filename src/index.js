import readlineSync from 'readline-sync';

const ERROR = 1;
const SUCCES = 0;
const repeatCount = 3;
const { random, round } = Math;

const wrongAnswer = (answer, userName, correctAnswer) => {
    console.log(`'${answer}' is wrong asnwer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!\n`);

    return ERROR;
};

export const generateRandNumber = (maxVal, minVal) => round(random() * (maxVal - minVal) + minVal);

const checkValue = (userAnswer, correctAnswer) => userAnswer === correctAnswer;

export const game = (gamerule, generateGameData) => {
    console.log(`\nWelcome to the Brain Games!\n${gamerule}\n`);
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!\n`);

    for (let i = 0; i < repeatCount; i += 1) {
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
