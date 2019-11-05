import * as games from '../index';

const maxGenValue = 250;
const minGenValue = 1;

const calculateAnswer = (number) => (games.isEven(number) ? 'yes' : 'no');

const generateGameData = () => {
    const gameCondition = games.generateRandNumber(maxGenValue, minGenValue);
    const correctAnswer = calculateAnswer(gameCondition);

    return {
        gameCondition,
        correctAnswer,
    };
};

const runGame = games.game(games.rules.even, generateGameData);

export default runGame;
