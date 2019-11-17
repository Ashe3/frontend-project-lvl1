import { generateRandNumber, game } from '../index';

const maxGenValue = 250;
const minGenValue = 1;
const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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
    if (number % 2 === 0) {
        return false;
    }

    return iter(number, 2, 1);
};

const generateGameData = () => {
    const gameCondition = generateRandNumber(maxGenValue, minGenValue);
    const correctAnswer = isPrime(gameCondition) ? 'yes' : 'no';

    return {
        gameCondition,
        correctAnswer,
    };
};

export default () => game(gameRule, generateGameData);
