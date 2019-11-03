import * as games from '../index';

const MAX_VAL = 250;
const MIN_VAL = 2;

const generateCondition = () => {
    const firstRandNumber = games.generateRandNumber(MAX_VAL, MIN_VAL);
    const secondRandNumber = games.generateRandNumber(MAX_VAL, MIN_VAL);
    return `${firstRandNumber} ${secondRandNumber}`;
};

const calculateAnswer = (expression) => {
    const calcGCD = (arg1, arg2) => {
        if (arg2 === 0) {
            return String(arg1);
        }
        return calcGCD(arg2, arg1 % arg2);
    };

    const values = expression.split(' ').map((x) => Number(x));
    return calcGCD(values[0], values[1]);
};

games.game(games.rules.gcd, generateCondition, calculateAnswer);
