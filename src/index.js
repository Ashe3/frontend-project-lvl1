import readlineSync from 'readline-sync';

const ERROR = 1;
const SUCCES = 0;
const MAX_VAL = 250;
const MIN_VAL = 1;

export const headline = () => {
    console.log('\nWelcome to the Brain Games!');
};

export const greeting = () => {
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!\n`);
    return name;
};

export const rules = {
    even: 'Answer "yes" if the number is even, otherwise asnwer "no".\n',
};

export const wrongAnswer = (answer, userName, correctAnswer) => {
    console.log(`'${answer}' is wrong asnwer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!\n`);
    return ERROR;
};

export const generateRandNumber = () => Math.round(Math.random() * (MAX_VAL * MIN_VAL) + MIN_VAL);

export const game = (userName, generateCondition, calculateAnswer, checkValue) => {
    for (let i = 0; i < 3; i += 1) {
        const question = generateCondition();
        const correctAnswer = calculateAnswer(question);
        console.log(`Question: ${question}`);
        const userAsnwer = readlineSync.question('Your answer: ');

        if (!checkValue(userAsnwer, correctAnswer)) {
            return wrongAnswer(userAsnwer, userName, correctAnswer);
        }

        console.log('Correct!');
    }
    console.log(`Congratulations, ${userName}!\n`);
    return SUCCES;
};
