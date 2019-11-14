import * as games from '../index';

const maxGeneratedValue = 250;
const minGeneratedValue = 1;
const gamerule = 'Answer "yes" if the number is even, otherwise asnwer "no".';

const isEven = (number) => number % 2 === 0;

const calculateAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const generateGameData = () => {
    const gameCondition = games.generateRandNumber(maxGeneratedValue, minGeneratedValue);
    const correctAnswer = calculateAnswer(gameCondition);

    return {
        gameCondition,
        correctAnswer,
    };
};

export default () => games.game(gamerule, generateGameData);
