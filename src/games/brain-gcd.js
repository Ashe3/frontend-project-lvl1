import { generateRandNumber, game } from '../index';

const maxGenValue = 250;
const minGenValue = 2;
const gameRule = 'Find the greatest common divisor of given numbers.';

const calcGCD = (arg1, arg2) => {
    if (arg2 === 0) {
        return String(arg1);
    }

    return calcGCD(arg2, arg1 % arg2);
};

const calculateAnswer = (expression) => {
    const values = expression.split(' ').map((x) => Number(x));

    return calcGCD(values[0], values[1]);
};

const generateGameData = () => {
    const firstRandNumber = generateRandNumber(maxGenValue, minGenValue);
    const secondRandNumber = generateRandNumber(maxGenValue, minGenValue);
    const gameCondition = `${firstRandNumber} ${secondRandNumber}`;
    const correctAnswer = calculateAnswer(gameCondition);

    return {
        gameCondition,
        correctAnswer,
    };
};

export default () => game(gameRule, generateGameData);
