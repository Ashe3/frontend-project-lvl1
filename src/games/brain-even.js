import * as games from '../index';

const maxGenValue = 250;
const minGenValue = 1;
const gamerule = 'Answer "yes" if the number is even, otherwise asnwer "no".\n';

const calculateAnswer = (number) => (games.isEven(number) ? 'yes' : 'no');

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
