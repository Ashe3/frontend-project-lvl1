import * as games from '../index';

const maxGenValue = 250;
const minGenValue = 1;
const gamerule = 'What number is missing in the progression?\n';

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

const generateGameData = () => {
    const gameCondition = games.generateRandNumber(maxGenValue, minGenValue);
    const correctAnswer = calculateAnswer(gameCondition);

    return {
        gameCondition,
        correctAnswer,
    };
};

const runGame = games.game(gamerule, generateGameData);

export default runGame;
