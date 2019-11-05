import * as games from '../index';

const maxGenValue = 250;
const minGenValue = 1;

const generateCondition = () => games.generateRandNumber(maxGenValue, minGenValue);

const iter = (value, suggDivider, divider) => {
    const half = value / 2;
    if (suggDivider > half && divider === 1) {
        return true;
    }
    if (value % suggDivider === 0) {
        return false;
    }

    return iter(value, suggDivider + 1, divider);
};

const isPrime = (number) => {
    if (number === 2) {
        return true;
    }
    if (games.isEven(number)) {
        return false;
    }
    return iter(number, 2, 1);
};

const calculateAnswer = (number) => (isPrime(number) ? 'yes' : 'no');

const runGame = games.game(games.rules.prime, generateCondition, calculateAnswer);

export default runGame;
