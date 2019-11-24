import game from '../index';
import generateRandNumber from '../utils';

const maxGeneratedValue = 250;
const minGeneratedValue = 1;
const gameRule = 'Answer "yes" if the number is even, otherwise asnwer "no".';

const isEven = (number) => number % 2 === 0;

const generateGameData = () => {
    const gameCondition = generateRandNumber(minGeneratedValue, maxGeneratedValue);
    const correctAnswer = isEven(gameCondition) ? 'yes' : 'no';

    return {
        gameCondition,
        correctAnswer,
    };
};

export default () => game(gameRule, generateGameData);
