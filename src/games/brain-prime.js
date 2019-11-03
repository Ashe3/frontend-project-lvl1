import * as games from '../index';

const MAX_VAL = 250;
const MIN_VAL = 1;

const generateCondition = () => games.generateRandNumber(MAX_VAL, MIN_VAL);

const iter = (value, number, divider) => {
    const half = value / 2;
    if (number > half && divider === 1) {
        return true;
    }
    if (value % number === 0) {
        return false;
    }

    return iter(value, number + 1);
};

const isPrime = (value) => {
    if (value === 2) {
        return true;
    }
    if (value % 2 === 0) {
        return false;
    }
    return iter(value, 2, 1);
};

const calculateAnswer = (number) => (isPrime(number) ? 'yes' : 'no');

games.game(games.rules.prime, generateCondition, calculateAnswer);
