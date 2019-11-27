import game from '../index';
import generateRandNumber from '../utils';

const maxGenValue = 250;
const minGenValue = 2;
const gameRule = 'Find the greatest common divisor of given numbers.';

const calcGCD = (arg1, arg2) => {
    if (arg2 === 0) {
        return arg1;
    }
    return calcGCD(arg2, arg1 % arg2);
};

const generateGameData = () => {
    const random1 = generateRandNumber(minGenValue, maxGenValue);
    const random2 = generateRandNumber(minGenValue, maxGenValue);
    const gameCondition = `${random1} ${random2}`;
    const correctAnswer = String(calcGCD(random1, random2));

    return {
        gameCondition,
        correctAnswer,
    };
};

export default () => game(gameRule, generateGameData);
