import * as games from '../index';

const maxGenValue = 250;
const minGenValue = 2;

const generateCondition = () => {
    const firstRandNumber = games.generateRandNumber(maxGenValue, minGenValue);
    const secondRandNumber = games.generateRandNumber(maxGenValue, minGenValue);
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

const runGame = games.game(games.rules.gcd, generateCondition, calculateAnswer);

export default runGame;
