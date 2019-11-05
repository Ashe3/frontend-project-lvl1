import * as games from '../index';

const maxGeneratedValue = 250;
const minGeneratedValue = 1;
const gamerule = 'Answer "yes" if the number is even, otherwise asnwer "no".\n';

const calculateAnswer = (number) => (games.isEven(number) ? 'yes' : 'no');

const generateGameData = () => {
    const gameCondition = games.generateRandNumber(maxGeneratedValue, minGeneratedValue);
    const correctAnswer = calculateAnswer(gameCondition);

    return {
        gameCondition,
        correctAnswer,
    };
};

const runGame = games.game(gamerule, generateGameData);

export default runGame;
