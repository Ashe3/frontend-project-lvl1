import readlineSync from 'readline-sync';

const ERROR = 1;
const SUCCES = 0;
const { random, round } = Math;

export const greeting = () => {
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!\n`);
    return name;
};

export const rules = {
    even: 'Answer "yes" if the number is even, otherwise asnwer "no".\n',
    calc: 'What is the result of the expression?\n',
    gcd: 'Find the greatest common divisor of given numbers.\n',
    progression: 'What number is missing in the progression?\n',
    prime: 'Answer "yes" if given number is prime. Otherwise answer "no".\n',
};

const wrongAnswer = (answer, userName, correctAnswer) => {
    console.log(`'${answer}' is wrong asnwer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!\n`);
    return ERROR;
};

export const generateRandNumber = (maxVal, minVal) => round(random() * (maxVal - minVal) + minVal);

const checkValue = (userAnswer, correctAnswer) => {
    if (userAnswer === correctAnswer) {
        return true;
    }
    return false;
};

export const game = (gamerule, generateCondition, calculateAnswer) => {
    console.log(`\nWelcome to the Brain Games!\n${gamerule}`);
    const name = greeting();

    for (let i = 0; i < 3; i += 1) {
        const question = generateCondition();
        const correctAnswer = calculateAnswer(question);
        console.log(`Question: ${question}`);
        const userAsnwer = readlineSync.question('Your answer: ');

        if (!checkValue(userAsnwer, correctAnswer)) {
            return wrongAnswer(userAsnwer, name, correctAnswer);
        }

        console.log('Correct!');
    }
    console.log(`Congratulations, ${name}!\n`);
    return SUCCES;
};
